import React, { useState } from "react";
import { getDatabase, ref, set, push } from "firebase/database";
import { PiStudentFill } from "react-icons/pi";
import "./addstudent.css";

const inititalFormState = {
  sId: "",
  sName: "",
  sClass: "",
  sSection: "",
  bangla: "",
  english: "",
  math: "",
  physics: "",
  chemistry: "",
  biology: "",
};

const AddStudent = () => {
  const [studentData, setStudentData] = useState(inititalFormState);

  // send data to firebase
  const sendData = () => {
    const {
      sId,
      sName,
      sClass,
      sSection,
      bangla,
      english,
      math,
      physics,
      chemistry,
      biology,
    } = studentData;
    const db = getDatabase();
    set(push(ref(db, "students/")), {
      studentId: sId,
      studentName: sName,
      class: sClass,
      section: sSection,
      marks: {
        bangla: bangla,
        english: english,
        math: math,
        physics: physics,
        chemistry: chemistry,
        biology: biology,
      },
    });
  };

  const handleForm = (e) => {
    const { name, value } = e.target;
    setStudentData({ ...studentData, [name]: value });
  };

  const handleAddStudent = (e) => {
    e.preventDefault();
    console.log(studentData);
    sendData();
  };
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
                name="sId"
                onChange={handleForm}
              />
              <input
                type="text"
                className="input_field"
                placeholder="Student Name"
                name="sName"
                onChange={handleForm}
              />
              <input
                type="text"
                className="input_field"
                placeholder="Class"
                name="sClass"
                onChange={handleForm}
              />
              <input
                type="text"
                className="input_field"
                placeholder="Section"
                name="sSection"
                onChange={handleForm}
              />
              <h4 className="form_heading">Enter Marks</h4>
              <div className="mark_input">
                <input
                  type="text"
                  className="input_field input_width"
                  placeholder="Bangla"
                  name="bangla"
                  onChange={handleForm}
                />
                <input
                  type="text"
                  className="input_field input_width"
                  placeholder="English"
                  name="english"
                  onChange={handleForm}
                />
                <input
                  type="text"
                  className="input_field input_width"
                  placeholder="Mathematics"
                  name="math"
                  onChange={handleForm}
                />
                <input
                  type="text"
                  className="input_field input_width"
                  placeholder="Physics"
                  name="physics"
                  onChange={handleForm}
                />
                <input
                  type="text"
                  className="input_field input_width"
                  placeholder="Chemistry"
                  name="chemistry"
                  onChange={handleForm}
                />
                <input
                  type="text"
                  className="input_field input_width"
                  placeholder="Biology"
                  name="biology"
                  onChange={handleForm}
                />
              </div>
              <button className="addBtn" onClick={handleAddStudent}>
                Add Student
              </button>
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
