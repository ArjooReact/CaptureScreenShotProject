import React from 'react'
import { TouchableOpacity,SafeAreaView,Text, StyleSheet } from 'react-native'
import { CustomButtonType } from './CustomButtonType'
import styles from './CustomButtonStyles'

const CustomButton:React.FC<CustomButtonType>=({title,onClickHandler})=>{
return(<TouchableOpacity
style={styles.mainContainer}
onPress={onClickHandler}
>
    <Text style={styles.fontStyle}>{title}</Text>
</TouchableOpacity>)
}
export default CustomButton