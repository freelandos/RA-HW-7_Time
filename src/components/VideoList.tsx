import { FC } from "react";
import { Video } from "./Video";
import { IVideo } from "../models";

interface VideoListProps {
  list: IVideo[];
}

export const VideoList: FC<VideoListProps> = (props) => {
  return props.list.map((item, index) => <Video key={index} url={item.url} date={item.date} />);
}
