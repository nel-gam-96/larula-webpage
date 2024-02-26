/* eslint-disable import/no-anonymous-default-export */
import theme from "../theme";

export default {
  baseStyle: ({ theme }) => ({
    color: theme.colors.main.black,
    fontSize: "14px",
    fontFamily: "Open Sans",
    fontWeight: "300",
  }),
  variants: {
    smallButton: {
      color: "white",
      fontSize: "12px",
    },
    button: ({ theme }) => ({
      background: theme.colors.main.red,
      display: "inline-block",
      borderRadius: "12px",
      color: "white",
      textAlign: "center",
      padding: "4px 8px",
      border: "2px solid rgb(217, 20, 80)",
      textTransform: "uppercase",
      width: "150px",
      margin: "10px",
    }),
    sectionTitle: {
      fontFamily: "Open Sans",
      fontWeight: "600",
      fontSize: "50px",
      lineHeight: "1em",
      margin: "10px auto",
    },
    sectionTitleMobile: {
      fontFamily: "Open Sans",
      fontWeight: "600",
      fontSize: "23px",
      lineHeight: "1em",
      margin: "10px auto",
    },
    kitTitle: {
      fontFamily: "Open Sans",
      lineHeight: "32px",
      fontWeight: "bold",
      fontSize: "40px",
      marginBottom: "16px",
      letterSpacing:"-1.5px"
    },
    kitParraph: {
      fontFamily: "Open Sans",
      lineHeight: "21px",
      fontWeight: "400",
      fontSize: "16px",
      marginBottom: "16px",
    },
  },
};
