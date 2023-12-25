import React, { useState } from "react";
import {
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Bar,
  ResponsiveContainer,
} from "recharts";
import { ImCancelCircle } from "react-icons/im";
import "./student.css";

const Student = ({ student, toggle }) => {
  const { studentName, studentId, section } = student;
  const { bangla, english, math, physics, chemistry, biology } = student.marks;
  const [totalNumber, setTotalNumber] = useState();

  // chart data
  const data = [
    { name: "Bangla", Bangla: bangla },
    { name: "English", English: english },
    { name: "Mathematics", Mathematics: math },
    { name: "Physics", Physics: physics },
    { name: "Chemistry", Chemistry: chemistry },
    { name: "Biology", Biology: biology },
  ];

  // calculate Marks
  const allMarks = [bangla, english, math, physics, chemistry, biology];
  let total = 0;
  const totalMarks = () => {
    allMarks.map((mark) => {
      let markNumber = Number(mark);
      total += markNumber;
    });
  };
  totalMarks();
  return (
    <section className="student_info">
      <div className="info_wrapper">
        <div className="close_icon">
          <div>
            <button className="close_btn" onClick={toggle}>
              <ImCancelCircle />
            </button>
          </div>
        </div>
        <div className="name_marks">
          <h1 className="student_id">
            <span className="text">Student ID | </span>
            {studentId}
          </h1>
          <h3 className="marks">
            <span className="text">Total Marks | </span> {total}/600
          </h3>
        </div>
        <h2 className="student_name">
          <span className="text">Student Name | </span>
          {studentName}
        </h2>
        <p className="sClass_sSection">
          <span className="text">Class | </span>
          {student.class}
        </p>
        <p className="sClass_sSection">
          <span className="text">Section | </span>
          {section}
        </p>
        <div className="student_marks">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              width={500}
              height={300}
              data={data}
              margin={{
                top: 20,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis name="name" />
              <Bar dataKey="Bangla" fill="#8D72E1" type="monotone" />
              <Bar dataKey="English" fill="#62B6B7" type="monotone" />
              <Bar dataKey="Mathematics" fill="#00A9FF" type="monotone" />
              <Bar dataKey="Physics" fill="#FF6969" type="monotone" />
              <Bar dataKey="Chemistry" fill="#16697A" type="monotone" />
              <Bar dataKey="Biology" fill="#FF9B9B" type="monotone" />
              <YAxis />
              <Tooltip />
              <Legend />
            </BarChart>
          </ResponsiveContainer>
          <div className="buttons">
            <button className="update_btn">Update</button>
            <button className="delete_btn">Delete</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Student;
