import logo from "./logo.svg";
import "./App.css";
import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Heronav from "./components/Heronav";
// const KEY = "3b1634b3";
function App() {
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await fetch(
  //         `http://www.omdbapi.com/?apikey=${KEY}&s=thrones`
  //       );
  //       const data = await response.json();
  //       console.log(data);
  //     } catch (error) {
  //       console.error("Error fetching data:", error);
  //     }
  //   };

  //   fetchData();
  // }, []);
  return (
    <div className="App">
      <Navbar />
      <Heronav />
    </div>
  );
}

export default App;
