import React from "react";
import Genre from "./Genre";
import "./spotifyhome.css";
function SpotifyHome() {
  const songsList1 = [
    {
      label: "Peaceful Piano",
      description: " Relax and indulge with beautiful piano pieces",
      image: "/ab67706f00000002ca5a7517156021292e5663a6.jpeg",
    },
    {
      label: "Deep Focus",
      description: " Keep calm and focus with ambient and post-rock music.",
      image: "/ab67706f000000025551996f500ba876bda73fa5.jpeg",
    },
    {
      label: "Instrumental Study",
      description: "A soft musical backdrop for your studies..",
      image: "/ab67706f0000000222a1ae968a3fa0c6dd846bcf.jpeg",
    },
    {
      label: "chill lofi study beats",
      description: "The perfect study beats, twenty four seven.",
      image: "/ab67706f000000025b0a7b8408322a3b9ed15e1e.jpeg",
    },
    {
      label: "Coding Mode  ",
      description: "Dedicated to all the programmers out there.",
      image: "/ab67706f00000002863b311d4b787ed621f7e696.jpeg",
    },
    {
      label: "Focus Flow",
      description: "Uptempo instrumental hip hop beats.",
      image: "/ab67706f00000002724554ed6bed6f051d9b0bfc.jpeg",
    },
    {
      label: "Calm Before the Storm",
      description: "Aerial post-rock sounds to take you somewhere else.",
      image: "/ab67706f00000002ff55ef0570b629a51bfc43f4.jpeg",
    },
    {
      label: "Workday Lounge",
      description: "Lounge and chill out music for your workday.",
      image: "/ab67706f00000002e435ce0a86a8b9dc24527618.jpeg",
    },
  ];
  return (
    <>
      <div className="home-container">
        <Genre genreName={"Focus"} songsList={songsList1} />
        <Genre genreName={"Mood"} songsList={songsList1} />
        <Genre genreName={"Uniquely Yours"} songsList={songsList1} />
        <Genre genreName={"Popular New Releases"} songsList={songsList1} />
      </div>
    </>
  );
}

export default SpotifyHome;
