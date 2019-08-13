import React, { Component } from "react";
import { View, Text, TextInput } from "react-native";
import styles from "./style";

export default class FormInput extends Component {
  constructor(props) {
    this.props = props;
    this.state = {};
  }

  render() {
    return (
      <View>
        <View>
          <Text style={styles.placeholder}>{this.props.placeholder}</Text>
        </View>
        <View>
          <TextInput style={styles.input} placeholder={this.props.placeholder} />
        </View>
      </View>
    );
  }
}
