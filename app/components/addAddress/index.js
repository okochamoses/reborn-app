import React, { Component } from "react";
import {
  Modal,
  Text,
  TouchableHighlight,
  View,
  Alert,
  StyleSheet,
  Dimensions,
  ScrollView,
  FlatList
} from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import Button from "../button";
import Paragraph from "../text";
const { height, width } = Dimensions.get("window");

export default class Picker extends Component {
  state = {
    modalVisible: false,
    checkmark: "",
    selected: {}
  };

  setModalVisible(visible) {
    this.setState({ modalVisible: visible });
  }

  renderIcon(id) {
    this.state.checkmark == id ? (
      <View>
        <Icon name="check" size={20} color="green" />
      </View>
    ) : null;
  }

  render() {
    return (
      <View style={{ marginTop: 22 }}>
        <Modal animationType="slide" transparent={true} visible={this.state.modalVisible}>
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
                <FlatList
                  data={this.props.list}
                  keyExtractor={item => item._id}
                  renderItem={({ item }) => (
                    <TouchableHighlight
                      style={{ padding: 10, borderBottomWidth: 1, borderBottomColor: "#e5e5e5" }}
                      onPress={() => {
                        this.setModalVisible(!this.state.modalVisible);
                        this.setState({ selected: item });
                      }}
                    >
                      <View style={{ flexDirection: "row", flex: 1, justifyContent: "space-between" }}>
                        <View>
                          <Paragraph>{item.name}</Paragraph>
                        </View>
                      </View>
                    </TouchableHighlight>
                  )}
                />
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

        <Paragraph bold>{this.props.title}</Paragraph>
        <TouchableHighlight
          onPress={() => {
            this.setModalVisible(true);
          }}
        >
          <View
            style={{
              borderBottomColor: "#9e9e9e",
              borderBottomWidth: 1,
              height: 40,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              width: "100%"
            }}
          >
            <Text style={{ textAlign: "left", paddingHorizontal: 20, fontFamily: "Montserrat-Regular" }}>
              {this.state.selected.name}
            </Text>
            <Icon name="chevron-down" size={24} />
          </View>
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
