import { StyleSheet } from "react-native";
import { theme } from '../../Global/styles/theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  label: {
    width: "90%",
    marginTop: 20,
    fontSize: 16,
    marginLeft: 20,
    color: theme.colors.principal,
  },
  input: {
    width: "90%",
    marginTop: 10,
    padding: 10,
    height: 50,
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.principal,
    marginLeft: "auto",
    marginRight: "auto",
  },
  botaoNovaTarefa: {
    width: 60,
    height: 60,
    position: "absolute",
    bottom: 30,
    right: 20,
    backgroundColor: theme.colors.principal,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  iconButton: {
    color: theme.colors.branco,
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default styles;