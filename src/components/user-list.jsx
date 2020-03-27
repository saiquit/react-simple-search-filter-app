import React from "react";
import Card from "./card";

import "./user-list.css";
export default function UserList(props) {
  return (
    <div className="cardlist">
      {props.users.map(({ id, ...otherProps }) => {
        return <Card key={id} {...otherProps} />;
      })}
    </div>
  );
}
