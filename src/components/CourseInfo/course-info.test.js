import { TestWrapper } from "../../test-helpers";
import { render } from "@testing-library/react";
import { CourseInfo } from "./CourseInfo";

describe("Courses", () => {
  it("should render", () => {
    render(<CourseInfo />, { wrapper: TestWrapper });
  });
});
