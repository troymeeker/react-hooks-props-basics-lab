import React from "react";
import Links from "./Links";



function About(props) {
  const bioText = props.bio

  function bio(){
    if(bioText){
      return <p>{bioText}</p>
    }else{return null}
  }

  return (
    <div id="about">
      <h2>About Me</h2>

      {bio()}

      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
     <h3>Links</h3>
     <a href={props.github}>{props.github}</a>
     <a href={props.linkedin}>{props.linkedin}</a>
    </div>
  );
}

export default About;
