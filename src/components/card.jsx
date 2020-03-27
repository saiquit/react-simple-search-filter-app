import React from "react";
import "./card.css";
export default function Card({ username, name, email }) {
  return (
    <div className="card">
      <img
        src={`https://robohash.org/{${username}}.png?set=set2&size=200x200`}
        alt=""
      />
      <h2>{name}</h2>
      <p>{email}</p>
    </div>
  );
}
