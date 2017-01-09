class Greeter {
    element: HTMLElement;
    span: HTMLElement;
    timerToken: number;

    constructor(element: HTMLElement) {
        this.element = element;
        this.element.innerHTML += "The time is: ";
        this.span = document.createElement("span");
        this.element.appendChild(this.span);
        this.span.innerText = new Date().toUTCString();
    }

    start() {
        // here is an ES6 lambda
        this.timerToken = setInterval(() => this.span.innerHTML = new Date().toUTCString(), 500);
    }

    stop() {
        clearTimeout(this.timerToken);
    }

}

window.onload = () => {
    var el = document.getElementById("content");
    var greeter = new Greeter(el);
    greeter.start();
};

// TODO:
// point out ES6 code in app.ts, e.g. lambdas
// run code and explain what it does
// show transcompiled code app.js
// point out usage of .map.js file
// note warnings if you make an error or badly type something
// note intellisense in editor
// go through build steps in csproj file props and targets. Note this won't work on the build server
// add in definitely typed libraries for moment and toastr and add references to app.ts
// add in libraries via NuGet for jQuery, moment and toastr
// into Index.html add css for toastr and js for jquery, moment, and toastr
// add in additional logic to app.ts
// demonstrate strongly typing, design time checking and new ES6 features
// see resulting ES5 code and working example in the page

