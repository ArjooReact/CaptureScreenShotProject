import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {CustomTextType} from './CustomTextType';
import styles from './CustomTextStyle';
const CustomText: React.FC<CustomTextType> = ({textTitle}) => {
  return <Text style={styles.fontStyle}>{textTitle}</Text>;
};
export default CustomText;
