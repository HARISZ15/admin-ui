export const getPosts = async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");

    if (!response.ok) {
      throw new Error(`Gagal mengambil data post: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error("[Services] Gagal mengambil data post:", error.message);
    throw error;
  }
};
