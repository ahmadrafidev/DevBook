---
sidebar_position: 17
---

# Code Review

For me, code review is a critical phase in software development where the quality of code changes are examined by one or more developers on the team before merging into the main/master codebase. Its main goals are to ensure code quality and find errors early in the development process. After what I've learned everything about [Pull Request](pull-request.md), now I can go back to the other side, which is Code Review. Here is what I've learned about code review throughout my journey:

1. **Preparation**: Reviewers should familiarize themselves with the context of the changes before starting the review. That's why include Jira ticket or familiar tools in a PR is one of the best way to speeds up the code review process.
2.  **Self-Review**: Before submitting code for review, I usually encourage myself to self-review my code as a pre-check.
3. **Limit the Scope**: Code reviews should be concise and focused. This is done so that the code changes can quickly enter the main/master codebase and the review process does not take a long time.
4. **Performance Considerations**: Review for potential performance impacts, like changes in algorithms, database queries, or loops.
5. **Consider User Impact**: Review code not only for technical quality but also user impact, such as changes to improve the user experience.
6. **Automate automate automate**: Use tools to automate repetitive tasks such as syntax checking and code formatting.
7. **Two-Way Communication**: Effective code reviews are dialogues, not monologues. This is the way~
8. **Constructive Feedback**: Feedback should be specific, actionable, and kindly phrased to encourage improvement without personal criticism.


## Code Review References
Here I got several references or articles from big tech companies about how they do a code review:
1. [Yelp's Code Review Guideline](https://engineeringblog.yelp.com/2017/11/code-review-guidelines.html)
2. [Meta Code Review](https://engineering.fb.com/2022/11/16/culture/meta-code-review-time-improving/)