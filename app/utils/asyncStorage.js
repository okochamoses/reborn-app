import AsyncStorage from "@react-native-community/async-storage";

exports.storeData = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, value);
  } catch (e) {
    // saving error
    console.log(`Error saving ${key}`, e);
  }
};

exports.getData = async key => {
  try {
    const value = await AsyncStorage.getItem(key);
    if (value !== null) {
      return value;
    }
    return null;
  } catch (e) {
    console.log(`Error getting ${key}`);
  }
};
