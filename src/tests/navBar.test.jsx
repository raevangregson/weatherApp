import React from "react";
import { mount } from "enzyme";
import {shallow} from 'enzyme'
import NavBar from "../components/forecast";
import Adapter from './setUpTests.js'

describe("Forecast", () => {
  let props;
  let mountedNavBar;
  const navBar = () => {
    if (!mountedNavBar) {
      mountedNavBar = mount(
        <NavBar {...props} />
      );
    }
    return mountedNavBar;
  }

  beforeEach(() => {
    props = {

    };
    mountedNavBar = undefined;
  });

  it('renders without crashing', () => {
    fetch.mockResponse(JSON.stringify({ access_token: '12345' }))
    shallow(<NavBar />);
  });

});