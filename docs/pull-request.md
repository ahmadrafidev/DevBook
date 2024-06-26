---
sidebar_position: 2
---

# Pull Request

## Behind the Scenes

A wise man said, 'time is the most valuable thing.' As a software engineer, I’ve always valued time, especially when contributing to projects via Pull Requests (PR) or Merge Requests (MR). Each PR must address the issue precisely without causing disruptive changes on the main/master branch. I ensure that every modification is explained clearly and concisely to save the reviewer's time and maintain project integrity and quality.

## A bit of a tips!

For me, good PR criteria are as follows:

1. Add tests
2. Keep it small
3. Maintain consistency
4. Ensure readability
5. Optimize performance
6. Automate

## Pull Request Template

Here is the pull request template that I often use:

### Overview:

This PR introduces changes to the authentication mechanism to enhance security and adds a new dashboard feature.

### Related Issue(s):

Fixes #123 \
Related to #456

### Changes:

1. Refactored the auth module to use OAuth2.
2. Added a new features for the new dashboard.
3. Fixed performance-relevant bugs.

### Screenshots (if applicable):

Attach images or short video showing the UI changes.

### Testing:

1. Navigate to the login page and ensure the OAuth2 flow is triggered.
2. Once logged in, visit /dashboard page to see the new feature.
3. Run the test_auth and test_dashboard unit tests.

### PR Checklist:

[ ] Code has been tested locally. \
[ ] Updated relevant documentation. \
[X] PR title is clear and descriptive. \
[X] Performance impacts were analyzed.

### Breaking Changes:

None.

### Feedback Requested:

1. Are there any potential risks in the OAuth2 flow?
2. Suggestions for optimizing first-time dashboard load time.


## Further Reference

This PR template is also worth implementing because it is simple and to the point about the changes made to the codebase:

1. [Diff (or PR) Template](https://docs.google.com/document/d/1ZT5KqN5gOW60FA-wEi4cMq3_bIx2fvrE93cTqDLDPhg/edit)
2. [PR Template @ Microsoft](https://playbook.microsoft.com/code-with-engineering/code-reviews/pull-request-template/)


## Recommended Reading 

1. [Merge Request at Ramp](https://engineering.ramp.com/merge-queues)