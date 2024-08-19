---
sidebar_position: 19
---

# Performance Optimization

As a software engineer, I've found that ensuring applications run efficiently under various conditions is crucial. Here are some notes on strategies and techniques for optimizing software performance that I've found useful throughout my career.

## Code Optimization

Writing **cleaner and more efficient code** is always a goal:

- **Refactoring**: Keeping the code simple and removing unnecessary complexity.
- **Asynchronous programming**: Using `async` and `await` to prevent blocking operations, especially I/O operations.
- **Memory management**: I try to manage resources wisely, avoiding memory leaks by disposing of unnecessary objects.

## Monitoring and Profiling

I keep a regular check on my applications to **identify performance bottlenecks** through monitoring and profiling tools:

- **Using tools like New Relic or Datadog**: These tools help me monitor the applications in real-time.
- **Profiling sessions**: They are crucial for understanding which functions or operations take up the most time.

Here is to more about this section [Monitoring and Logging tools](monitoring-and-logging.md).

## Caching

**Caching** is a lifesaver when it comes to enhancing performance. It's all about storing parts of data so that future requests for that data can be served faster. Here's how I use caching:

- **Client-side caching**: Keeps data right on the user’s device. Super handy for reducing network calls.
- **Server-side caching**: Saves data on the server to avoid hitting the database for every request.
- **CDNs (Content Delivery Networks)**: These are great for caching static resources near users to improve load times massively.

Tools I've used:

1. [Client-side caching with Redis](https://redis.io/docs/latest/develop/use/client-side-caching/)

## Database Optimization

**Efficiently managing the database** can make a big difference:

- **Indexing**: This is crucial. Indexes help speed up data retrieval and can make queries much faster.
- **Query optimization**: I spend time ensuring my queries are as efficient as possible, avoiding fetching unnecessary data.

## Load Balancing

Using a **load balancer** to distribute incoming traffic across multiple servers has been crucial:

- **Decreases the burden on any single server**, and provides redundancy, which is great for application availability and reliability.
- **Efficiently allocates requests** to servers based on current load, optimizing resource use and maximizing throughput.

One of the best technology I've used to implement load balancing:
1. [Nginx](https://www.nginx.com/)

## Resource Minimization

**Minimizing the size of the resources** that need to be loaded is key:

- **Minify resources**: I minify JavaScript, CSS, and HTML to reduce their size which improves load times. 
- **Optimize images**: Compressing images without losing quality helps a lot.

One of the best practices to implement resource minimization is to use webpack or bundler like [Webpack](https://webpack.js.org/concepts/) or [Turbopack](https://turbo.build/pack/docs).

## Front-end Optimization

**The front end is where users interact with my app**, so it’s got to be really fast:

- **Critical rendering path**: I ensure the most important content loads first, so users can start interacting with the app as soon as possible.
- **Lazy loading**: I delay loading certain parts of the page until they're actually needed, which is great for long web pages with lots of images.

Here is to more about this section [Rendering Strategy](rendering.md).

## Recommended Reading

Check out these cool articles about performance:

1. [Composite metrics for measure performance](https://engineering.indeedblog.com/blog/2024/01/composite-web-performance-metric/)
2. [FE Latency Numbers by Vercel CTO](https://vercel.com/blog/latency-numbers-every-web-developer-should-know)
3. [Speeding up File Load Times](https://www.figma.com/blog/speeding-up-file-load-times-one-page-at-a-time/)
4. [Bundle Size Analyzer by Grab](https://engineering.grab.com/grabfood-bundle-size)
5. [WebAssembly at Figma](https://www.figma.com/blog/webassembly-cut-figmas-load-time-by-3x/)
6. [Why Speed Matters](https://web.dev/learn/performance/why-speed-matters)
7. [Shopping for Speed @ Ebay](https://web.dev/case-studies/shopping-for-speed-on-ebay)
8. [Speed By A Thousand Cuts](https://innovation.ebayinc.com/tech/engineering/speed-by-a-thousand-cuts/)
9. [Making Instagram.com faster: Part 1](https://instagram-engineering.com/making-instagram-com-faster-part-1-62cc0c327538)
10. [Making Instagram.com faster: Part 2](https://instagram-engineering.com/making-instagram-com-faster-part-2-f350c8fba0d4)
11. [Making Instagram.com faster: Part 3 — cache first](https://instagram-engineering.com/making-instagram-com-faster-part-3-cache-first-6f3f130b9669)
12. [Twitter Lite and High Performance React Progressive Web Apps at Scale](https://medium.com/@paularmstrong/twitter-lite-and-high-performance-react-progressive-web-apps-at-scale-d28a00e780a3)
13. [How we sped up Notion in the browser with WASM SQLite](https://www.notion.so/blog/how-we-sped-up-notion-in-the-browser-with-wasm-sqlite)

## Recommended Talks

1. [Effective Performance Engineering at Twitter-Scale](https://www.youtube.com/watch?v=bHZ008Ul8kA)

## Nice References

1. Refactoring
   1. [Refactoring Guru](https://refactoring.guru/refactoring/techniques)
2. Asynchronous Programming
   1. [Asynchronous by Mozilla](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Introducing)
   2. [Asynchronous by MSFT](https://learn.microsoft.com/en-us/dotnet/csharp/asynchronous-programming/)
3. Coroutines
   1. [Kotlin Coroutines](https://kotlinlang.org/docs/coroutines-overview.html)
   2. [Kotlin Coroutines in Android](https://developer.android.com/kotlin/coroutines)
4. Golang concurrency
   1. [Effective Go Docs](https://go.dev/doc/effective_go#concurrency)
5. Frontend Optimization with Rendering
   1. [ReactJS Rendering Patterns](https://www.patterns.dev/react)

## Tools 

1. Web:
   1. [Lighthouse](https://developer.chrome.com/docs/lighthouse/overview)