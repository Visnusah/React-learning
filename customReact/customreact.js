function customRender(reactElement, mainContainer) {
/*
    const domElement = document.createElement(reactElement.type);
    domElement.innerHTML = reactElement.children;
    domElement.setAttribute('href', reactElement.props.href);
    domElement.setAttribute('target', reactElement.props.target);
    mainContainer.appendChild(domElement);
*/
const domElement = document.createElement(reactElement.type)
domElement.innerHTML = reactElement.children
for (const props in reactElement.props) {
    if (props === 'children') continue
    domElement.setAttribute(props, reactElement.props[props])
    }
    mainContainer.appendChild(domElement)
}
const reactElement = {
    type: "a",
    props : {
        href : "https://www.google.com",
        target : "_blank",
    },
    children : 'Click me To Visit Google'
}
const mainContainer = document.querySelector('#root')

customRender(reactElement, mainContainer)
