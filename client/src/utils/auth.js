const isLoggedIn = () => {
  return !!localStorage.getItem('token');
};

const getToken = () => {
  return localStorage.getItem('token');
};

const setToken = (token) => {
  localStorage.setItem('token', token);
};

const removeToken = () => {
  localStorage.removeItem('token');
};
const getUserId = () => {
  const token = getToken();
  
  if (!token) return null;

  const payload = JSON.parse(atob(token.split('.')[1]));
  return payload.userId;
};

const getUserEmail = () => {
  const token = getToken();
  if (!token) return null;

  const payload = JSON.parse(atob(token.split('.')[1]));
  return payload.email;
};

const getUserName = () => {
  const token = getToken();
  if (!token) return null;

  const payload = JSON.parse(atob(token.split('.')[1]));
  return payload.name;
};

const getUserRole = () => {
  const token = getToken();
  if (!token) return null;

  const payload = JSON.parse(atob(token.split('.')[1]));
  return payload.role;
};

export {
  isLoggedIn,
  getToken,
  setToken,
  removeToken,
  getUserId,
  getUserEmail,
  getUserName,
  getUserRole
};