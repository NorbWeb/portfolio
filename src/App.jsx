import "./styles/css/App.css";
import Avatar from "./components/Avatar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

window.addEventListener(
  "scroll",
  () => {
    document.body.style.setProperty(
      "--scroll",
      window.pageYOffset / (document.body.offsetHeight - window.innerHeight)
    );
  },
  false
);

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <Avatar />
      </div>
      <div className="App-body">
        <Skills />
        <Projects />
      </div>
    </div>
  );
}

export default App;
