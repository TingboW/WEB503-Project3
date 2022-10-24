import '../App.css';

import React, { useState, useEffect } from "react";
import todos from "../apis";
import Form from "./Form";
import Section from "./Section";
import List from "./List";

const appTitle = "My Todo List";

const TodoList = () => {
    const [todoList, setTodoList] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const { data } = await todos.get("/todos");
            setTodoList(data);
        }

        fetchData();
    }, []);

    const addTodo = async (item) => {
        const { data } = await todos.post("/todos", item);
        setTodoList((oldList) => [...oldList, data]);
    };

    const removeTodo = async (id) => {
        await todos.delete(`/todos/${id}`);
        setTodoList((oldList) => oldList.filter((item) => item._id !== id));
    };

    const editTodo = async (id, item) => {
        await todos.put(`/todos/${id}`, item);
    };

    return (
        <div className="container">

            <Section>
            <div class="heading">
                <img class="heading__img" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/756881/laptop.svg" />
                <h1 class="heading__title">{appTitle}</h1>
            </div>
            </Section>
            <Section>
                <Form addTodo={addTodo} />
            </Section>

            <Section>
                <List 
                    editTodoListProp={editTodo}
                    removeTodoListProp={removeTodo}
                    list={todoList}
                />
            </Section>
        </div>
    );
};

export default TodoList;