import React from "react";

export default function Footer() {
  return (
    
    <div>
      
      <footer class="bg-dark text-center text-white">
        <div class="container p-4">
          <section class="mb-4">
            {/* Stackoverflow */}
            <a
              class="btn btn-outline-light btn-floating m-1"
              href="https://stackoverflow.com/users/20919989/alexw"
              role="button"
            >
              <i class="fa-brands fa-slack"></i>
              
            </a>

            {/* Linkedin */}
            <a
              class="btn btn-outline-light btn-floating m-1"
              href="https://www.linkedin.com/in/alex-wiederman-53336b12a/"
              role="button"
            >
              <i class="fab fa-linkedin-in"></i>
            </a>

            {/* Github */}
            <a
              class="btn btn-outline-light btn-floating m-1"
              href="https://github.com/AlexWiederman"
              role="button"
            >
              <i class="fab fa-github"></i>
            </a>
          </section>
        </div>
        
      </footer>
    </div>
  );
}
