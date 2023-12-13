import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const History = () => {
    const { state } = useSelector((state) => state.getQuizzesReducer);

    return (
        <>
            <div className="history">
                {state?.map((arr, idx) => {
                    return (
                        <>
                            <Link key={idx} to={`/dashboard/history/quiz/${arr?.quiz_id}`}>{arr?.quiz_id}</Link><br></br><br></br>
                        </>
                    )
                })}
            </div>
        </>
    )
}

export default History