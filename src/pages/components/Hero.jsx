import React from "react";

const Hero = () => {
  return (
    <div className="hero-div">
      <div className="half">
        <div className="hero-student">
          <h1>For Students</h1>
          <img
            src="https://img.freepik.com/free-vector/hand-drawn-flat-design-devops-illustration_23-2149387396.jpg?w=1060&t=st=1709187459~exp=1709188059~hmac=56d0cb2a109751ad4c6b93cb5137f2995c35bd8929316e7711865bcfb7bf1cb9"
            className="student-image"
          />
          <p className="student-description">
            The Students section of Collabora is a hub for project-based
            learning. Students can join faculty-led projects, gaining hands-on
            experience and mentorship. Alternatively, students can propose their
            own projects, fostering innovation and independent thinking.
            <p className="hilight">Start exploring today and dive into a world of learning and creativity</p>
          </p>
        </div>
        <button className='Get-Started' onClick={() => {
          window.location.href = '/student/signup';
        }}>Get Started</button>
      </div>
      <div className="half">
        <div className="hero-faculty">
          <h1>For Faculty</h1>
          <img
            src="https://img.freepik.com/free-vector/teaching-students-online-internet-learning-computer-programming-online-it-courses-best-online-it-training-online-certification-courses-concept_335657-194.jpg?w=1060&t=st=1709187856~exp=1709188456~hmac=d919af151fd19ca77253f763c8ccfbe2a9e2d9885096cac8769ea62d08f90e66"
            className="teacher-image"
          />
          <p className="faculty-description">
            The Faculty section of Collabora is a hub for project-based learning.
            Faculty can create and manage projects, providing students with
            hands-on experience and mentorship. Faculty can also join
            student-led projects, helping students to learn and innovate .
            <p className="hilight">Start exploring today and dive into a world of learning and creativity</p>
          </p>
        </div>
      <button className='Get-Started' onClick={() => {
        window.location.href = '/faculty/signup';
      }}>Get Started</button>
      </div>
    </div>
  );
};

export default Hero;
