import React from "react";
import { PiStudentFill } from "react-icons/pi";
import "./addstudent.css";

const AddStudent = () => {
  return (
    <section className="add_students">
      <div className="container">
        <div className="addStudents_wrapper">
          <div className="addStudent_form">
            <form className="form_content">
              <h4 className="form_heading">Student Information</h4>
              <input
                type="text"
                className="input_field"
                placeholder="Student ID"
              />
              <input
                type="text"
                className="input_field"
                placeholder="Student Name"
              />
              <input type="text" className="input_field" placeholder="Class" />
              <input
                type="text"
                className="input_field"
                placeholder="Section"
              />
              <h4 className="form_heading">Enter Marks</h4>
              <div className="mark_input">
                <input
                  type="text"
                  className="input_field input_width"
                  placeholder="Bangla"
                />
                <input
                  type="text"
                  className="input_field input_width"
                  placeholder="English"
                />
                <input
                  type="text"
                  className="input_field input_width"
                  placeholder="Mathematics"
                />
                <input
                  type="text"
                  className="input_field input_width"
                  placeholder="Physics"
                />
                <input
                  type="text"
                  className="input_field input_width"
                  placeholder="Chemistry"
                />
                <input
                  type="text"
                  className="input_field input_width"
                  placeholder="Biology"
                />
              </div>
              <button className="addBtn">Add Student</button>
            </form>
          </div>
          <div className="addStudent_banner">
            <div className="form_img">
              <img src="/form_banner.png" alt="" />
            </div>
            <div className="form_overlay">
              <PiStudentFill className="student_icon" />
              <h2 className="addstudent_heading">Add Student</h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AddStudent;
