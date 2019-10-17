const core = require("@actions/core");
const github = require("@actions/github");

function parse_array(input_name) {
  const input_value = core.getInput(input_name)
  if (input_value === "") {
    return undefined; 
  }
  if (input_value === "<<EMPTY>>") {
    return [];
  }
  return input_value.split(",");
}

function parse_boolean(input_name) {
  const input_value = core.getInput(input_name)
  return input_value === "true"
}

function default_parse(input_name) {
  const input_value = core.getInput(input_name)
  return input_value || undefined
}

try {
  const token = default_parse("token");
  const title = default_parse("title");
  const body = default_parse("body");
  const milestone = default_parse("milestone");
  const labels = parse_array("labels");
  const assignees = parse_array("assignees");
  const client = new github.GitHub(token);
  const context = github.context;
  client.issues.create({
    ...context.repo,
      token,
      title,
      body,
      milestone,
      labels,
      assignees,
    headers: {
      "Accept": "application/vnd.github.flash-preview+json, application/vnd.github.ant-man-preview+json",
    }
  }).then(response => {
    console.log('response', response)
    core.setOutput("id", response.data.id)
    core.setOutput("number", response.data.number)
  })
  .catch(error => {
    console.log("error 1", error);
    core.setFailed(error.message);
  });
} catch (error) {
  console.log("error 2", error);
  core.setFailed(error.message);
}
