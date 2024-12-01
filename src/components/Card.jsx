import Button from "./Button/Button";
import { posts } from "../data/posts";

export default function Card({ title, image, description, tags }) {
  const defaultImage = "https://picsum.photos/600/400";
  return (
    <div className="card">
      <div className="card-img">
        <img src={image || defaultImage} alt="img" />
      </div>
      <div className="card-body">
        {title && <h3>{title}</h3>}
        {description && <p>{description}</p>}
      </div>
      <div className="card-footer">
        <Button />
        <div className="tags">
          {tags.map((tag, index) => (
            <span key={index} className={`tag ${tag}`}>
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
