export function saveUsers(users) {
  localStorage.setItem("users", JSON.stringify(users));
}

export function login(username, password, users) {
  for (let user of users) {
    if (user.username === username && user.password === password) {
      return user;
    }
  }
  return null;
}

export function loadUsers() {
  let json = localStorage.getItem("users");
  if (json === null) {
    return [];
  } else {
    return JSON.parse(json);
  }
}