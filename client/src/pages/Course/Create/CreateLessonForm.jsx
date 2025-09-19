import React from "react";
import { useForm } from "react-hook-form";

export const CreateLessonForm = ({ handler, back }) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    handler(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
      <div className="flex flex-col gap-2">
        <label htmlFor="title" className="font-md text-left">
          Tiêu đề Bài học <span className="text-red-700">*</span>
        </label>
        <input
          id="title"
          {...register("title", { required: true })}
          className="form-input"
        />
        {errors.content && <span>This field is required</span>}
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="title" className="font-md text-left">
          Nội dung Bài học <span className="text-red-700">*</span>
        </label>
        <textarea
          id="content"
          {...register("content", { required: true })}
          className="form-input"
        />
        {errors.content && <span>This field is required</span>}
      </div>

      <div className="flex flex-row justify-between gap-2">
        <div className="flex flex-col gap-2 basis-1/4">
          <label htmlFor="duration" className="font-md text-left">
            Số tiết học <span className="text-red-700">*</span>
          </label>
          <input
            id="duration"
            {...register("duration", { required: true })}
            type="number"
            className="form-input"
          />
          {errors.duration && <span>This field is required</span>}
        </div>
        <div className="flex flex-col gap-2 basis-1/4">
          <label htmlFor="order" className="font-md text-left">
            Số thứ tự <span className="text-red-700">*</span>
          </label>
          <input
            id="order"
            {...register("order", { required: true })}
            type="number"
            className="form-input"
          />
          {errors.order && <span>This field is required</span>}
        </div>
      </div>

      <div className="flex flex-row gap-2 justify-center">
        <button className="cancel-btn" onClick={back}>Hủy</button>
        <input type="submit" className="form-submit" value="Thêm"/>
      </div>
      
    </form>
  );
};
