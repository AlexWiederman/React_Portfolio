import React from "react";
import "./Style.css";

export default function Portfolio() {
  return (
    <div>
      <h1>Portfolio</h1>

      {/*  Project Pictures */}
      <div class="container">
        <div class="row">
          <div class="col-sm-4">
            <div class="card" >
              <img
                class="card-img-top"
                src={process.env.PUBLIC_URL + "/Project2.png"}
                alt="No Crude Food Project"
                style={{height: "180px"}}
              ></img>
              <div class="card-body">
                <h5 class="card-title">No Crude Food Project</h5>
                <p class="card-text">Javascript, Handlebars, MVC</p>
                <a
                  href="https://github.com/AlexWiederman/No_Crude_Food"
                  class="btn btn-primary"
                >
                  Github Link
                </a>
              </div>
            </div>
          </div>

          <div class="col-sm-4">
            <div class="card" >
              <img
                class="card-img-top"
                src={process.env.PUBLIC_URL + "/NoteTaker.png"}
                alt="Note Taker"
                style={{height: "180px"}}
              ></img>
              <div class="card-body">
                <h5 class="card-title">Note Taker</h5>
                <p class="card-text">Javascript, .json file Baskend</p>
                <a
                  href="https://github.com/AlexWiederman/Note_Taker"
                  class="btn btn-primary"
                >
                  Github Link
                </a>
              </div>
            </div>
          </div>

          <div class="col-sm-4">
            <div class="card" >
              <img
                class="card-img-top"
                src={process.env.PUBLIC_URL + "/PWA.png"}
                alt="PWA"
                style={{height: "180px"}}
              ></img>
              <div class="card-body">
                <h5 class="card-title">PWA Text Editor</h5>
                <p class="card-text">Javascript, PWA, IndexDB, Offline Application</p>
                <a
                  href="https://github.com/AlexWiederman/Text_Editor_PWA"
                  class="btn btn-primary"
                >
                  Github Link
                </a>
              </div>
            </div>
          </div>

          <div class="col-sm-4">
            <div class="card" >
              <img
                class="card-img-top"
                src={process.env.PUBLIC_URL + "/project 1.png"}
                alt="Movie Catalog Project"
                style={{height: "180px"}}
              ></img>
              <div class="card-body">
                <h5 class="card-title">Movie Catalog Project</h5>
                <p class="card-text">Javascript, CSS, Fetch API, HTML</p>
                <a
                  href="https://github.com/AlexWiederman/Movie_Catalog"
                  class="btn btn-primary"
                >
                  Github Link
                </a>
              </div>
            </div>
          </div>

          <div class="col-sm-4">
            <div class="card" >
              <img
                class="card-img-top"
                src={process.env.PUBLIC_URL + "/SQLCompany.png"}
                alt="SQL Company"
                style={{height: "180px"}}
              ></img>
              <div class="card-body">
                <h5 class="card-title">Company Employees SQL</h5>
                <p class="card-text">Javascript, MySQL, node.js, Inquirer</p>
                <a
                  href="https://github.com/AlexWiederman/Company_Employees_SQL"
                  class="btn btn-primary"
                >
                  Github Link
                </a>
              </div>
            </div>
          </div>

          <div class="col-sm-4">
            <div class="card" >
              <img
                class="card-img-top"
                src={process.env.PUBLIC_URL + "/Tech.PNG"}
                alt="Tech Blog"
                style={{height: "180px"}}
              ></img>
              <div class="card-body">
                <h5 class="card-title">Tech Blog</h5>
                <p class="card-text">Javascript, Authentication, MySQL, Sequelize</p>
                <a
                  href="https://github.com/AlexWiederman/Tech_Blog"
                  class="btn btn-primary"
                >
                  Github Link
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
