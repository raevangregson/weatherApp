import React from "react";
import { mount } from "enzyme";
import {shallow} from 'enzyme'
import Dashboard from "../components/forecast";
import Adapter from './setUpTests.js'

describe("Current", () => {
  let props;
  let mountedDashboard;
  const current = () => {
    if (!mountedDashboard) {
      mountedDashboard = mount(
        <Current {...props} />
      );
    }
    return mountedDashboard;
  }

  beforeEach(() => {
    props = {
      search: undefined,
    };
    mountedDashboard = undefined;
  });

  it('renders without crashing', () => {
    shallow(<Dashboard />);
  });
});