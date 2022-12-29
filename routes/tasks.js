const express = require("express");
const route = express.Router();
const tasksModel = require("../schemas/tasks");

route.get("/", (req, res) => {
	tasksModel.find({}, (error, data) => {
		if (error) {
			res.json({ status: 500, data: error });
		}
		res.json({ status: 200, data });
	})
});

route.get("/:id", (req, res) => {
	tasksModel.find({ id: req.params.id }, (error, data) => {
		if (error) {
			res.json({ status: 500, data: error });
		}
		res.json({ status: 200, data });
	})
});

route.post("/create", (req, res) => {
	console.log("Tasks:", req.body);

	const tasks = new tasksModel(req.body);

	tasks.save().then((document) => {
		res.json({ status: 200, data: document });
	})
		.catch((error) => {
			res.json({ status: 500, data: error });
		});
});

route.delete("/:id", (req, res) => {
	tasksModel.findOneAndDelete({ id: req.params.id }, {}, (error, data) => {
		if (error) {
			res.json({ status: 500, data: error })
		}
		res.json({ status: 200, data });
	})
});

route.put("/:id", (req, res) => {
	tasksModel.findOneAndUpdate({ id: req.params.id }, req.body,{ new: true }, (error, data) => {
		if (error) {
			res.json({ status: 500, data: error })
		}
		res.json({ status: 200, data });
	})
});

module.exports = route;