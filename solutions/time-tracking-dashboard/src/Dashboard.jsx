import "./Dashboard.css";
import Profile from "./Profile";
import Card from "./Card";
function Dashboard() {
  return (
    <div className="dashboard">
      <Profile />
      <Card category="work" hours="32" lastWeek="36" />
      <Card category="play" hours="17" lastWeek="2" />
      <Card category="study" hours="10" lastWeek="1" />
      <Card category="exercise" hours="4" lastWeek="1" />
      <Card category="social" hours="1" lastWeek="0" />
      <Card category="self-care" hours="0" lastWeek="0" />
    </div>
  );
}

export default Dashboard;
