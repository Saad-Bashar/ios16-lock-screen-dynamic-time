import { StyleSheet, Text, View, ImageBackground } from "react-native";
import wallpaper from "./assets/images/wallpaper.webp";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import NotificationsList from "./src/components/NotificationList";

export default function App() {
  return (
    <ImageBackground source={wallpaper} style={StyleSheet.absoluteFill}>
      <View style={styles.header}>
        <Ionicons name="ios-lock-closed" size={20} color="white" />
        <Text style={styles.date}>Friday, 30 September</Text>
        <Text style={styles.time}>15:26</Text>
      </View>

      {/* Notification List */}
      <NotificationsList />

      {/* footer */}
      <View style={styles.footer}>
        {/* flashlight icon */}
        <View style={styles.icon}>
          <MaterialCommunityIcons name="flashlight" size={24} color="white" />
        </View>

        {/* camera icon */}
        <View style={styles.icon}>
          <Ionicons name="ios-camera" size={24} color="white" />
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "stretch",
  },
  header: {
    alignItems: "center",
    justifyContent: "center",
    height: 250,
  },
  date: {
    color: "#C3FFFE",
    fontSize: 20,
    fontWeight: "500",
    marginTop: 20,
  },
  time: {
    fontSize: 82,
    fontWeight: "bold",
    color: "#C3FFFE",
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: "auto",
    paddingVertical: 10,
    paddingHorizontal: 30,
    height: 75,
  },
  icon: {
    backgroundColor: "#00000050",
    width: 50,
    aspectRatio: 1,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 50,
  },
});
