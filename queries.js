const { Op } = require("sequelize");
const User = require("./models").user;
const TodoItem = require("./models").todoItem;
const TodoList = require("./models").todoList;

async function getAllUsers() {
	const allUsers = await User.findAll()
	console.log(allUsers.map(user => user.get({ plain: true })))
	return allUsers
}
getAllUsers()

async function getAllTodoItems() {
	const allTodoItems = await TodoItem.findAll()
	console.log(allTodoItems.map(todoItem => todoItem.get(todoItem)))
}

// getAllTodoItems()


async function getAllTodoLists() {
	try {

		const allTodoLists = await TodoList.findAll()
		console.log(allTodoLists.map(todoList => todoList))
	} catch (error) { console.log(error) }
}

// getAllTodoLists()

async function countTodoItems() {
	try {
		const result = await TodoItem.findAndCountAll({
			offset: 2,
			limit: 2,
		});
		//this prints the amount of todoItem elements
		console.log(result.count);
		//This only the elements that satisfy the offset and limit, so elements 2 and 3
		console.log(result.rows);
	} catch (e) {
		console.error(e);
	}
}

countTodoItems()