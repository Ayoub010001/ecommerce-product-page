import profileIcon from '../assets/image-avatar.png' 

function Profile() {
  return (
    <div className="profile-box">
      <img src={profileIcon} width={54} height={54}></img>
    </div>
  );
}

export default Profile;
