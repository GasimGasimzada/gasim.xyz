import { getHumanReadableDate } from "../core/utils";

interface DateProps {
  date: Date;
}

export const HumanReadableDate = ({ date }: DateProps) => {
  return (
    <time className="text-sm" dateTime={date.toISOString()}>
      {getHumanReadableDate(date)}
    </time>
  );
};
