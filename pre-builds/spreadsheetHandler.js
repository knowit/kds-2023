import  { GoogleSpreadsheet } from 'google-spreadsheet'; 
import dotenv from 'dotenv';

class SpeadsheetHandler {

    constructor(docId) {
        this.docId = docId;
        this.env = dotenv.config();
        this.doc;   // to be initialized
    }

    // if name of Google sheets changes, chance the values accordingly
    static sheetNames = {
        "talks": "talks",
        "speakers": "speakers",
        "otherEvents": "otherEvents"
    }

    async establishConnection() {
        this.doc = new GoogleSpreadsheet(this.docId);
        await this.doc.useServiceAccountAuth({
            client_email: process.env.CLIENT_EMAIL,
            private_key: process.env.PRIVATE_KEY.toString().split('\\n').join('\n')   
        });
        await this.doc.loadInfo();
    } 

    /**
     * Given the name of a sheet, this function accesses it, and creates a dictionary
     * with keys = header values and vals = list of values in column
     * 
     * @param {*} sheetName name of the speadsheet to retrieve from
     * @returns dictionary containing sheet data
     */
    async #accessSpreadsheet(sheetName) {
        var sheetDict = {};
        
        const sheet = this.doc.sheetsByTitle[sheetName];   // can use sheetsById[id] and sheetsByTitle[title] and sheetsByIndex[index]
        const rows = await sheet.getRows();
        const headers = sheet.headerValues;
        
        var i = 0; 
        // Breaks on empty row
        while (rows[i] != undefined){
            for (var j = 0; j < headers.length; j++){
                const header = headers[j]; 
    
                if (sheetDict[header] == undefined){
                    sheetDict[header] = new Array();
                    sheetDict[header].push(rows[i][header])
                } 
                else {
                    sheetDict[header].push(rows[i][header]); 
                }
            }
            i++;   // go to next row
        }
        //console.log(sheetDict);
        return sheetDict;
    }

    async accessTalks() {
        var talks = await this.#accessSpreadsheet(SpeadsheetHandler.sheetNames["talks"]);

        // currently, all tags are a single long string with multiple words seperated by a |
        // let's store them as a list of tag words instead
        var tagsRaw = talks["tags"];
        var tagsList = [];                // list of list of trimmed tag strings

        for (var i = 0; i < tagsRaw.length; i++) {
            var tagString = tagsRaw[i];

            if (tagString == undefined) {
                tagsList.push([]);    // if tag field is empty, push an empty tag list
            } else {
                var tagsListUntrimmed = tagString.split("|");
                tagsList.push(tagsListUntrimmed.map((tag) => {     // append list of trimmed, lower case tags
                    return tag.toLowerCase().trim();
                }));
            }
        }
        talks["tags"] = tagsList;
        return talks;
    }
    
    async accessSpeakers(){
        var speakers = await this.#accessSpreadsheet(SpeadsheetHandler.sheetNames["speakers"]); 
        var talkId = speakers["talkId"];
        var listify = []; 
        for (var i = 0; i < talkId.length; i++) {
            var talkIdsRaw = talkId[i];
            if (talkIdsRaw == undefined) {
                listify.push(talkIdsRaw);                // push undefined is shaky, but it's handled at later point
                continue;
            }
            var talkIds = talkIdsRaw.replace(/\s/g, "").split("|");   // remove all whitespace and seperate on |
            listify.push(talkIds);
        }
    
        speakers["talkId"] = listify; 
        return speakers; 
    }
    
    async accessOtherEvents(){
        return this.#accessSpreadsheet(SpeadsheetHandler.sheetNames["otherEvents"]); 
    }
}
export default SpeadsheetHandler;