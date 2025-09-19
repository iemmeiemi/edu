export const getCourseById = (id) => {
  return Course.find((course) => course.id === parseInt(id));
};

export const getAllCourses = (page = 1, pageSize = 15) => {
  const start = (page - 1) * pageSize;
  const end = start + pageSize;
  return {
    data: Course.slice(start, end),
    total: Course.length,
    page,
    pageSize,
    totalPages: Math.ceil(Course.length / pageSize),
  };
};

export const createCourse = (course) => {
  console.log("Creating course:", course);
  const newCourse = {
    id: Course.length + 1,
    ...course,
  };
  Course.push(newCourse);
  return newCourse;
};

export const updateCourse = (id, updatedCourse) => {
  const index = Course.findIndex((course) => course.id === parseInt(id));
  if (index !== -1) {
    Course[index] = { id: parseInt(id), ...updatedCourse };
    return Course[index];
  } else {
    return null;
  }
};

export const deleteCourse = (id) => {
  const index = Course.findIndex((course) => course.id === parseInt(id));
  if (index !== -1) {
    return Course.splice(index, 1)[0];
  } else {
    return null;
  }
};

export var Course = [
  {
    id: 1,
    name: "Lập trình Frontend căn bản",
    description: "Học cách xây dựng giao diện web với HTML, CSS và JavaScript.",
    credits: "2",
    lesson_count: "16",
    code: "FE101",
    department: "Công nghệ thông tin",
  },
  {
    id: 2,
    name: "Cơ sở dữ liệu",
    description:
      "Tìm hiểu về các khái niệm, mô hình và ngôn ngữ SQL trong quản lý dữ liệu.",
    credits: "3",
    lesson_count: "20",
    code: "DB201",
    department: "Công nghệ thông tin",
  },
  {
    id: 3,
    name: "Lập trình hướng đối tượng với Java",
    description: "Học các khái niệm OOP và áp dụng vào lập trình Java thực tế.",
    credits: "3",
    lesson_count: "24",
    code: "JAVA202",
    department: "Công nghệ thông tin",
  },
  {
    id: 4,
    name: "Phân tích và thiết kế hệ thống",
    description:
      "Trang bị kỹ năng phân tích yêu cầu và thiết kế hệ thống thông tin.",
    credits: "2",
    lesson_count: "18",
    code: "SYS301",
    department: "Công nghệ thông tin",
  },
  {
    id: 5,
    name: "Mạng máy tính",
    description:
      "Giới thiệu về kiến trúc mạng, giao thức và bảo mật mạng máy tính.",
    credits: "3",
    lesson_count: "22",
    code: "NET205",
    department: "Công nghệ thông tin",
  },
];
