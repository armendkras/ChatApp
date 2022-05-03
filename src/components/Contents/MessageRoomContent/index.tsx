import React from "react";
import { KeyboardAvoidingView, FlatList, Platform, View } from "react-native";
import { ChatInput, MessageItem } from "../../";
import { data } from "../../../assets/dummyData/messages";
import styles from "./style";
import {
  IsNextUser,
  IsSenderSame,
} from "../../../common/functions/messageFunctions";

const MessageRoomContent = () => {
  return (
    <>
      <KeyboardAvoidingView
        //@ts-ignore
        behavior={Platform.OS == "ios" ? "padding" : null}
        style={styles.container}
      >
        <FlatList
          showsVerticalScrollIndicator={false}
          inverted
          data={data}
          renderItem={({ item, index }) => (
            <MessageItem
              sameUser={IsSenderSame(item.id, data[index - 1]?.id)}
              nextUser={IsNextUser(item.id, data[index + 1]?.id)}
              id={item.id}
              img={item.img}
              message={item.message}
            />
          )}
          style={styles.flatList}
          contentContainerStyle={styles.containerFlatList}
        />
        <ChatInput />
      </KeyboardAvoidingView>
    </>
  );
};

export default MessageRoomContent;
