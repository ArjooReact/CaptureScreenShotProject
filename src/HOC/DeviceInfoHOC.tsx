import React, {useState, useEffect, ReactNode} from 'react';
import {PostDataType} from '../molecule/ModalScreenView/ModalViewType';
//import { requestLocationPermission } from './src/utility/LocationUtils';
//import { dummyLocation,locationTypes } from '../src/utility/LocationUtils';
import {dummyLocation, locationTypes} from '../utility/LocationUtils';
import Geolocation from '@react-native-community/geolocation';
//import { PermissionsIOS } from 'react-native';
//import { PostDataType } from './src/molecule/ModalScreenView/ModalViewType';
import DeviceInfo from 'react-native-device-info';
import publicIP from 'react-native-public-ip';
import {Platform} from 'react-native';
import { requestLocationPermission } from '../utility/LocationUtils';
import { AppType } from '../../App';
//import {getCurrent}
interface DeviceInfoType {
  title: string;
  OldComponent?:AppType
}

//const Device

const DeviceInfoHOC = (OldComponent:React.ComponentType<any>) => {

  return function EnhancedComponent(props: any) {
    const [deficeInfoData, setDeviceInfo] = useState<PostDataType>();
    const [location, setLocation] = useState<locationTypes>();
    const [deviceUid, setDeviceUid] = useState();
    const [publicIp, setPublicIp] = useState<any>();
    // const[deficeInfo,setDeviceInfo]=useState<PostDataType>()

    useEffect(() => {
      // Get the device's unique ID (IMEI on Android, IDFV on iOS)

      // Get the device's model (e.g., iPhone X, Samsung Galaxy S10)
      const deviceModel = DeviceInfo.getModel();
      console.log('Device Model:', deviceModel);
      if (Platform.OS === 'android') requestLocationPermission();
      //else  getCurrentLocation()
      getAllDeviceInfo();
    }, []);
    const getAllDeviceInfo = () => {
      setDeviceInfo({
        OS: Platform.OS,
        deviceName: DeviceInfo.getModel(),
        deviceMacAddress: '',
        IMEI: '',
        Location: {
          latitude: 0,
          longitude: 0,
        },
        publicIPAddress: '',
        screenShotStatus: 'Captured',
      });
      DeviceInfo.getUniqueId().then((uniqueId: any) => {
        console.log('Unique ID:', uniqueId);
        // deviceUID=uniqueId
        setDeviceUid(uniqueId);

        /// Setting Device Mac Address ///////
        setDeviceInfo((prevState: any) => ({
          ...prevState,
          deviceMacAddress: uniqueId,
          IMEI:uniqueId
        }));
      });
      ////// Setting Public IP Address /////////
      publicIP()
        .then(ip => {
          console.log(ip);
          // '47.122.71.234'
          setPublicIp(ip);
          setDeviceInfo((prevState: any) => ({
            ...prevState,
            publicIPAddress: ip,
          }));
        })
        .catch(error => {
          console.log(error);
          // 'Unable to get IP address.'
        });
      getCurrentLocation();
    };

    const getCurrentLocation = () => {
      Geolocation.getCurrentPosition(
        (position: any) => {
          setLocation(position.coords);
        },
        error => {
          setLocation(dummyLocation);
          setDeviceInfo((prevState: any) => ({
            ...prevState,
            Location: dummyLocation,
          }));
        },
        {
          enableHighAccuracy: true,
          timeout: 500,
          maximumAge: 100,
        },
      );
    };

    return (
      <OldComponent {...props} deficeInfoData={deficeInfoData}></OldComponent>
    );
  };
};
export default DeviceInfoHOC;
