import { View, Text } from "react-native";
import React from "react";
import MainAvatar from "../Avatars/MainAvatar";
import PrimaryText from "../Typography/PrimaryText";
import RoundButton from "../Buttons/RoundButton";
import { CammeraIcon } from "../../assets/svgs";

const Header = () => {
  return (
    <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
      <View style={{ flexDirection: "row" }}>
        <MainAvatar size={40} />
        <PrimaryText
          value="Chat"
          style={{ fontSize: 30, fontWeight: "bold", marginLeft: 12 }}
        />
      </View>

      <RoundButton icon={<CammeraIcon width={20} height={18} />} />
    </View>
  );
};

export default Header;
