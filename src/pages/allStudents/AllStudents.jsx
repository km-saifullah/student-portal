import React, { useEffect, useState } from "react";
import { getDatabase, ref, onValue } from "firebase/database";
import "./allstudents.css";
import CommonBtn from "../../components/commonBtn/CommonBtn";

const AllStudents = () => {
  const [student, setStudent] = useState([]);
  const db = getDatabase();
  useEffect(() => {
    const studentsRef = ref(db, "students/");
    onValue(studentsRef, (snapshot) => {
      let arr = [];
      snapshot.forEach((item) => {
        arr.push(item.val());
      });
      setStudent(arr);
    });
  }, []);

  return (
    <section className="all_students">
      <div className="container">
        <div className="allStudent_wrapper">
          {student.map((item, index) => {
            const { studentId, studentName, section } = item;
            const { bangla, english, math, physics, chemistry, biology } =
              item.marks;
            return (
              <div key={index} className="student_details">
                <h3>
                  <span className="sInfo">SID:</span> {studentId}
                </h3>
                <h3>
                  <span className="sInfo">Student Name:</span> {studentName}
                </h3>
                <p>
                  <span className="sInfo">Class:</span> {item.class}
                </p>
                <p className="section_info">
                  <span className="sInfo">Section:</span> {section}
                </p>
                <CommonBtn title="See More" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AllStudents;
