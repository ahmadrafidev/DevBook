---
sidebar_position: 18
---

# Deployment

Deployment strategies are critical to delivering stable and reliable software updates. Throughout my time in college, internships, and self-study, I've explored various deployment techniques that help minimize downtime and ensure a smooth user experience. Here, I want to share some key strategies and personal insights I've gathered along the way.

## Blue-green Deployment

Blue-green deployment is a strategy I first encountered during a college lecture on software engineering. It involves maintaining two identical production environments, only one of which is live at any time. I found it fascinating because it allows you to switch from blue to green (or vice versa) by simply updating the router's configuration to change which environment receives the traffic. This approach minimizes downtime during deployments and allows for easy rollback in case of issues. During an internship, I saw this in action and was impressed by its simplicity and effectiveness.

## Rolling Deployment

Rolling deployments were a part of a project I worked on during an internship. This method involves replacing or upgrading instances of the application one by one rather than all at once. It's a gradual process that I learned to appreciate, as it reduces the risk of downtime by slowly phasing out old versions and introducing new ones. This strategy proved invaluable in maintaining service availability, especially during extensive updates.

## Canary Deployment

Canary deployment is a technique I explored through self-study. It involves releasing a new version of software to a small subset of users before rolling it out to everyone. This method allows for testing in the 'real world' without affecting all end-users. It was intriguing to implement this in a controlled environment, learning how to monitor performance and user feedback before proceeding with a full rollout.

## A/B Testing

A/B testing isn't just a deployment strategy—it's a powerful tool for decision-making. I explored A/B testing through self-study, fascinated by its potential to directly impact user experience. By directing traffic between two or more versions of an application, I could gather data on user engagement and preferences. This method is especially useful for making informed decisions between two features, measuring which one performs better in terms of user retention and satisfaction. This self-study topic has become a cornerstone of my approach to user-centric development.

## Feature Flags

Feature flags were a significant part of my learning during my internship. This technique allows for enabling or disabling features in an application without deploying new code, offering incredible flexibility. During my internship, I appreciated how feature flags made it possible to manage and test new features progressively, providing a safety net by not exposing all users to potential issues. This hands-on experience highlighted how powerful feature flags can be in maintaining stability while iterating quickly in a live environment.

## Recommended Reading

In my journey through software engineering, I've learned that effective deployment strategies are crucial for delivering stable and reliable software updates. Below, I've listed some resources that have deepened my understanding of various deployment techniques. These articles have been incredibly valuable in helping me minimize downtime and ensure a seamless user experience during software rollouts:

1. [Blue-Green Deployment (Vercel)](https://vercel.com/blog/releasing-safe-and-cost-efficient-blue-green-deployments)
2. [Type of Software Releases](https://blog.christianposta.com/deploy/blue-green-deployments-a-b-testing-and-canary-releases/)
3. [Blue-green Deployment (Martin Fowler)](https://martinfowler.com/bliki/BlueGreenDeployment.html)
4. [Safer Deployment by Grab](https://engineering.grab.com/safer-flink-deployments)
5. [CI/CD @ Resend](https://resend.com/handbook/engineering/how-we-approach-ci-cd)

## Recommended Talks

1. [Shipping Code Faster by Mercari (DevDojo)](https://www.youtube.com/watch?v=iCVfIQlbrDo)

## Nice to have tools

1. [Vercel Feature Flags](https://vercel.com/docs/workflow-collaboration/feature-flags)