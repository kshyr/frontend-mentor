import "./Profile.css";

function Profile() {
  return (
    <div className="profile">
      <div className="profile-top">
        <img src="image-jeremy.png" alt="profile-image" />
        <h5>Report for</h5>
        <h1>Jeremy Robson</h1>
      </div>
      <div className="timeframes">
        <span>Daily</span>
        <span>Weekly</span>
        <span>Monthly</span>
      </div>
    </div>
  );
}

export default Profile;
