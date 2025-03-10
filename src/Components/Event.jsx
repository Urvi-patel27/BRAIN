import React from "react";
import EventHero from "./Events/EventHero";
import EventMain from "./Events/EventMain";
import EventLast from "./Events/EventLast";

function Event() {
  return (
    <div>
      <EventHero />
      <EventMain />
      <EventLast />
    </div>
  );
}

export default Event;
