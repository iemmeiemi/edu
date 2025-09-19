import React, { useEffect, useState } from "react";
import ClassList from "./ClassList";
import { useParams } from "react-router-dom";
import { getCourseById } from "../../../fake_data/Course";
import { getClassById } from "../../../fake_data/Class";
import { PageHeader } from "../../../Components/PageHeader";

export const ClassMain = () => {
  let params = useParams();
  const id = params.id;
  const course = getCourseById(id);
  console.log(course);
  const [currentClasses, setCurrentClasses] = useState(getClassById(id));
  
  
   


  return (
    <div className="horizontal-cont ">
      <PageHeader pageScope={"Lớp học"} pageName={"Danh sách Lớp học"} />
      <ClassList  data={currentClasses}/>
    </div>
  );
};
