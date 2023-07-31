import React,{useState} from "react";
import "./BookRide.css";
import App.js;
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
  mapboxgl.accessToken = 'pk.eyJ1IjoiYW5nZWxsbzIxIiwiYSI6ImNsa2NsdWYzMzBoYnozZHBqOGc1YXlkOWcifQ.TZ9pEPeO8mgXFGEnkkh8gA';

  const App = () => {
    useEffect(() => {
      // Create a map instance
      const map = new mapboxgl.Map({
        container: 'map-container', // HTML element ID where the map will be displayed
        style: 'mapbox://styles/mapbox/streets-v11', // Map style URL
        center: ["-80.1010 W, 26.3705 N"], // Center coordinates [longitude, latitude]
        zoom: 12, // Initial zoom level
      });
  
      // Add map controls, markers, and other map features as needed
  
      return () => {
        // Clean up the map instance on unmount
        map.remove();
      };
    }, []);
  
  
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
