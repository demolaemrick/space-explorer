import React from "react";

import { render, cleanup } from "../../test-utils";
import MenuItem from "../ManuItem";

describe("Menu Item", () => {
  // automatically unmount and cleanup DOM after the test is finished.
  afterEach(cleanup);

  it("renders without error", () => {
    render(<MenuItem to="/wow" />);
  });
});
