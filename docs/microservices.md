---
sidebar_position: 14
---

# Microservices

## Introduction

In recent years, microservices have emerged as an important architectural style that significantly improves the scalability, flexibility, and speed of application delivery. Unlike its predecessor monolithic architecture, where all components are interconnected, microservices break down applications into smaller, interconnected services that operate independently. Posting my experience here will tell you why I use microservices.

## Philosophy

The first and foremost, why microservices?

1. **Decentralization**: Emphasizes the distribution of data and processes across multiple services, enhancing agility and enabling independent service management.
2. **Modularity**: Focuses on designing systems as a collection of distinct modules that can be developed, tested, and deployed independently.
3. **Scalability**: Microservices supports dynamic scaling in response to varying loads, improving performance and resource utilization.
4. **Resilient**: Encourages building systems that can recover quickly from failures, ensuring continuous service availability.
5. **Observability**: Observability allows for monitoring, logging, and tracing across services, providing insights needed to diagnose and resolve issues quickly.
6. **Domain-Driven Design (DDD)**: This approach encourages structuring systems around the business domains and their logic.
7. **Fault Isolation**: This philosophy is fundamental in microservices as it allows for parts of the application to fail and recover without disrupting the entire service network.
8. **Polyglot Persistence and Programming**: Utilizing different programming languages and data storage technologies that best fit the service requirements. 
9. **Decoupling Services**: Minimizing dependencies between services to improve flexibility and resilience.
10. **Service Encapsulation**: Services in a microservice architecture own their domain logic and data model, which are not exposed to other services directly, but through well-defined interfaces.

## Handling Microservices 

1. Development phase
   1. Design Principles: Leverage **domain-based design** to align service boundaries with business capabilities, ensuring services are not too interrelated and maintain one focused goal.
   2. Technological Foundations: Use technologies like Docker for containerization and Kubernetes for orchestration to improve deployment and scaling of microservices.
2. Deployment
   1. Service Meshes: Use service meshes like Istio to simplify inter-service communication. They provide essential capabilities like load balancing, service-to-service authentication, and monitoring without altering application code. Read more about [Istio](https://istio.io/latest/).
3. Monitoring and Maintenance
   1. Monitoring Tools: Integrate tools such as Prometheus for monitoring and Grafana for visualization to maintain insight into the operations and health of services. Read more [Monitoring and Logging](monitoring-and-logging.md)
   2. Distributed Tracing: Apply tools like New Relic, Datadog, Helios, or Splunk to enable distributed tracing. This helps in understanding the behavior of complex interactions across microservices and quickly pinpointing failures or bottlenecks. Read more [Monitoring and Logging](monitoring-and-logging.md)

## Recommended Reading

1. [Netflix Video Processing Microservices](https://netflixtechblog.com/rebuilding-netflix-video-processing-pipeline-with-microservices-4e5e6310e359)
2. [Beyond REST Netflix](https://netflixtechblog.com/beyond-rest-1b76f7c20ef6)
3. [Distributed Tracing Infra by Netflix](https://netflixtechblog.com/building-netflixs-distributed-tracing-infrastructure-bb856c319304)
4. [Micro Frontends](https://www.martinfowler.com/articles/micro-frontends.html)
5. [Uber Domain-Oriented Microservice Architecture](https://www.uber.com/en-ID/blog/microservice-architecture/)
6. [From Monolith to Multicloud Micro-Services: Inside Snap’s Service Mesh](https://eng.snap.com/monolith-to-multicloud-microservices-snap-service-mesh)
7. [GRIT: a Protocol for Distributed Transactions across Microservices](https://innovation.ebayinc.com/tech/engineering/grit-a-protocol-for-distributed-transactions-across-microservices/)
8. [CRISP: Critical Path Analysis for Microservice Architectures](https://www.uber.com/en-ID/blog/crisp-critical-path-analysis-for-microservice-architectures/)
9. [Payment Transaction Management in Microservices](https://engineering.mercari.com/en/blog/entry/20210831-2019-06-07-155849/)
10. [Microservices at Nubank, An Overview](https://building.nubank.com.br/microservices-at-nubank-an-overview/)
11. [Microservice Architecture at Medium](https://medium.engineering/microservice-architecture-at-medium-9c33805eb74f)
12. [Testing of Microservices](https://engineering.atspotify.com/2018/01/testing-of-microservices/)

## Recommended Talks

1. [Mastering Chaos: Netflix’s Guides to Microservices](https://www.youtube.com/watch?v=CZ3wIuvmHeM)