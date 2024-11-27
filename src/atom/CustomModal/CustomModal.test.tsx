import renderer from 'react-test-renderer';
import {test, jest, describe} from '@jest/globals';
import {expect, it, beforeEach} from '@jest/globals';
import CustomModal from './CustomModal';
import { View } from 'react-native';
describe('all mock', () => {
  let mockButtonClick = jest.fn();
  let children=()=>{
    return<View></View>
  }
  test('testcase for matching customModal Snapshot==>', () => {
    const AppRef = renderer.create(
      <CustomModal isModalVisible={true} children={children} />,
    );
    expect(AppRef.toJSON()).toMatchSnapshot();
  });

  test('testcase for checking presence of dom element for CustomModal==>', () => {
    const AppRef = renderer.create(
        <CustomModal isModalVisible={true} children={children} />,
    );
    console.log('arzoo test======', AppRef.toJSON());
    let props: any = AppRef.toJSON();
    console.log('Arzoo data...',props)
    expect(AppRef.toJSON()).toBeTruthy();
  });

  test('testcase for checking child element for CustomButton==>', () => {
    const styles = {};
    const AppRef = renderer.create(
        <CustomModal isModalVisible={true} children={children} />,
    );
    let props: any = AppRef.toJSON();
    expect(props?.type).toBe('Modal');
  });
});
