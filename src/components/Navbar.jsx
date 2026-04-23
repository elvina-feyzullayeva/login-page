import { Layout, Menu, Button } from "antd";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
const { Header } = Layout;

const Navbar = () => {
  const navigate = useNavigate()
  const { user, loading, error } = useSelector((state) => state.user)
  return (
    <div className="bg-blue-300 px-10 py-2">
      <Header className="flex justify-between">
        <div className="text-cyan-950 font-bold">
          {user? "Dashboard": "MyApp" }
        </div>
        <Button type="primary" className="bg-[#3879e9] " onClick={(e) => {
          navigate('/login')
        }} >{user ? 'Logout' : 'Login'}</Button>
      </Header>
    </div>
  );
};

export default Navbar;