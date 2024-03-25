import { parseISO, formatDistanceToNow } from "date-fns";

const TimeAgo = ({ timeStamp }) => {
  let timeAgo = '';
  if (timeStamp) {
    const date = new Date(timeStamp);
    const parsedDate = parseISO(date);

    const timePeriod = formatDistanceToNow(parsedDate);
    timeAgo = `${timePeriod} ago`;
  }

  return (
    <span title={timeStamp}>
      &nbsp; <i>{timeAgo}</i>
    </span>
  )
}

export default TimeAgo
