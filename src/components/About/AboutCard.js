import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Geetha Vysyaraju </span>
            from <span className="purple"> Benguluru, India.</span>
            <br />
            I previously worked as a Frontend Developer at Unosimple
            Technologies.
            <br />
            I have completed my Bachelor of Technology in Computer Science from
            AIMS College.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Outdoor Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Cooking
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
"Passionate about creating clean and meaningful products."{" "}
          </p>
          <footer className="blockquote-footer">Geetha</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
