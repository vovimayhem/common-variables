const os = require("os")
const fs = require("fs")

function setOutput(outputName, outputValue) {
  let out = `::set-output name=${outputName}::${outputValue}`
  return console.log(out)
}

function getRunnerUid() {
  return os.userInfo().uid
}

function getRunnerUser() {
  return os.userInfo().username
}

function getGitBranch() {
  let gitBranch = process.env.GITHUB_HEAD_REF || process.env.GITHUB_REF
  return gitBranch.replace(/^refs\/heads\//, '')
}

function getGitCommitSHA() {
  let gitCommitSha = process.env.GITHUB_SHA
  const eventName = process.env.GITHUB_EVENT_NAME
  
  if (eventName == 'pull_request') {
    const eventData = JSON.parse(fs.readFileSync(process.env.GITHUB_EVENT_PATH))
    gitCommitSha = eventData.pull_request.head.sha
  }

  return gitCommitSha
}

function getGitCommitShortSHA() {
  return getGitCommitSHA().substring(0, 7)
}

function getGitDasherizedBranch() {
  let dasherized = getGitBranch().split('/').reverse().join('-').toLowerCase()
  return dasherized.replace(/[^a-z0-9]/gmi, '-')
}

setOutput('git-branch', getGitBranch())
setOutput('git-dasherized-branch', getGitDasherizedBranch())

setOutput('git-commit-sha', getGitCommitSHA())
setOutput('git-commit-short-sha', getGitCommitShortSHA())

setOutput('runner-uid', getRunnerUid())
setOutput('runner-user', getRunnerUser())
