import { StyleSheet } from "react-native";
import Colors from "../../utility/Colors";
import Dimension from "../../utility/Dimension";
const styles=StyleSheet.create({
    previewImage2: {
        width: Dimension.PreviewImage2Dimen,
        height: Dimension.PreviewImage2Dimen,
        backgroundColor: Colors.WHITE,
        borderRadius: Dimension.ImageBorderRadius,
      },
      previewImage: {
        width: Dimension.PreviewImageDimen, 
        height: Dimension.PreviewImageDimen, 
        backgroundColor: Colors.WHITE
      },
})

export default styles