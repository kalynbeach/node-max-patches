const fs = require('fs');
const Max = require('max-api');

const MESSAGE_TYPES = Max.MESSAGE_TYPES;

//
// Live Version Control (MVP)
//
// Flow
// - Ensure Project, Set paths are correct
// - Save the active Live Set as "[Project name] [datetime]"
// - Collect all and save on the newly created Set file

let projectPath;
let projectName;

// Get & handle data from Max
Max.addHandler('project', (path) => {
  projectPath = path
  Max.post(`Set path: ${projectPath}`);
});