import React from "react";
import { mount } from "enzyme";
import {shallow} from 'enzyme'
import Forecast from "../components/forecast";
import Adapter from './setUpTests.js'

describe("Forecast", () => {
  let props;
  let mountedForecast;
  const forecast = () => {
    if (!mountedForecast) {
      mountedForecast = mount(
        <Forecast {...props} />
      );
    }
    return mountedForecast;
  }

  beforeEach(() => {
    props = {
      search: undefined,
    };
    mountedForecast = undefined;
  });

  it('renders without crashing', () => {
    shallow(<Forecast />);
  });
});