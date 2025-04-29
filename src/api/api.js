const API_BASE = "https://680d13c3c47cb8074d8f7d52.mockapi.io";
const AUTH_BASE = "https://68110c4d3ac96f7119a36623.mockapi.io";

export const fetchBlogs = async () => {
  const response = await fetch(`${API_BASE}/blogs`);
  // https://680d13c3c47cb8074d8f7d52.mockapi.io/blogs

  if (!response.ok) {
    throw new Error("Failed to fetch Blog");
  }

  return response.json(); // blog
};

//              {title: 'dwadawd', content: 'dwadawdawdwa'}
export const createBlogs = async (newBlog) => {
  const response = await fetch(`${API_BASE}/blogs`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newBlog),
  });

  if (!response.ok) {
    throw new Error("Failed to create Blog");
  }

  return response.json();
};

//  create user                      data
export const registerUser = async (newUser) => {
  // https://680d13c3c47cb8074d8f7d52.mockapi.io/login
  const response = await fetch(`${AUTH_BASE}/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newUser),
  });

  if (!response.ok) {
    throw new Error("Failed to create User");
  }

  return response.json();
};

export const loginUser = async (credentials) => {
  // https://680d13c3c47cb8074d8f7d52.mockapi.io/login
  const response = await fetch(`${AUTH_BASE}/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(credentials),
  });

  if (!response.ok) {
    throw new Error("Failed to create User");
  }

  return response.json();
};
