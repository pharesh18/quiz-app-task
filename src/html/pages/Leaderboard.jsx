import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Form from 'react-bootstrap/Form';
import '../../css/Leaderboard.css';
import Table from 'react-bootstrap/Table';
import { getLeaderboardData } from '../../redux/actions/quizAction';
import Loader from './Loader';
import Error from './Error';
import Load from './Load';

const Leaderboard = () => {
    const { loading, error, state } = useSelector(state => state.getLeaderboardDataReducer);
    const [category, setCategory] = useState("General Knowledge");
    const [difficulty, setDifficulty] = useState("All");
    const [type, setType] = useState("multiple");

    console.log(state);
    const dispatch = useDispatch();

    const categoryOptions = [
        { id: 'General Knowledge', name: 'General Knowledge' },
        { id: 'Geography', name: 'Geography' },
        { id: 'History', name: 'History' },
        { id: 'Art', name: 'Art' },
    ];

    const dificultyOptions = [
        { id: 'All', name: 'All' },
        { id: 'easy', name: 'Easy' },
        { id: 'medium', name: 'Medium' },
        { id: 'hard', name: 'Hard' },
    ]

    const typeOptions = [
        { id: 'multiple', name: "Multiple choice" },
        { id: "boolean", name: "True/False" }
    ]

    const handleChangeCategory = (e) => {
        setCategory(e.target.value);
    }

    const handleChangeDifficulty = (e) => {
        setDifficulty(e.target.value);
    }

    const handleChangeType = (e) => {
        setType(e.target.value);
    }

    useEffect(() => {
        const body = {
            category: category,
            difficulty: difficulty,
            type: type,
        }
        dispatch(getLeaderboardData(body));
    }, [category, difficulty, type, dispatch]);

    return (
        <>
            {
                loading && <Load />
            }
            {
                error && <Error error={error} />
            }
            <div className="leaderboard">
                <h3>Leaderboard</h3>

                <div className="leaderboard-header">
                    <div className="select">
                        <label htmlFor="">Category</label>
                        <Form.Select aria-label="Default select example" onChange={handleChangeCategory} style={{ width: "350px" }}>
                            {
                                categoryOptions.map(({ id, name }) => {
                                    return (
                                        <option key={id} value={id}>{name}</option>
                                    )
                                })
                            }
                        </Form.Select>
                    </div>
                    <div className="select">
                        <label htmlFor="">Difficulty</label>
                        <Form.Select aria-label="Default select example" onChange={handleChangeDifficulty} style={{ width: "250px" }}>
                            {
                                dificultyOptions.map(({ id, name }) => {
                                    return (
                                        <option key={id} value={id}>{name}</option>
                                    )
                                })
                            }
                        </Form.Select>
                    </div>
                    <div className="select">
                        <label htmlFor="">Type</label>
                        <Form.Select aria-label="Default select example" onChange={handleChangeType} style={{ width: "250px" }}>
                            {
                                typeOptions.map(({ id, name }) => {
                                    return (
                                        <option key={id} value={id}>{name}</option>
                                    )
                                })
                            }
                        </Form.Select>
                    </div>
                </div>

                <div className="leaderboard-list">
                    {state?.length > 0 ? (
                        <>
                            <Table bordered hover style={{ textAlign: "center" }}>
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Email</th>
                                        <th>Category</th>
                                        <th>Difficulty</th>
                                        <th>Type</th>
                                        <th>Score</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {state?.map((arr, idx) => {
                                        return (
                                            <>
                                                <tr>
                                                    <td style={{ textTransform: "capitalize" }}>{`${arr?.fname} ${arr?.lname}`}</td>
                                                    <td>{arr?.email}</td>
                                                    <td style={{ textTransform: "capitalize" }}>{arr?.category}</td>
                                                    <td style={{ textTransform: "capitalize" }}>{arr?.difficulty}</td>
                                                    <td style={{ textTransform: "capitalize" }}>{arr?.type}</td>
                                                    <td>{arr?.score}/{arr?.total_questions}</td>
                                                </tr>
                                            </>
                                        )
                                    })}

                                </tbody>
                            </Table>
                        </>
                    ) : (
                        state?.length === 0 ? (
                            <>
                                <div style={{ fontSize: "30px" }}>No Data Found</div>
                            </>
                        ) : null
                    )}
                </div>
            </div>
        </>
    )
}

export default Leaderboard