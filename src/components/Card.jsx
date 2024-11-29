import Button from "./Button/Button";

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
        <Button />
      </div>
    </div>
  );
}
