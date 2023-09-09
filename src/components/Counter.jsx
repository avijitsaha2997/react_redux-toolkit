import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, fetchPosts, increment } from "../features/counterslice";

function Counter() {
  const { count, posts } = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  const incrementHandler = () => {
    dispatch(increment());
  };

  const decrementHandler = () => {
    dispatch(decrement(4));
  };

  const fetchPost = () => {
    dispatch(fetchPosts());
  };

  useEffect(() => {}, []);

  return (
    <div className="p-4 h-auto flex flex-col items-center justify-center space-y-5 bg-white rounded shadow">
      <div className="text-2xl font-semibold">{count}</div>

      <div className="flex space-x-3">
        <button
          onClick={incrementHandler}
          className="bg-indigo-400 text-white px-3 py-2 rounded shadow">
          Increment
        </button>
        <button
          onClick={decrementHandler}
          className="bg-red-400 text-white px-3 py-2 rounded shadow">
          Decrement
        </button>
      </div>
      <h3
        onClick={fetchPost}
        className="bg-yellow-500 p-2 rounded-md text-white">
        Fetch Data
      </h3>
      <div>
        Fetch posts:
        <div>
          {posts.map((post) => (
            <h1 key={Math.random()}>{post.title}</h1>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Counter;
