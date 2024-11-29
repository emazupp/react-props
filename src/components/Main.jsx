import Button from "./Button/Button";

export default function Main() {
  return (
    <>
      <div className="container main">
        <div className="card-container">
          <div className="card">
            <div className="card-img">
              <img src="https://picsum.photos/600/400" alt="img" />
            </div>
            <div className="card-body">
              <h3>Titolo del post</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
                explicabo illo commodi assumenda quos quas dolores quod fuga.
                Soluta quos obcaecati labore iusto neque recusandae fugiat eaque
                debitis praesentium veniam?
              </p>
              <Button />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
