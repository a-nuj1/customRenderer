const Fragment = Symbol("fragment");

// Custom createElement 
function createElement(type, props, ...children) {
  // Handle functional components
  if (typeof type === "function") {
    return type({ ...props, children });
  }

  return {
    type,
    props: props || {},
    children: children
      .flat()
      .filter(child => child !== null && child !== false && child !== undefined),
  };
}

// Custom render function to print structured output to the console
function render(element, indent = "") {
  if (typeof element === "string" || typeof element === "number") {
    console.log(indent + element);
    return;
  }

  // Handle Fragments
  if (element.type === Fragment) {
    element.children.forEach(child => render(child, indent));
    return;
  }

  const { type, props, children } = element;

  const propString = Object.entries(props)
    .map(([key, value]) => ` ${key}="${value}"`)
    .join("");

  // Self-closing tag (no children)
  if (!children || children.length === 0) {
    console.log(`${indent}<${type}${propString} />`);
    return;
  }

  // Opening tag
  console.log(`${indent}<${type}${propString}>`);

  // Render children
  children.forEach(child => render(child, indent + "  "));

  // Closing tag
  console.log(`${indent}</${type}>`);
}

// Components
function Title() {
  return createElement("h1", null, "Hello Anuj!");
}

function List() {
  return createElement("ul", null,
    createElement("li", null, "React"),
    createElement("li", null, "Renderer"),
    createElement("li", null, "Console")
  );
}

function App() {
  return createElement("div", { id: "root" },
    createElement(Title),
    createElement("p", null, "This is a custom renderer!"),
    createElement(List),
    createElement(Fragment, null,
      createElement("hr"),
      createElement("p", null, "Thanks for checking this out!")
    )
  );
}

// Render App
const myApp = createElement(App);
render(myApp);

