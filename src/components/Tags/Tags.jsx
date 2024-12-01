import { posts } from "../../data/posts";
import style from "./Tags.module.css";

const postsTags = [];

export default function Tags() {
  posts.forEach((post) =>
    post.tags.forEach((tag) => postsTags.includes(tag) || postsTags.push(tag))
  );

  return (
    <section className={style.tagsContainer}>
      {postsTags.map((tag, index) => {
        return (
          <span key={index} className={`tag ${tag}`}>
            {tag}
          </span>
        );
      })}
    </section>
  );
}
