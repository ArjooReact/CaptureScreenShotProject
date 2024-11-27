import renderer from 'react-test-renderer';
import {test, jest, describe} from '@jest/globals';
import {expect, it, beforeEach} from '@jest/globals';
import CustomImage from './CustomImage';
import { View } from 'react-native';
describe('all mock', () => {
  let mockButtonClick = jest.fn();
  let children=()=>{
    return<View></View>
  }
  test('testcase for matching customImage Snapshot==>', () => {
    const AppRef = renderer.create(
      <CustomImage uri='imagePath' />,
    );
    expect(AppRef.toJSON()).toMatchSnapshot();
  });

  test('testcase for checking presence of dom element for CustomImage==>', () => {
    const AppRef = renderer.create(
        <CustomImage uri='imagePath' />,
    );
    console.log('arzoo test======', AppRef.toJSON());
    let props: any = AppRef.toJSON();
    console.log('Arzoo data...',props)
    expect(AppRef.toJSON()).toBeTruthy();
  });

  test('testcase for checking child element for CustomImage==>', () => {
    const styles = {};
    const AppRef = renderer.create(
        <CustomImage uri='imagePath' />,
    );
    let props: any = AppRef.toJSON();
    expect(props?.type).toBe('Image');
  });
  test('testcase for checking child element for CustomImage==>', () => {
    //const styles={}
    const AppRef: any = renderer.create(
        <CustomImage uri='imagePath' />,
    );
    const styles = AppRef.toJSON()?.props.style;
    console.log('Propsdd.ff....', styles);
    const {width, height, backgroundColor} = styles;
    expect(width).toBe(200);
    expect(height).toBe(200);
    expect(backgroundColor).toBe('#ffffff');
   // expect(borderRadius).toBe(8);
  });
});
