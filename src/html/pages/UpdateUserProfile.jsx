import "../../css/UserProfile.css";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { useNavigate } from 'react-router-dom'
import { editProfile } from "../../redux/actions/userAction";

function UpdateUserProfile() {
    const userLogin = useSelector((state) => state.loginReducer);
    const { userInfo } = userLogin;

    const [fname, setFname] = useState(userInfo?.fname);
    const [lname, setLname] = useState(userInfo?.lname);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleEditProfile = (e) => {
        e.preventDefault();
        const body = {
            fname: fname,
            lname: lname
        }
        dispatch(editProfile(body, navigate));
    }

    return (
        <>
            <div className="userprofile">
                <div className="background">
                    <div className="regist">
                        <form onSubmit={handleEditProfile}>
                            <h3>User Information</h3>
                            <div className="regist-col">
                                <label className="regist-label">First name</label>
                                <input type="text" value={fname} onChange={(e) => setFname(e.target.value)} className="regist-input" name="fname" placeholder="Enter First Name" required></input>
                            </div>

                            <div className="regist-col">
                                <label className="regist-label">Last name</label>
                                <input type="text" value={lname} onChange={(e) => setLname(e.target.value)} className="regist-input" name="lname" placeholder="Enter Last Name" required></input>
                            </div>

                            <div className="regist-col">
                                <label className="regist-label">E-mail</label>
                                <input type="email" value={userInfo?.email} style={{ backgroundColor: "rgba(0,0,0,0.1)" }} className="regist-input" name="email" placeholder="..." readOnly></input>
                            </div>

                            <button className="regist-button" type="submit">
                                Save Changes
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}
export default UpdateUserProfile;