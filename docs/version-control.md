---
sidebar_position: 14
---

# Version Control

## Gitflow
Gitflow is a branching model for Git, designed around the project release. This model provides a structured way of managing **features**, **main**, **hotfixes**, **develop**, and **releases**. In Gitflow, the repository has two main branches: master (or main) and develop. The master branch stores the official release history, while the develop branch serves as an integration branch for features. Here's one of the best articles about how to use [Gitflow](https://www.gitkraken.com/learn/git/git-flow).

## Trunk-based Development
Trunk-based Development is a simpler, more linear approach to version control where all developers work on a single branch called the **trunk** or **main**. Usually, if a team uses GitFlow, there are lots of remote branch lists in the repository that are only for display after the feature or hotfix branch has been merged into the master (or main) branch. So, usually trunk based development is used to make the repository simpler and clean. Here's one of the main source for me to get know more about [Trunk-based development](https://trunkbaseddevelopment.com/).