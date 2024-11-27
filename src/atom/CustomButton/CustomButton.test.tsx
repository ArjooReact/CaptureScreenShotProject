import renderer from 'react-test-renderer';
import {test, jest, describe} from '@jest/globals';
import {expect, it, beforeEach} from '@jest/globals';
import CustomButton from './CustomButton';

describe('all mock', () => {
  let mockButtonClick = jest.fn();

  test('testcase for matching Snapshot==>', () => {
    const AppRef = renderer.create(
      <CustomButton title="PostCall" onClickHandler={mockButtonClick} />,
    );
    expect(AppRef.toJSON()).toMatchSnapshot();
  });

  test('testcase for checking dom element for CustomButton==>', () => {
    const AppRef = renderer.create(
      <CustomButton title="PostCall" onClickHandler={mockButtonClick} />,
    );
    console.log('arzoo test======', AppRef.toJSON());
    let props: any = AppRef.toJSON();

    expect(AppRef.toJSON()).toBeTruthy();
  });

  test('testcase for checking child element for CustomButton==>', () => {
    const styles = {};
    const AppRef = renderer.create(
      <CustomButton title="PostCall" onClickHandler={mockButtonClick} />,
    );
    let props: any = AppRef.toJSON();
    expect(props?.children[0].children[0]).toBe('PostCall');
  });

  test('testcase for checking child element for CustomButton==>', () => {
    //const styles={}
    const AppRef: any = renderer.create(
      <CustomButton title="PostCall" onClickHandler={mockButtonClick} />,
    );
    const styles = AppRef.toJSON()?.props.style;
    console.log('Propsdd.ff....', styles);
    const {width, height, backgroundColor, borderRadius} = styles;
    expect(width).toBe(160);
    expect(height).toBe(60);
    expect(backgroundColor).toBe('#20a7db');
    expect(borderRadius).toBe(8);
  });
});
