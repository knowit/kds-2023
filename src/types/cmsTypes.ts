/** Following is the typed inference based on the directus schema
 *  the conference DB is a spiderweb of many to many connections and intermediate connections
 *  its therefore crucial that you specify the object, fields and depth.
 *  The following are subtypes of the directus schema with only the relevant fields needed.
 */

//Types for the differenc endpoints available in directus CMS
export type DirectusCollection = {
  Conference: DirectusConference
  Talk: DirectusTalk
  Speaker: DirectusSpeaker
}

/**
 * MISC TYPES
 */

export type DirectusDifficulty = 'Beginner' | 'Intermediate' | 'Advanced'
export type DirectusTalkType = 'lightning' | 'short' | 'long' | 'workshop'

/**
 *  CONFERENCE
 */

export type DirectusConference = {
  ConferenceId: string
  Name: string
  StartDate: string
  EndDate: string
  Rooms: DirectusRoom[]
  Timeslots: DirectusTimeslot[]
}

/**
 *  TALK
 */

export type DirectusTalk = {
  TalkId: string
  Description: string
  Duration: number
  Title: string
  Language?: string
  Difficulty: DirectusDifficulty
  Type: DirectusTalkType
  MaxAttendees?: number
  Tags?: string[]
  Speakers: DirectusTalkSpeaker[]
}

/**
 * EVENT
 */

export type DirectusEvent = {
  Name: string
  Description: string
  Duration: number
}
/**
 *  SPEAKER
 */

export type DirectusSpeaker = {
  CompanyName: string
  Description: string
  SpeakerName: string
  SpeakerId: string
  ProfileImage?: string
  Talks?: DirectusTalkSpeaker[]
}

/**
 *  TIMESLOT
 */

export type DirectusTimeslot = {
  Event: DirectusEvent
  Talk: DirectusTalk
  Room: DirectusRoomTimeslot[]
  StartTime: string
  Type: 'talk' | 'event'
}

/**
 *  ROOM
 */

export type DirectusRoom = {
  Amenities?: string[]
  Name: string
  RoomId: string
  seats: number
  Timeslots: DirectusTimeslot[]
}

/**
 * RELATIONAL OBJECTS
 * Directus many-many connections creates tripplets to hold ID of a talk and speaker combo
 */

export type DirectusTalkSpeaker = {
  Speaker_SpeakerId: DirectusSpeaker
  Talk_TalkId: DirectusTalk
  id: number
}

export type DirectusRoomTimeslot = {
  Room_RoomId: DirectusRoom
  Timeslot_TimeslotId: DirectusTimeslot
  id: number
}
