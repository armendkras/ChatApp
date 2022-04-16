import { View, Text, Pressable } from "react-native";
import React, { FC } from "react";
import RoundButton from "../../Buttons/RoundButton";
import PrimaryText from "../../Typography/PrimaryText";
import { PlusIcon } from "../../../assets/svgs";
import { Colors } from "../../../constants/Corlors";

interface AddStoryItemProps {
  containerStyle?: {};
}

const AddStoryItem: FC<AddStoryItemProps> = ({ containerStyle }) => {
  return (
    <Pressable style={[{ flexDirection: "row" }, containerStyle]}>
      <RoundButton disabled icon={<PlusIcon width={15} height={15} />} />
      <View style={{ marginLeft: 12 }}>
        <PrimaryText
          value="Your story"
          style={{ fontSize: 17, fontWeight: "500" }}
        />
        <PrimaryText
          value="Add to your storystory"
          style={{
            fontSize: 13,
            fontWeight: "400",
            color: Colors.LIGHT_GRAY2,
          }}
        />
      </View>
    </Pressable>
  );
};

export default AddStoryItem;
