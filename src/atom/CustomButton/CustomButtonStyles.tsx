import {StyleSheet} from 'react-native';
import Colors from '../../utility/Colors';
import Dimension from '../../utility/Dimension';
const styles = StyleSheet.create({
  mainContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: Dimension.CustomButtonWidth,
    height: Dimension.CustomButtonHeight,
    backgroundColor: Colors.SKY_BLUE,
    borderRadius: Dimension.BorderRadius,
    marginTop: Dimension.CustomButtonMarginTop,
  },
  fontStyle: {
    fontSize: Dimension.FontSize,
    color: Colors.WHITE,
    fontWeight: 'bold',
  },
});

export default styles;
