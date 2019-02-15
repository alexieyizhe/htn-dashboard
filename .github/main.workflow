workflow "New workflow" {
  on = "pull_request"
  resolves = ["Run Tests"]
}

action "Build Site" {
  uses = "actions/npm@e7aaefed7c9f2e83d493ff810f17fa5ccd7ed437"
  runs = "npm install"
}

action "Lint Code" {
  uses = "actions/npm@e7aaefed7c9f2e83d493ff810f17fa5ccd7ed437"
  needs = ["Build Site"]
  runs = "npm run lint"
}

action "Run Tests" {
  uses = "actions/npm@e7aaefed7c9f2e83d493ff810f17fa5ccd7ed437"
  needs = ["Lint Code"]
  runs = "npm run test"
}
