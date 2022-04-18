import { View, Text } from "react-native";
import React, { FC } from "react";
import MainAvatar from "../../Avatars/MainAvatar";
import PrimaryText from "../../Typography/PrimaryText";
import RoundButton from "../../Buttons/RoundButton";
import { useNavigation } from "@react-navigation/native";
import {
  AddPeopleIcon,
  CammeraIcon,
  ChatWithDotsIcon,
  NewMessageIcon,
} from "../../../assets/svgs";
import styles from "./styles";

interface MainHeaderProps {
  containerStyle?: {};
  type: "People" | "Chats" | "Discover";
}

const MainHeader: FC<MainHeaderProps> = ({ containerStyle, type }) => {
  const navigation = useNavigation();
  return (
    <View>
      <View style={[styles.container, containerStyle]}>
        <View style={styles.row}>
          <MainAvatar size={40} />
          <PrimaryText value={type} style={styles.text} />
        </View>
        {type == "Chats" && (
          <View style={styles.row}>
            <RoundButton
              containerStyle={{ marginRight: 12 }}
              icon={<CammeraIcon width={20} height={18} />}
            />
            <RoundButton
              onPress={() => navigation.navigate("NewMessage")}
              icon={<NewMessageIcon width={19} height={18} />}
            />
          </View>
        )}
        {type == "People" && (
          <View style={styles.row}>
            <RoundButton
              containerStyle={{ marginRight: 12 }}
              icon={<ChatWithDotsIcon width={20} height={18} />}
            />
            <RoundButton icon={<AddPeopleIcon width={19} height={18} />} />
          </View>
        )}
      </View>
    </View>
  );
};

export default MainHeader;
