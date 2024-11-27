import React from 'react'
import {Switch} from 'react-native'
import { CustomToggleSwitchType } from './CustomToggleSwitchType'
import Colors from '../../utility/Colors'
const CustomToggleSwitch:React.FC<CustomToggleSwitchType>=({toggleSwitch,onChange,isEnabled})=>{

    return(<Switch
        trackColor={{false: Colors.TRACK_DISABLE_COLOR, true: Colors.TRACK_ENABLE_COLOR}}
        thumbColor={isEnabled ? Colors.THUMB_ENABLE_COLOR : Colors.THUMB_DISABLE_COLOR}
        ios_backgroundColor={Colors.TOGGLE_BG_COLOR}
        onChange={onChange}
        onValueChange={toggleSwitch}
        value={isEnabled}
     >
    </Switch>)
}
export default CustomToggleSwitch