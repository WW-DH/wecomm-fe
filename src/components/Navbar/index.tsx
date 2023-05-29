import { Button } from "antd";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <header className="navbar">
      <div className="navbar-icon">Icon + WeComm</div>
      <div className="navbar-menu">Menu</div>
      <div className="navbar-auth">
        <div>
          <Link to={"/login"}>
            <Button type="link">로그인</Button>
          </Link>
          <Link to={"/sign-up"}>
            <Button type="link">회원가입</Button>
          </Link>
        </div>
      </div>
    </header>
  );
};
