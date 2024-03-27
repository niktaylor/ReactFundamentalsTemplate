export const mockLocalStorage = {
  getItem: jest.fn(),
  setItem: jest.fn(),
  clear: jest.fn(),
};

export const applyMockLocalStorage = () => {
  Object.defineProperty(window, "localStorage", {
    value: mockLocalStorage,
  });
};
