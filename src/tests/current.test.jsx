import React from "react";
import { mount } from "enzyme";
import {shallow} from 'enzyme'
import Current from "../components/forecast";
import Adapter from './setUpTests.js'

describe("Current", () => {
  let props;
  let mountedCurrent;
  const current = () => {
    if (!mountedCurrent) {
      mountedForecast = mount(
        <Current {...props} />
      );
    }
    return mountedCurrent;
  }

  beforeEach(() => {
    props = {
      search: undefined,
    };
    mountedCurrent = undefined;
  });

  it('renders without crashing', () => {
    shallow(<Current />);
  });
});