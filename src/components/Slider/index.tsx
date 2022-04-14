import { View, Text, TouchableHighlight } from "react-native";
import React from "react";
import { SliderItem } from "../";
import { FlatList } from "react-native-gesture-handler";

const Slider = () => {
  const data = [
    { name: "", type: "add", active: false },
    { name: "Joshua", type: "", active: true },
    { name: "Martin", type: "", active: false },
    { name: "Karen", type: "", active: true },
    { name: "Martha", type: "", active: false },
    { name: "Martin", type: "", active: false },
    { name: "Karen", type: "", active: true },
    { name: "Martha", type: "", active: true },
  ];
  return (
    <View>
      <FlatList
        style={{ marginTop: 20 }}
        showsHorizontalScrollIndicator={false}
        data={data}
        horizontal
        renderItem={({ item }) => (
          <SliderItem
            add={item.type == "add"}
            name={item.name}
            active={item.active}
            containerStyle={{ marginRight: 20 }}
          />
        )}
      />
    </View>
  );
};

export default Slider;
