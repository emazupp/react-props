import { posts } from "../data/posts";

const postsTags = [];

export default function Tags() {
  posts.forEach((post) =>
    post.tags.forEach((tag) => postsTags.includes(tag) || postsTags.push(tag))
  );

  console.log(postsTags);
}
