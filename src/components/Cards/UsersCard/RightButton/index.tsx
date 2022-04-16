import { View, Text } from "react-native";
import React from "react";
import { SwipeButtonsContainer } from "react-native-swipe-item";
import RoundButton from "../../../Buttons/RoundButton";
import { TrashIcon, BurgerIcon, BellIcon } from "../../../../assets/svgs";
import styles from "./style";
import { Colors } from "../../../../constants/Corlors";

let RightButton = (
  <SwipeButtonsContainer style={styles.container}>
    <RoundButton
      icon={<BurgerIcon width={18} height={14} />}
      containerStyle={{ marginLeft: 12 }}
    />
    <RoundButton
      containerStyle={{ marginLeft: 12 }}
      size={40}
      icon={<BellIcon width={18} height={20} />}
    />
    <RoundButton
      containerStyle={{ marginHorizontal: 12, backgroundColor: Colors.RED }}
      size={40}
      icon={<TrashIcon width={18} height={20} color="white" />}
    />
  </SwipeButtonsContainer>
);

export default RightButton;
