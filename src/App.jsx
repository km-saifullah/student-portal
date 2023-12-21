import React from "react";
import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/home/Home";
import AllStudents from "./pages/allStudents/AllStudents";
import MainLayout from "./layouts/MainLayout";
import AddStudent from "./pages/addStudent/AddStudent";
import Contact from "./pages/contact/Contact";

// all routes
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<MainLayout />}>
      <Route path="/" element={<Home />} />
      <Route path="/students" element={<AllStudents />} />
      <Route path="/addstudent" element={<AddStudent />} />
      <Route path="/contact" element={<Contact />} />
    </Route>
  )
);

const App = () => {
  return <RouterProvider router={router}></RouterProvider>;
};

export default App;
