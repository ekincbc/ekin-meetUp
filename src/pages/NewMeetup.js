import { useNavigate } from "react-router-dom";
import NewMeetupForm from "../components/meetups/NewMeetupForm";

const NewMeetup = () => {
  const navigate = useNavigate();

  const addMeetupHandler = (meetupData) => {
    fetch(
      "https://meetup-data-7a56d-default-rtdb.firebaseio.com/meetups.json",
      {
        method: "POST",
        body: JSON.stringify(meetupData),
        headers: {
          "Content-type": "application/json",
        },
      }
    ).then(() => {
      navigate("/");
    });
  };

  return (
    <section>
      <h1>Add New Meetup</h1>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </section>
  );
};

export default NewMeetup;
