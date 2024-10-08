---
sidebar_position: 24
---

# Scalability

As I dive deeper into the world of software engineering, the concept of scaling or scalability has become increasingly significant for me personally. In my experience, it's fascinating to see how both startups (where I once interned) must scale their systems to handle growth and maintain performance even at the early stage of the company. Here are my personal notes on understanding the basic key aspects of scaling: breakpoints, horizontal scaling, and vertical scaling.

## Understanding Breakpoints

The concept of a breakpoint in scalability is critical: it's that the **tipping point** where your system begins to struggle under increased load. Recognizing this point is crucial for preempting issues and planning effective scaling strategies.

### How to Identify Breakpoints

The first thing I have to do to identify a system that has reached its breaking point is to use monitoring and logging tools. Using monitoring tools can keep an eye on overall system performance. This method is done to capture specific moments when performance degradation begins, not after the decline causes problems. Only later, when the monitoring tools have been carried out, I usually carry out by testing the load on the system. This involves pushing the system to its limits in a controlled environment to see how much the system can handle before performance degrades. I think recognizing breakpoints in a system is like understanding the signs of stress in a building structure—it tells you where the weaknesses are and when to strengthen them.

## Horizontal Scaling

Horizontal scaling, or scaling out, involves adding more nodes (like servers) to spread out the load. This method is intriguing because it allows systems to handle more traffic by simply adding more resources.

### Benefits and Challenges of Horizontal Scaling

1. Flexibility:  Add more servers as needed, which is great for handling unexpected surges in traffic.
2. High Complexity: With more servers, the network becomes more complex to manage, like distributed systems.
3. High Fault Tolerance: Spreading services across multiple nodes, horizontal scaling can reduces the risk of a single point of failure. 
4. Load Balancing: Efficient distribution of loads across multiple nodes can enhance the performance of applications, leading to better user experience and reduced latency.
5. Scaling Overhead: As more nodes are added, the overhead of managing communication and data consistency between these nodes can increase, sometimes impacting system performance


## Vertical Scaling

Vertical scaling or scaling up is about beefing up existing servers or nodes. It's about making a single machine more powerful rather than adding more machines like horizontal scaling.

### Benefits and Challenges of Vertical Scaling

1. Ease of Implementation: It’s simpler as it involves only upgrading existing components like CPU or memory.
2. Physical Limits: Every server has a maximum upgrade limit, and sometimes, upgrading can require downtime, which isn’t ideal for 24/7 services.
3. Risk of Overloading: By increasing the capabilities of a single node, there's also an increased risk that a failure in this node could have more severe consequences, as more processes depend on its availability and performance.
4. Simplicity of Deployment: Unlike horizontal scaling, vertical scaling often involves fewer changes to the software architecture, making it easier to manage and deploy.
5. Cost of High-Performance Hardware: High-end upgrades can be expensive. That's it.

## Recommended Reading

To further explore and enhance my understanding of scalability, I often visiting the following resources:

1. [High Scalability](https://highscalability.com/)
2. [Unlocking performance, scalability, and cost-efficiency](https://blog.zomato.com/switching-from-tidb-to-dynamodb)
3. [Scaling to Count Billions](https://www.canva.dev/blog/engineering/scaling-to-count-billions/)
4. [Scaling services with Shard Manager](https://engineering.fb.com/2020/08/24/production-engineering/scaling-services-with-shard-manager/)
5. [Twitter (X) Sparrow](https://blog.x.com/engineering/en_us/topics/infrastructure/2022/twitter-sparrow-tackles-data-storage-challenges-of-scale)

## Recommended Talks

Below I found a very useful talk on the topic of scale:

1. [Principles for Scaling Frontend Application Development](https://www.youtube.com/watch?v=tqhLK0Fb5_4)
2. [Scaling Instagram Infrastructure](https://www.youtube.com/watch?v=hnpzNAPiC0E)
3. [Scaling Facebook Live](https://www.youtube.com/watch?v=IO4teCbHvZw)
4. [Cross Continent Infrastructure Scaling @ Instagram](https://www.youtube.com/watch?v=IFPHQo-o6Vo)
5. [Scaling Push Messaging for Millions of Devices @ Netflix](https://www.youtube.com/watch?v=6w6E_B55p0E)
6. [Scaling Infrastructure Engineering @ Slack](https://www.youtube.com/watch?v=yHBwoZh1Mxg&list=PLndbWGuLoHeYTBaqFu31Nac-19qsdUl_V&index=128)
7. [Delivering Millions of Notifications within Seconds @ Duolingo](https://www.youtube.com/watch?v=J_sGZnAJhbw)