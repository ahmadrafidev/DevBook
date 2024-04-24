---
sidebar_position: 7
---

# Rendering

This section of my personal notes focuses on my exploration of rendering techniques used in web and mobile development. As I dive deeper into the world of software engineering, understanding these techniques has become essential to improving both my skill set and the performance of the applications I build.

## Rendering on the Web

The web offers a dynamic environment where rendering techniques play a critical role in user experience and application performance. Here are the main approaches I've explored:

### Client Side

1. What I Learned: Client-side rendering is primarily managed through JavaScript, which controls the DOM to update the browser's displayed content dynamically. Frameworks like React have made it easier to manage these updates efficiently.
2. Challenges: The biggest challenge is the impact on SEO and the initial load time. My experiments with React demonstrated the delay caused by waiting for JavaScript to load before anything is rendered on the screen.
3. Solutions: Using techniques like SSR (Server-Side Rendering) alongside client-side for critical content can improve SEO and performance.

### Server Side

1. What I Learned: Server-side rendering is about generating the full HTML for a page on the server before sending it to the client. This approach facilitates faster initial rendering and is beneficial for SEO.
2. Challenges: The server load increases, which can be problematic for high-traffic applications.
3. Solutions: Implementing caching strategies and using a CDN can mitigate some of the performance issues associated with server-side rendering.

### Island Architecture

1. What I Learned: This is a hybrid approach where some components are rendered on the client side, and others are server-side. It offers a balance between full client-side and server-side rendering, optimizing for both performance and interactivity.
2. Personal Insight: This method seems particularly promising for complex applications where different parts of the app have varied dynamic needs

## Rendering on the Mobile

Rendering on mobile platforms poses unique challenges due to their specific ecosystems and performance limitations.

### Android

1. Techniques Used: Android's rendering engine utilizes Skia for 2D graphics operations. Learning about layout optimizations and how to reduce overdraw has significantly improved the performance of the apps I've developed.
2. Tools: Android Studio's Layout Inspector has been indispensable for visualizing rendering issues and optimizing layouts.

### iOS

1. Frameworks: Transitioning between UIKit and SwiftUI has been enlightening. SwiftUI simplifies the rendering of UI components with less boilerplate code compared to UIKit.
2. Performance Optimization: Using Xcode's Instruments tool helped me understand how rendering works under the hood in iOS and how to pinpoint bottlenecks.

## Recommended Reading

I always get more insight into how to render and improve performance on web and mobile platforms from the engineering blogs of some of the big tech companies as they often provide case studies. Here are some of them:

1. [Improving Shopify App Performance (Mobile)](https://shopify.engineering/improving-shopify-app-s-performance)
2. [Yelp SSR (Web)](https://engineeringblog.yelp.com/2022/02/server-side-rendering-at-scale.html)

## My Go-to Pocket Notes

For a quick reference and deeper insight into rendering patterns, I often look at:

1. [Rendering Pattern](https://www.patterns.dev/react)
