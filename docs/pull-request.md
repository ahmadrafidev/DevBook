---
sidebar_position: 3
---

# Pull Request

Here's my take about **Pull Request**.

## Behind the Scenes

A wise man said, "time is the most valuable thing". Wherever I've worked as a software engineer, time has been of the essence when I've had to contribute to projects via Pull Requests (PR). Behind every PR, there is a careful process that ensures not only the addition of new features or bug fixes but also the preservation of the integrity and quality of the project. In my case, every Pull Request that must be done must solve the problem to the point and not cause a lot of changes that break a project. So, every change I make to a project I have to explain very clearly and concisely in every change to the Pull Request so that it doesn't take up a lot of time the reviewer.

## Pull Request Template
Here is the pull request template that I often use:

### Overview:

This PR introduces changes to the authentication mechanism to enhance security and adds a new dashboard feature.

### Related Issue(s):

Fixes #123 \
Related to #456

### Changes:

1. Refactored the auth module to use OAuth2.
2. Added a new route for the dashboard at /dashboard.
3. Updated relevant unit tests.

### Screenshots (if applicable, usually when I coding on the frontend side):

Attach images or short video showing the UI changes.

### How to Test:

1. Navigate to the login page and ensure the OAuth2 flow is triggered.
2. Once logged in, visit /dashboard to see the new feature.
3. Run the test_auth and test_dashboard unit tests.

### Checklist:

[ ] Code has been tested locally. \
[ ] Updated documentation. \
[X] PR title is clear and descriptive. \
[ ] Performance impacts were analyzed.

### Breaking Changes:

None.

### Feedback Requested:

1. Are there any potential risks in the OAuth2 flow?
2. Suggestions for optimizing the dashboard load time.