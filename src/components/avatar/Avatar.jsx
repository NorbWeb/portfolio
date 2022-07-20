import "./Avatar.css";

function Avatar() {
  return (
    <div className="avatar-container">
      <img src="Avatar.svg" alt="avatar" className="avatar-image" />
      <h5 className="avatar-title">
        Norbert Madauss
        <br />
        <small className="text-muted">Junior Web-Developer</small>
      </h5>
    </div>
  );
}

export default Avatar;
