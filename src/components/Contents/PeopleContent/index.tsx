import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { RoundButton } from "../..";
import { PlusIcon } from "../../../assets/svgs";
import PrimaryText from "../../Typography/PrimaryText";

const PeopleContent = () => {
  return (
    <TouchableOpacity style={{ marginHorizontal: 15, marginTop: 20 }}>
      <View style={{ flexDirection: "row" }}>
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
              color: "rgba(0, 0, 0, 0.5)",
            }}
          />
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default PeopleContent;
