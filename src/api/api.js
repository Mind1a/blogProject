const API_BASE = "https://680d13c3c47cb8074d8f7d52.mockapi.io";

export const fetchBlogs = async () => {
  const response = await fetch(`${API_BASE}/blogs`);

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
