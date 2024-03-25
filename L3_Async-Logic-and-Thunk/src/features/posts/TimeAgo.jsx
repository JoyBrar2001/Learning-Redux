import { parseISO, formatDistanceToNow } from "date-fns";

const TimeAgo = ({ timeStamp }) => {
    let timeAgo = '';
  if (timeStamp) {
    const parsedDate = parseISO(timeStamp);
    const timePeriod = formatDistanceToNow(parsedDate);
    timeAgo = `${timePeriod} ago`;
  }

  return (
    <span title={timeStamp}>
      &nbsp; <i>{timeAgo}</i>
    </span>
  );
}

export default TimeAgo;
