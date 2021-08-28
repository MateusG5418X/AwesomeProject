import { BackHandler, StyleSheet } from "react-native";
import { theme } from '../../Global/styles/theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 10,
    backgroundColor: "#fff",
  },
  title:{
    fontFamily: theme.fonts.titulo500,
    color: theme.colors.preto,
    fontSize: 25,
},
  Tarefas: {
    width: "100%",
    flexDirection: "row-reverse",
    justifyContent: "space-between",
    marginTop: 5,
  },
  apagarTarefa: {
    justifyContent: "center",
    paddingLeft: 15,
  },
  DescricaoTarefa: {
    width: "75%",
    alignContent: "flex-start",
    backgroundColor: "#f5f5f5cf",
    fontWeight: "bold",
    padding: 12,
    paddingTop: 10,
    paddingHorizontal: 20,
    borderRadius: 50,
    marginBottom: 5,
    marginRight: 15,
    marginLeft: 10,
    color: "#000",
  },
  iconButton: {
    color: theme.colors.principal,
    fontSize: 25,
    fontWeight: "bold",
  },
});

export default styles;