import { useContext } from "react";
import { Route, Router, Switch } from "react-router";
import { BrowserRouter } from "react-router-dom";
import About from "./components/about/About";
import Blogs from "./components/Blogs/Blogs";
import Contact from "./components/contact/Contact";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Intro from "./components/intro/Intro";
import ProductList from "./components/productList/ProductList";
import ProjectCollection from "./components/ProjectCollection/ProjectCollection";
import ProjectDetail from "./components/ProjectDetail/ProjectDetail";
import Toggle from "./components/toggle/Toggle";
import { ThemeContext } from "./context";

const App = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div
      style={{
        backgroundColor: darkMode ? "#222" : "white",
        color: darkMode && "white",
      }}
    >
      <BrowserRouter>
        <Header />
        <Toggle />
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/projects/:id">
            <ProjectDetail></ProjectDetail>
          </Route>
          <Route path="/blogs">
            <Blogs></Blogs>
          </Route>
          <Route path="/projects">
            <ProjectCollection />
          </Route>
        </Switch>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
};

export default App;
