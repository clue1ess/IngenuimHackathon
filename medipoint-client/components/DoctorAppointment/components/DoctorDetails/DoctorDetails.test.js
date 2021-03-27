import React from "react";
import { shallow } from "enzyme";
import DoctorDetails from "./DoctorDetails";

describe("DoctorDetails", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<DoctorDetails />);
    expect(wrapper).toMatchSnapshot();
  });
});
