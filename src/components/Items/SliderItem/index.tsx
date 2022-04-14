import { View, Text } from "react-native";
import React, { FC } from "react";
import MainAvatar from "../../Avatars/MainAvatar";
import PrimaryText from "../../Typography/PrimaryText";
import styles from "./style";
import { PlusIcon } from "../../../assets/svgs";
import { TouchableOpacity } from "react-native-gesture-handler";

interface SliderItemProps {
  containerStyle: {};
  add: boolean;
  name: string;
  active: boolean;
}

const SliderItem: FC<SliderItemProps> = ({
  containerStyle,
  add,
  name,
  active,
}) => {
  return add ? (
    <TouchableOpacity
      style={[styles.center, { marginLeft: 20 }, containerStyle]}
    >
      <View style={styles.addContainer}>
        <PlusIcon width={20} height={20} />
      </View>
      <PrimaryText style={styles.text} value="Your story" />
    </TouchableOpacity>
  ) : (
    <TouchableOpacity style={[styles.center, containerStyle]}>
      <MainAvatar size={52} active={active} />
      <PrimaryText style={styles.text} value={name} />
    </TouchableOpacity>
  );
};

export default SliderItem;
