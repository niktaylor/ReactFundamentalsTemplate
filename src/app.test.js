import { render } from "@testing-library/react";
import { TestWrapper } from "./test-helpers";
import { App } from "./App";

describe("App", () => {
  it("should render", () => {
    render(<App />, { wrapper: TestWrapper });
  });
});
