import "../../css/UserProfile.css";
// import { Form, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function UserProfile() {
    const userLogin = useSelector((state) => state.loginReducer);
    const { userInfo } = userLogin;

    return (
        <>
            {/* <div className="personal-info">
                <div className="info"><div className="edit-icon">
                    <h3 className="dash-head">User Information</h3>
                    <Link to="/Dashboard/Editprofile" style={{ color: "rgb(49, 49, 49)" }} className="edit"><i class="fas fa-edit"></i></Link></div>

                    <Form className="read">
                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="formGridEmail">
                                <Form.Label>First Name</Form.Label>
                                <Form.Control type="text" placeholder="..." value={userInfo?.fname} style={{ backgroundColor: 'white' }} readOnly />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridPassword">
                                <Form.Label>Last Name</Form.Label>
                                <Form.Control type="text" placeholder="..." value={userInfo?.lname} style={{ backgroundColor: 'white' }} readOnly />
                            </Form.Group>
                        </Row>

                        <Form.Group className="mb-3" controlId="formGridAddress1">
                            <Form.Label>Address</Form.Label>
                            <Form.Control as="textarea" type="text" value={userInfo?.address ? userInfo.address : ''} style={{ width: "90%", backgroundColor: 'white' }} placeholder="...." readOnly />
                        </Form.Group>

                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="formGridCity">
                                <Form.Label>City</Form.Label>
                                <Form.Control type="text" placeholder="..." value={userInfo?.city ? userInfo.city : ''} style={{ backgroundColor: 'white' }} readOnly />

                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridCity">
                                <Form.Label>Pincode</Form.Label>
                                <Form.Control type="text" placeholder="..." value={userInfo?.pincode ? userInfo.pincode : ''} style={{ backgroundColor: 'white' }} readOnly />

                            </Form.Group>
                        </Row>

                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="formGridEmail">
                                <Form.Label >College Name</Form.Label>
                                <Form.Control type="text" placeholder="..." value={userInfo?.college ? userInfo.college : ''} style={{ backgroundColor: 'white' }} readOnly />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridPassword">
                                <Form.Label >Course Name</Form.Label>
                                <Form.Control type="text" placeholder="..." value={userInfo?.course ? userInfo.course : ''} style={{ backgroundColor: 'white' }} readOnly />
                            </Form.Group>
                        </Row>
                    </Form>
                </div>

            </div> */}

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

                            <Link to="/editprofile" className="regist-button" type="button">
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