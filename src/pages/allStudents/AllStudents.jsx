import React, { useEffect, useState } from "react";
import { getDatabase, ref, onValue } from "firebase/database";
import { Link, useNavigate } from "react-router-dom";
import Student from "../student/Student";
import "./allstudents.css";

const AllStudents = () => {
  const [student, setStudent] = useState([]);
  const [singleStudent, setSingleStudent] = useState();
  const [modal, setModal] = useState(false);

  // toggle button for modal
  const toggle = () => setModal(!modal);

  const db = getDatabase();

  // read data from db
  useEffect(() => {
    const studentsRef = ref(db, "students/");
    onValue(studentsRef, (snapshot) => {
      let arr = [];
      snapshot.forEach((item) => {
        arr.push({ ...item.val(), id: item.key });
      });
      setStudent(arr);
    });
  }, []);

  // handle single student
  const handleSingleStudent = (item) => {
    setSingleStudent(item);
    setModal(true);
  };

  return (
    <section className="all_students">
      <div className="container">
        <h2 className="students_heading">All Students</h2>
        <div className="allStudent_wrapper">
          {student.map((item, index) => {
            const { studentId, studentName, section, id } = item;
            return (
              <div key={index} className="student_details">
                <h4>
                  <span className="sInfo">SID:</span> {studentId}
                </h4>
                <h4>
                  <span className="sInfo">Student Name:</span> {studentName}
                </h4>
                <p>
                  <span className="sInfo">Class:</span> {item.class}
                </p>
                <p className="section_info">
                  <span className="sInfo">Section:</span> {section}
                </p>
                <button
                  className="commonBtn"
                  onClick={() => handleSingleStudent(item)}
                >
                  See More
                </button>
              </div>
            );
          })}
          {modal && (
            <Student student={singleStudent} modal={modal} toggle={toggle} />
          )}
        </div>
      </div>
    </section>
  );
};

export default AllStudents;
