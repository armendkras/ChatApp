import { View, Text } from "react-native";
import React from "react";
import { SwipeButtonsContainer } from "react-native-swipe-item";
import RoundButton from "../../../Buttons/RoundButton";
import { CammeraIcon, PhoneIcon, VideoIcon } from "../../../../assets/svgs";
import styles from "./style";
import { Colors } from "../../../../constants/Corlors";

let LeftButton = (
  <SwipeButtonsContainer style={styles.container}>
    <RoundButton
      containerStyle={{ backgroundColor: Colors.BLUE }}
      icon={<CammeraIcon width={20} height={20} color="white" />}
    />
    <RoundButton
      containerStyle={{ marginLeft: 12 }}
      size={40}
      icon={<PhoneIcon width={18} height={18} />}
    />
    <RoundButton
      containerStyle={{ marginHorizontal: 12 }}
      size={40}
      icon={<VideoIcon width={22} height={14} />}
    />
  </SwipeButtonsContainer>
);

export default LeftButton;
