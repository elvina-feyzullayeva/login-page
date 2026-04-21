import { api } from "../config/api";

export const loginRequest = async (username, password) => {
  const res = await api.get("/users");
  const user = res.data.find(
    (u) => u.username === username && u.password === password
  );

  if (!user) {
    throw new Error("Invalid credentials");
  }
  return user;
};