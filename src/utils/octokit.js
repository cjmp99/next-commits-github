// Octokit.js
import { Octokit } from "octokit";

// https://github.com/octokit/core.js#readme
const octokit = new Octokit({
  auth: process.env.NEXT_PUBLIC_APP_TOKEN_GB
})

export default octokit;