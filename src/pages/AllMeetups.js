import React, { useEffect, useState } from "react";
import MeetupList from "../components/meetups/MeetupList";

const AllMeetups = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedMeetups, setLoadedMeetups] = useState([]); // to push the fetched data to the empty loadedMeetups array

  useEffect(() => {
    // used useEffect with empty dependencies to prevent infinite fetching loop in the component since we only want data to be fetched when the component get rendered, not when the state changes.
    setIsLoading(true);
    fetch("https://meetup-data-7a56d-default-rtdb.firebaseio.com/meetups.json")
      .then((response) => {
        return response.json(); // will be still returned promise
      })
      .then((data) => {
        const meetups = [];

        for (const key in data) {
          // for every key belongs to data we create an array with key nested as a id in an object, since the data wasnt an array itself. They are properties with randomly generated keys, and we are searching for an array.
          const meetup = {
            id: key,
            ...data[key], // spread operator has been used to copy all the data values to the new object has been created.
          };

          meetups.push(meetup);
        }
        console.log(meetups);
        setIsLoading(false);
        setLoadedMeetups(meetups);
      });
  }, []); // if we put any dependencies to the array, the useEffect will work again when the dependency changes.

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
