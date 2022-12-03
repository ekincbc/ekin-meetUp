import React, { useEffect, useState } from "react";
import MeetupList from "../components/meetups/MeetupList";

const AllMeetups = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedMeetups, setLoadedMeetups] = useState([]); // to push the fetched data to the empty loadedMeetups array

  useEffect(() => {
    setIsLoading(true);
    fetch("https://meetup-data-7a56d-default-rtdb.firebaseio.com/meetups.json")
      .then((response) => {
        return response.json(); // will be still returned promise
      })
      .then((data) => {
        setIsLoading(false);
        setLoadedMeetups(data);
      });
  }, []);

  if (isLoading) {
    return (
      <section>
        <p>Loading...</p>
      </section>
    );
  }

  return (
    <section>
      <ul>
        <MeetupList meetups={loadedMeetups} />
      </ul>
    </section>
  );
};

export default AllMeetups;
