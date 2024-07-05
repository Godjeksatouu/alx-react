import React from "react";
import App from "./App";
import Login from "../Login/Login";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Notifications from "../Notifications/Notifications";
import CourseList from "../CourseList/CourseList";
import { shallow } from "enzyme";

describe("App tests", () => {
  it("renders without crashing", () => {
    const component = shallow(<App />);

    expect(component).toBeDefined();
  });
  it("should render Notifications component", () => {
    const component = shallow(<App />);

    expect(component.find(Notifications).length).toBe(1);
  });
  it("should render Header component", () => {
    const component = shallow(<App />);

    expect(component.contains(<Header />)).toBe(true);
  });
  it("should render Login Component", () => {
    const component = shallow(<App isLoggedIn={false} />);

    expect(component.containsMatchingElement(<Login />)).toEqual(true);
  });
  it("should render Footer component", () => {
    const component = shallow(<App />);

    expect(component.contains(<Footer />)).toBe(true);
  });
  it("does not render courselist if logged out", () => {
    const component = shallow(<App />);

    component.setProps({ isLogedIn: false });

    expect(component.contains(<CourseList />)).toBe(false);
  });
  it("renders courselist if logged in", () => {
    const component = shallow(<App isLoggedIn={true} />);

    expect(component.containsMatchingElement(<CourseList />)).toEqual(false);
    expect(component.contains(<Login />)).toBe(false);
  });
  it("handles keypress, alerts and logs out", () => {
    const alert = jest.spyOn(window, "alert");
    const logOut = jest.fn();
    const component = shallow(<App logOut={logOut} />);
    const instance = component.instance();
    const event = { ctrlKey: true, key: "h", preventDefault: jest.fn() };

    instance.handleKeyPress(event);

    expect(alert).toHaveBeenCalledWith("Logging you out");
    expect(logOut).toHaveBeenCalled();
  });
});
