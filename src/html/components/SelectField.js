import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { handleChangeCategory, handleChangeDifficulty, handleChangeType, handleChangeAmount } from '../../redux/actions/quizAction';

const SelectField = ({ label, options }) => {
    const [value, setValue] = useState();
    const dispatch = useDispatch();
    const handleChange = (e) => {
        setValue(e.target.value);
        switch (label) {
            case 'Category':
                dispatch(handleChangeCategory(e.target.value));
                break;

            case 'Difficulty':
                dispatch(handleChangeDifficulty(e.target.value));
                break;

            case 'Type':
                dispatch(handleChangeType(e.target.value));
                break;

            case 'Amount of questions':
                dispatch(handleChangeAmount(e.target.value));
                break;

            default:
                break;
        }
    }

    return (
        <>
            <div>
                <select value={value} onChange={handleChange} required>
                    <option value="" disabled selected style={{ display: "none" }}></option>
                    {
                        options.map(({ id, name }) => {
                            return (
                                <option key={id} value={id}>{name}</option>
                            )
                        })
                    }

                </select>
                <label htmlFor="">{label}</label>
            </div>
        </>
    )
}

export default SelectField