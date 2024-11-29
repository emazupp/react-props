import Button from "./Button/Button";

export default function Card({ title, image, description, tags }) {
  return (
    <div className="card">
      <div className="card-img">
        <img src={image || "https://picsum.photos/600/400"} alt="img" />
      </div>
      <div className="card-body">
        <h3>{title}</h3>
        <p>{description}</p>
        <Button />
      </div>
    </div>
  );
}
