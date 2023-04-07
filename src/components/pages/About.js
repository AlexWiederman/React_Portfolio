import React from 'react';

export default function About() {
  return (
    <div>
      <h1>About Me Page</h1>
      <img src={process.env.PUBLIC_URL + "/male.jpg"} alt="Profile_Picture" style={{height: '200px'}}></img>
      <p>
        I have graduated a Columbia Full Stack Bootcamp Class and am looking to make change to get a developer job. I have a bachelors degree in Mechanical Engineering and have been working in the engineering field for 6 years.
      </p>
    </div>
  );
}

