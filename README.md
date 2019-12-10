<h1>⚙️ useful-state</h1>
<p>
<img  src="https://github.com/MikeIbberson/useful-state/workflows/Node%20CI/badge.svg"  alt="Status" />
<a href='https://coveralls.io/github/MikeIbberson/useful-state?branch=master'><img src='https://coveralls.io/repos/github/MikeIbberson/useful-state/badge.svg?branch=master' alt='Coverage Status' /></a>
<a href="https://www.codacy.com/manual/MikeIbberson/useful-state?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=MikeIbberson/useful-state&amp;utm_campaign=Badge_Grade"><img src="https://api.codacy.com/project/badge/Grade/82987e1d1e93456ea8c9348752d241d0"/></a>
<img src='https://bettercodehub.com/edge/badge/MikeIbberson/useful-state?branch=master'>
</p> 

<p>Custom state hooks for simple UI goals.</p>

<h2>useOpen</h2>
<p>Use this to attach a ref to the open/close state of your UI component.

| Methods | Description                              | Arguments |
| ------- | ---------------------------------------- | --------- |
| `open`  | Assign truthy value to `isOpen` property |           |
| `close` | Assign falsy value to `isOpen` property  |           |

<h2>useToggle</h2>
<p>Super similar to the hook above, only it ships with a toggle method and no refs.</p>

| Methods  | Description                  | Arguments |
| -------- | ---------------------------- | --------- |
| `open`   | Assign truthy value to state |           |
| `close`  | Assign falsy value to state  |           |
| `toggle` | Inverts current state value  |           |

<h2>useValue</h2>
<p>Most often used with inputs; provides an easy way to track value changes and manage focus.</p>

| Methods    | Description                                  | Arguments |
| ---------- | -------------------------------------------- | --------- |
| `onFocus`  | Call the .focus() method on ref if it exists |           |
| `onClear`  | Clear state                                  |           |
| `onChange` | Assign target value to state                 | `event`   |
