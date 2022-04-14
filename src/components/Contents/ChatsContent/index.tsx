import { View, Text, FlatList } from "react-native";
import React from "react";
import { Slider, UsersCard, SearchBar } from "../../";
import { SearchIcon } from "../../../assets/svgs";
const ChatsContent = () => {
  return (
    <View>
      <FlatList
        ListHeaderComponent={
          <>
            <SearchBar
              containerStyle={{ marginTop: 15 }}
              icon={<SearchIcon color="#8E8E93" />}
              placeholder="Search"
            />
            <Slider />
          </>
        }
        ListHeaderComponentStyle={{ paddingBottom: 20 }}
        data={data}
        renderItem={({ item }) => (
          <UsersCard name={item.name} message={item.message} img={item.img} />
        )}
      />
    </View>
  );
};

export default ChatsContent;

const data = [
  {
    name: "Martin Randolph",
    message: "You: What’s man! · 9:40 AM",
    img: "https://www.diethelmtravel.com/wp-content/uploads/2016/04/bill-gates-wealthiest-person.jpg",
  },
  {
    name: "Karen Castillo",
    message: "You: Ok, See you in To… · Fri",
    img: "https://www.incimages.com/uploaded_files/image/1920x1080/getty_624206636_200013332000928034_376810.jpg",
  },
  {
    name: "Joshua Lawrence",
    message: "The business plan loo…  · Thu",
    img: "https://cdn.now.howstuffworks.com/media-content/0b7f4e9b-f59c-4024-9f06-b3dc12850ab7-1920-1080.jpg",
  },
];
