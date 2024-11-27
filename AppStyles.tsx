import {StyleSheet,Dimensions} from 'react-native'
const SCREEN_WIDTH = Dimensions.get('screen').width;
const styles= StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
      viewShot: {
        width: SCREEN_WIDTH,
        height: SCREEN_WIDTH,
      },
      viewShotStyle: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: SCREEN_WIDTH,
        height: SCREEN_WIDTH,
      },
     
})
export default styles