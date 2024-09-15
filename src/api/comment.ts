export const fetchComments = async (postId: number) => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`);
    return response.json();
  };