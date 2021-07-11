"use strict";

const resolveFrom = (fromDirectory, moduleId, silent) => {
	return require.resolve(moduleId);
};

module.exports = (fromDirectory, moduleId) =>
	resolveFrom(fromDirectory, moduleId);
module.exports.silent = (fromDirectory, moduleId) =>
	resolveFrom(fromDirectory, moduleId, true);
