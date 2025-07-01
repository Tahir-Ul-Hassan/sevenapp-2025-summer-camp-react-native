import { View, Text } from "react-native";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import Entypo from "@expo/vector-icons/Entypo";
import Ionicons from "@expo/vector-icons/Ionicons";
import IconContainer from "../../components/iconContainer";
import { styles } from "./styles";

export default function WhatsappStatus() {
  return (
    <View>
      <View style={styles.header}>
        <IconContainer
          icon={
            <MaterialCommunityIcons
              name="dots-horizontal"
              size={30}
              color="black"
            />
          }
        />
        <Text style={styles.headerText}>Updates</Text>

        <View style={styles.statusListing}>
          <View style={styles.statusListingHeading}>
            <Text style={styles.headerSubText}>Status</Text>
            <View style={styles.headerSubIconContainer}>
              <IconContainer
                icon={<Entypo name="camera" size={24} color="black" />}
              />
              <IconContainer
                icon={<Ionicons name="pencil" size={24} color="black" />}
              />
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}
