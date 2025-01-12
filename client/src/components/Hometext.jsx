import React from 'react';
import "../home.css";

export const Hometext = () => {
  return (
    <>
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
      <div className="hometext-container">
        <h1 className="main-heading">
          <span className='coll'>Collaborative, </span> 
          <span className="txtgr">Learning-based</span>
        </h1>
        <h1 className="sub-heading">Technical Community</h1>
        <p className="description">
          Collaborate, build <span className="txtgr">real-world projects</span>,
          sharpen <span className="txtgr">coding skills</span>, and embrace industry
          practices.
        </p>
        <div className="buts">
          <button className="btn">Get Started</button>
          <button className="btn2">Watch Demo</button>
        </div>
      </div>
    </>
  );
};
