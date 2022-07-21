import "../styles/css/Skills.css";

function Skills() {
  const skillSet = [
    {
      name: "Javascript",
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/640px-Unofficial_JavaScript_logo_2.svg.png",
    },
  ];
  return (
    <div className=" skills-container">
      {skillSet.map((element) => (
        <div key={element.name} className="card-skills">
          <h5 className="card-title">{element.name}</h5>
          <img src={element.img} className="skill-img" alt={element.name} />
        </div>
      ))}
    </div>
  );
}
export default Skills;
