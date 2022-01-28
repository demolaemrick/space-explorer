import React from "react";

import { render, cleanup } from "../../test-utils";
import PageContainer from "../PageContainer";

describe("Page Container", () => {
  // automatically unmount and cleanup DOM after the test is finished.
  afterEach(cleanup);

  it("renders without error", () => {
    render(<PageContainer />);
  });
});
