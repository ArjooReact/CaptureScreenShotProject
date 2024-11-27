import React from 'react';
import 'react-native';
import {PostDataType} from '../src/molecule/ModalScreenView/ModalViewType';
import renderer from 'react-test-renderer';
import {test, jest, describe} from '@jest/globals';
import {expect} from '@jest/globals';
import App from '../App';

jest.mock('react-native-view-shot', () => {
  return {
    capture: jest.fn().mockResolvedValue('mocked-uri'),
  };
});

jest.mock('@react-native-community/geolocation', () => ({
  getCurrentPosition: jest.fn().mockImplementation((success: any, error) => {
    success({coords: {latitude: 37.7749, longitude: -122.4194}});
  }),
}));

jest.mock('react-native-device-info', () => ({
  getModel: jest.fn().mockReturnValue('iPhone 12'),
  getUniqueId: jest.fn().mockResolvedValue('mocked-unique-id'),
}));

jest.mock('react-native-public-ip', () => ({
  default: jest.fn().mockResolvedValue('192.168.1.1'),
}));
import CustomToggleSwitch from '../src/atom/CustomToggleSwitch/CustomToggleSwitch';
jest.mock(
  '../src/atom/CustomToggleSwitch/CustomToggleSwitch',
  () => 'CustomToggleSwitch',
);
jest.mock('../src/atom/CustomImage/CustomImage', () => 'CustomImage');
jest.mock('../src/atom/CustomModal/CustomModal', () => 'CustomModal');
jest.mock('../src/molecule/ModalScreenView/ModalView', () => 'ModalView');

describe('App Component', () => {
  let wrapper: any;

  //const mockDeviceInfoData = { device: 'mocked-device' };
  const deficeInfoData: PostDataType = {
    OS: 'Android',
    deviceName: 'Pixel 4',
    deviceMacAddress: '00:11:22:33:44:55',
    IMEI: '123456789012345',
    Location: {latitude: 37.7749, longitude: -122.4194},
    publicIPAddress: '192.168.1.1',
    screenShotStatus: 'Captured',
  };
  test('testcase for matching customToggleSwitch Snapshot==>', () => {
    const AppRef = renderer.create(<App deviceInfoData={deficeInfoData} />);
    expect(AppRef.toJSON()).toMatchSnapshot();
  });
});
