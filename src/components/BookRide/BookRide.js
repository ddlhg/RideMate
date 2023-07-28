import React,{useState} from "react";
import "./BookRide.css";
// import { firestore } from "./firebase";

//function BookRide(){
    //return(<div></div>)
//}

//export default BookRide;
// RequestRide.js


function BookRide  () {
  const [location, setLocation] = useState("");

  // const handleRequest = () => {
  //   if (location.trim() !== "") {
  //     // Save the ride request to Firestore
  //     firestore.collection("rideRequests").add({
  //       location: location.trim(),
  //       timestamp: new Date(),
  //     });
  //     setLocation("");
  //   }
  // };

  return (
    <div>
      <h2>Book a Ride</h2>
      <input
        type="text"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        placeholder="Enter your location"
      />
      <button>Book Ride</button>
    </div>
  );
};

export default BookRide;
