---
name: test-generation
description: Generate unit and integration tests for functions, classes, and modules. Use when user needs tests, asks about testing, or wants to improve code coverage.
license: MIT
metadata:
  author: example
  version: "1.0"
---

# Test Generation

Generate comprehensive tests for code.

## When to Use

- User asks to write tests
- User wants to test a function/module
- User mentions "unit test", "testing", "coverage"

## Process

1. Analyze the code to understand behavior
2. Identify test cases:
   - Happy path (expected inputs)
   - Edge cases (empty, null, boundary values)
   - Error cases (invalid inputs)
3. Generate tests matching project's test framework

## Test Structure

Follow AAA pattern:

```javascript
test('should [expected behavior] when [condition]', () => {
  // Arrange - set up test data
  const input = createTestData();
  
  // Act - call the function
  const result = functionUnderTest(input);
  
  // Assert - verify the result
  expect(result).toEqual(expected);
});
```

## Coverage Targets

| Case Type | Examples |
|-----------|----------|
| Happy path | Valid input, normal flow |
| Empty | Empty string, empty array, null |
| Boundary | 0, -1, max int, empty |
| Error | Invalid type, missing required |
| Async | Timeout, network failure |

## Framework Detection

- Look for `jest.config.js` → Jest
- Look for `vitest.config.js` → Vitest  
- Look for `pytest.ini` or `conftest.py` → pytest
- Look for `_test.go` files → Go testing
- Match existing test file patterns

## Naming Convention

```
[function]_[scenario]_[expected]

# Examples:
calculateTotal_emptyCart_returnsZero
validateEmail_invalidFormat_throwsError
fetchUser_networkError_retriesThreeTimes
```


