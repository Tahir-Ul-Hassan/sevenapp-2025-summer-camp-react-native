import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
  header: {
    marginTop: 50,
    paddingHorizontal: 10,
  },

  headerText: {
    fontSize: 35,
    fontWeight: "bold",
  },
  statusListingHeading: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  headerSubIconContainer: {
    flexDirection: "row",
    gap: 10,
  },
  headerSubText: {
    fontSize: 30,
    fontWeight: "bold",
  },
  statusContainer: {
    alignItems: "center",
    gap: 30,
    backgroundColor: "#f0f0f0",
    marginVertical: 10,
    borderRadius: 10,
    justifyContent: "center",
    height: 150,
    width: 100,
    marginRight: 10,
  },
});
