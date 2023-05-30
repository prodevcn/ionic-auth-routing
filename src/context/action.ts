export const loginUser = async (dispatch: any, loginPayload: any) => {
  const data = {
    user: { uid: "001", name: "Alice", age: 32, gender: "male" },
    auth_token: "0x888",
  };

  dispatch({
    type: "LOGIN_SUCCESS",
    payload: data,
  });
  localStorage.setItem("currentUser", JSON.stringify(data));
  return data;
};

export const logout = async (dispatch: any) => {
  dispatch({ type: "LOGOUT" });
  localStorage.removeItem("currentUser");
  localStorage.removeItem("token");
};
