import {
  TestWrapper,
  applyMockLocalStorage,
  mockLocalStorage,
  mockedStore,
} from "../../test-helpers";
import { Header } from "./Header";
import { render, screen, fireEvent } from "@testing-library/react";

describe("Header", () => {
  it("should render", () => {
    render(<Header />, { wrapper: TestWrapper });
  });

  it("should render logo", () => {
    render(<Header />, { wrapper: TestWrapper });
    expect(screen.getByAltText("logo")).toBeInTheDocument();
  });

  it("should render user name", () => {
    render(<Header />, { wrapper: TestWrapper });
    expect(screen.getByText("Admin")).toBeInTheDocument();
  });

  it("should show logout button when logged in", () => {
    mockLocalStorage.getItem.mockReturnValueOnce("token");
    applyMockLocalStorage();
    render(<Header />, { wrapper: TestWrapper });
    expect(screen.getByText("Logout")).toBeInTheDocument();
  });

  it("should hide logout button when not logged in", () => {
    mockLocalStorage.getItem.mockReturnValueOnce(null);
    applyMockLocalStorage();
    render(<Header />, { wrapper: TestWrapper });
    expect(screen.queryByText("Logout")).not.toBeInTheDocument();
  });

  it("should handle logout", () => {
    mockLocalStorage.getItem.mockReturnValueOnce("token");
    applyMockLocalStorage();
    render(<Header />, { wrapper: TestWrapper });
    fireEvent.click(screen.getByText("Logout"));
    expect(mockLocalStorage.clear).toHaveBeenCalled();
    expect(mockedStore.dispatch).toHaveBeenCalled();
  });
});
