import "../../css/UserProfile.css";
// import { Form, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function UserProfile() {
    const userLogin = useSelector((state) => state.loginReducer);
    const { userInfo } = userLogin;

    return (
        <>
            <div className="userprofile">
                <div className="background">
                    <div className="regist">
                        <form>
                            <h3>User Information</h3>
                            <div className="regist-col">
                                <label className="regist-label">First name</label>
                                <input type="text" value={userInfo?.fname} className="regist-input" name="fname" placeholder="..." readOnly></input>
                            </div>

                            <div className="regist-col">
                                <label className="regist-label">Last name</label>
                                <input type="text" value={userInfo?.lname} className="regist-input" name="lname" placeholder="..." readOnly></input>
                            </div>

                            <div className="regist-col">
                                <label className="regist-label">E-mail</label>
                                <input type="email" value={userInfo?.email} className="regist-input" name="email" placeholder="..." readOnly></input>
                            </div>

                            <Link to="/dashboard/editprofile" className="regist-button" type="button">
                                Edit profile
                            </Link>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}
export default UserProfile;