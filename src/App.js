import First from "./components/First";
import Footer from "./components/Footer";
import Menu from "./components/Menu";
import Second from "./components/Second";
import Content from "./components/Content";
import "./App.css"
import Sidebar from "./components/Sidebar";
export default function App() {
  return (
    <div>
     <Menu></Menu>
     <div style={{display:'flex'}}>
     <Content></Content>
     <Sidebar></Sidebar>
     </div>
     <Footer></Footer>
    </div> 
  );
}


