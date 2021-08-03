import Head from "next/head";
import React from "react";

const Aboutus = () => {
  return (
    <div className="mt-2 containerabout">
      <h1 className="heading">About Us</h1>
      <div className="aboutcontainer">
        <img src="/E Mart.png" alt="E-Mart Logo" className="logo" />
        <p className="spacing aboutdetail">
          E-Mart is a constantly evolving technological infrastructure which
          connects this vast and diverse region and offers Singapore a shopping
          experience that is safe, seamless, and enjoyable.{" "}
        </p>
        <p className="spacing2 aboutdetail">
          E-Mart lifestyle redefines the boundaries of retail, delivering
          engaging and entertaining experiences customized to each of our
          markets. Discover the world at your fingertips on E-Mart.{" "}
        </p>
      </div>
      <h1 className="heading specialh1">Meet The Team</h1>
      <div className="card-wrapper">
        <div className="card cardteam">
          <img src="card-bg.jpg" alt="card background" className="card-img" />
          <img
            src="KannanAzhagappa.png"
            alt="card background"
            className="profile-img"
          />
          <h1>Kannan Azhagappa</h1>
          <p className="job-title">Project Team Lead</p>
          <p className="about">
            Responsible for Front End and Back End integration and design!
          </p>
          <a href="#" className="btn">
            Contact
          </a>
          <ul className="social-media">
            <li>
              <a href="#">
                <i className="fab fa-facebook-square" aria-hidden="true"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fab fa-twitter-square" aria-hidden="true"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fab fa-instagram" aria-hidden="true"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fab fa-google-plus-square" aria-hidden="true"></i>
              </a>
            </li>
          </ul>
        </div>
        <div className="card cardteam">
          <img src="card-bg.jpg" alt="card background" className="card-img" />
          <img
            src="IbnuIrfan.jpg"
            alt="card background"
            className="profile-img"
          />
          <h1>Ibnu Irfan</h1>
          <p className="job-title">Backend End Developer</p>
          <p className="about">
            Responsible for Back End design and development and API development!
          </p>
          <a href="#" className="btn">
            Contact
          </a>
          <ul className="social-media">
            <li>
              <a href="#">
                <i className="fab fa-facebook-square" aria-hidden="true"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fab fa-twitter-square" aria-hidden="true"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fab fa-instagram" aria-hidden="true"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fab fa-google-plus-square" aria-hidden="true"></i>
              </a>
            </li>
          </ul>
        </div>
        <div className="card cardteam">
          <img src="card-bg.jpg" alt="card background" className="card-img" />
          <img
            src="SiewWoon.jpg"
            alt="card background"
            className="profile-img"
          />
          <h1>Siew Woon</h1>
          <p className="job-title">Business Analyst</p>
          <p className="about">
            Responsible for Business Flow, Testing, Documentation and Template
            creation!
          </p>
          <a href="#" className="btn">
            Contact
          </a>
          <ul className="social-media">
            <li>
              <a href="#">
                <i className="fab fa-facebook-square" aria-hidden="true"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fab fa-twitter-square" aria-hidden="true"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fab fa-instagram" aria-hidden="true"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fab fa-google-plus-square" aria-hidden="true"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Aboutus;
