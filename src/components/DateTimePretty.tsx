import { FC } from "react";
import { DateTime, DateTimeProps } from "./DateTime";
import moment from "moment/min/moment-with-locales";

moment.locale("ru");

export const DateTimePretty: FC<DateTimeProps> = (props) => {
  const pretty = (date: string) => {
    return moment(date).fromNow();
  }

  return <DateTime date={pretty(props.date)}/>;
}
