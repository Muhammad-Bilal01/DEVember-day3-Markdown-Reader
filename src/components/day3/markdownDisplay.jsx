import { ScrollView, StyleSheet } from "react-native";
import Markdown from "react-native-markdown-display";

function MarkdownDisplay({ children }) {
  return (
    <ScrollView style={styles.page}>
      <Markdown style={markdownStyle}>{children}</Markdown>
    </ScrollView>
  );
}

const markdownStyle = StyleSheet.create({
  heading1: {
    fontFamily: "InterBlack",
    color: "#212020",
    marginTop: 15,
    marginBottom: 10,
    lineHeight: 40,
  },
  heading2: {
    fontFamily: "InterBold",
    color: "#404040",
    marginTop: 10,
    marginBottom: 5,
    lineHeight: 30,
  },
  body: {
    fontSize: 16,
    // fontFamily: 'Inter',
    lineHeight: 24,
  },
  code_inline: {
    backgroundColor: "red",
  },
  code_block: {
    backgroundColor: "red",
  },
});

const styles = StyleSheet.create({
  page: {
    backgroundColor: "white",
    padding: 15,
    borderRadius: 20,
  },
});

export default MarkdownDisplay;
