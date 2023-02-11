import React from "react";
const About = (props) => {
  
  let myStyle = {
    color: props.mode === "dark" ? "white" : "#042743",
    backgroundColor: props.mode === "light" ? "white" : "rgb(23 90 144)",
    border: "1px solid",
    borderColor: props.mode === "dark" ? "white" : "#042743",
  };


  return (
    <div>
      <div className="container my-5">
        <h1>About Us</h1>
        <div className="accordion" id="accordionExample">
          <div className="accordion-item" style={myStyle}>
            <h2 className="accordion-header" id="headingOne">
              <button
                style={myStyle}
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                About
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse show"
              aria-labelledby="headingOne"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                As a text editor website, our primary goal is to provide an
                efficient and user-friendly platform for users to write, edit
                and manage their documents online. We understand the importance
                of quality text editing tools and strive to deliver the best
                possible experience to our users.
              </div>
            </div>
          </div>
          <div className="accordion-item" style={myStyle}>
            <h2 className="accordion-header" id="headingTwo">
              <button
                style={myStyle}
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                Purpose
              </button>
            </h2>
            <div
              id="collapseTwo"
              className="accordion-collapse collapse"
              aria-labelledby="headingTwo"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                Our purpose is to provide a streamlined and efficient solution
                for writing and editing documents. Our text editor is designed
                to be simple and intuitive, making it easy for users of all
                skill levels to use. Whether you are a professional writer,
                student, or just someone looking to draft a quick note, our text
                editor has the features and tools you need to get the job done.
              </div>
            </div>
          </div>
          <div className="accordion-item" style={myStyle}>
            <h2 className="accordion-header" id="headingThree">
              <button
                style={myStyle}
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                Thank You
              </button>
            </h2>
            <div
              id="collapseThree"
              className="accordion-collapse collapse"
              aria-labelledby="headingThree"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body" style={myStyle}>
                Thank you for using our text editor website. We are grateful for
                your support and are dedicated to delivering the best possible
                experience for you. We are constantly working to improve our
                platform and add new features to make your text editing
                experience even better. So, keep using our text editor and watch
                us grow!
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
