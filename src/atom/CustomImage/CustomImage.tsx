import React from 'react';
import {StyleSheet, Image} from 'react-native';
import {CustomImageType} from './CustomImageType';
import styles from './CustomImageStyles';

const CustomImage: React.FC<CustomImageType> = ({uri}) => {
  if (uri) {
    return (
      <Image
        source={{uri: uri}}
        style={styles.previewImage}
        resizeMode="contain"></Image>
    );
  } else {
    return (
      <Image
        source={require('../../assets/appimage.png')}
        style={styles.previewImage2}
        resizeMode="contain"
      />
    );
  }
};


export default CustomImage;
