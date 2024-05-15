---
sidebar_position: 20
---

# API 

In my journey as a software engineer, APIs (Application Programming Interfaces) have been a cornerstone for building interoperable software systems. They are the channels through which different software components communicate and exchange data. Creating a well-designed API not only facilitates seamless integration but also ensures that your application can grow and adapt over time without major disruptions. Here are my notes on developing an API from start to finish, from ideation to production.

## API Design

When I started designing APIs, I realized it's not just about sending and receiving data. It’s about creating a clear, consistent, and secure interface that other systems can interact with. Here’s what I focus on:

- **RESTful Principles**: These are my go-to for most projects. I ensure to use the correct HTTP methods and status codes to make the API intuitive.
- **Endpoints Naming**: I keep the names clear and consistent. For example, `/users` for accessing user data.
- **Security**: From the start, I implement Auth (such as OAuth) for authentication and ensure that all data transfers are encrypted.

Then, the shift to **GraphQL** has been a game-changer for me, especially for complex systems, because of:

- **Single Endpoint Flexibility**: One endpoint to handle various requests has simplified my designs.
- **Custom Queries**: Allowing clients to request exactly what they need and nothing more optimizes the bandwidth and processing time.

### Best Practices in API Design

Designing APIs involves more than just understanding the technicalities; it's about creating an interface that is intuitive, efficient, and maintainable. Here are some best practices I follow, with examples to illustrate:

#### 1. Use RESTful Principles
  
  - **Consistency**: Use standard HTTP methods consistently. For instance, always use `GET` for retrieving resources, `POST` for creating new resources, `PUT` for updating resources, and `DELETE` for deleting them.
  - **Example**: To retrieve user data, your endpoint should look like `GET /users/{id}`.

#### 2. Meaningful Endpoint Naming

  - **Clear and Descriptive**: Name endpoints based on resources and avoid verbs. Resources should be nouns and plural.
  - **Example**: To get a list of users, use `/users` instead of `/getUser`.

#### 3. Utilize HTTP Status Codes

   - **Communicative Responses**: Use HTTP status codes to indicate the result of an API call. This helps in debugging and understanding the API interaction.
   - **Example**: Return `200 OK` for successful requests, `404 Not Found` when a resource can't be located, and `500 Internal Server Error` for server issues.

#### 4. Version Your API

   - **Future Proofing**: Implement versioning from the start to avoid breaking existing clients when you make changes.
   - **Example**: Use a URL versioning method like `/api/v1/users` to differentiate between versions.

#### 5. Secure Your API

   - **Authentication and Encryption**: Use standards like OAuth for authentication and HTTPS for secure communication.
   - **Example**: Protect all API endpoints with OAuth 2.0 to ensure that only authenticated users can access them.

#### 6. Optimize for Performance

   - **Pagination and Filtering**: Don’t overload clients with too much data at once. Use pagination and allow filtering to improve performance.
   - **Example**: To retrieve a subset of users, your endpoint could be `/users?page=2&limit=50`.

#### 7. Provide Detailed Documentation

   - **Clear Documentation**: Offer comprehensive documentation that includes examples, request and response formats, and error codes.
   - **Example**: Use tools like Swagger or Redoc to document your API interactively, making it easier for developers to understand and integrate quickly.

#### 8. Flexibility with GraphQL

   - **Single Endpoint Flexibility**: GraphQL allows clients to ask for exactly what they need, reducing over-fetching and under-fetching issues.
   - **Example**: A GraphQL endpoint `/graphql` could handle a query like `{ user(id: "1") { name, email } }`, returning only the requested fields.

## API Documentation

Good documentation is as crucial as the API itself. It’s the bridge between my creation and its users. Here’s how I approach it:

- **Tooling**: I use Swagger (OpenAPI) for REST APIs to create interactive documentation that’s always up to date.
- **Clarity and Completeness**: I make sure that every endpoint is documented with possible requests, responses, and errors explained.
- **Examples**: I include plenty of examples, as they are invaluable for developers trying to understand how to use the API.

One of the great ways to do API Documentation is using [Swagger](https://swagger.io/).

## API Testing

Testing is non-negotiable if I want my APIs to be reliable. Here’s my testing strategy:

- **Automated Tests**: I write tests for every endpoint. These include unit tests for individual functions and integration tests that cover the whole process from request to response.
- **Postman**: This tool is a staple for manual API testing. It allows me to quickly send requests to the API, examine the output, and even automate some tests.
- **Monitoring**: I use tools like New Relic to monitor the API in production. It helps me catch issues before they affect users.

Here are the tools that I found useful when doing API Testing:
1. The holy grail [Postman](https://www.postman.com/)
2. [Katalon Studio](https://katalon.com/api-testing)

## Recommended Reading

Some articles that really help me to understand better about how to build a robust API:

1. [API Design by Doordash](https://doordash.engineering/2021/01/07/api-design-platform-optimization/)
2. [API Handbook by Open API](https://learn.openapis.org/introduction.html)
3. [API Rate Limiter by Stripe](https://stripe.com/blog/rate-limiters)

## Best Practices API Design from many companies

Below is a great resource for creating design APIs, arguably best practices from various types of big tech companies:

[API Stylebook Guideline](https://apistylebook.com/design/guidelines/)
