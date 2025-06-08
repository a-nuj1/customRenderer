#  Custom React Console Renderer

This project is a custom React-like renderer that outputs a virtual DOM structure directly to the **console** instead of the browser DOM.


---

## ✨ Features

- ✅ `createElement` implementation (like `React.createElement`)
- ✅ Custom `render()` that prints elements to the **console**
- ✅ Functional component support
- ✅ Fragment support (`<Fragment>` or nested children)
- ✅ Handles nested arrays of children
- ✅ Indentation and formatting similar to structured HTML
- ✅ Filters out `null`, `undefined`, and `false` values
- ✅ Supports self-closing tags like `<hr />`

---

## Example output : 
<div id="root">
  <h1>
    Hello Anuj!
  </h1>
  <p>
    This is a custom renderer!
  </p>
  <ul>
    <li>
      React
    </li>
    <li>
      Renderer
    </li>
    <li>
      Console
    </li>
  </ul>
  <hr />
  <p>
    Thanks for checking this out!
  </p>
</div>
