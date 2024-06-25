---
sidebar_position: 16
---

# Software Architecture

Understanding different software architectures has been a crucial part of my education and self-study in computer science. Each architecture offers unique strategies for designing systems and here are my takeaways on several of them that I have explored:

## Microservice Architecture

[Microservices](microservices.md) are a style of architecture where applications are structured as collections of loosely coupled services. During a project at university, I learned that this architecture promotes scalability and flexibility, making it easier to develop and maintain parts of the system independently.

## Event Driven Architecture

Event Driven Architecture (EDA) focuses on capturing events and triggering responses. This approach helps in building highly scalable and responsive systems. It was particularly interesting to see how this architecture enables applications to be more adaptive to changes by decoupling event processing from the main application logic.

## MVC Architecture (Model-View-Controller)

MVC is one of the first architectures I encountered during my early years at college. It divides the application into three interconnected components, which makes it easier to manage complexity by separating the user interface from the business logic. This architecture is particularly prevalent in web applications and practicing it helped me understand the separation of concerns in software design.

## MVVM Architecture

MVVM (Model-View-ViewModel) Architecture builds upon the principles of MVC and introduces a ViewModel layer, which facilitates a more efficient data binding between the View and the Model. This architecture is very popular in applications with complex user interfaces, like those built using frameworks such as WPF or Xamarin.

## VIPER

VIPER is an architecture that extends the idea of separation of concerns by dividing an application into five layers: View, Interactor, Presenter, Entity, and Routing. I explored VIPER during a mobile development course and appreciated how it organizes code into distinct roles, making it easier to manage and scale large mobile applications.

## Reactive Architecture

Reactive Architecture is designed to build systems that are robust, resilient, and flexible. It uses reactive programming principles to handle asynchronous data streams and propagate changes through the system. This architecture is crucial for applications that require real-time updates with high responsiveness.

## Publisher-Subscriber Architecture

Publisher-Subscriber is a pattern I learned about in an advanced software engineering class. It allows components to communicate with each other by broadcasting messages, without needing to know the details of each other’s identity. This decoupling makes the system more modular and easier to extend.

## Distributed Architecture

Distributed Architecture involves multiple software components located on different networked computers, which communicate and coordinate their actions by passing messages. I explored this complex topic in detail during my Distributed Systems course. The study of distributed systems provided me with valuable insights into fault tolerance, consistency, and scalability in complex systems. It was challenging but rewarding, enhancing my understanding of how to design systems that operate effectively across multiple platforms and environments.

### Recommended Talks

1. [Designing Services for Resilience @ Netflix](https://www.youtube.com/watch?v=RWyZkNzvC-c&list=PLndbWGuLoHeYTBaqFu31Nac-19qsdUl_V&index=198)
2. [Architecting a Modern Financial Institution @ Nubank](https://www.youtube.com/watch?v=VYuToviSx5Q&list=PLndbWGuLoHeYTBaqFu31Nac-19qsdUl_V&index=192)
3. [Reddit Architecture](https://www.youtube.com/watch?v=nUcO7n4hek4&list=PLndbWGuLoHeYTBaqFu31Nac-19qsdUl_V&index=195)