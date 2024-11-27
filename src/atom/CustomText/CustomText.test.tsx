import renderer from 'react-test-renderer';
import {test, jest, describe} from '@jest/globals';
import {expect, it, beforeEach} from '@jest/globals';
import CustomText from './CustomText';


describe('all mock', () => {
 
  let value: number = 1;
  let htmlWrapper: any;
 
  test('testcase for matching Snapshot==>',()=>{
    const AppRef = renderer.create(<CustomText textTitle="Submit" />);
    expect(AppRef.toJSON()).toMatchSnapshot();
  })

  test('testcase for checking dom element for CustomButton==>', () => {
    const AppRef = renderer.create(<CustomText textTitle="Submit" />);
    //console.log('arzoo test======', AppRef.toJSON());
    let props: any = AppRef.toJSON();
    //console.log('Props.....', props?.children[0]);
    expect(AppRef.toJSON()).toBeTruthy();
  });

  test('testcase for checking child element for CustomButton==>',()=>{
    const AppRef = renderer.create(<CustomText textTitle="Submit" />);
    let props: any = AppRef.toJSON();
    expect( props?.children[0]).toBe('Submit')
  }) 
});
