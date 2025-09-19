import React, { useContext, useState } from "react";
import { PageHeader } from "../../../Components/PageHeader";
import { TableToolBar } from "./TableToolBar";
import CourseList from "./CourseList";
import { getAllCourses } from "../../../fake_data/Course";

const CourseMain = () => {
   const [courseObj, setCourseObj] = useState(getAllCourses());
  const [isChecked, setIsChecked] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [selectedSortingOption, setSelectedSortingOption] = useState("");

  const options = [
    { value: "name-asc", title: "A-Z" },
    { value: "name-desc", title: "Z-A" },
    { value: "date-asc", title: "Mới nhất" },
    { value: "date-desc", title: "Cũ nhất" },
  ];

  return (
    <div className="flex flex-col gap-4">
      <PageHeader pageScope={"Môn học"} pageName={"Danh sách Môn học"} />
      <TableToolBar
        isChecked={isChecked}
        setIsChecked={setIsChecked}
        searchText={searchText}
        setSearchText={setSearchText}
        selectedSortingOption={selectedSortingOption}
        setSelectedSortingOption={setSelectedSortingOption}
        options={options}
      />
      <CourseList data={courseObj} />
    </div>
  );
};

export default CourseMain;
