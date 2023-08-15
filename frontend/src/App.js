import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import LandingPage from "./screens/LandingPage/LandingPage";
import { BrowserRouter, Route } from "react-router-dom";
import MyNotes from "./screens/MyNotes/MyNotes";
import LoginScreen from "./screens/LoginScreen/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen/RegisterScreen";
import CreateNote from "./screens/CreateNote/CreateNote";
import SingleNote from "./screens/SingleNote/SingleNote";
import { useState } from "react";
import ProfileScreen from "./screens/ProfileScreen/ProfileScreen";

const App = () => {
  const [search, setSearch] = useState("");

  return (
    <BrowserRouter>
      <Header setSearch={setSearch} />
      <main>
        <Route path="/" component={LandingPage} exact />
        <Route path="/login" component={LoginScreen} exact />
        <Route path="/profile" component={ProfileScreen}></Route>
        <Route path="/register" component={RegisterScreen} exact />
        <Route path="/createnote" component={CreateNote} exact />
        <Route path="/note/:id" component={SingleNote} exact />
        <Route path="/mynotes" component={() => <MyNotes search={search} />} />
      </main>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
