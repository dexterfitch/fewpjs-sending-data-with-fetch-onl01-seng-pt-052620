function submitData(name, email) {
  const usersURL = "http://localhost:3000/users";
  const userData = {
    name: name,
    email: email
  };
  const usersConfig = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify(userData)
  };

  return fetch(usersURL, usersConfig)
    .then(function(resp) {
      return resp.json();
    })
    .then(function(obj) {
      console.log(obj);
    })
    .catch(function(error) {
      console.log(error.message);
  });
};
