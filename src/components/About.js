import React, { useEffect, useState } from "react";
import {useNavigate} from "react-router-dom"

const About = () => {
  const [input,setInput]=useState({});
const navigate=useNavigate();
  const aboutFunction=async()=>{
try{
const response=await fetch("/about",{
method:"get",
headers:{
  Accept:"application/json",
  "Content-Type":"application/json"
},credentials:"include"

});
const data=await response.json();
setInput(data)

}catch(error){
  console.log(error)
  navigate("/login")
}



  }
  useEffect(()=>{

    aboutFunction()
  })
  return (
    <div className="main-about-page">
      <div className="main-about">
        <div className="grid-box-about shadow-pop-tr">
          <div className="grid-box-1-about">
            <figure style={{ width: "10rem", height: "10rem" }}>
              <img
                src="images/bharat.jpg"
                alt=""
                style={{ width: "100%", height: "100%" }}
              />
            </figure>
          </div>

          <div className="grid-box-2-about">
            <div className="my-grid-about-box">
              <div
                className="my-grid-about-box-1"
                style={{ fontSize: "1.3rem", textTransform: "capitalize" }}
              >
                <div className="name color-1">{input.username}</div>
                <div className="work color-2">{input.work}</div>
                <div className="ranking">8/10</div>
              </div>
              <div className="my-grid-about-box-2">
                <div className="edit">Edit profile</div>
              </div>
            </div>
            <div className="nav-tab" style={{ marginTop: "1rem" }}>
              <ul className="nav nav-tabs" id="myTab" role="tablist">
                <li
                  className="nav-item"
                  role="presentation"
                  style={{ fontSize: "1.3rem" }}
                >
                  <button
                    className="nav-link active"
                    id="home-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#about"
                    type="button"
                    role="tab"
                    aria-controls="home-tab-pane"
                    aria-selected="true"
                  >
                    About
                  </button>
                </li>
                <li
                  className="nav-item"
                  role="presentation"
                  style={{ fontSize: "1.3rem" }}
                >
                  <button
                    className="nav-link"
                    id="profile-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#timeline"
                    type="button"
                    role="tab"
                    aria-controls="profile-tab-pane"
                    aria-selected="false"
                  >
                    Timeline
                  </button>
                </li>
              </ul>
              <div className="tab-content" id="myTabContent">
                <div
                  className="tab-pane fade show active"
                  id="about"
                  role="tabpanel"
                  aria-labelledby="home-tab"
                  tabindex="0"
                >
                  <div
                    className="main-boxes-grid"
                    style={{ display: "grid", gridTemplateColumns: "1fr" }}
                  >
                    <div
                      className="box-1"
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        fontSize: "1.3rem",
                        marginTop: "0.5rem",
                      }}
                    >
                      <div className="user-id">userid</div>
                      <div className="id color-2">{input._id}</div>
                    </div>
                    <div
                      className="box-2"
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        fontSize: "1.3rem",
                        marginTop: "0.5rem",
                      }}
                    >
                      <div>username</div>
                      <div className="color-2">{input.username}</div>
                    </div>
                    <div
                      className="box-3"
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        fontSize: "1.3rem",
                        marginTop: "0.5rem",
                      }}
                    >
                      <div>Email</div>
                      <div className="color-2">{input.email}</div>
                    </div>
                    <div
                      className="box-4"
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        fontSize: "1.3rem",
                        marginTop: "0.5rem",
                      }}
                    >
                      <div>Profession</div>
                      <div className="color-2">{input.work}</div>
                    </div>
                    <div
                      className="box-5"
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        fontSize: "1.3rem",
                        marginTop: "0.5rem",
                      }}
                    >
                      <div>Contact</div>
                      <div className="color-2">{input.phone}</div>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="timeline"
                  role="tabpanel"
                  aria-labelledby="profile-tab"
                  tabindex="0"
                >
                 <div
                    className="main-boxes-grid"
                    style={{ display: "grid", gridTemplateColumns: "1fr" }}
                  >
                    <div
                      className="box-1"
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        fontSize: "1.3rem",
                        marginTop: "0.5rem",
                      }}
                    >
                      <div className="user-id">English</div>
                      <div className="id color-1">Average</div>
                    </div>
                    <div
                      className="box-2"
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        fontSize: "1.3rem",
                        marginTop: "0.5rem",
                      }}
                    >
                      <div>Experience</div>
                      <div className="color-1">Expert</div>
                    </div>
                    <div
                      className="box-3"
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        fontSize: "1.3rem",
                        marginTop: "0.5rem",
                      }}
                    >
                      <div>Projects</div>
                      <div className="color-1">50</div>
                    </div>
                    <div
                      className="box-4"
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        fontSize: "1.3rem",
                        marginTop: "0.5rem",
                      }}
                    >
                      <div>Work</div>
                      <div className="color-1">Web Developer</div>
                    </div>
                    <div
                      className="box-5"
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        fontSize: "1.3rem",
                        marginTop: "0.5rem",
                      }}
                    >
                      <div>Avibility</div>
                      <div className="color-1">6 months</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
