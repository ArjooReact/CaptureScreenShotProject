import { StyleSheet } from "react-native";
import Dimension from "../../utility/Dimension";
import Colors from "../../utility/Colors";
const styles=StyleSheet.create({
    previewContainer: {
        borderTopLeftRadius: Dimension.ModalBorderRadius,
        borderTopRightRadius: Dimension.ModalBorderRadius,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: Dimension.CustomButtonMarginTop,
        backgroundColor: Colors.BLACK ,
      },
})
export default styles