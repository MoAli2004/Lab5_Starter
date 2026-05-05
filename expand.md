# Expand Questions

## 1. Why is it important to put thought into your IDs & Classes?

IDs and classes connect HTML, CSS, and JavaScript. Well-named IDs and classes make it easier to style elements with CSS and select them in JavaScript. If they are poorly named, it becomes harder to maintain and debug the code, especially as projects grow.

## 2. What are Data attributes? Why might they be useful?

Data attributes are custom attributes in HTML that start with `data-`, like `data-value="123"`. They allow you to store extra information directly on elements. They are useful because JavaScript can easily access them using `element.dataset`. They help keep data organized without affecting the visual structure of the page.

## 3. What is a DOM fragment? Why are they powerful?

A DOM fragment is a lightweight container for grouping DOM elements before inserting them into the document. They are powerful because they reduce the number of updates to the actual DOM, which improves performance.

## 4. What is the point of a Virtual DOM?

A Virtual DOM is a copy of the real DOM kept in memory. Frameworks use it to compare changes and update only what is necessary in the real DOM. This improves performance and makes complex interfaces easier to manage, but it adds extra abstraction.

## 5. Why is class accessed as className in JavaScript?

In JavaScript, `class` is a reserved keyword used for defining classes in code. Because of this, the DOM uses `className` instead to avoid conflicts.

## 6. Difference between addEventListener() and onclick?

`addEventListener()` allows multiple event handlers to be added to the same element and gives more control. `onclick` only allows one handler and can be overwritten. Therefore, `addEventListener()` is more flexible and preferred in most cases.