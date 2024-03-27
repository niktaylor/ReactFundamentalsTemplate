export const mockedState = {
  user: {
    isAuth: true,
    name: "Admin",
    role: "admin",
    token: "token",
  },
  courses: [
    {
      title: "Course",
      description: "Description",
      duration: 200,
      authors: [
        "9b87e8b8-6ba5-40fc-a439-c4e30a373d36",
        "1c972c52-3198-4098-b6f7-799b45903199",
      ],
      creationDate: "11/03/2024",
      id: "b28fd9ad-c683-4900-bf99-38a1c5748309",
    },
  ],
  authors: [
    {
      name: "author",
      id: "9b87e8b8-6ba5-40fc-a439-c4e30a373d36",
    },
    {
      name: "author2",
      id: "1c972c52-3198-4098-b6f7-799b45903199",
    },
  ],
};

export const mockedStore = {
  getState: () => mockedState,
  subscribe: jest.fn(),
  dispatch: jest.fn(),
};
