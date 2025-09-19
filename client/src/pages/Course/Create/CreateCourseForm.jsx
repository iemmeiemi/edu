import React, { useEffect } from "react";
import { useForm } from "react-hook-form";

export const CreateCourseForm = ({ handler, setCourse,  course }) => {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: course || {},
  });

  // useEffect(() => {
  //   reset(course || {});
  // }, [course, reset]);
  
  const onSubmit = (data) => {
    handler(data);
  };

  useEffect(() => {
    const subscription = watch((values) => {
      setCourse(values);
    });
    return () => subscription.unsubscribe();
  }, [watch, setCourse]);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
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
  );
};
