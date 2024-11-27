import renderer from 'react-test-renderer';
import {test, jest, describe} from '@jest/globals';
import {expect, it, beforeEach} from '@jest/globals';
import CustomToggleSwitch from './CustomToggleSwitch';
import { View } from 'react-native';
describe('all mock', () => {
  let mockToggleSwitch = jest.fn();
  let mockOnChange= jest.fn()
  let children=()=>{
    return<View></View>
  }
  test('testcase for matching customToggleSwitch Snapshot==>', () => {
    const AppRef = renderer.create(
      <CustomToggleSwitch toggleSwitch={mockToggleSwitch} onChange={mockOnChange} isEnabled={true} />,
    );
    expect(AppRef.toJSON()).toMatchSnapshot();
  });

  test('testcase for checking presence of dom element for customToggleSwitch==>', () => {
    const AppRef = renderer.create(
        <CustomToggleSwitch toggleSwitch={mockToggleSwitch} onChange={mockOnChange} isEnabled={true} />,
    );
    console.log('arzoo test======', AppRef.toJSON());
    let props: any = AppRef.toJSON();
    console.log('Arzoo data...',props)
    expect(AppRef.toJSON()).toBeTruthy();
  });

  test('testcase for checking child element for customToggleSwitch==>', () => {
    const styles = {};
    const AppRef = renderer.create(
        <CustomToggleSwitch toggleSwitch={mockToggleSwitch} onChange={mockOnChange} isEnabled={true} />,
    );
    let props: any = AppRef.toJSON();
    expect(props?.type).toBe('RCTSwitch');
  });

});
