
const express = require("express");
const tasksRoutes = require("./tasks");
const usersRoutes = require("./user");
const rolesRoutes = require("./roles");

const apiRoutes = express.Router();

apiRoutes.use("/users", usersRoutes);
apiRoutes.use("/tasks", tasksRoutes);
apiRoutes.use("/roles", rolesRoutes);

module.exports = apiRoutes;