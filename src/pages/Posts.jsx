const Posts = () => {
  return (
    <div>
      <h1 className="mb-4 font-bold text-2xl">All Blog Posts</h1>
      <ul className="flex flex-col gap-4">
        <li className="bg-white shadow p-4 border rounded">
          <h2 className="font-semibold text-xl">Title</h2>
          <p className="mt-1 text-gray-700">Content</p>
          <p className="mt-2 text-gray-700 text-sm">By Test@gmail.com</p>
        </li>
      </ul>
    </div>
  );
};

export default Posts;
