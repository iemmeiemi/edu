import { Toolbar } from "@mui/material";
import React from "react";
import { useLoaderData } from "react-router";

export const Home = () => {
  const { data } = useLoaderData();
  console.log(data);
  return (
    <div>
      {data.map((post) => (
        <div key={post.id} className="p-4 border rounded shadow">
          <h2 className="text-xl font-semibold">{post.title}</h2>
          <p className="text-gray-700">{post.body}</p>
        </div>
      ))}
    </div>
  );
};
