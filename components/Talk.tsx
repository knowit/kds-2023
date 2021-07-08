import React from "react";
import dynamic from "next/dynamic";
import { Difficulty, FilterTag, Pin } from "../components";
import { colorClassFromRoomName } from "../helpers";

import "../styling/talkStyles.scss";

const FavouriteTalkButtonNoSSR = dynamic(
  () => import("./FavouriteTalkButton"),
  {
    ssr: false,
  }
);

interface TalkProps {
  hidden: boolean;
  day: any;
  timeStart: any;
  timeEnd: any;
  room: any;
  onFavoriteChange?: (val) => void;
  id: any;
  type: any;
  title: any;
  speaker: any;
  description?: any;
  tags: any;
  selectedTags: any;
  language: any;
  onToggleTag: any;
  isInSchedule: boolean;
}

const Talk = ({
  hidden,
  day,
  timeStart,
  timeEnd,
  room,
  onFavoriteChange,
  id,
  type,
  title,
  speaker,
  description,
  tags,
  selectedTags,
  language,
  onToggleTag,
  isInSchedule,
}: TalkProps) => {

  // link to flag images: https://www.gosquared.com/resources/flag-icons/
  const filePath = `../static/images/${language}-flag.png`;

  return (
    <div className={`talk ${hidden ? "talk-hidden" : ""}`}>
      <div className="header">
        <div className="time">
          <div className="wrapper">
            <img src="../../static/clock.svg" width="24" height="24" />
          </div>
          <span className="time-text">
            <span className="time-text-day">
              {day}
              <br />
            </span>
            {timeStart && timeStart.toString()} -{" "}
            {timeEnd && timeEnd.toString()}
          </span>
        </div>
        <div className="room">
          <div className="wrapper">
            <Pin className={colorClassFromRoomName(room)} />
          </div>
          <span className="text room-name">{room}</span>
        </div>
        {!isInSchedule &&
        <div className="language-flag">
          <img className="flag-image" src={filePath}></img>
          <p>Spoken language</p>
        </div>}
        <div className="heart">
          <FavouriteTalkButtonNoSSR talkId={id} onClick={onFavoriteChange} />
        </div>
      </div>
      <div className="talk-content">
        <p className="day">{day}</p>
        {isInSchedule &&
          <div className="time-and-flag">
            <p>
              {timeStart && timeStart.toString()} - {timeEnd && timeEnd.toString()}
              <span className="duration">
                &nbsp;(
                {timeEnd && timeStart && timeStart.diff(timeEnd)} min)
              </span>
            </p>
            <img className="flag-image" src={filePath}></img>
          </div>
        }
        {isInSchedule}
        <p className="type-info">
          {type}
          <span className="duration">
            &nbsp;(
            {timeEnd && timeStart && timeStart.diff(timeEnd)} min)
          </span>
        </p>
        <h1 className="title">{title}</h1>
        {description && <p>{description}</p>}
        {speaker &&
          speaker.map((speaker, index) => {
            //LAGT TIL INDEX, FJERN INDEX I MAP HVIS ALT TRYNER
            return (
              <div key={index}>
                <p className="speaker">{speaker.name}</p>
                <p className="info">{speaker.info}</p>
              </div>
            );
          })}
        <div className="tags">
          {tags &&
            language &&
            tags
              .concat([language])
              .map((tag) => (
                <FilterTag
                  key={tag}
                  name={tag}
                  selected={selectedTags.includes(tag)}
                  onClick={() => onToggleTag(tag)}
                />
              ))}
        </div>
        <hr className="seperator" />
      </div>
    </div>
  );
};

export default Talk;
