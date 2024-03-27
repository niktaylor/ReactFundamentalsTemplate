import { TestWrapper } from "../../test-helpers";
import { render } from "@testing-library/react";
import { Registration } from "./Registration";

describe("Courses", () => {
  it("should render", () => {
    render(<Registration />, { wrapper: TestWrapper });
  });
});
