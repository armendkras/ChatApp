import { View, Text } from "react-native";
import React, { FC } from "react";
import MainAvatar from "../../Avatars/MainAvatar";
import PrimaryText from "../../Typography/PrimaryText";
import RoundButton from "../../Buttons/RoundButton";
import { CammeraIcon, NewMessageIcon } from "../../../assets/svgs";
import styles from "./styles";

interface MainHeaderProps {
  containerStyle?: {};
}

const MainHeader: FC<MainHeaderProps> = ({ containerStyle }) => {
  return (
    <View style={[styles.container, containerStyle]}>
      <View style={styles.row}>
        <MainAvatar size={40} />
        <PrimaryText value="Chats" style={styles.text} />
      </View>
      <View style={styles.row}>
        <RoundButton
          containerStyle={{ marginRight: 12 }}
          icon={<CammeraIcon width={20} height={18} />}
        />
        <RoundButton icon={<NewMessageIcon width={19} height={18} />} />
      </View>
    </View>
  );
};

export default MainHeader;
