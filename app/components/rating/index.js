import React, { Component } from "react";
import { View } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

export default class Rating extends Component {
  constructor(props) {
    super(props);
    this.state = { stars: [] };
    this.deselectedColor = "#ececec";
    this.selectedColor = "#060606";
  }

  generateStars = value => {
    let st = [];
    for (let i = 0; i < 5; i++) {
      const color = i < value ? this.selectedColor : this.deselectedColor;
      st.push(<Icon name="star" key={i} color={color} size={40} value={i} onPress={() => this.generateStars(i + 1)} />);
    }
    this.setState({ stars: st });
  };

  setRating = value => {
    props.value = value;
  };
  render() {
    return (
      <View style={{ flexDirection: "row", justifyContent: "space-around", paddingHorizontal: 30 }}>
        {this.state.stars.length === 0 ? this.generateStars(0) : this.state.stars}
      </View>
    );
  }
}
