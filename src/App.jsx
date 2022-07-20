import "./App.css";
import Avatar from "./components/avatar/Avatar";
import Projects from "./components/projects/Projects";

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
        <Projects />
      </div>
    </div>
  );
}

export default App;
