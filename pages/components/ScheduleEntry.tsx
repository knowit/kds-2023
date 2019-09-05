import Talk from "./Talk";
import EventHeader from "./EventHeader";
import { Component } from "react";
import "../../styling/scheduleStyles.scss";
import FavouriteTalkButton from "./FavouriteTalkButton"


interface IProps {
  slot: any
}
class ScheduleEntry extends Component<IProps, any> {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="talk-slot">
        {this.props.slot.rooms.map(room => room.talks
          .map((talk, i) => {
            talk.room = room.name;
            return(<div className="talk-container" key={i}>
              <Talk talk={talk} />
              <FavouriteTalkButton talkId={talk.id} />
            </div>);
          }
          ))}
      </div>
    );
  }
};

export default ScheduleEntry;
