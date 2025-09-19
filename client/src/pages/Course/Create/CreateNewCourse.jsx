import React, { useContext, useEffect, useState } from "react";
import { PageHeader } from "../../../Components/PageHeader";
import { createCourse } from "../../../fake_data/Course";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

import {
  createNewLesson,
  getLessonsByCourseId,
} from "../../../fake_data/Lesson";
import { LessonList } from "./LessonList";
import { CreateLessonForm } from "./CreateLessonForm";
import AssetList from "../List/AssetList";

export const CreateNewCourse = () => {
  const nav = useNavigate();
  const init = {
    name: "",
    department: "",
    description: "",
    credits: "2",
    lesson_count: "",
    code: "",
  };
  const [course, setCourse] = useState(init);
  const [lessons, setLessons] = useState([]);
  const [assets, setAssets] = useState([]);
  const [type, setType] = React.useState("course");
  const isCourse = type === "course";

  const isCourseValidated = Boolean(
    course.name &&
      course.department &&
      course.description &&
      course.credits &&
      course.code
  );

  console.log(isCourseValidated);

  const searchLessonsHandler = (query) => {
    setLessons(getLessonsByCourseId(query));
  };

  const createLessonHandler = (lesson) => {
    setLessons([...lessons, lesson]);
  };

  const handleChangeType = () => {
    setType(isCourse ? "lesson" : "course");
  };

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: course || {},
  });

  useEffect(() => {
    const subscription = watch((values) => {
      setCourse(values);
    });
    return () => subscription.unsubscribe();
  }, [watch, setCourse]);

  const onSubmit = (course) => {
    if (lessons.length === 0) return alert("Vui lòng thêm ít nhất 1 bài học");
    course.lesson_count = lessons.length;
    const newCourse = createCourse(course);
    lessons.forEach((lesson) => {
      lesson.course_ref = newCourse.id;
    });
    setCourse(init);
    reset(init);
    setLessons([]);
  };

  return (
    <div className="flex flex-col gap-10">
      {isCourse ? (
        <PageHeader pageScope={"Tạo Môn học"} pageName={"Tạo Môn học mới"} />
      ) : (
        <PageHeader pageScope={"Tạo Môn học"} pageName={"Tạo Bài học mới"} />
      )}

      <div className="flex xl:flex-row flex-col gap-10">
        <div className="basis-3/5 ">
          {isCourse ? (
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col gap-4"
            >
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="font-md text-left">
                  Tiêu đề Môn học <span className="text-red-700">*</span>
                </label>
                <input
                  id="name"
                  {...register("name", { required: true })}
                  className="form-input"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="department" className="font-md text-left">
                  Bộ phận phụ trách <span className="text-red-700">*</span>
                </label>
                <input
                  id="department"
                  {...register("department", { required: true })}
                  className="form-input"
                />
                {errors.department && <span>This field is required</span>}
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="description" className="font-md text-left">
                  Mô tả Môn học <span className="text-red-700">*</span>
                </label>
                <textarea
                  id="description"
                  {...register("description", { required: true })}
                  className="form-input"
                />
                {errors.description && <span>This field is required</span>}
              </div>

              <div className="flex flex-row justify-between ">
                <div className="flex flex-col gap-2 basis-1/4">
                  <label htmlFor="credits" className="font-md text-left">
                    Số tín chỉ <span className="text-red-700">*</span>
                  </label>
                  <input
                    id="credits"
                    {...register("credits", { required: true })}
                    type="number"
                    className="form-input"
                  />
                  {errors.credits && <span>This field is required</span>}
                </div>
                <div className="flex flex-col gap-2 basis-1/4">
                  <label htmlFor="lessons" className="font-md text-left">
                    Số tiết học <span className="text-red-700">*</span>
                  </label>
                  <input
                    id="lessons"
                    {...register("lessons", { required: true })}
                    type="number"
                    className="form-input"
                  />
                  {errors.lessons && <span>This field is required</span>}
                </div>
                <div className="flex flex-col gap-2 basis-1/4">
                  <label htmlFor="code" className="font-md text-left">
                    Mã môn học <span className="text-red-700">*</span>
                  </label>
                  <input
                    id="code"
                    {...register("code", { required: true })}
                    type="number"
                    className="form-input"
                  />
                  {errors.code && <span>This field is required</span>}
                </div>
              </div>

              <input type="submit" className="form-submit" />
            </form>
          ) : (
            <div className="flex flex-col gap-4">
              <p className="header-txt text-left">{course.name}</p>
              <CreateLessonForm
                handler={createLessonHandler}
                back={handleChangeType}
              />
            </div>
          )}
        </div>
        <div className="basis-2/5">
          <div className="flex flex-row gap-2 items-center justify-between">
            <p className="header-txt">Tài liệu</p>
            <NavLink to={""} className="form-submit">
              Thêm
            </NavLink>
          </div>
          <AssetList data={assets}/>
        </div>
      </div>
      <div className="flex flex-col gap-5">
        <div className="flex flex-row gap-2 items-center justify-between">
          <p className="header-txt">Danh sách Bài học</p>
          <button
            type="submit"
            onClick={handleChangeType}
            disabled={!isCourse || !isCourseValidated}
            className={` ${
              !isCourse || !isCourseValidated
                ? "bg-gray-400 rounded-md px-4 py-2 cursor-not-allowed"
                : "form-submit"
            }`}
          >
            Thêm Bài học
          </button>
        </div>
        <div className="">
          <LessonList data={lessons} />
        </div>
      </div>
    </div>
  );
};
