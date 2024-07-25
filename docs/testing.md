---
sidebar_position: 6
---

# Testing

Here are my personal notes on various testing methodologies that I've applied in my software development projects.

## Shift-left Paradigm

The Shift-left Paradigm is a methodology that emphasizes testing early and often in the software development lifecycle. Instead of testing after a product is nearly complete, testing is performed **much earlier**. This approach helps me to catch and fix issues sooner, which improves quality and reduces development time and costs. 

## Test Driven Development (TDD)

Test Driven Development (TDD) is a software development approach where tests are written before the actual code. The process follows a simple cycle: write a test, run all tests and see the new one fail, write code to make the test pass, run tests again to ensure all pass, and then refactor the code for optimization. This cycle is repeated for each new feature or functionality. For me, I don't always use TDD on every project I create, but I think this TDD method is very important if the scale of the project is very large and consists of many team members so that the team speed graph over time in coding work can be at the peak just at the beginning of coding.

## Unit Testing

Unit Testing involves breaking down the software into its smallest parts, or units, and testing each one individually. Unit tests are automated, run quickly, and are repeated often to ensure each unit continues to work correctly as changes are made.

### React Component Testing

Best Practice: Focus on testing user interactions and outputs of components.

Tool: React Testing Library

```
// ButtonComponent.test.js
import { render, screen, fireEvent } from '@testing-library/react';
import ButtonComponent from './ButtonComponent';

test('changes text on click', () => {
  render(<ButtonComponent />);
  fireEvent.click(screen.getByText('Click Me'));
  expect(screen.getByText('Clicked')).toBeInTheDocument();
});
```

### JS Function Testing

Best Practice: Test for correct output with different inputs.

Tool: Jest

```
// add.test.js
const add = (a, b) => a + b;

test('adds 1 + 2 to equal 3', () => {
  expect(add(1, 2)).toBe(3);
});
```

### Python Testing

Best Practice: Test function behavior with mocking external dependencies.

Tool: Pytest with Mock.

```
# test_user.py
import pytest
from unittest.mock import MagicMock
from user_service import get_user_info

def test_get_user_info():
    # Mock the database call
    db = MagicMock()
    db.get_user.return_value = {'id': 1, 'name': 'Test User'}
    # Assert the expected output
    assert get_user_info(1, db) == {'id': 1, 'name': 'Test User'}
```

## Recommended Reading

For further exploration of testing techniques, I recommend the following resources from some of the big tech companies:

### Blogs

1. [Modern Testing by Mercary](https://engineering.mercari.com/en/blog/entry/20240425-mercaris-adoption-of-modern-testing-techniques/)
2. [Autonomous Testing at Meta](https://engineering.fb.com/2021/10/20/developer-tools/autonomous-testing/)
3. [Effective Test Pipeline by Airbnb](https://medium.com/airbnb-engineering/building-an-effective-test-pipeline-in-a-service-oriented-world-6968c513c6bd)
4. [Selective Testing by Agoda](https://medium.com/agoda-engineering/optimizing-ci-cd-processes-with-selective-testing-f537f9abc9d3)
5. [Load Testing by Spotify](https://engineering.atspotify.com/2023/03/load-testing-for-2022-wrapped/)
6. [Integration Test at Twitter](https://blog.x.com/engineering/en_us/topics/infrastructure/2019/integrationtestsatscale)
7. [Preseeding Run Test](https://www.rippling.com/blog/preseeding-faster-way-to-run-tests)
8. [Grab Quality Testing](https://engineering.grab.com/evolution-of-quality)
9. [Flaky Test at Uber](https://www.uber.com/en-ID/blog/flaky-tests-overhaul/?uclick_id=8f4708b7-21e1-4c80-93c8-c4f3ef0e0641)
10. [Uber’s Accounting Data Testing Strategies](https://www.uber.com/en-ID/blog/accounting-data-testing-strategies/?uclick_id=8f4708b7-21e1-4c80-93c8-c4f3ef0e0641)

### Guides

1. [Writing Test by Modern Web](https://modern-web.dev/docs/test-runner/writing-tests/js-tests/)

## Recommended Talks

1. [Quality Assurance at Mercari (DevDojo)](https://www.youtube.com/watch?v=fAlvDxUHSro)

## My go-to tools for testing

1. [Jest](https://jestjs.io/)
2. [Cypress](https://www.cypress.io/)
3. [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)
4. [PyTest](https://docs.pytest.org/en/8.1.x/)
5. [Playwright](https://playwright.dev/)
6. [Vitest](https://vitest.dev/)