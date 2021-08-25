import { StyleSheet } from "react-native";

import { theme } from "../../Global/styles/theme";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.colors.principal,
        alignItems: "center",
        paddingTop: 70,
    },
    title:{
        fontFamily: theme.fonts.titulo700,
        color: theme.colors.branco,
        fontSize: 25,
    },
    botao: {
        paddingTop: 30,
    },
    botoes: {
        paddingTop: 150,
    }
});

export default styles;