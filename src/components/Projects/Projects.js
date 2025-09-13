import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Early <strong className="purple">Projects</strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are some basic projects I worked on at the beginning of my
          journey.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="TODO"
              description="I developed a simple and user-friendly Todo Application to manage daily tasks efficiently. It allows users to add, edit, and delete tasks, mark them as completed, and stay organized. The app is built with React on the frontend and NestJS on the backend, using JWT authentication for secure login and SQLite for data storage. With a clean design and responsive layout, it works seamlessly across devices."
              ghLink="https://github.com/Geetha-vysyaraju/to-do-app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Gallery-Snapshot"
              description="A responsive image gallery application that allows users to view, browse, and organize snapshots in a visually appealing way. Built with React and styled components, it provides a smooth user experience with features like dynamic layouts and mobile-friendly design."
              ghLink="https://github.com/Geetha-vysyaraju/Gallery-Snapshot"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Redux Toolkit Todo App"
              description="I built a Todo Application using React and Redux Toolkit to efficiently manage state across the app. This project allows users to add, edit, delete, and mark tasks as completed while maintaining a clean and responsive UI. By leveraging Redux Toolkit, the state management is simplified and scalable, making the app more structured and easier to maintain."
              ghLink="https://github.com/Geetha-vysyaraju/ToDo-redux-toolkit-main"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
