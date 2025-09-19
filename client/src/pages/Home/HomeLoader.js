export const homeLoader = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    return { data: await res.json() };
  };
