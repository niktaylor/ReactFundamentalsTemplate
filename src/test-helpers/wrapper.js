import { Provider } from "react-redux";
import { mockedStore } from "./mock-store";
import { MemoryRouter } from "react-router-dom";

export const TestWrapper = ({ children, store }) => {
  const usedStore = store ?? mockedStore;
  return (
    <Provider store={usedStore}>
      <MemoryRouter>{children}</MemoryRouter>
    </Provider>
  );
};
