import {useRef, useState} from "react";
import UpdateForm from "./UpdateForm";
import Todo from "./Todo";

import("../../assets/css/todolist.css")

export default function Todolist() {
    const [todos, setTodos] = useState([['tâche exemple', false]]); //a todo is composed with 1 description and a boolean to tell if the todo needs to be updated
    const newtodo = useRef(null);

    const handleForm = (e) => {
        e.preventDefault();
        //ajouter une todo
        setTodos([...todos, [newtodo.current.value, false]]);
        newtodo.current.value = '';
        newtodo.current.focus();
    }

    const handleUpdated = (e) => {
        e.preventDefault();
        let newTodos = todos.slice();
        newTodos[e.target[0].value] = [e.target[1].value, false];
        setTodos(newTodos);
    }

    const handleUpdate = (e) => {
        e.preventDefault();
        let newTodos = todos.slice();
        newTodos[e.target[0].value] = [newTodos[e.target[0].value][0], true];
        setTodos(newTodos);
    }

    const handleThrough = (e) => {
        e.preventDefault();
        const article = e.target.parentElement.parentElement.children[0];
        if (article.classList.contains('line-through')) {
            article.classList.remove('line-through');
        } else {
            article.classList.add('line-through');
        }
    }

    const handleDelete = (e) => {
        e.preventDefault();
        let newTodos = todos.slice();
        newTodos.splice(parseInt(e.target[0].value), 1);
        setTodos(newTodos);
        e.target.parentElement.classList.remove('line-through');
    }

    return (
        <section className="columns">
            <div className="column has-text-centered">
                <form onSubmit={(event) => handleForm(event)} className="my-3 is-flex">
                    <input type="text" name="todo" id="todo" placeholder="Nouvelle tâche"
                           className="input is-primary mr-3" ref={newtodo}/>
                    <input type="date" name="" id="" />
                    <input type="submit" value="Ajouter" className="button is-primary"/>
                </form>
                <h2 className="title">Liste de tâche</h2>
                <div>
                    {todos.map((todo, key) => {
                        if (todo[1]) { 
                            return <UpdateForm handleUpdated={(e) => handleUpdated(e)} index={key} key={key} todo={todo} />
                        } else {
                            return (
                                <Todo key={key} id={key} todo={todo} handleUpdate={handleUpdate}
                                      handleThrough={handleThrough}
                                      handleDelete={handleDelete}
                                />
                            );
                        }
                    })}
                </div>
            </div>
        </section>
    );
}