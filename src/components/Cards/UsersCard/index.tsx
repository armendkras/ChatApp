import { View, Text, StyleSheet, Pressable } from "react-native";
import React, { FC } from "react";
// import styles from "./style";
import { SwipeItem, SwipeProvider } from "react-native-swipe-item";
import MainAvatar from "../../Avatars/MainAvatar";
import PrimaryText from "../../Typography/PrimaryText";
import { CheckIcon } from "../../../assets/svgs";
import styles from "./style";
import LeftButton from "./LeftButton";
import RightButton from "./RightButton";
import { Colors } from "../../../constants/Corlors";

interface UsersCardProps {
  name: string;
  message: string;
  img?: string;
}

const UsersCard: FC<UsersCardProps> = ({ name, message, img }) => {
  return (
    <SwipeProvider>
      <SwipeItem
        style={styles.button}
        // swipeContainerStyle={}
        leftButtons={LeftButton}
        rightButtons={RightButton}
      >
        <Pressable
          style={styles.swipeContentContainerStyle}
          onPress={() => console.log("pressed")}
        >
          <MainAvatar img={img} />
          <View style={styles.texts}>
            <PrimaryText
              style={{ fontSize: 17, fontWeight: "500" }}
              value={name}
            />
            <PrimaryText
              style={{ fontSize: 14, color: Colors.LIGHT_GRAY2 }}
              value={message}
            />
          </View>
          <CheckIcon width={16} height={16} />
        </Pressable>
      </SwipeItem>
      {/* <SwipeItem>...</SwipeItem> */}
    </SwipeProvider>
  );
};

export default UsersCard;
