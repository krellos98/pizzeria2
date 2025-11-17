import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Pizza from "./components/Pizza";
// import Cart from "./components/Cart";
// import LoginPage from "./components/LoginPage";
// import RegisterPage from "./components/RegisterPage";

const App = () => {
  return (
    <div>
      <Navbar />
{/* <Home /> */}
<Pizza />
      <Footer />
    </div>
  );
};

export default App;
