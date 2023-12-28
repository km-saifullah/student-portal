import React, { useEffect, useState } from "react";
import { getDatabase, ref, onValue, remove } from "firebase/database";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Student from "../student/Student";
import "./allstudents.css";

const AllStudents = () => {
  const [student, setStudent] = useState([]);
  const [singleStudent, setSingleStudent] = useState();
  const [modal, setModal] = useState(false);
  const [studentLength, setStudentLength] = useState(true);
  const [deleteAll, setDeleteAll] = useState(true);

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

  // delete all students feature
  const handleDeleteAllStudent = () => {
    remove(ref(db, "students")).then(() => {
      toast(`All Students Removed from the Portal ❌`, {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    });
    setStudentLength(false);
  };

  return (
    <section className="all_students">
      <h2 className="students_heading">All Students</h2>
      <div className="container">
        <ToastContainer />
        <div className="delete_all">
          {studentLength ? (
            <button className="deleteall_btn" onClick={handleDeleteAllStudent}>
              Delete All Students
            </button>
          ) : null}
        </div>
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
            <Student
              student={singleStudent}
              modal={modal}
              setModal={setModal}
              toggle={toggle}
            />
          )}
        </div>
      </div>
    </section>
  );
};

export default AllStudents;
