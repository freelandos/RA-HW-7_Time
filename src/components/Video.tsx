import { FC } from "react";
import { DateTimePretty } from "./DateTimePretty";
import { IVideo } from "../models";

export const Video: FC<IVideo> = (props) => {
  return (
    <div className="video">
      <iframe src={props.url} allow="autoplay; encrypted-media" allowFullScreen></iframe>
      <DateTimePretty date={props.date} />
    </div>
  )
}
