import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';

const History = () => {
    const { state } = useSelector((state) => state.getQuizzesReducer);

    return (
        <>
            <div className="history">

                <Table bordered hover style={{ textAlign: "center" }}>
                    <thead>
                        <tr>
                            <th>Sr</th>
                            <th>Category</th>
                            <th>Difficulty</th>
                            <th>Type</th>
                            <th>Score</th>
                            <th>View</th>
                        </tr>
                    </thead>
                    <tbody>
                        {state?.map((arr, idx) => {
                            console.log({ arr });
                            return (
                                <>
                                    <tr>
                                        <td>{idx + 1}</td>
                                        <td>{arr?.category}</td>
                                        <td>{arr?.difficulty}</td>
                                        <td>{arr?.type}</td>
                                        <td>{arr?.score}/{arr?.total_questions}</td>
                                        {/* style={{ backgroundImage: "linear-gradient(to right, rgb(121, 121, 226), rgb(145, 35, 145))" }} */}
                                        <td><Link to={`quiz/${arr.quiz_id}`}><Button variant="primary">View Quiz</Button></Link></td>
                                    </tr>
                                </>
                            )
                        })}

                    </tbody>
                </Table>
                {/* <Link key={idx} to={`/dashboard/history/quiz/${arr?.quiz_id}`}>{arr?.quiz_id}</Link><br></br><br></br> */}

            </div>
        </>
    )
}

export default History