import React, { useState } from "react";
import { PageHeader } from "../../../Components/PageHeader";
import { getCourseById } from "../../../fake_data/Course";
import { NavLink, useParams } from "react-router-dom";
import { LessonList } from "../Create/LessonList";
import { getLessonsByCourseId } from "../../../fake_data/Lesson";
import AssetList from "../List/AssetList";

export const CourseDetail = () => {
  let params = useParams();
  const id = params.id;
  const course = getCourseById(id);
  const [lessons, setLessons] = useState(getLessonsByCourseId(id));
  const [assets, setAssets] = useState([]);

  return (
    <div className="horizontal-cont">
      <PageHeader pageScope={"Môn học"} pageName={"Môn học"} />
      <div className="flex flex-row">
        <div className="flex flex-col text-left basis-2/3">
          <p className="header-txt">{course.name}</p>
          <p>{course.description}</p>
          <p>
            <span className="font-bold">Bộ phận:</span> {course.department}
          </p>
          <p>
            <span className="font-bold">Mã:</span> {course.code}
          </p>
        </div>
        <div className="flex gap-2 ">
          <NavLink to="/create-class/{id}" className="form-submit">
            Tạo Lớp học mới
          </NavLink>
          <NavLink to="all-class" className="form-submit">Danh sách Lớp học</NavLink>
        </div>
      </div>
      <hr />
      <div className="horizontal-cont">
        <div className="flex flex-row justify-between item-center">
          <p className="header-txt text-left">Danh sách Bài học</p>
          <button className="form-submit">Chỉnh sửa</button>
        </div>
        <LessonList data={lessons} />
      </div>
      <hr />

      <div className="horizontal-cont">
        <div className="flex flex-row justify-between">
          <p className="header-txt text-left w-1/2">Danh sách Tài liệu</p>
          {assets ? (
            <button className="form-submit">Chỉnh sửa</button>
          ) : (
            <button className="form-submit">Thêm</button>
          )}
        </div>
        <AssetList data={assets} />
      </div>
    </div>
  );
};
