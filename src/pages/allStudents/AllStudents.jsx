import React, { useEffect, useState } from "react";
import { getDatabase, ref, onValue } from "firebase/database";

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
              <div key={index}>
                <div>
                  <h4>SID: {studentId}</h4>
                  <h2>Student Name: {studentName}</h2>
                  <p>Class: {item.class}</p>
                  <p>Section: {section}</p>
                </div>
                <ul>
                  <li>Bangla:{bangla}</li>
                  <li>English:{english}</li>
                  <li>Mathematics:{math}</li>
                  <li>Physics:{physics}</li>
                  <li>Chemistry:{chemistry}</li>
                  <li>Biology:{biology}</li>
                </ul>
                <button>See More</button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AllStudents;
