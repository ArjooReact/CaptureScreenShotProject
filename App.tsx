import React from 'react';
import {useRef, useState} from 'react';
import {View} from 'react-native';
import ViewShot from 'react-native-view-shot';
import CustomToggleSwitch from './src/atom/CustomToggleSwitch/CustomToggleSwitch';
import CustomModal from './src/atom/CustomModal/CustomModal';
import CustomImage from './src/atom/CustomImage/CustomImage';
import ModalView from './src/molecule/ModalScreenView/ModalView';
import styles from './AppStyles';
import {PostDataType} from './src/molecule/ModalScreenView/ModalViewType';
import DeviceInfoHOC from './src/HOC/DeviceInfoHOC';
export interface AppType {
  title?: string;
  deficeInfoData: PostDataType;
}
const App: React.FC<AppType> = ({deficeInfoData}) => {
  const viewShot = useRef<any>(null);
  const [uri, setUri] = useState<string>('');
  //For First App Launch Crash inside useState first put true and save secondly put false and save after that it works fine
  const [isEnabled, setIsEnabled] = useState(false);
  const [isModalVisible, setModalVisible] = useState<boolean>(false);

  const captureScreen = () => {
    viewShot.current.capture().then((uri: any) => {
      setUri(uri);
    });
  };
  const onClickingToggle = async () => {
    try {
      if (!isEnabled) captureScreen();
      else setUri('');
    } catch (error: any) {
      setIsEnabled(false);
    }
  };
  const toggleSwitch = () => {
    setModalVisible(!isModalVisible);
    setIsEnabled(previousState => !previousState);
  };
  return (
    <View style={styles.container}>
      <ViewShot ref={viewShot} style={styles.viewShotStyle}>
        <CustomImage />
      </ViewShot>
      <CustomToggleSwitch
        toggleSwitch={toggleSwitch}
        onChange={onClickingToggle}
        isEnabled={isEnabled}></CustomToggleSwitch>
      {uri ? (
        <CustomModal isModalVisible={isModalVisible}>
          <ModalView
            toggleSwitch={toggleSwitch}
            onChange={onClickingToggle}
            isEnabled={isEnabled}
            postData={deficeInfoData}
            uri={uri}></ModalView>
        </CustomModal>
      ) : null}
    </View>
  );
};
export default DeviceInfoHOC(App);
