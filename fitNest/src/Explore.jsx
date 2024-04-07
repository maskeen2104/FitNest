import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom'
import "./Explore.css";

const EventCard = ({ event }) => (
  <a href={event.url} target="_blank" rel="noopener noreferrer">
    <div className="event-card">
      <div className="event-image-container">
        <img src={event.image} alt={event.imageAlt} className="event-image" />
      </div>
      <div className="event-details">
        <div className="event-info">
          <div className="event-date">{event.date}</div>
          <div className="event-title">{event.title}</div>
          <div className="event-description-container">
            <div className="event-description">{event.description}</div>
          </div>
        </div>
      </div>
    </div>
  </a>
);

function Explore() {
  //   const [events, setEvents] = useState([]);

  //   useEffect(() => {
  //     // Call fetchEvents function
  //     fetchEvents()
  //       .then(data => setEvents(data))
  //       .catch(error => console.error('Error fetching events:', error));
  //   }, []); // Empty dependency array to run only once on mount

  const events = [
    {
      url: "https://community-events.arcteryx.com/arcteryxbostoncollaboratorappl",
      image: "/src/images/event1-img.png",
      imageAlt: "event1-img",
      date: "AUG 29-AUG 31",
      title: "ARC'TERYX GREATER BOSTON: COLLABORATOR APPLICATION",
      description:
        "We are currently looking to work with local athletes that are content creators to collaborate on photos and videos projects featuring our products in an authentic way. Artists are also highly encouraged to apply!",
    },
    {
      url: "https://community-events.arcteryx.com/collaboratordc",
      image: "/src/images/event2-img.jpg",
      imageAlt: "event2-img",
      date: "SEP 27-OCT 01",
      title: "ARC'TERYX DC: COLLABORATOR APPLICATION",
      description:
        "We are currently looking to work with local community leaders and athletes that are content creators in the DMV area to collaborate on projects featuring our products in an authentic way.",
    },
  ];
  const navigate = useNavigate();
  return (
    <>
      <div className="page-container">
        <header className="header">
          <div className="logo-container">
            <img
              src={"/src/images/vector-1.svg"}
              alt="FitNest logo"
              className="logo"
            />
            <div className="logo-text">FitNest</div>
          </div>
          {/* <div className="button-header"> */}
          <button
            className="hbutton"
            onClick={() => navigate("/dashboard")}
          >
            <div className="galileodesign-depth6-frame002">
              <span className="button-text -text02">
                <span>Home</span>
              </span>
            </div>
          </button>
          <button
            className="hbutton"
            onClick={() => navigate("/explore")}
          >
            <div className="galileodesign-depth6-frame003">
              <span className="button-text ">
                <span>Explore</span>
              </span>
            </div>
          </button>
          <button className="hbutton">
            <div className="galileodesign-depth6-frame003">
              <img
                src="/src/images/coin.png"
                alt="Coin"
                className="coin-icon"
              />
              <span className="button-text ">
                <span>10</span>
              </span>
            </div>
          </button>
          {/* </div> */}
        </header>
        <main className="main-content">
          <section className="hero-section">
            <div className="event-image-overlay"></div>
            <img
              src={"/src/images/Arcteryx-Logo.png"}
              alt="Wellness events background"
              className="hero-background"
            />
            <h1 className="hero-title">Explore Arc'teryx events</h1>
            <p className="hero-description">
              Arc'teryx Community Events, find the right event for you
            </p>
          </section>

          <section className="featured-events-section">
            <h2 className="featured-events-title">Featured Arc'teryx Events</h2>
          </section>
          <section className="event-list-section">
            {events.map((event, index) => (
              <EventCard key={index} event={event} />
            ))}
          </section>
        </main>
      </div>
    </>
  );
}

export default Explore;
