import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import Card from '../js/components/card';

describe('<Card />', () => {
    it('should render empty <Card /> components', () => {
        const wrapper = shallow(<Card city={'Noida'} todayWeather={{}} feeds={[]} />);
        expect(wrapper).to.have.length(1);
    });

    it('should contain specific city span', () => {
        const wrapper = shallow(<Card city={'Noida'} todayWeather={{}} feeds={[]} />);
        expect(wrapper.contains(<span className="city">Noida</span>)).to.equal(true);
    });

    it('should contain specific css class', () => {
        const wrapper = shallow(<Card city={'Noida'} todayWeather={{}} feeds={[]} />);
        expect(wrapper.contains(<div className="sun"></div>)).to.equal(true);
    });

    it('should not contain specific class for empty weather feeds', () => {
        const wrapper = shallow(<Card city={'Noida'} todayWeather={{}} feeds={[]} />);
        expect(wrapper.contains(<span className="sunny"></span>)).to.equal(false);
    });
});