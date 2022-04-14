import { View, Text, StyleSheet, Pressable } from "react-native";
import React, { FC } from "react";
// import styles from "./style";
import {
  SwipeItem,
  SwipeButtonsContainer,
  SwipeProvider,
} from "react-native-swipe-item";
import MainAvatar from "../../Avatars/MainAvatar";
import PrimaryText from "../../Typography/PrimaryText";
import RoundButton from "../../Buttons/RoundButton";
import {
  BellIcon,
  BurgerIcon,
  CammeraIcon,
  CheckIcon,
  PhoneIcon,
  TrashIcon,
  VideoIcon,
} from "../../../assets/svgs";

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
        leftButtons={leftButton}
        rightButtons={rightButton}
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
              style={{ fontSize: 14, color: "rgba(0, 0, 0, 0.5)" }}
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

const leftButton = (
  <SwipeButtonsContainer
    style={{
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      height: "100%",
    }}
  >
    <RoundButton
      containerStyle={{ backgroundColor: "#0084FE" }}
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

const rightButton = (
  <SwipeButtonsContainer
    style={{
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      height: "100%",
    }}
  >
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
      containerStyle={{ marginHorizontal: 12, backgroundColor: "#FE294D" }}
      size={40}
      icon={<TrashIcon width={18} height={20} color="white" />}
    />
  </SwipeButtonsContainer>
);

const styles = StyleSheet.create({
  button: {
    height: 76,
    alignSelf: "center",
    marginVertical: 5,
    marginHorizontal: 15,
  },
  swipeContentContainerStyle: {
    backgroundColor: "#ffffff",
    flexDirection: "row",
    alignItems: "center",
    paddingRight: 10,
  },
  texts: { marginLeft: 10, flex: 1 },
});
