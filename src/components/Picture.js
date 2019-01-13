import React from "react";

const Picture = props =>
  <li>
  <a href={props.altText}>
    <img src={props.src} alt={props.altText} height="100%"/>
    <p class="tag">Title: {props.alt}</p>
    <p class="Owner-tag">Owner: {props.title}</p>
</a>
  </li>
export default Picture;
