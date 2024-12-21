import React from "react";

function Footer() {
  return (
    <div>
      <footer className="footer bg-base-200/60 items-center rounded-t-box px-6 py-4 shadow">
        <aside className="grid-flow-col items-center">
          <p>
            ©2024{" "}
            <a className="link link-hover font-medium" href="#">
              FlyonUI
            </a>
          </p>
        </aside>
        <nav className="text-base-content/90 grid-flow-col gap-4 md:place-self-center md:justify-self-end">
          <a className="link link-hover" href="#">
            License
          </a>
          <a className="link link-hover" href="#">
            Help
          </a>
          <a className="link link-hover" href="#">
            Contact
          </a>
          <a className="link link-hover" href="#">
            Policy
          </a>
        </nav>
      </footer>
    </div>
  );
}

export default Footer;
