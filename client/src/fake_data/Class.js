import { filter, getAll } from "./utils";

export const Classes = [
  // ----- Course 1: FE101 -----
  {
    id: 1,
    org_course: 1,
    teacher: "GV-IT-2",
    schedules: [],
    room: "A101",
    quantity: 30,
    status: "active",
    startdate: "2023-09-01",
    enddate: "2023-12-15",
  },
  {
    id: 2,
    org_course: 1,
    teacher: "GV-IT-5",
    schedules: [],
    room: "B203",
    quantity: 25,
    status: "active",
    startdate: "2023-10-01",
    enddate: "2024-01-15",
  },
  {
    id: 3,
    org_course: 1,
    teacher: "",
    schedules: [],
    room: "C102",
    quantity: 20,
    status: "unactive",
    startdate: "2024-02-01",
    enddate: "2024-05-15",
  },
  {
    id: 4,
    org_course: 1,
    teacher: "GV-IT-1",
    schedules: [],
    room: "A302",
    quantity: 35,
    status: "pending",
    startdate: "2024-03-01",
    enddate: "2024-06-15",
  },

  // ----- Course 2: BE201 -----
  {
    id: 5,
    org_course: 2,
    teacher: "GV-IT-3",
    schedules: [],
    room: "D101",
    quantity: 30,
    status: "active",
    startdate: "2023-09-15",
    enddate: "2023-12-30",
  },
  {
    id: 6,
    org_course: 2,
    teacher: "GV-IT-2",
    schedules: [],
    room: "B104",
    quantity: 28,
    status: "active",
    startdate: "2024-01-10",
    enddate: "2024-04-20",
  },
  {
    id: 7,
    org_course: 2,
    teacher: "",
    schedules: [],
    room: "A205",
    quantity: 20,
    status: "unactive",
    startdate: "2024-03-01",
    enddate: "2024-06-10",
  },

  // ----- Course 3: DB301 -----
  {
    id: 8,
    org_course: 3,
    teacher: "GV-IT-4",
    schedules: [],
    room: "E201",
    quantity: 25,
    status: "active",
    startdate: "2023-08-20",
    enddate: "2023-12-05",
  },
  {
    id: 9,
    org_course: 3,
    teacher: "",
    schedules: [],
    room: "C204",
    quantity: 30,
    status: "unactive",
    startdate: "2024-04-01",
    enddate: "2024-07-15",
  },
  {
    id: 10,
    org_course: 3,
    teacher: "GV-IT-1",
    schedules: [],
    room: "A306",
    quantity: 40,
    status: "pending",
    startdate: "2024-05-10",
    enddate: "2024-08-30",
  },
];

export const getClassById = (id, page = 1, pageSize = 15) => {
  const classes = Classes.filter((cls) => cls.id === parseInt(id));
  const start = (page - 1) * pageSize;
  const end = start + pageSize;
  return {
    data: classes.slice(start, end),
    total: classes.length,
    page,
    pageSize,
    totalPages: Math.ceil(classes.length / pageSize),
  };
};

export const getAllClasses = (page = 1, pageSize = 15) => {
  return getAll(Classes, page, pageSize);
};

export const getClassesByStatus = (status, page = 1, pageSize = 15) => {
  return filter(
    Classes.filter((cls) => cls.status === status),
    page,
    pageSize
  );
};
