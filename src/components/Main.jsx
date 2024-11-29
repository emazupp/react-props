import Card from "./Card";
import { posts } from "../data/posts";
import Tags from "./Tags/Tags";

const publishedPost = posts.filter((post) => post.published);

export default function Main() {
  return (
    <>
      <div className="container main">
        <Tags />
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
