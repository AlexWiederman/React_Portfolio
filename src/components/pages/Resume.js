import React from 'react';

export default function Resume() {
  return (
    <div>

      <button><a href={process.env.PUBLIC_URL + "/Engineering Resume B.docx"} download>Download Resume</a></button>
      <h1>Resume</h1>
      <p>
       Front End Proficiencies
       <ul>
        <li>React</li>
        <li>HTML</li>
        <li>Javascript</li>
        <li>CSS</li>
        <li>Handlebars</li>
       </ul>
       Back End Proficiencies
       <ul>
        <li>Javascript</li>
        <li>MongoDB/Mongoose</li>
        <li>MySQL/Sequilize</li>
       </ul>
      </p>
    </div>
  );
}
