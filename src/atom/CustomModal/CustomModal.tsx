import React from 'react'
import {StyleSheet,Modal} from 'react-native'
import { CustomModalType } from './CustomModalType'
import styles from './CustomModalStyles'
const CustomModal:React.FC<CustomModalType>=({isModalVisible,children})=>{
    return(<Modal
        animationType='slide'
        style={styles.modalStyle}
        visible={isModalVisible}
        >
     {children}
    </Modal>)
}
export default CustomModal