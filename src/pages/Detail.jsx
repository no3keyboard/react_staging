import React from "react";
import { useLocation, useParams } from "react-router-dom";

export default function () {
  const {state:{id,title,content}} = useLocation()
  return (
    <ul>
      <li>{id}</li>
      <li>{title}</li>
      <li>{content}</li>
    </ul>
  );
}
