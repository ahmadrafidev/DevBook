---
sidebar_position: 7
---

# Testing

Here's my take about **Testing**.

## Testing, Testing, 1, 2, 3
Testing in software development is like checking the foundation of a building before moving in. It's essential to ensure everything is in order and functioning as expected. This initial step helps identify any issues early on, making it easier and less costly to fix them.

## Shift-left Paradigm
The Shift-left Paradigm is a methodology that emphasizes testing early and often in the software development lifecycle. Instead of testing after a product is nearly complete, testing is performed much earlier. This approach helps catch and fix issues sooner, which improves quality and reduces development time and costs. It's a proactive stance on testing that integrates it into every phase of development, encouraging all team members to consider testing and quality from the start.

## Test Driven Development (TDD)

## Unit Testing
Unit Testing involves breaking down the software into its smallest parts, or units, and testing each one individually. Unit tests are automated, run quickly, and are repeated often to ensure each unit continues to work correctly as changes are made.

### React Component Testing
Best Practice: Test user interactions and component output.
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


