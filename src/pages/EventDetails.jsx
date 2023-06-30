import { useParams } from "react-router-dom";

const EventDetails = () => {
  const { id } = useParams();
  console.log(id);
  return <div>EventDetails</div>;
};

export default EventDetails;
