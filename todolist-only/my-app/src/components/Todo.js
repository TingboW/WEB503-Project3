import React, { useState } from "react";
import '../App.css';

const Todo = ({ title, completed, removeTodoItemProp, editTodoItemProp }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [value, setValue] = useState(title);
    const [tempValue, setTempValue] = useState(title);
    const [completedState, setCompleted] = useState(completed);

    const handleDivDoubleClick = () => {
        setIsEditing(true);
    };

    const handleInputKeyDown = (e) => {
        const key = e.keyCode;

        if(key === 13) {
            editTodoItemProp({ title: tempValue });
            setValue(tempValue);
            setIsEditing(false);
        } else if(key === 27) {
            setTempValue(value);
            setIsEditing(false);
        }
    };

    const handleInputOnChange = (e) => {
        setTempValue(e.target.value);
    };

    const handleButtonClick = () => {
        setCompleted((oldCompleted) => {
            const newState = !oldCompleted;
            editTodoItemProp({ completed: newState });
            return newState;
        });
    };

    return (
        <div className="row">
            {
            isEditing ?
                <div className="column seven wide">
                    <div className="ui input fluid">
                        <input
                            onChange={handleInputOnChange}
                            onKeyDown={handleInputKeyDown}
                            autoFocus={true}
                            value={tempValue}
                        />
                    </div>
                </div> :
                <>
                    <div className="column eleven wide" onDoubleClick={handleDivDoubleClick}>
                        <h3 className={"ui header" + (completedState ? " grey" : "")}>{value}</h3>
                    </div>

                    <div className="column two wide">
                        <button
                            className={"ui button circular icon small" + (completedState ? " violet" : " green")}
                            onClick={handleButtonClick}
                        >
                            <i className="white check icon"></i>
                        </button>
                    </div>

                    <div className="column one wide">
                        <button
                            onClick={removeTodoItemProp}
                            className="ui button circular icon pink small"
                        >
                            <i className="white remove icon"></i>
                        </button>
                    </div>
                </>
            }
        </div>
    );
};

export default Todo;