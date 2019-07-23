import axios from "axios";

const baseUrl = "http://reborn-sylvester.herokuapp.com/api";

const login = async (username, password) => {
  const response = await makeRequest("post", "/customers/authenticate", { username, password });
  console.log(response);
  return;
};

const handleResponse = response => {
  if (response.code === 0 && response.data !== undefined) {
    return response.data;
  } else if (response.code === 0 && response.data === undefined) {
    // display success message
    return response;
  } else {
    //display error message
    return response;
  }
};

const makeRequest = async (type, url, data) => {
  let response;
  switch (type) {
    case "get":
      response = await axios.get(baseUrl + url);
      break;
    case "post":
      response = await axios.post(baseUrl + url, { ...data });
      break;
    default:
      break;
  }
  if (response.status === 500) {
    // display error message
  }
  console.log(response);
  return handleResponse(response.data);
};

module.exports = { login };
