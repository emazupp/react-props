import style from "./Header.module.css";
export default function Header() {
  return (
    <>
      <div className={`container ${style.header}`}>
        <h1 className="header-title">Il mio blog</h1>
      </div>
    </>
  );
}
