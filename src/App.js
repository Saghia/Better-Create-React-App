import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import logo from './logo.svg';
import ContainerDev from "./components/ContainerDev.js";
import Title from "./components/Title.js";
import ImgRotate from "./components/ImgRotate";
import PCode from "./components/PCode";
import LinkGithubSaghia from "./components/LinkGithubSaghia";
const LinkGithubSaghiaVar = "https://github.com/Saghia";

function App() {
  return (
    <ContainerDev
      Title={<Title TextTitle={"Hello World!!!"}/>}
      ImgRotate={<ImgRotate img={logo} />}
      PCode={<PCode CodeText={"Int i = 0"} />}
      LinkGithubSaghia={<LinkGithubSaghia TextLink={LinkGithubSaghiaVar} />}
    />
  );
}

export default App;
