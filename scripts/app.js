const API_URL = "http://www.dnd5eapi.co/api/";
var race = { api_response: "initial" };

function randomNum(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function callAPI(url, input, dataToEdit) {
  axios
    .get(url + input + randomNum(1, 4))
    .then(function(response) {
      console.log("dataToEdit: ", dataToEdit);
      dataToEdit.api_response = response.data; // data to edit stops referencing the parameter HERE.
      console.log("dataToEdit: ", dataToEdit);
      console.log("race: ", race);
    })
    .catch(function(error) {
      console.log("ERROR: ", error);
    });
}

callAPI(API_URL, "races/", race);
