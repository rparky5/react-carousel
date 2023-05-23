import React from "react";
import { render } from "@testing-library/react";
import Card from "./Card";
import TEST_IMAGES from "./_testCommon.js";

it("renders without crashing", function () {
  render(<Card
    caption={TEST_IMAGES[0].caption}
    src={TEST_IMAGES[0].src}
    currNum={1}
    totalNum={1}
    />);
});
// end

it("has the correct alt text & src", function () {
  const { container, debug } = render(<Card
    caption={TEST_IMAGES[0].caption}
    src={TEST_IMAGES[0].src}
    currNum={1}
    totalNum={1}
  />);
  const img = container.querySelector("img");
  debug(img);

  expect(img.getAttribute("alt")).toEqual("testing image 1");
  expect(img.getAttribute("src")).toContain("test1.com");
});
// end

it("matches snapshot", function () {
  const { container } = render(<Card
    caption={TEST_IMAGES[0].caption}
    src={TEST_IMAGES[0].src}
    currNum={1}
    totalNum={1}
  />);
  expect(container).toMatchSnapshot();
});
// end
