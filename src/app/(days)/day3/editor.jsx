import {
  View,
  Text,
  StyleSheet,
  Pressable,
  SafeAreaView,
  StatusBar,
  Platform,
  TextInput,
} from "react-native";
import { Stack } from "expo-router";
import MarkdownDisplay from "@/components/day3/markdownDisplay";
import { useState } from "react";

const template = `# 🎉 Fun with Markdown!

## 🚀 Introduction
Welcome to this **fun and exciting** markdown guide! Let's dive into the world of Markdown and discover how it makes text formatting cool and easy!

## 🎈 Basics: Add Some Flair

- **Bold and Beautiful:** Make your text stand out! Use \`**\` or \`__\`. Example: **Look at me!**
- *Sassy Italics:* Add a slant with \`*\` or \`_\`. Example: *I'm leaning!*

### 🍔 Let's List Some Fun Things!

1. 🌟 Star gazing
2. 🏖 Beach parties
3. 🍕 Pizza nights

- 🎮 Video games
- 📚 Reading a good book
- 🧘 Yoga time

## 🌈 Advanced Fun

### 🖼 Adding Images and Links

A cute pic: 

![Cute Cat](https://notjustdev-dummy.s3.us-east-2.amazonaws.com/images/6.jpg)

Visit a fun site: [Fun Site](https://example.com)

### 🎶 Code Block Party

\`\`\`javascript
// JavaScript party trick
function partyTime() {
    console.log("Let's dance 💃🕺!");
}
\`\`\`

## 🎤 Conclusion
Markdown is not just for formatting; it's for having fun while expressing yourself! Keep exploring and enjoy the markdown party! 🎊

> Enjoy crafting your own fun markdown documents! 🎨🎉
`;

function MarkdownEditor() {
  const [content, setContent] = useState(template);
  const [tab, setTab] = useState("edit");

  return (
    <SafeAreaView style={styles.androidSafearea}>
      <Stack.Screen options={{ headerShown: false }} />
      <StatusBar barStyle="dark-content" />
      <View style={styles.tabContainer}>
        <Pressable
          onPress={() => setTab("edit")}
          style={[
            styles.tabs,
            tab === "edit" ? { borderColor: "#274C77" } : null,
          ]}
        >
          <Text
            style={[
              styles.tabText,
              tab === "edit" ? { color: "#274C77" } : null,
            ]}
          >
            Edit
          </Text>
        </Pressable>
        <Pressable
          onPress={() => setTab("preview")}
          style={[
            styles.tabs,
            tab === "preview" ? { borderColor: "#274C77" } : null,
          ]}
        >
          <Text
            style={[
              styles.tabText,
              tab === "preview" ? { color: "#274C77" } : null,
            ]}
          >
            Preview
          </Text>
        </Pressable>
      </View>
      {tab === "edit" ? (
        <TextInput
          style={styles.input}
          numberOfLines={40}
          multiline
          value={content}
          onChangeText={(text) => setContent(text)}
        />
      ) : (
        <MarkdownDisplay style={{ padding: 20 }}>{content}</MarkdownDisplay>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  androidSafearea: {
    flex: 1,
    backgroundColor: "whitesmoke",
    paddingVertical: Platform.OS === "android" ? 30 : 0,
    paddingHorizontal: 15,
  },
  input: {
    backgroundColor: "white",
    textAlignVertical: "top",
    flex: 1,
    padding: 20,
    paddingTop: 20,
    borderRadius: 10,
    fontSize: 16,
  },
  tabContainer: {
    flexDirection: "row",
    gap: 10,
    marginVertical: 10,
  },
  tabs: {
    flex: 1,
    padding: 10,
    borderColor: "gray",
    borderWidth: 2,
    borderRadius: 10,
    alignItems: "center",
  },
  tabText: {
    fontFamily: "InterBold",
  },
});

export default MarkdownEditor;
