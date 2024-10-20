import React from "react";
import Menu from "../component/Menu";
import { useParams } from "react-router-dom";

const ProfilePage = () => {
  let { facebookId, youtubeId } = useParams();
  return (
    <div>
      <Menu />
      <p>Facebook: {facebookId}</p>
      <p>You-tube: {youtubeId}</p>
      <h1>This is profile page</h1>
    </div>
  );
};

export default ProfilePage;
