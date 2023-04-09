import React from "react";
import "./Style.css";

export default function Portfolio() {
  return (
    <div>
      <h1>Portfolio</h1>

      {/*  Project Pictures */}
      <div class="container">
        <div class="card" style={{ width: "18rem" }}>
          <img
            class="card-img-top"
            src={process.env.PUBLIC_URL + "/project2.png"}
            alt="No Crude Food Project"
          ></img>
          <div class="card-body">
            <h5 class="card-title">No Crude Food Project</h5>
            <a
              href="https://github.com/AlexWiederman/No_Crude_Food"
              class="btn btn-primary"
            >
              Github Link
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
