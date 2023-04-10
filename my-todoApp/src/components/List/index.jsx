import { useEffect, useState } from 'react'


function List({ setTodos, todos }) {
	const [count, setCount] = useState(0);

	const [form, setForm] = useState({ id: count, title: "", completed: false });

	const [filter, setFilter] = useState("all");

	const onChangeInput = (e) => {
		setForm({ ...form, [e.target.name]: e.target.value });

	}

	const onSubmit = (e) => {

		e.preventDefault();
		if (form.id === '' || form.title === '') {
			return
		}

		const newform = { ...form, id: count }
		setCount(count + 1)
		setTodos([...todos, newform])
		setForm({ id: count, title: '', completed: false })

	}

	useEffect(() => {

	});
	const removeTodos = () => {
		if (!(todos.length === 0)) {
			setTodos([])
		}
	}
	const filtred = todos.filter((item) => {
		if (filter === "active") {
			return !item.completed;
		} else if (filter === "completed") {
			return item.completed
		} else {
			return todos;
		}
	})

	const selectFilterChange = (newFilter) => {
		setFilter(newFilter)
	}

	const selectDelete = (e) => {
		const newTodos = todos.filter((item) => item.id !== e);
		setTodos(newTodos)
	}

	const selectCheckBoxChange = (e) => {
		const changeTodos = todos.map((item) => {
			if (item.id === e) {
				return { ...item, completed: !item.completed }
			}
			return item;
		})

		setTodos(changeTodos);
	}



	return (
		<div>
			<section className="todoapp">
				<header className="header">
					<h1>todos</h1>
					<form onSubmit={onSubmit}>
						<input name="title" className="new-todo" placeholder="What needs to be done?" autoFocus onChange={onChangeInput} value={form.title} />
					</form>
				</header>

				<section className="main">
					<input className="toggle-all" type="checkbox" />
					<label htmlFor="toggle-all">
						Mark all as complete
					</label>



					<ul className="todo-list">

						{
							filtred.map((todo) => (
								<li key={todo.id} className={todo.completed ? 'completed' : 'view'}>
									<div className="view">
										<input className="toggle" type="checkbox" checked={todo.completed} onChange={() => selectCheckBoxChange(todo.id)} />
										<label>{todo.title}</label>
										<button onClick={() => selectDelete(todo.id)} className="destroy"></button>
									</div>
								</li>
							))
						}

					</ul>
				</section>

				<footer className="footer">
					<span className="todo-count">
						<strong>{filter} size: </strong>
						{filtred.length}
					</span>

					<ul className="filters">
						<li>
							<button onClick={() => selectFilterChange("all")}>All</button>
						</li>
						<li>
							<button onClick={() => selectFilterChange("active")}>Active</button>
						</li>
						<li>
							<button onClick={() => selectFilterChange("completed")}>Completed</button>
						</li>
					</ul>

					<button className="clear-completed" onClick={() => removeTodos()}>
						Clear completed
					</button>
				</footer>
			</section>

			<footer className="info">
				<p>Click to edit a todo</p>
				<p>Created by <a href="https://d12n.me/">Dmitry Sharabin</a></p>
				<p>Part of <a href="http://todomvc.com">TodoMVC</a></p>
			</footer>





		</div>
	)
}

export default List