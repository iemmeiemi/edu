import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { FaCalendarAlt } from "react-icons/fa";
import { ImProfile } from "react-icons/im";
import { LuFileSearch2 } from "react-icons/lu";
import { useParams } from "react-router-dom";
import { getCourseById } from "../../../fake_data/Course";
import { PageHeader } from "../../../Components/PageHeader";

export const CreateNewClass = () => {
  let params = useParams();
  const id = params.id;
  const course = getCourseById(id);
  const [newclass, setNewClass] = useState();
  const [org_course, setOrgCourse] = useState(course);
  const [openTeacherDia, setOpenTeacherDia] = useState(false);
  const [openCourseDia, setOpenCourseDia] = useState(false);
  const [timeSlots, setTimeSlots] = useState([]);
  const init = {
    department: course ? course.department : "",
    org_course: course ? course.name : "",
    quantity: 30,
    status: "inactive",
  };

  const isTimeSlotEmpty = (timeSlots.length>0) === true;

  const courseSelected = (course) => {
    setOrgCourse(course);
  };

  const toggleTeacherDia = () => {
    openTeacherDia ? setOpenTeacherDia(false) : setOpenTeacherDia(true);
  };

  const toggleCourseDia = () => {
    openCourseDia ? setOpenCourseDia(false) : setOpenCourseDia(true);
  };

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: init || {},
  });

  const onSubmit = (data) => {};

  return (
    <div className="horiziontal-cont w-full">
      <PageHeader pageScope={"Lớp học"} pageName={"Thêm lớp học"} />
      <div className="flex flex-col gap-4">
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <label htmlFor="name" className="font-md text-left">
              Tiêu đề Lớp học <span className="text-red-700">*</span>
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
            <label htmlFor="org_course" className="font-md text-left">
              Môn học <span className="text-red-700">*</span>
            </label>
            <div className="flex flex-row gap-1 items-center">
              <input
                id="org_course"
                typed="text"
                {...register("org_course", { required: true })}
                className="form-input w-1/2"
              />
              <button onClick={toggleCourseDia}>
                <LuFileSearch2 className="text-xl" />
              </button>
            </div>
            {errors.org_course && <span>This field is required</span>}
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="teacher" className="font-md text-left">
              Giáo viên phụ trách
            </label>
            <div className="flex flex-row gap-1 items-center">
              <input
                id="teacher"
                {...register("teacher", { required: true })}
                className="form-input w-1/2"
              />
              <button onClick={toggleTeacherDia}>
                <ImProfile className="text-xl" />
              </button>
            </div>

            {errors.teacher && <span>This field is required</span>}
          </div>

          <div className="flex flex-row justify-between ">
            <div className="flex flex-col gap-2 basis-1/4">
              <label htmlFor="quantity" className="font-md text-left">
                Sỉ số <span className="text-red-700">*</span>
              </label>
              <input
                id="credits"
                {...register("quantity", { required: true })}
                type="number"
                className="form-input"
              />
              {errors.quantity && <span>This field is required</span>}
            </div>
            <div className="flex flex-col gap-2 basis-1/4">
              <label htmlFor="room" className="font-md text-left">
                Phòng học <span className="text-red-700">*</span>
              </label>
              <input
                id="room"
                {...register("room", { required: true })}
                type="number"
                className="form-input"
              />
              {errors.room && <span>This field is required</span>}
            </div>
            <div className="flex flex-col gap-2 basis-1/4">
              <label htmlFor="startdate" className="font-md text-left">
                Ngày bắt đầu <span className="text-red-700">*</span>
              </label>

              <div className="flex flex-row gap-1 items-center">
                <input
                  id="startdate"
                  {...register("startdate", { required: true })}
                  type="number"
                  className="form-input"
                />
                <FaCalendarAlt className="text-2xl" />
              </div>
              {errors.startdate && <span>This field is required</span>}
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex flex-row justify-between">
              <label htmlFor="room" className="font-md text-left">
                <p className="header-txt">Lịch<span className="text-red-700"> *</span></p> 
              </label>
              <button className="form-submit">Thêm thời gian</button>
              {errors.room && <span>This field is required</span>}
            </div>
            {isTimeSlotEmpty? (
              timeSlots.map((t, key) => {

              })
            ) : (
              <p className="text-xl text-gray-400">Chưa có lịch. Hãy thêm lịch</p>
            )}
          </div>

          <button onClick={onSubmit} className="form-submit">
            {" "}
            Thêm
          </button>
        </form>
        
      </div>
    </div>
  );
};
