import { Platform } from "react-native"
import { colors } from "./colors"

export const defaultStyles: any = {
  colors,
  text: {
    color: colors.dark,
    fontSize: 18,
    fontFamily: Platform.OS === 'android' ? 'Roboto' : 'Avenir',
  },
};

