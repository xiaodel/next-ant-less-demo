import Link from "next/link";

export default (props) => {
  return (
    <header className="header">
      <div>头部</div>
      <Link href="/map">
        <a>map</a>
      </Link>
      {props.children}
    </header>
  );
};
