import picture from "../assets/profile.jpg"

export default function ProfilePicture () {
    return (
        <div>
            <img className="profile" src={picture} alt="" />
        </div>
    )
}