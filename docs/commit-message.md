---
sidebar_position: 3
---

# Commit Message

Here's my perspective on writing effective **Commit Message**.

## Philosophy

1. **One Liner**:A one-liner commit message promotes simplicity and ensures the purpose of the commit can be quickly understood at a glance.
2. **Concise**: A commit message should be clear and concise, providing just enough information to explain its purpose without unnecessary details.

## Use Cases

For personal and side projects, I often use [Commit Message Conventional](https://www.conventionalcommits.org/en/v1.0.0/) because it provides a standardized format that is straightforward and widely understood among many developers (and my friends too). In professional settings, in cases when I work in an organization or company, such as when I was an intern, of course I follow the commit message rules that apply in the place where I work. For example, there is a commit message that is related to a specific Jira ticket or task that I am working on, then added with a commit message from [conventional commit message](https://www.conventionalcommits.org/en/v1.0.0/). Additionally, I usually also apply limits in my commit messages, such as a commit message limit of 40-50 characters. I did this so that I had to strictly implement concise commit messages.

## Nice to have packages 😉

To help standardize commit messages across projects, I find the following packages particularly useful:

1. [Commit Lint](https://commitlint.js.org/): Ensures that your commit messages meet the required standards.
2. [Commitizen](https://commitizen.github.io/cz-cli/): Streamlines the process of creating conventional commit messages.
3. [Husky](https://typicode.github.io/husky/): For automatically lint your commit messages, code, and run tests upon committing or pushing.