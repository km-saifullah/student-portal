import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getDatabase, ref, remove, update } from "firebase/database";
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
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import UpdateStudent from "../updateStudent/UpdateStudent";
import "./student.css";

const Student = ({ student, toggle, setModal }) => {
  const [updateStatus, setUpdateStatus] = useState(false);
  const [active, setActive] = useState("");
  const { studentName, studentId, section, id } = student;
  const { bangla, english, math, physics, chemistry, biology } = student.marks;

  const navigate = useNavigate();

  const db = getDatabase();

  const updateState = () => setUpdateStatus(!updateStatus);

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

  // delete student
  const handleDelete = () => {
    remove(ref(db, "students/" + id)).then(() => {
      toast(`${studentName} has deleted from the portal ❌`, {
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
    setModal(false);
  };

  // handle update student
  const handleUpdate = () => {
    setModal(false);
    navigate("/update-student");
    setActive("active-1");
    console.log("Active:", active);
    setUpdateStatus(true);
    console.log(updateStatus);
  };
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
              height={250}
              data={data}
              margin={{
                top: 20,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid stroke="#ccc" strokeDasharray="3 3" />
              <XAxis name="name" />
              <Tooltip />
              <Legend />
              <Bar
                barSize={50}
                dataKey="Bangla"
                fill="#8D72E1"
                type="monotone"
              />
              <Bar
                barSize={50}
                dataKey="English"
                fill="#62B6B7"
                type="monotone"
              />
              <Bar
                barSize={50}
                dataKey="Mathematics"
                fill="#00A9FF"
                type="monotone"
              />
              <Bar
                barSize={50}
                dataKey="Physics"
                fill="#FF6969"
                type="monotone"
              />
              <Bar
                barSize={50}
                dataKey="Chemistry"
                fill="#16697A"
                type="monotone"
              />
              <Bar
                barSize={50}
                dataKey="Biology"
                fill="#FF9B9B"
                type="monotone"
              />
              <YAxis />
            </BarChart>
          </ResponsiveContainer>
          <div className="buttons">
            <button
              className="update_btn"
              onClick={() => handleUpdate(student)}
            >
              Update
            </button>
            <button className="delete_btn" onClick={handleDelete}>
              Delete
            </button>
          </div>
        </div>
        {updateStatus && (
          <UpdateStudent
            student={student}
            updateStatus={updateStatus}
            setUpdateStatus={setUpdateStatus}
            updateState={updateState}
          />
        )}
      </div>
    </section>
  );
};

export default Student;
