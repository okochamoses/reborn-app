import React, { Component } from "react";
import { Modal, Text, TouchableHighlight, View, Alert, StyleSheet, Dimensions, ScrollView } from "react-native";
import Button from "../button";
import Paragraph from "../text";
const { height, width } = Dimensions.get("window");

export default class Picker extends Component {
  state = {
    modalVisible: false
  };

  setModalVisible(visible) {
    this.setState({ modalVisible: visible });
  }

  render() {
    return (
      <View style={{ marginTop: 22 }}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={this.state.modalVisible}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
          }}
        >
          <View
            style={{
              backgroundColor: "rgba(0,0,0,0.5)",
              flex: 1,
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              height: "100%"
            }}
          >
            <View style={styles.modal}>
              <View>
                <Paragraph centered bold lg white style={{ padding: 20, backgroundColor: "#252525" }}>
                  Please make a selection
                </Paragraph>
              </View>
              <ScrollView style={{ paddingHorizontal: 10 }}>
                <View style={{ padding: 10, borderBottomWidth: 1, borderBottomColor: "#e5e5e5" }}>
                  <Paragraph>Pounded Yam and efo riro</Paragraph>
                </View>
                <View style={{ padding: 10, borderBottomWidth: 1, borderBottomColor: "#e5e5e5" }}>
                  <Paragraph>Pounded Yam and efo riro</Paragraph>
                </View>
                <View style={{ padding: 10, borderBottomWidth: 1, borderBottomColor: "#e5e5e5" }}>
                  <Paragraph>Pounded Yam and efo riro</Paragraph>
                </View>
                <View style={{ padding: 10, borderBottomWidth: 1, borderBottomColor: "#e5e5e5" }}>
                  <Paragraph>Pounded Yam and efo riro</Paragraph>
                </View>
                <View style={{ padding: 10, borderBottomWidth: 1, borderBottomColor: "#e5e5e5" }}>
                  <Paragraph>Pounded Yam and efo riro</Paragraph>
                </View>
                <View style={{ padding: 10, borderBottomWidth: 1, borderBottomColor: "#e5e5e5" }}>
                  <Paragraph>Pounded Yam and efo riro</Paragraph>
                </View>
                <View style={{ padding: 10, borderBottomWidth: 1, borderBottomColor: "#e5e5e5" }}>
                  <Paragraph>Pounded Yam and efo riro</Paragraph>
                </View>
                <View style={{ padding: 10, borderBottomWidth: 1, borderBottomColor: "#e5e5e5" }}>
                  <Paragraph>Pounded Yam and efo riro</Paragraph>
                </View>
                <View style={{ padding: 10, borderBottomWidth: 1, borderBottomColor: "#e5e5e5" }}>
                  <Paragraph>Pounded Yam and efo riro</Paragraph>
                </View>
                <View style={{ padding: 10, borderBottomWidth: 1, borderBottomColor: "#e5e5e5" }}>
                  <Paragraph>Pounded Yam and efo riro</Paragraph>
                </View>
                <View style={{ padding: 10, borderBottomWidth: 1, borderBottomColor: "#e5e5e5" }}>
                  <Paragraph>Pounded Yam and efo riro</Paragraph>
                </View>
                <View style={{ padding: 10, borderBottomWidth: 1, borderBottomColor: "#e5e5e5" }}>
                  <Paragraph>Pounded Yam and efo riro</Paragraph>
                </View>
                <View style={{ padding: 10, borderBottomWidth: 1, borderBottomColor: "#e5e5e5" }}>
                  <Paragraph>Pounded Yam and efo riro</Paragraph>
                </View>
              </ScrollView>
              <View>
                <Button
                  dark
                  onPress={() => {
                    this.setModalVisible(!this.state.modalVisible);
                  }}
                  title="Done"
                />
              </View>
            </View>
          </View>
        </Modal>

        <TouchableHighlight
          onPress={() => {
            this.setModalVisible(true);
          }}
        >
          <Text>Show Modal</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  modal: {
    justifyContent: "center",
    backgroundColor: "#FFFFFF",
    height: height * 0.5,
    width: width * 0.75
  }
});
