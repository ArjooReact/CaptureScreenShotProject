import React, {useState, useEffect} from 'react';
import {View, ActivityIndicator} from 'react-native';
import {ModalViewType} from './ModalViewType';
import CustomImage from '../../atom/CustomImage/CustomImage';
import CustomToggleSwitch from '../../atom/CustomToggleSwitch/CustomToggleSwitch';
import {apiPost} from '../../network/NetworkConfig';
import CustomText from '../../atom/CustomText/CustomText';
import CustomButton from '../../atom/CustomButton/CustomButton';
import styles from './ModalViewStyles';
const ModalView: React.FC<ModalViewType> = ({
  isEnabled,
  onChange,
  uri,
  toggleSwitch,
  postData,
}) => {
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState<any>();
  const [responseTextVisible, setIsResponseTextVisible] = useState(false);
  
  useEffect(() => {}, [loading]);

  const postCall = async () => {
    setLoading(true);
    setIsResponseTextVisible(false);
    setTimeout(async () => {
      /// Enable this line when we had a orginal post Api
      //let response =await apiPost('https://www.postData/api',postData)
      let response = 'Data Posted Successfully....';
      console.log('RESPONSE......', response);
      setLoading(false);
      setResponse(response);
      setIsResponseTextVisible(true);
    }, 4000);
  };
  return (
    <View style={styles.previewContainer}>
      <CustomText textTitle={JSON.stringify(postData)}></CustomText>
      <CustomToggleSwitch
        toggleSwitch={toggleSwitch}
        onChange={onChange}
        isEnabled={isEnabled}></CustomToggleSwitch>
      <CustomText textTitle="ScreenShot Captured"></CustomText>
      {loading ? (
        <ActivityIndicator size="large" color="#00ff00"></ActivityIndicator>
      ) : null}
      {responseTextVisible ? (
        <CustomText textTitle={response}></CustomText>
      ) : null}
      <CustomImage uri={uri}></CustomImage>
      <CustomButton title="PostCall" onClickHandler={postCall}></CustomButton>
    </View>
  );
};
export default ModalView;
