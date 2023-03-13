const functions = require("firebase-functions");
const axios = require("axios");

exports.createChatEngineUser = functions.auth.user().onCreate((user) => {
  axios.post(
      "https://api.chatengine.io/users/",
      {
        username: user.email,
        secret: user.uid,
        email: user.email,
        first_name: user.displayName,
      },
      {headers: {"Private-Key": "a19f7c05-aa70-48da-828b-3772c67e4c25"}},
  );
});

exports.deleteChatEngineUser = functions.auth.user().onDelete((user) => {
  axios.delete("https://api.chatengine.io/users/me/", {
    headers: {
      "Project-ID": "3b0b46aa-eddb-489d-bfe1-85f86a336b72",
      "User-Name": user.email,
      "User-Secret": user.uid,
    },
  });
});
