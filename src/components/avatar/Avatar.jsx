import "../../styles/css/Avatar.css";

function Avatar() {
  return (
    <div className="avatar-container">
      <img src="Avatar.svg" alt="avatar" className="avatar-image" />
      <p className="avatar-title">
        Norbert Madauss
        <br />
        <small className="text-muted">Junior Web-Developer</small>
      </p>
      <p className="avatar-text">
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
        voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
        clita kasd gubergren,
      </p>
    </div>
  );
}

export default Avatar;
