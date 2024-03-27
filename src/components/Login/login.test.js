import { TestWrapper } from "../../test-helpers";
import { render } from "@testing-library/react";
import { Login } from "./Login";

describe("Courses", () => {
  it("should render", () => {
    render(<Login />, { wrapper: TestWrapper });
  });
});
