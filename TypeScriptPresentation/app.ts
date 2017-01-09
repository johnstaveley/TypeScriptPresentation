/// <reference path="scripts/typings/jquery/jquery.d.ts" />
/// <reference path="scripts/typings/moment/moment.d.ts" />
/// <reference path="scripts/typings/toastr/toastr.d.ts" />
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
        toastr.options.positionClass = "toast-bottom-full-width";
        toastr.options.timeOut = 2000;
    }

    start() {
        this.timerToken = setInterval(() => {
            this.span.innerHTML = new Date().toUTCString();
            let secondsPassed: number = moment(new Date()).seconds();
            let message: string = `${secondsPassed} seconds have passed`;
            if (secondsPassed % 30 === 0) {
                toastr.warning(message);
            } else if (secondsPassed % 10 === 0) {
                toastr.info(message);
            }
        }, 1000);
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
// see resulting ES5 code and working example in the page

