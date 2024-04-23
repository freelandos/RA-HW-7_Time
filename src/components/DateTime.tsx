import { FC } from "react";

export interface DateTimeProps {
  date: string;
}

export const DateTime: FC<DateTimeProps> = (props) => {
  return (
    <p className="date">{props.date}</p>
  )
}
