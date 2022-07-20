import "./Projects.css";

function projects() {
  const count = [{ name: "Project 1" }, { name: "Project 2" }, { name: "Project 3" }];

  return (
    <div className="projects-container">
      {count.map((element) => (
        <div key={element.name} className="card">
          <img src="logo192.png" className="card-img-top" alt="test1" />
          <div className="card-body">
            <h5 className="card-title">{element.name}</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default projects;
