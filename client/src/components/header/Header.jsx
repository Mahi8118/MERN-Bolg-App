import "./header.css";

export default function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm">React & Node</span>
        <span className="headerTitleLg">Blog</span>
      </div>
      <img
        className="headerImg"
        src="https://images.pexels.com/photos/2569170/pexels-photo-2569170.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
        alt=""
      />
    </div>
  );
}
