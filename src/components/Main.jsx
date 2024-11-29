import Card from "./Card";
import { posts } from "../data/posts";
const publishedPost = posts.filter((post) => post.published);

export default function Main() {
  return (
    <>
      <div className="container main">
        <div className="card-container">
          {publishedPost.map((post) => {
            return (
              <Card
                key={post.id}
                title={post.title}
                image={post.image}
                description={post.content}
                tags={post.tags}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}
