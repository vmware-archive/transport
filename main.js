(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/runner/work/transport/transport/documentation/src/main.ts */"zUnb");


/***/ }),

/***/ "320Y":
/*!***************************************************!*\
  !*** ./src/app/shared/header/header.component.ts ***!
  \***************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _clr_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @clr/angular */ "8MG2");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/*
 * Copyright 2021 VMware, Inc.
 * SPDX-License-Identifier: BSD-2-Clause
 */




class HeaderComponent {
    constructor() { }
    ngOnInit() {
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["transport-header"]], decls: 16, vars: 1, consts: [[1, "header-6"], [1, "branding"], ["href", "/transport"], ["src", "/transport/assets/transport-logo-dark.svg", 1, "transport-logo"], [1, "title"], [1, "header-nav", 3, "clr-nav-level"], ["routerLink", "/about", "routerLinkActive", "active", 1, "nav-link", "nav-text"], ["routerLink", "/golang", "routerLinkActive", "active", 1, "nav-link", "nav-text"], ["routerLink", "/java", "routerLinkActive", "active", 1, "nav-link", "nav-text"], ["routerLink", "/ts", "routerLinkActive", "active", 1, "nav-link", "nav-text"], [1, "header-actions"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "clr-header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Transport");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "About");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Golang");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Java");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "TypeScript");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("clr-nav-level", 1);
    } }, directives: [_clr_angular__WEBPACK_IMPORTED_MODULE_1__["ClrHeader"], _clr_angular__WEBPACK_IMPORTED_MODULE_1__["NavDetectionOompaLoompa"], _clr_angular__WEBPACK_IMPORTED_MODULE_1__["ClrNavLevel"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkActive"]], styles: [".transport-logo[_ngcontent-%COMP%] {\n  width: 50px;\n  margin-right: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2hlYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtBQUNKIiwiZmlsZSI6ImhlYWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50cmFuc3BvcnQtbG9nbyB7XG4gICAgd2lkdGg6IDUwcHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'transport-header',
                templateUrl: './header.component.html',
                styleUrls: ['./header.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "6wZ4":
/*!*************************************************************************!*\
  !*** ./src/app/typescript/iframes/iframe-demo/iframe-demo.component.ts ***!
  \*************************************************************************/
/*! exports provided: IframeDemoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IframeDemoComponent", function() { return IframeDemoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _vmw_transport_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @vmw/transport/core */ "/bWC");
/* harmony import */ var _vmw_transport__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @vmw/transport */ "D9KC");
/* harmony import */ var _vmw_transport__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_vmw_transport__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");





const _c0 = function (a1) { return { "message-count": true, flash: a1 }; };
class IframeDemoComponent extends _vmw_transport_core__WEBPACK_IMPORTED_MODULE_1__["AbstractBase"] {
    constructor() {
        super('IFrameDemoComponent');
        this.messageCount = 0;
        this.flash = false;
        this.buttonDisabled = false;
    }
    ngOnInit() {
        // enable message proxy.
        this.bus.enableMessageProxy({
            protectedChannels: ['chatty-chat'],
            proxyType: _vmw_transport__WEBPACK_IMPORTED_MODULE_2__["ProxyType"].Child,
            parentOrigin: `https://vmware.github.io`,
            acceptedOrigins: [
                'http://localhost:4200',
                'https://vmware.github.io'
            ],
            targetAllFrames: true,
            targetSpecificFrames: null,
        });
        // listen to chatty chat, increment message count for every message that comes in.
        this.bus.listenStream('chatty-chat')
            .handle(() => {
            // increase message count.
            this.messageCount++;
            // flash message
            this.flash = true;
            this.bus.api.tickEventLoop(() => {
                // re-enable button and unflash message count after a second.
                this.buttonDisabled = false;
                this.flash = false;
            }, 1000);
        });
    }
    sendChat() {
        if (!this.buttonDisabled) {
            // disable button.
            this.buttonDisabled = true;
            // send an empty message to chatty-chat.
            this.bus.sendResponseMessage('chatty-chat', {});
        }
    }
}
IframeDemoComponent.ɵfac = function IframeDemoComponent_Factory(t) { return new (t || IframeDemoComponent)(); };
IframeDemoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: IframeDemoComponent, selectors: [["transport-iframe-demo"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 8, vars: 5, consts: [[1, "chat-container"], [1, "message-label"], [3, "ngClass"], [1, "broadcast"], [1, "btn", "btn-primary-outline", 3, "disabled", "click"]], template: function IframeDemoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Messsages Received ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function IframeDemoComponent_Template_button_click_6_listener() { return ctx.sendChat(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Broadcast Something");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c0, ctx.flash));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.messageCount, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.buttonDisabled);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"]], styles: [".chat-container[_ngcontent-%COMP%] {\n  width: 100%;\n  margin: 0px;\n  min-height: 300px;\n  background: #0e161b;\n}\n\n.message-count[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: 3em;\n  color: #93b3c3;\n}\n\n.message-label[_ngcontent-%COMP%] {\n  padding-top: 60px;\n  text-align: center;\n  font-size: 1.3em;\n  color: #fff;\n  margin-bottom: 40px;\n}\n\n.broadcast[_ngcontent-%COMP%] {\n  margin-top: 40px;\n  text-align: center;\n  margin-bottom: 20px;\n}\n\n.flash[_ngcontent-%COMP%] {\n  animation: color_change 1s;\n}\n\n@keyframes color_change {\n  from {\n    background-color: orange;\n    color: white;\n    font-size: 6em;\n  }\n  to {\n    background-color: #0e161b;\n    color: #93b3c3;\n    font-size: 3em;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2lmcmFtZS1kZW1vLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0FBQ0o7O0FBRUE7RUFDSSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0FBQ0o7O0FBR0E7RUFDSSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7QUFBSjs7QUFHQTtFQUNJLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQUFKOztBQUdBO0VBQ0ksMEJBQUE7QUFBSjs7QUFHQTtFQUNJO0lBQ0ksd0JBQUE7SUFDQSxZQUFBO0lBQ0EsY0FBQTtFQUFOO0VBRUU7SUFDSSx5QkFBQTtJQUNBLGNBQUE7SUFDQSxjQUFBO0VBQU47QUFDRiIsImZpbGUiOiJpZnJhbWUtZGVtby5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jaGF0LWNvbnRhaW5lciB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luOiAwcHg7XG4gICAgbWluLWhlaWdodDogMzAwcHg7XG4gICAgYmFja2dyb3VuZDogIzBlMTYxYjtcbn1cblxuLm1lc3NhZ2UtY291bnQge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LXNpemU6IDNlbTtcbiAgICBjb2xvcjogIzkzYjNjMztcblxufVxuXG4ubWVzc2FnZS1sYWJlbCB7XG4gICAgcGFkZGluZy10b3A6IDYwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogMS4zZW07XG4gICAgY29sb3I6ICNmZmY7XG4gICAgbWFyZ2luLWJvdHRvbTogNDBweDtcbn1cblxuLmJyb2FkY2FzdCB7XG4gICAgbWFyZ2luLXRvcDogNDBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cblxuLmZsYXNoIHtcbiAgICBhbmltYXRpb246IGNvbG9yX2NoYW5nZSAxcztcbn1cblxuQGtleWZyYW1lcyBjb2xvcl9jaGFuZ2Uge1xuICAgIGZyb20ge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBvcmFuZ2U7XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgZm9udC1zaXplOiA2ZW07XG4gICAgfVxuICAgIHRvIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzBlMTYxYjtcbiAgICAgICAgY29sb3I6ICM5M2IzYzM7XG4gICAgICAgIGZvbnQtc2l6ZTogM2VtO1xuICAgIH1cbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](IframeDemoComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'transport-iframe-demo',
                templateUrl: './iframe-demo.component.html',
                styleUrls: ['./iframe-demo.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "7FZi":
/*!***********************************************************!*\
  !*** ./src/app/shared/quickstart/quickstart.component.ts ***!
  \***********************************************************/
/*! exports provided: QuickstartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuickstartComponent", function() { return QuickstartComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _models_base_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/base.component */ "JGbl");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _animated_console_animated_console_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../animated-console/animated-console.component */ "CyPm");
/*
 * Copyright 2021 VMware, Inc.
 * SPDX-License-Identifier: BSD-2-Clause
 */





function QuickstartComponent_section_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "transport-animated-console", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const cmd_r1 = ctx.$implicit;
    const i_r2 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](cmd_r1.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("inputCommand", cmd_r1.command)("helperTxt", cmd_r1.notes)("consoleTheme", "macOS")("loopAnimation", false)("delay", i_r2 * 1000);
} }
class QuickstartComponent extends _models_base_component__WEBPACK_IMPORTED_MODULE_1__["BaseComponent"] {
    constructor() {
        super('QuickStartComponent');
    }
    ngOnInit() {
    }
}
QuickstartComponent.ɵfac = function QuickstartComponent_Factory(t) { return new (t || QuickstartComponent)(); };
QuickstartComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: QuickstartComponent, selectors: [["transport-quickstart"]], inputs: { commands: "commands" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 1, vars: 1, consts: [[4, "ngFor", "ngForOf"], [1, "code-step"], [3, "inputCommand", "helperTxt", "consoleTheme", "loopAnimation", "delay"]], template: function QuickstartComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, QuickstartComponent_section_0_Template, 4, 6, "section", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.commands);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _animated_console_animated_console_component__WEBPACK_IMPORTED_MODULE_3__["AnimatedConsoleComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJxdWlja3N0YXJ0LmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](QuickstartComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'transport-quickstart',
                templateUrl: './quickstart.component.html',
                styleUrls: ['./quickstart.component.scss']
            }]
    }], function () { return []; }, { commands: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "84zG":
/*!******************************************!*\
  !*** ./src/app/about/about.component.ts ***!
  \******************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _clr_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @clr/angular */ "8MG2");
/* harmony import */ var _shared_header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/header/header.component */ "320Y");
/* harmony import */ var _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/footer/footer.component */ "jQpT");
/*
 * Copyright 2021 VMware, Inc.
 * SPDX-License-Identifier: BSD-2-Clause
 */





class AboutComponent {
    constructor() { }
    ngOnInit() {
    }
}
AboutComponent.ɵfac = function AboutComponent_Factory(t) { return new (t || AboutComponent)(); };
AboutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AboutComponent, selectors: [["transport-about"]], decls: 59, vars: 0, consts: [[1, "content-container"], [1, "content-area"], ["id", "about-content"], [1, "about-content-container"], [1, "about-content-cols"], [1, "sub-title"], [1, "clr-row", "video-list"], [1, "clr-col-lg-6", "clr-col-md-12", "clr-col-sm-12"], ["src", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtrustConstantResourceUrl"]("https://www.youtube.com/embed/k-KDPtCQyls"), "frameborder", "0", "allow", "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture", "allowfullscreen", "", 1, "video"], [1, "no-margin"], ["href", "https://vmware.com"]], template: function AboutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "clr-main-container");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "transport-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "section", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "About Transport");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h3", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Transport is a full stack, simple, fast, expandable application event bus for your applications. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "iframe", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " Transport is an event bus, that allows application developers to build components that can talk to one another, really easily. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " It provides a standardized and simple API, implemented in multiple languages, to allow any individual component inside your applications to talk to one another. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " It really comes to life when you use it to send messages, requests, responses and events around your backend and front-end. Your Java or Golang backend can stream messages to your UI components, as if they were sitting right next to each other. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " Channels can be extended to major brokers like Kafka or RabbitMQ, so Transport becomes an 'on/off-ramp' for your main sources of truth. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Why is using this different from using Kafka or RabbitMQ?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "h3", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, " Transport standardizes, encapsulates and simplifies pub-sub, so you don't have to know it's there. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, " Managing observables, subscriptions, connections, sessions, web-sockets, wire protocols, payloads, transactions, receipts and more is a massive pain in the neck. This is all stuff and engineer does not want to have to waste time on, when trying to get a backend to stream data from a backend or service, to a client or UI. Wasting hours and hours trying to configure, test, debug, discover and wire the required components together. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Transport handles all that for you.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "h3", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, " Lets use a house as metaphor for your application. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, " If your want to take a shower, you turn on the tap and water comes out. The water comes from the main high pressure pipe outside your home in the street. The water makes its way from the main pipe in the street, into your house via plumbing, and is then streamed into your shower by a tap. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Transport is the equivalent of the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "water pipes and taps");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, " in your house.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Kafka or RabbitMQ would be the equivalent of the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "main pipe");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, " in the street. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Who created it?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "h3", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, " Transport was created by ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "VMware");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, ". ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, " It's used in a number of different products, in multiple different ways. It was created to solve very real and consistent problems engineers and architects face when building reactive and event driven, asynchronous applications. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "transport-footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_clr_angular__WEBPACK_IMPORTED_MODULE_1__["ClrMainContainer"], _clr_angular__WEBPACK_IMPORTED_MODULE_1__["MainContainerWillyWonka"], _shared_header_header_component__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"], _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"]], styles: ["#about-content[_ngcontent-%COMP%] {\n  background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0) 50%);\n}\n\n.main-container[_ngcontent-%COMP%]   .content-container[_ngcontent-%COMP%]   .content-area[_ngcontent-%COMP%] {\n  padding: 0;\n}\n\n.about-content-cols[_ngcontent-%COMP%] {\n  border-radius: 5px;\n  padding: 20px;\n}\n\n.about-content-container[_ngcontent-%COMP%] {\n  min-height: 300px;\n  width: 100%;\n  max-width: 1248px;\n  margin: 0 auto;\n  z-index: 1;\n  position: relative;\n}\n\n.video[_ngcontent-%COMP%] {\n  width: 560px;\n  height: 315px;\n}\n\n.video-list[_ngcontent-%COMP%] {\n  margin-top: 30px;\n}\n\n.video-title[_ngcontent-%COMP%] {\n  margin-top: 0;\n}\n\n.no-margin[_ngcontent-%COMP%] {\n  margin-top: 0;\n}\n\nh1[_ngcontent-%COMP%] {\n  margin-top: 0;\n}\n\n@media (max-width: 1024px) {\n  .video[_ngcontent-%COMP%] {\n    width: 480px;\n  }\n}\n\n@media (max-width: 425px) {\n  .video-title[_ngcontent-%COMP%] {\n    margin-top: 10px;\n  }\n\n  .video[_ngcontent-%COMP%] {\n    width: 375px;\n  }\n\n  .about-content-container[_ngcontent-%COMP%] {\n    min-height: 300px;\n    width: 100%;\n    max-width: 1248px;\n    margin: 0 auto;\n    z-index: 1;\n    position: relative;\n  }\n}\n\n@media (max-width: 375px) {\n  .video[_ngcontent-%COMP%] {\n    width: 335px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2Fib3V0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kseUZBQUE7QUFDSjs7QUFFQTtFQUNJLFVBQUE7QUFDSjs7QUFFQTtFQUNJLGtCQUFBO0VBQ0EsYUFBQTtBQUNKOztBQUVBO0VBQ0ksaUJBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0FBQ0o7O0FBR0E7RUFDSSxZQUFBO0VBQ0EsYUFBQTtBQUFKOztBQUdBO0VBQ0ksZ0JBQUE7QUFBSjs7QUFHQTtFQUNJLGFBQUE7QUFBSjs7QUFHQTtFQUNJLGFBQUE7QUFBSjs7QUFHQTtFQUNJLGFBQUE7QUFBSjs7QUFHQTtFQUdJO0lBQ0ksWUFBQTtFQUZOO0FBQ0Y7O0FBTUE7RUFHSTtJQUNJLGdCQUFBO0VBTk47O0VBU0U7SUFDSSxZQUFBO0VBTk47O0VBU0U7SUFDSSxpQkFBQTtJQUNBLFdBQUE7SUFDQSxpQkFBQTtJQUNBLGNBQUE7SUFDQSxVQUFBO0lBQ0Esa0JBQUE7RUFOTjtBQUNGOztBQVdBO0VBR0k7SUFDSSxZQUFBO0VBWE47QUFDRiIsImZpbGUiOiJhYm91dC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNhYm91dC1jb250ZW50IHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCByZ2JhKDAsMCwwLDAuNzApIDAlLHJnYmEoMCwwLDAsMCkgNTAlKTtcbn1cblxuLm1haW4tY29udGFpbmVyIC5jb250ZW50LWNvbnRhaW5lciAuY29udGVudC1hcmVhIHtcbiAgICBwYWRkaW5nOiAwO1xufVxuXG4uYWJvdXQtY29udGVudC1jb2xzIHtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgcGFkZGluZzogMjBweFxufVxuXG4uYWJvdXQtY29udGVudC1jb250YWluZXIge1xuICAgIG1pbi1oZWlnaHQ6IDMwMHB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1heC13aWR0aDogMTI0OHB4O1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIHotaW5kZXg6IDE7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG59XG5cbi52aWRlbyB7XG4gICAgd2lkdGg6IDU2MHB4O1xuICAgIGhlaWdodDogMzE1cHg7XG59XG5cbi52aWRlby1saXN0IHtcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xufVxuXG4udmlkZW8tdGl0bGUge1xuICAgIG1hcmdpbi10b3A6IDA7XG59XG5cbi5uby1tYXJnaW4ge1xuICAgIG1hcmdpbi10b3A6IDA7XG59XG5cbmgxIHtcbiAgICBtYXJnaW4tdG9wOiAwO1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogMTAyNHB4KSB7XG5cblxuICAgIC52aWRlbyB7XG4gICAgICAgIHdpZHRoOiA0ODBweDtcbiAgICB9XG5cbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDQyNXB4KSB7XG5cblxuICAgIC52aWRlby10aXRsZSB7XG4gICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgfVxuXG4gICAgLnZpZGVvIHtcbiAgICAgICAgd2lkdGg6IDM3NXB4O1xuICAgIH1cblxuICAgIC5hYm91dC1jb250ZW50LWNvbnRhaW5lciB7XG4gICAgICAgIG1pbi1oZWlnaHQ6IDMwMHB4O1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgbWF4LXdpZHRoOiAxMjQ4cHg7XG4gICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICB6LWluZGV4OiAxO1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgICB9XG5cbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDM3NXB4KSB7XG5cblxuICAgIC52aWRlbyB7XG4gICAgICAgIHdpZHRoOiAzMzVweDtcbiAgICB9XG5cbn1cblxuXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AboutComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'transport-about',
                templateUrl: './about.component.html',
                styleUrls: ['./about.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "CyPm":
/*!***********************************************************************!*\
  !*** ./src/app/shared/animated-console/animated-console.component.ts ***!
  \***********************************************************************/
/*! exports provided: AnimatedConsoleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnimatedConsoleComponent", function() { return AnimatedConsoleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _clr_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @clr/angular */ "8MG2");
/*
 * Copyright 2021 VMware, Inc.
 * SPDX-License-Identifier: BSD-2-Clause
 */






const _c0 = ["cmdInputBox"];
function AnimatedConsoleComponent_ng_container_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "clr-icon", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Copy ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function AnimatedConsoleComponent_ng_container_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "clr-icon", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Copied! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function AnimatedConsoleComponent_kbd_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "kbd", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.helperTxt);
} }
function AnimatedConsoleComponent_kbd_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "kbd", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r3.display);
} }
function AnimatedConsoleComponent_input_19_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "input", 21, 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup.enter", function AnimatedConsoleComponent_input_19_Template_input_keyup_enter_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.executeLiveCommand(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("placeholder", ctx_r4.inputCommand);
} }
function AnimatedConsoleComponent_ng_container_20_kbd_1_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const out_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", out_r12, " ");
} }
function AnimatedConsoleComponent_ng_container_20_kbd_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "kbd", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AnimatedConsoleComponent_ng_container_20_kbd_1_div_1_Template, 2, 1, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r9.cmdOutput);
} }
function AnimatedConsoleComponent_ng_container_20_kbd_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "kbd", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AnimatedConsoleComponent_ng_container_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AnimatedConsoleComponent_ng_container_20_kbd_1_Template, 2, 1, "kbd", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AnimatedConsoleComponent_ng_container_20_kbd_2_Template, 2, 0, "kbd", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.interactiveMode);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r5.interactiveMode && ctx_r5.commandExecuted);
} }
const _c1 = ["*"];
class AnimatedConsoleComponent {
    constructor(renderer, elRef) {
        this.renderer = renderer;
        this.elRef = elRef;
        // console theme holds a list of classes CSS styling. currently the following options are available:
        // look and feel:
        // - blue: enables blue color theme. if omitted, it defaults to the gray/black theme
        // operation system:
        // - windows: use the Windows-style title bar
        // - macOS: use the macOS-style title bar
        this.consoleTheme = 'blue macOS';
        this.loopAnimation = false;
        this.disableAnimation = false;
        this.disableCommandOutput = false;
        this.interactiveMode = false;
        this.cmdOutputObservable = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])('');
        this.cmdExecutionComplete = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.cmdOutput = [];
        this.display = '';
    }
    // set minimum height if specified by the user through [consoleMinHeight] input parameter. then proceed to
    // set the terminal to either interactive mode or autotype mode based on [interactiveConsole].
    ngOnInit() {
        this.renderer.setStyle(this.elRef.nativeElement.querySelector('.console-body'), 'min-height', this.consoleMinHeight || 'auto');
        if (this.interactiveMode) {
            this.interact();
        }
        else {
            // if disableAnimation flag is enabled we project inputCommand into display as static text
            if (this.disableAnimation) {
                this.display = this.inputCommand;
            }
            else {
                this.autotype(this.loopAnimation);
            }
        }
    }
    ngOnDestroy() {
        if (this.autotypeSubscription) {
            this.autotypeSubscription.unsubscribe();
        }
    }
    // interact will set up an event listener to focus on the text input box when clicked anywhere inside the
    // component so it creates an illusion of typing in a real terminal
    interact() {
        const inputFocusObs = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["fromEvent"])(this.elRef.nativeElement, 'mouseup');
        inputFocusObs.subscribe(() => {
            this.cmdInputBox.nativeElement.focus();
        });
    }
    // executeLiveCommand will simulate running a live command and printing out its output onto the terminal.
    // this is done through liveCmdExecutionObservable which is an observable of string type. while this observable
    // could be used to simulate executing a command, it could be used for live code execution by hooking it up with an
    // eve platform's channel so that every output log streamed from the websocket could be relayed to the observable.
    executeLiveCommand() {
        // clear the output first
        this.cmdOutput = [];
        // if command input is empty, do nothing
        if (!this.cmdInputBox.nativeElement.value.trim()) {
            return;
        }
        // execute the provided function that invokes the command in the backend.
        this.cmdOutput = [];
        this.cmdOutputObservable.subscribe((line) => {
            this.cmdOutput.push(line);
        }, (err) => console.error(err), () => {
            this.cmdExecutionComplete.emit(this.cmdOutput);
        });
    }
    // autotype simulates typing of inputCommand character by character into this.display. once the command has been
    // completely typed, a little delay will ensue before showing the command outputs that were given as ng-content
    // content by the user which is 100% customizable. once the output has been printed out, if loop boolean value is
    // set to true, the output will be cleared and the typing animation will start from beginning after a preset interval.
    autotype(loop = false) {
        this.display = '';
        const typerObs = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["interval"])(AnimatedConsoleComponent.CARET_PROGRESSION_INTERVAL)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeWhile"])((v) => v < this.inputCommand.length)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["delay"])(this.delay));
        const outputsObs = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["timer"])(AnimatedConsoleComponent.EXECUTION_DELAY).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMapTo"])(this.cmdOutputObservable), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(line => {
            this.cmdOutput.push(line);
            this.commandExecuted = true;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMapTo"])(rxjs__WEBPACK_IMPORTED_MODULE_1__["EMPTY"]));
        const resetObs = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["timer"])(AnimatedConsoleComponent.ANIMATION_RESET_INTERVAL).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(() => {
            if (loop) {
                this.commandExecuted = false;
                this.cmdOutput = [];
            }
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMapTo"])(rxjs__WEBPACK_IMPORTED_MODULE_1__["EMPTY"]));
        this.autotypeSubscription = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["concat"])(typerObs, outputsObs, resetObs).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["repeat"])(loop ? -1 : 1))
            .subscribe((v) => {
            if (this.display.length === this.inputCommand.length) {
                this.display = '';
            }
            this.display += this.inputCommand[v];
        });
        return this.autotypeSubscription;
    }
    copyToClipboard() {
        const start = this.elRef.nativeElement.querySelector('div.console-body .console-prompt:not(.comment)');
        const end = this.elRef.nativeElement.querySelector('div.console-body .console-prompt:last-of-type');
        const range = new Range();
        window.getSelection().removeAllRanges();
        range.setStartBefore(start);
        range.setEndAfter(end);
        window.getSelection().addRange(range);
        if (window.getSelection().toString().length > 0) {
            this.copiedToClipboard = true;
            document.execCommand('copy');
            setTimeout(() => {
                this.copiedToClipboard = false;
            }, AnimatedConsoleComponent.COPY_ANIMATION_RESET_INTERVAL);
        }
    }
}
AnimatedConsoleComponent.CARET_PROGRESSION_INTERVAL = 50;
AnimatedConsoleComponent.EXECUTION_DELAY = 300;
AnimatedConsoleComponent.ANIMATION_RESET_INTERVAL = 3000;
AnimatedConsoleComponent.COPY_ANIMATION_RESET_INTERVAL = 1500;
AnimatedConsoleComponent.ɵfac = function AnimatedConsoleComponent_Factory(t) { return new (t || AnimatedConsoleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])); };
AnimatedConsoleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AnimatedConsoleComponent, selectors: [["transport-animated-console"]], viewQuery: function AnimatedConsoleComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.cmdInputBox = _t.first);
    } }, inputs: { inputCommand: "inputCommand", consoleMinHeight: "consoleMinHeight", consoleTheme: "consoleTheme", delay: "delay", loopAnimation: "loopAnimation", disableAnimation: "disableAnimation", disableCommandOutput: "disableCommandOutput", interactiveMode: "interactiveMode", cmdOutputObservable: "cmdOutputObservable", helperTxt: "helperTxt" }, outputs: { cmdExecutionComplete: "cmdExecutionComplete" }, ngContentSelectors: _c1, decls: 21, vars: 7, consts: [[1, "console", "drop-shadow", 3, "ngClass"], [1, "console-head"], [1, "console-control", "console-control-grayscale"], [1, "console-control", "win-control", "console-control-close"], ["shape", "window-close"], [1, "console-control", "win-control", "console-control-max"], ["shape", "window-max"], [1, "console-control", "win-control", "console-control-min"], ["shape", "window-min"], [1, "console-body"], [1, "copy-to-clipboard-btn-container"], [1, "copy-to-clipboard-btn", "btn", "btn-link", 3, "click"], [4, "ngIf"], ["class", "cmdHelperTxt", 4, "ngIf"], [1, "console-prompt"], ["class", "cmdInput", 4, "ngIf"], ["type", "text", "class", "cmdInputBox", 3, "placeholder", "keyup.enter", 4, "ngIf"], ["shape", "copy-to-clipboard"], ["shape", "check"], [1, "cmdHelperTxt"], [1, "cmdInput"], ["type", "text", 1, "cmdInputBox", 3, "placeholder", "keyup.enter"], ["cmdInputBox", ""], ["class", "output-text", 4, "ngIf"], [1, "output-text"], [4, "ngFor", "ngForOf"]], template: function AnimatedConsoleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "clr-icon", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "clr-icon", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "clr-icon", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AnimatedConsoleComponent_Template_a_click_13_listener() { return ctx.copyToClipboard(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, AnimatedConsoleComponent_ng_container_14_Template, 3, 0, "ng-container", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, AnimatedConsoleComponent_ng_container_15_Template, 3, 0, "ng-container", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, AnimatedConsoleComponent_kbd_16_Template, 2, 1, "kbd", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, AnimatedConsoleComponent_kbd_18_Template, 2, 1, "kbd", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, AnimatedConsoleComponent_input_19_Template, 2, 1, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, AnimatedConsoleComponent_ng_container_20_Template, 3, 2, "ng-container", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.consoleTheme);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.copiedToClipboard);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.copiedToClipboard);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.helperTxt && ctx.helperTxt.trim().length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.interactiveMode);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.interactiveMode);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.disableCommandOutput);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"], _clr_angular__WEBPACK_IMPORTED_MODULE_4__["ClrIconCustomTag"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"]], styles: [".console[_ngcontent-%COMP%] {\n  text-align: left;\n  border-radius: 5px;\n  margin-bottom: 10px;\n}\n.console[_ngcontent-%COMP%]   .console-head[_ngcontent-%COMP%] {\n  overflow: hidden;\n  background-color: #333333;\n  padding: 7px 12px;\n  border-top-left-radius: 5px;\n  border-top-right-radius: 5px;\n}\n.console[_ngcontent-%COMP%]   .console-control-grayscale[_ngcontent-%COMP%] {\n  background-color: #8c8c8c;\n}\n.console[_ngcontent-%COMP%]   .console-control-red[_ngcontent-%COMP%] {\n  background-color: #ff6057;\n}\n.console[_ngcontent-%COMP%]   .console-control-yellow[_ngcontent-%COMP%] {\n  background-color: #ffc22e;\n}\n.console[_ngcontent-%COMP%]   .console-control-green[_ngcontent-%COMP%] {\n  background-color: #28ca40;\n}\n.console[_ngcontent-%COMP%]   .console-body[_ngcontent-%COMP%] {\n  background-color: #000000;\n  padding: 20px 17px 20px;\n  border-bottom-left-radius: 5px;\n  border-bottom-right-radius: 5px;\n}\n.console[_ngcontent-%COMP%]   .console-body[_ngcontent-%COMP%]   .copy-to-clipboard-btn-container[_ngcontent-%COMP%] {\n  position: relative;\n  float: right;\n  height: 0;\n  width: 0;\n  left: -120px;\n  top: -12px;\n}\n.console[_ngcontent-%COMP%]   .console-body[_ngcontent-%COMP%]   .copy-to-clipboard-btn-container[_ngcontent-%COMP%]   .copy-to-clipboard-btn[_ngcontent-%COMP%] {\n  position: relative;\n  width: 125px;\n  color: white;\n  text-align: right;\n}\n.console[_ngcontent-%COMP%]   .console-body[_ngcontent-%COMP%]   .cmdInput[_ngcontent-%COMP%], .console[_ngcontent-%COMP%]   .console-body[_ngcontent-%COMP%]   .cmdHelperTxt[_ngcontent-%COMP%] {\n  overflow-wrap: break-word;\n  max-width: calc(100% - 130px);\n  display: inline-block;\n}\n.console[_ngcontent-%COMP%]   .console-body[_ngcontent-%COMP%]   .cmdHelperTxt[_ngcontent-%COMP%] {\n  color: #179bd3;\n  font-size: 15px;\n  margin-bottom: 5px;\n}\n.console[_ngcontent-%COMP%]   .console-prompt[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 5px;\n  font-family: \"Source Code Pro\", monospace;\n  font-size: 15px;\n  color: #FFFFFF;\n}\n.console[_ngcontent-%COMP%]   .console-prompt[_ngcontent-%COMP%]::before {\n  vertical-align: top;\n  content: \"$\";\n  padding-right: 15px;\n  -webkit-user-select: none;\n          user-select: none;\n  color: fuchsia;\n  font-weight: bold;\n}\n.console.blue[_ngcontent-%COMP%]   .console-head[_ngcontent-%COMP%] {\n  background-color: #001b41;\n}\n.console.blue[_ngcontent-%COMP%]   .console-control[_ngcontent-%COMP%] {\n  color: #61717D;\n}\n.console.blue[_ngcontent-%COMP%]   .console-body[_ngcontent-%COMP%] {\n  background-color: #012456;\n}\n.console.macOS[_ngcontent-%COMP%]   .console-control-min[_ngcontent-%COMP%], .console.macOS[_ngcontent-%COMP%]   .console-control-max[_ngcontent-%COMP%], .console.macOS[_ngcontent-%COMP%]   .console-control-close[_ngcontent-%COMP%] {\n  display: none;\n}\n.console.macOS[_ngcontent-%COMP%]   .console-control[_ngcontent-%COMP%] {\n  float: left;\n  width: 10px;\n  height: 10px;\n  border-radius: 50%;\n  margin-right: 7px;\n  box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.2);\n}\n.console.windows[_ngcontent-%COMP%]   .console-head[_ngcontent-%COMP%] {\n  border-top-left-radius: unset;\n  border-top-right-radius: unset;\n  padding: 0 12px;\n}\n.console.windows[_ngcontent-%COMP%]   .win-control.console-control-max[_ngcontent-%COMP%], .console.windows[_ngcontent-%COMP%]   .win-control.console-control-min[_ngcontent-%COMP%] {\n  margin-right: 30px;\n}\n.console.windows[_ngcontent-%COMP%]   .win-control.console-control-close[_ngcontent-%COMP%] {\n  margin-right: 15px;\n}\n.console.windows[_ngcontent-%COMP%]   .console-control[_ngcontent-%COMP%] {\n  float: right;\n}\n.console.windows[_ngcontent-%COMP%]   .console-control-red[_ngcontent-%COMP%], .console.windows[_ngcontent-%COMP%]   .console-control-yellow[_ngcontent-%COMP%], .console.windows[_ngcontent-%COMP%]   .console-control-green[_ngcontent-%COMP%] {\n  display: none;\n}\n.console.windows[_ngcontent-%COMP%]   .console-prompt[_ngcontent-%COMP%]   .cmdInput[_ngcontent-%COMP%], .console.windows[_ngcontent-%COMP%]   .console-prompt[_ngcontent-%COMP%]   .cmdHelperTxt[_ngcontent-%COMP%] {\n  max-width: calc(82% - 130px) !important;\n}\n.console.windows[_ngcontent-%COMP%]   .console-prompt[_ngcontent-%COMP%]::before {\n  vertical-align: top;\n  content: \"PS C:\\\\>\";\n  color: white;\n}\n.drop-shadow[_ngcontent-%COMP%] {\n  box-shadow: 0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 1px 10px 0 rgba(0, 0, 0, 0.12), 0 2px 4px -1px rgba(0, 0, 0, 0.2);\n}\nkbd.output-text[_ngcontent-%COMP%] {\n  color: white;\n}\ninput.cmdInputBox[_ngcontent-%COMP%] {\n  background-color: transparent;\n  font-family: \"Roboto Mono\", monospace;\n  outline: none;\n  color: white;\n  width: 85%;\n  height: auto;\n  border: none;\n}\ndiv.clipboard-copied-banner[_ngcontent-%COMP%] {\n  width: auto;\n  height: 0;\n  text-align: right;\n  position: relative;\n  bottom: 8px;\n  font-family: \"Roboto Mono\", monospace;\n  color: #bfff4a;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2FuaW1hdGVkLWNvbnNvbGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUFDSjtBQUNJO0VBQ0ksZ0JBQUE7RUFDQSx5QkFBQTtFQUNBLGlCQUFBO0VBQ0EsMkJBQUE7RUFDQSw0QkFBQTtBQUNSO0FBRUk7RUFDSSx5QkFBQTtBQUFSO0FBR0k7RUFDSSx5QkFBQTtBQURSO0FBSUk7RUFDSSx5QkFBQTtBQUZSO0FBS0k7RUFDSSx5QkFBQTtBQUhSO0FBTUk7RUFDSSx5QkFBQTtFQUNBLHVCQUFBO0VBQ0EsOEJBQUE7RUFDQSwrQkFBQTtBQUpSO0FBTVE7RUFDSSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0FBSlo7QUFNWTtFQUNJLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtBQUpoQjtBQVFRO0VBQ0kseUJBQUE7RUFDQSw2QkFBQTtFQUNBLHFCQUFBO0FBTlo7QUFTUTtFQUNJLGNBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUFQWjtBQVdJO0VBQ0ksY0FBQTtFQUNBLGtCQUFBO0VBQ0EseUNBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBQVRSO0FBWUk7RUFDSSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO1VBQUEsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7QUFWUjtBQWNRO0VBQ0kseUJBQUE7QUFaWjtBQWVRO0VBQ0ksY0FBQTtBQWJaO0FBZ0JRO0VBQ0kseUJBQUE7QUFkWjtBQW1CUTtFQUNJLGFBQUE7QUFqQlo7QUFvQlE7RUFDSSxXQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsMENBQUE7QUFsQlo7QUF1QlE7RUFDSSw2QkFBQTtFQUNBLDhCQUFBO0VBQ0EsZUFBQTtBQXJCWjtBQXlCWTtFQUNJLGtCQUFBO0FBdkJoQjtBQTBCWTtFQUNJLGtCQUFBO0FBeEJoQjtBQTRCUTtFQUNJLFlBQUE7QUExQlo7QUE2QlE7RUFDSSxhQUFBO0FBM0JaO0FBK0JZO0VBQ0ksdUNBQUE7QUE3QmhCO0FBZ0NZO0VBQ0ksbUJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7QUE5QmhCO0FBb0NBO0VBQ0ksZ0hBQUE7QUFqQ0o7QUFvQ0E7RUFDSSxZQUFBO0FBakNKO0FBb0NBO0VBQ0ksNkJBQUE7RUFDQSxxQ0FBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0FBakNKO0FBb0NBO0VBQ0ksV0FBQTtFQUNBLFNBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLHFDQUFBO0VBQ0EsY0FBQTtBQWpDSiIsImZpbGUiOiJhbmltYXRlZC1jb25zb2xlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnNvbGUge1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG5cbiAgICAuY29uc29sZS1oZWFkIHtcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDE5OCwgMCUsIDIwJSk7XG4gICAgICAgIHBhZGRpbmc6IDdweCAxMnB4O1xuICAgICAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA1cHg7XG4gICAgICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA1cHg7XG4gICAgfVxuXG4gICAgLmNvbnNvbGUtY29udHJvbC1ncmF5c2NhbGUge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woMTk4LCAwJSwgNTUlKTtcbiAgICB9XG5cbiAgICAuY29uc29sZS1jb250cm9sLXJlZCB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZjYwNTc7XG4gICAgfVxuXG4gICAgLmNvbnNvbGUtY29udHJvbC15ZWxsb3cge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZjMjJlO1xuICAgIH1cblxuICAgIC5jb25zb2xlLWNvbnRyb2wtZ3JlZW4ge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjhjYTQwO1xuICAgIH1cblxuICAgIC5jb25zb2xlLWJvZHkge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwO1xuICAgICAgICBwYWRkaW5nOiAyMHB4IDE3cHggMjBweDtcbiAgICAgICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogNXB4O1xuICAgICAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogNXB4O1xuXG4gICAgICAgIC5jb3B5LXRvLWNsaXBib2FyZC1idG4tY29udGFpbmVyIHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgIGZsb2F0OiByaWdodDtcbiAgICAgICAgICAgIGhlaWdodDogMDtcbiAgICAgICAgICAgIHdpZHRoOiAwO1xuICAgICAgICAgICAgbGVmdDogLTEyMHB4O1xuICAgICAgICAgICAgdG9wOiAtMTJweDtcblxuICAgICAgICAgICAgLmNvcHktdG8tY2xpcGJvYXJkLWJ0biB7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxMjVweDtcbiAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAuY21kSW5wdXQsIC5jbWRIZWxwZXJUeHQge1xuICAgICAgICAgICAgb3ZlcmZsb3ctd3JhcDogYnJlYWstd29yZDtcbiAgICAgICAgICAgIG1heC13aWR0aDogY2FsYygxMDAlIC0gMTMwcHgpO1xuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICB9XG5cbiAgICAgICAgLmNtZEhlbHBlclR4dCB7XG4gICAgICAgICAgICBjb2xvcjogaHNsKDE5OCwgODAlLCA0NiUpO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNXB4O1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLmNvbnNvbGUtcHJvbXB0IHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDVweDtcbiAgICAgICAgZm9udC1mYW1pbHk6IFwiU291cmNlIENvZGUgUHJvXCIsbW9ub3NwYWNlO1xuICAgICAgICBmb250LXNpemU6IDE1cHg7XG4gICAgICAgIGNvbG9yOiAjRkZGRkZGO1xuICAgIH1cblxuICAgIC5jb25zb2xlLXByb21wdDo6YmVmb3JlIHtcbiAgICAgICAgdmVydGljYWwtYWxpZ246IHRvcDtcbiAgICAgICAgY29udGVudDogXCIkXCI7XG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDE1cHg7XG4gICAgICAgIHVzZXItc2VsZWN0OiBub25lO1xuICAgICAgICBjb2xvcjogZnVjaHNpYTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgfVxuXG4gICAgJi5ibHVlIHtcbiAgICAgICAgLmNvbnNvbGUtaGVhZCB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAxYjQxO1xuICAgICAgICB9XG5cbiAgICAgICAgLmNvbnNvbGUtY29udHJvbCB7XG4gICAgICAgICAgICBjb2xvcjogIzYxNzE3RDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5jb25zb2xlLWJvZHkge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzAxMjQ1NjtcbiAgICAgICAgfVxuICAgIH1cblxuICAgICYubWFjT1Mge1xuICAgICAgICAuY29uc29sZS1jb250cm9sLW1pbiwgLmNvbnNvbGUtY29udHJvbC1tYXgsIC5jb25zb2xlLWNvbnRyb2wtY2xvc2Uge1xuICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5jb25zb2xlLWNvbnRyb2wge1xuICAgICAgICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICAgICAgICB3aWR0aDogMTBweDtcbiAgICAgICAgICAgIGhlaWdodDogMTBweDtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogN3B4O1xuICAgICAgICAgICAgYm94LXNoYWRvdzogMCAxcHggMXB4IDAgcmdiYSgwLDAsMCwuMik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAmLndpbmRvd3Mge1xuICAgICAgICAuY29uc29sZS1oZWFkIHtcbiAgICAgICAgICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IHVuc2V0O1xuICAgICAgICAgICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IHVuc2V0O1xuICAgICAgICAgICAgcGFkZGluZzogMCAxMnB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLndpbi1jb250cm9sIHtcbiAgICAgICAgICAgICYuY29uc29sZS1jb250cm9sLW1heCwgJi5jb25zb2xlLWNvbnRyb2wtbWluIHtcbiAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDMwcHg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICYuY29uc29sZS1jb250cm9sLWNsb3NlIHtcbiAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAuY29uc29sZS1jb250cm9sIHtcbiAgICAgICAgICAgIGZsb2F0OiByaWdodDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5jb25zb2xlLWNvbnRyb2wtcmVkLCAuY29uc29sZS1jb250cm9sLXllbGxvdywgLmNvbnNvbGUtY29udHJvbC1ncmVlbiB7XG4gICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICB9XG5cbiAgICAgICAgLmNvbnNvbGUtcHJvbXB0IHtcbiAgICAgICAgICAgIC5jbWRJbnB1dCwgLmNtZEhlbHBlclR4dCB7XG4gICAgICAgICAgICAgICAgbWF4LXdpZHRoOiBjYWxjKDgyJSAtIDEzMHB4KSAhaW1wb3J0YW50O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAmOjpiZWZvcmUge1xuICAgICAgICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XG4gICAgICAgICAgICAgICAgY29udGVudDogXCJQUyBDOlxcXFw+XCI7XG4gICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG4uZHJvcC1zaGFkb3cge1xuICAgIGJveC1zaGFkb3c6IDAgNHB4IDVweCAwIHJnYmEoMCwwLDAsLjE0KSwgMCAxcHggMTBweCAwIHJnYmEoMCwwLDAsLjEyKSwgMCAycHggNHB4IC0xcHggcmdiYSgwLDAsMCwuMik7XG59XG5cbmtiZC5vdXRwdXQtdGV4dCB7XG4gICAgY29sb3I6IHdoaXRlO1xufVxuXG5pbnB1dC5jbWRJbnB1dEJveCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8gTW9ubycsIG1vbm9zcGFjZTtcbiAgICBvdXRsaW5lOiBub25lO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICB3aWR0aDogODUlO1xuICAgIGhlaWdodDogYXV0bztcbiAgICBib3JkZXI6IG5vbmU7XG59XG5cbmRpdi5jbGlwYm9hcmQtY29waWVkLWJhbm5lciB7XG4gICAgd2lkdGg6IGF1dG87XG4gICAgaGVpZ2h0OiAwO1xuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBib3R0b206IDhweDtcbiAgICBmb250LWZhbWlseTogJ1JvYm90byBNb25vJywgbW9ub3NwYWNlO1xuICAgIGNvbG9yOiAjYmZmZjRhO1xufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AnimatedConsoleComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'transport-animated-console',
                templateUrl: './animated-console.component.html',
                styleUrls: ['./animated-console.component.scss']
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }]; }, { inputCommand: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], consoleMinHeight: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], consoleTheme: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], delay: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], loopAnimation: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], disableAnimation: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], disableCommandOutput: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], interactiveMode: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], cmdOutputObservable: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], helperTxt: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], cmdExecutionComplete: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], cmdInputBox: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['cmdInputBox', { read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }]
        }] }); })();


/***/ }),

/***/ "J7Q4":
/*!**********************************************!*\
  !*** ./src/app/welcome/welcome.component.ts ***!
  \**********************************************/
/*! exports provided: WelcomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WelcomeComponent", function() { return WelcomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _models_base_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/base.component */ "JGbl");
/* harmony import */ var _vmw_transport_docs_shared_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @vmw/transport-docs/shared/model */ "QOlJ");
/* harmony import */ var _vmw_transport_docs_services_highlight_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @vmw/transport-docs/services/highlight.service */ "SrJx");
/* harmony import */ var _clr_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @clr/angular */ "8MG2");
/* harmony import */ var _shared_header_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/header/header.component */ "320Y");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _transport_hero_animation_transport_hero_animation_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../transport-hero-animation/transport-hero-animation.component */ "K+pE");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../shared/footer/footer.component */ "jQpT");
/* harmony import */ var _shared_animated_console_animated_console_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../shared/animated-console/animated-console.component */ "CyPm");
/*
 * Copyright 2021 VMware, Inc.
 * SPDX-License-Identifier: BSD-2-Clause
 */












function WelcomeComponent_section_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "transport-animated-console", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const cmd_r3 = ctx.$implicit;
    const i_r4 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](cmd_r3.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("inputCommand", cmd_r3.command)("helperTxt", cmd_r3.notes)("consoleTheme", "macOS")("loopAnimation", false)("delay", i_r4 * 1000);
} }
function WelcomeComponent_section_51_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "transport-animated-console", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const cmd_r5 = ctx.$implicit;
    const i_r6 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](cmd_r5.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("inputCommand", cmd_r5.command)("helperTxt", cmd_r5.notes)("consoleTheme", "macOS")("loopAnimation", false)("delay", i_r6 * 1000);
} }
function WelcomeComponent_section_65_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "transport-animated-console", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const cmd_r7 = ctx.$implicit;
    const i_r8 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](cmd_r7.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("inputCommand", cmd_r7.command)("helperTxt", cmd_r7.notes)("consoleTheme", "macOS")("loopAnimation", false)("delay", i_r8 * 1000);
} }
class WelcomeComponent extends _models_base_component__WEBPACK_IMPORTED_MODULE_1__["BaseComponent"] {
    constructor(highlightService) {
        super('WelcomeComponent');
        this.highlightService = highlightService;
        this.highlighted = false;
    }
    highlight() {
        this.highlightService.highlightAll();
    }
    ngOnInit() {
        this.goCommands = _vmw_transport_docs_shared_model__WEBPACK_IMPORTED_MODULE_2__["goTerminalCommands"];
        this.tsCommands = _vmw_transport_docs_shared_model__WEBPACK_IMPORTED_MODULE_2__["tsTerminalCommands"];
        this.javaCommands = _vmw_transport_docs_shared_model__WEBPACK_IMPORTED_MODULE_2__["javaTerminalCommands"];
    }
    ngAfterViewChecked() {
        if (!this.highlighted) {
            this.highlightService.highlightAll();
            this.highlighted = true;
        }
    }
}
WelcomeComponent.ɵfac = function WelcomeComponent_Factory(t) { return new (t || WelcomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_vmw_transport_docs_services_highlight_service__WEBPACK_IMPORTED_MODULE_3__["HighlightService"])); };
WelcomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: WelcomeComponent, selectors: [["app-welcome"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 85, vars: 3, consts: [[1, "content-container"], [1, "content-area"], [1, "transport-hero"], [1, "transport-hero-content"], ["src", "assets/transport-logo-dark.svg", 1, "transport-logo"], [1, "action-buttons"], ["routerLink", "/about"], [1, "btn", "btn-primary", "btn-"], ["href", "https://github.com/vmware/transport"], [1, "btn", "btn-primary-outline"], [1, "transport-hero-cover"], ["id", "welcome-content"], [1, "welcome-content-container"], [1, "welcome-content-cols"], [1, "clr-row"], [1, "clr-col-12", "tabbed-console-content"], ["clrTabLink", "", "id", "go-link"], ["id", "go-tab"], [1, "source-link"], ["src", "assets/github.png", "alt", "github", "title", "transport on github", 1, "github-logo"], ["href", "https://github.com/vmware/transport-typescript"], [4, "ngFor", "ngForOf"], [1, "code-step"], ["routerLink", "/golang", 1, "btn", "btn-primary", "btn-block", "btn-outline"], ["clrTabLink", "", "id", "java-link"], ["id", "java-tab"], ["href", "https://github.com/vmware/transport-java"], ["routerLink", "/java", 1, "btn", "btn-primary", "btn-block", "btn-outline"], ["clrTabLink", "", "id", "typescript-link", 3, "click"], ["id", "typescript-tab"], [1, "code"], [1, "language-typescript"], ["routerLink", "/ts", 1, "btn", "btn-primary", "btn-block", "btn-outline"], ["src", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtrustConstantResourceUrl"]("https://www.youtube.com/embed/k-KDPtCQyls"), "frameborder", "0", "allow", "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture", "allowfullscreen", "", 1, "video"], [3, "inputCommand", "helperTxt", "consoleTheme", "loopAnimation", "delay"]], template: function WelcomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "clr-main-container");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "transport-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "section", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Transport ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "The event bus you've been looking for.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "section", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " About ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " Github ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "transport-hero-animation");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "section", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " Get started in 10 seconds. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "clr-tabs");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "clr-tab");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Go");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "clr-tab-content", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "section", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "img", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "a", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "View Golang source on Github");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](37, WelcomeComponent_section_37_Template, 4, 6, "section", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "h4", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Ready for more?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "a", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "read the golang documentation");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "clr-tab");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "button", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Java");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "clr-tab-content", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "section", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "img", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "a", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "View Java source on Github");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](51, WelcomeComponent_section_51_Template, 4, 6, "section", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "h4", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Ready for more?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "a", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "read the java documentation");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "clr-tab");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "button", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WelcomeComponent_Template_button_click_57_listener() { return ctx.highlight; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "TypeScript");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "clr-tab-content", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "section", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](61, "img", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "a", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "View TypeScript source on Github");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](64, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](65, WelcomeComponent_section_65_Template, 4, 6, "section", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "h4", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "Step 2: Import the code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "pre", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "code", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, " import { EventBus } from '@vmw/transport';");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "h4", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "Step 3: Hello World");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "pre", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "code", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "// listen for requests on 'my-channel' and return a response.\nthis.bus.respondOnce('my-channel')\n    .generate(\n        (request: string) => {\n            this.log.info(`Request Received: ${request}, Sending Response...`);\n            return 'world';\n        }\n    );\n\n// send request 'hello' on channel 'my-channel'.\nthis.bus.requestOnce('my-channel', 'hello')\n    .handle(\n        (response: string) => {\n            this.log.info(`hello ${response}`);\n        }\n    );\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "h4", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "Ready for more?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "a", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "read the typescript documentation");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](80, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "h4", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "Watch a quick video");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](83, "iframe", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](84, "transport-footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.goCommands);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.javaCommands);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.tsCommands);
    } }, directives: [_clr_angular__WEBPACK_IMPORTED_MODULE_4__["ClrMainContainer"], _clr_angular__WEBPACK_IMPORTED_MODULE_4__["MainContainerWillyWonka"], _shared_header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLinkWithHref"], _transport_hero_animation_transport_hero_animation_component__WEBPACK_IMPORTED_MODULE_7__["TransportHeroAnimationComponent"], _clr_angular__WEBPACK_IMPORTED_MODULE_4__["ClrTabs"], _clr_angular__WEBPACK_IMPORTED_MODULE_4__["ÇlrTabsWillyWonka"], _clr_angular__WEBPACK_IMPORTED_MODULE_4__["ClrTab"], _clr_angular__WEBPACK_IMPORTED_MODULE_4__["ClrTabLink"], _clr_angular__WEBPACK_IMPORTED_MODULE_4__["ÇlrActiveOompaLoompa"], _clr_angular__WEBPACK_IMPORTED_MODULE_4__["ClrTabContent"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_9__["FooterComponent"], _shared_animated_console_animated_console_component__WEBPACK_IMPORTED_MODULE_10__["AnimatedConsoleComponent"]], styles: [".main-container[_ngcontent-%COMP%]   .content-container[_ngcontent-%COMP%]   .content-area[_ngcontent-%COMP%] {\n  padding: 0;\n}\n\n.transport-hero-cover[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 0px;\n  width: 100%;\n  height: 562px;\n  top: -124px;\n  background: linear-gradient(to right, rgba(0, 0, 0, 0.9) 40%, rgba(0, 0, 0, 0) 60%);\n  z-index: 11;\n}\n\n.transport-hero[_ngcontent-%COMP%] {\n  position: relative;\n  overflow-y: hidden;\n  overflow-x: hidden;\n  background: linear-gradient(to right, rgba(0, 0, 0, 0.65) 0%, rgba(0, 0, 0, 0.2) 120%);\n}\n\n.transport-hero-content[_ngcontent-%COMP%] {\n  height: 340px;\n  max-width: 1248px;\n  width: 100%;\n  margin: 0 auto;\n  position: relative;\n  z-index: 12;\n}\n\n.transport-hero-content[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin-top: 40px;\n}\n\n.bold[_ngcontent-%COMP%] {\n  font-weight: bolder;\n}\n\n.white[_ngcontent-%COMP%] {\n  color: #ffffff;\n}\n\n.transport-hero[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  width: 168px;\n  height: 48px;\n  line-height: 47px;\n  margin: 50px 18px 0 0;\n  font-weight: 400;\n}\n\n.transport-hero[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-weight: 200;\n  letter-spacing: -0.02em;\n  line-height: 72px;\n  font-size: 64px;\n  margin-bottom: 12px;\n}\n\n.transport-logo[_ngcontent-%COMP%] {\n  width: 200px;\n}\n\n#welcome-content[_ngcontent-%COMP%] {\n  background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0) 40%);\n  border-top: 1px solid #212f35;\n}\n\n.welcome-content-cols[_ngcontent-%COMP%] {\n  border-radius: 5px;\n  padding: 20px 0px 20px 0px;\n}\n\n.welcome-content-container[_ngcontent-%COMP%] {\n  text-align: center;\n  min-height: 300px;\n  width: 100%;\n  max-width: 1248px;\n  margin: 0 auto;\n  z-index: 1;\n  position: relative;\n}\n\n.tabbed-console-content[_ngcontent-%COMP%] {\n  text-align: left;\n}\n\n.console-content[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n#welcome-content[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin: 20px 0 20px 0;\n  font-size: 2.6em;\n}\n\n#fabric-banner[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  line-height: 0px;\n}\n\n.main-container[_ngcontent-%COMP%]   .content-container[_ngcontent-%COMP%]   .content-area[_ngcontent-%COMP%] {\n  padding: 0px;\n}\n\n.hero-icons[_ngcontent-%COMP%] {\n  height: 100px;\n  width: 100px;\n}\n\n.home-card[_ngcontent-%COMP%] {\n  padding: 20px 50px 20px 50px;\n}\n\n.home-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 1.2em;\n}\n\n.home-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 1.7em;\n}\n\n.video-content[_ngcontent-%COMP%] {\n  width: 854px;\n  margin: 0 auto;\n  text-align: center;\n  margin-top: 60px;\n}\n\n.video-content[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 2.7em;\n}\n\n.video[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  margin-bottom: 30px;\n  width: 854px;\n  height: 480px;\n  border: none;\n}\n\n#welcome-content[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  color: #4aaed9;\n}\n\n.video[_ngcontent-%COMP%] {\n  width: 1250px;\n}\n\n@media (max-width: 1024px) {\n  .transport-hero[_ngcontent-%COMP%] {\n    height: 224px;\n    overflow: hidden;\n  }\n\n  .transport-logo[_ngcontent-%COMP%] {\n    width: 100px;\n  }\n\n  .welcome-content-container[_ngcontent-%COMP%] {\n    min-height: 300px;\n    width: 100%;\n    max-width: 1248px;\n    margin: 0 auto;\n    z-index: 1;\n    position: relative;\n  }\n\n  .welcome-content-cols[_ngcontent-%COMP%] {\n    padding: 20px;\n  }\n\n  .transport-hero-content[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n    margin: 15px 10px 0 0;\n  }\n\n  .transport-hero-content[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    letter-spacing: -0.02em;\n    line-height: 72px;\n    font-size: 2rem;\n    margin-bottom: 12px;\n    margin-top: 10px;\n  }\n\n  .transport-hero-content[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 0.9rem;\n    letter-spacing: -0.02em;\n    line-height: 20px;\n    margin-bottom: 12px;\n  }\n\n  .transport-hero-content[_ngcontent-%COMP%] {\n    padding: 0 20px 20px 20px;\n    height: 253px;\n  }\n\n  .transport-hero-cover[_ngcontent-%COMP%] {\n    top: 0;\n  }\n\n  .video[_ngcontent-%COMP%] {\n    width: 980px;\n  }\n}\n\n.github-logo[_ngcontent-%COMP%] {\n  width: 50px;\n  margin-right: 5px;\n}\n\n.source-link[_ngcontent-%COMP%] {\n  text-align: right;\n}\n\n@media (max-width: 768px) {\n  .video[_ngcontent-%COMP%] {\n    width: 720px;\n  }\n}\n\n@media (max-width: 420px) {\n  h1[_ngcontent-%COMP%] {\n    text-align: center;\n    margin-bottom: 0;\n  }\n\n  h2[_ngcontent-%COMP%] {\n    text-align: center;\n    margin-top: 0;\n  }\n\n  .action-buttons[_ngcontent-%COMP%] {\n    text-align: center;\n  }\n\n  .transport-hero-cover[_ngcontent-%COMP%] {\n    position: absolute;\n    right: 0;\n    width: 100%;\n    height: 562px;\n    top: -124px;\n    background: rgba(0, 0, 0, 0.8);\n    z-index: 11;\n  }\n\n  .transport-hero-content[_ngcontent-%COMP%] {\n    padding: 0 20px 20px 20px;\n    height: 253px;\n  }\n\n  .transport-hero-content[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n    margin: 15px 0 0 0;\n  }\n\n  .transport-hero[_ngcontent-%COMP%] {\n    max-width: 420px;\n    overflow: hidden;\n  }\n\n  .transport-logo[_ngcontent-%COMP%] {\n    width: 100px;\n  }\n\n  .welcome-content-container[_ngcontent-%COMP%] {\n    min-height: 300px;\n    width: 100%;\n    max-width: 1248px;\n    margin: 0 auto;\n    z-index: 1;\n    position: relative;\n  }\n\n  .welcome-content-cols[_ngcontent-%COMP%] {\n    padding: 0 10px 20px 10px;\n  }\n\n  #welcome-content[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    margin: 0;\n    padding: 0 20px 0 20px;\n    font-size: 1.2rem;\n  }\n\n  .transport-hero-content[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    letter-spacing: -0.02em;\n    line-height: 72px;\n    font-size: 2rem;\n    margin-bottom: 12px;\n  }\n\n  .transport-hero-content[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 0.8rem;\n    letter-spacing: -0.02em;\n    line-height: 20px;\n    margin-bottom: 12px;\n  }\n\n  .transport-hero-content[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n    margin: 15px 10px 0 0;\n  }\n\n  .video[_ngcontent-%COMP%] {\n    width: 390px;\n  }\n}\n\n@media (max-width: 375px) {\n  .transport-hero[_ngcontent-%COMP%] {\n    height: 280px;\n  }\n\n  .video[_ngcontent-%COMP%] {\n    width: 355px;\n    height: 250px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3dlbGNvbWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxVQUFBO0FBQ0o7O0FBRUE7RUFDSSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7RUFDQSxtRkFBQTtFQUNBLFdBQUE7QUFDSjs7QUFFQTtFQUNJLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLHNGQUFBO0FBQ0o7O0FBR0E7RUFDSSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtBQUFKOztBQUdBO0VBQ0ksZ0JBQUE7QUFBSjs7QUFHQTtFQUNJLG1CQUFBO0FBQUo7O0FBR0E7RUFDSSxjQUFBO0FBQUo7O0FBR0E7RUFDSSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtBQUFKOztBQUlBO0VBQ0ksZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0FBREo7O0FBSUE7RUFDSSxZQUFBO0FBREo7O0FBSUE7RUFDSSx5RkFBQTtFQUNBLDZCQUFBO0FBREo7O0FBSUE7RUFFSSxrQkFBQTtFQUdBLDBCQUFBO0FBSko7O0FBT0E7RUFDSSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtBQUpKOztBQVFBO0VBQ0ksZ0JBQUE7QUFMSjs7QUFRQTtFQUNJLFdBQUE7QUFMSjs7QUFTQTtFQUNJLHFCQUFBO0VBQ0EsZ0JBQUE7QUFOSjs7QUFVQTtFQUNJLGdCQUFBO0FBUEo7O0FBVUE7RUFDSSxZQUFBO0FBUEo7O0FBVUE7RUFDSSxhQUFBO0VBQ0EsWUFBQTtBQVBKOztBQVdBO0VBQ0ksNEJBQUE7QUFSSjs7QUFXQTtFQUNJLGdCQUFBO0FBUko7O0FBV0E7RUFDSSxnQkFBQTtBQVJKOztBQVdBO0VBQ0ksWUFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FBUko7O0FBV0E7RUFDSSxnQkFBQTtBQVJKOztBQVlBO0VBQ0ksZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtBQVRKOztBQVlBO0VBQ0ksY0FBQTtBQVRKOztBQWFBO0VBQ0ksYUFBQTtBQVZKOztBQWVBO0VBRUk7SUFDSSxhQUFBO0lBQ0EsZ0JBQUE7RUFiTjs7RUFnQkU7SUFDSSxZQUFBO0VBYk47O0VBZUU7SUFDSSxpQkFBQTtJQUNBLFdBQUE7SUFDQSxpQkFBQTtJQUNBLGNBQUE7SUFDQSxVQUFBO0lBQ0Esa0JBQUE7RUFaTjs7RUFlRTtJQUNJLGFBQUE7RUFaTjs7RUFlRTtJQUNJLHFCQUFBO0VBWk47O0VBZ0JFO0lBRUksdUJBQUE7SUFDQSxpQkFBQTtJQUNBLGVBQUE7SUFDQSxtQkFBQTtJQUNBLGdCQUFBO0VBZE47O0VBaUJFO0lBRUksaUJBQUE7SUFDQSx1QkFBQTtJQUNBLGlCQUFBO0lBQ0EsbUJBQUE7RUFmTjs7RUFrQkU7SUFDSSx5QkFBQTtJQUNBLGFBQUE7RUFmTjs7RUFrQkU7SUFDSSxNQUFBO0VBZk47O0VBbUJFO0lBQ0ksWUFBQTtFQWhCTjtBQUNGOztBQW1CQTtFQUNJLFdBQUE7RUFDQSxpQkFBQTtBQWpCSjs7QUFvQkE7RUFDSSxpQkFBQTtBQWpCSjs7QUFvQkE7RUFDSTtJQUNJLFlBQUE7RUFqQk47QUFDRjs7QUFzQkE7RUFFSTtJQUNJLGtCQUFBO0lBQ0EsZ0JBQUE7RUFyQk47O0VBd0JFO0lBQ0ksa0JBQUE7SUFDQSxhQUFBO0VBckJOOztFQXVCRTtJQUNJLGtCQUFBO0VBcEJOOztFQXVCRTtJQUNJLGtCQUFBO0lBQ0EsUUFBQTtJQUNBLFdBQUE7SUFDQSxhQUFBO0lBQ0EsV0FBQTtJQUNBLDhCQUFBO0lBQ0EsV0FBQTtFQXBCTjs7RUF1QkU7SUFDSSx5QkFBQTtJQUNBLGFBQUE7RUFwQk47O0VBdUJFO0lBQ0ksa0JBQUE7RUFwQk47O0VBdUJFO0lBQ0ksZ0JBQUE7SUFDQSxnQkFBQTtFQXBCTjs7RUF1QkU7SUFDSSxZQUFBO0VBcEJOOztFQXNCRTtJQUNJLGlCQUFBO0lBQ0EsV0FBQTtJQUNBLGlCQUFBO0lBQ0EsY0FBQTtJQUNBLFVBQUE7SUFDQSxrQkFBQTtFQW5CTjs7RUFzQkU7SUFDSSx5QkFBQTtFQW5CTjs7RUFzQkU7SUFDSSxTQUFBO0lBQ0Esc0JBQUE7SUFDQSxpQkFBQTtFQW5CTjs7RUFxQkU7SUFFSSx1QkFBQTtJQUNBLGlCQUFBO0lBQ0EsZUFBQTtJQUNBLG1CQUFBO0VBbkJOOztFQXNCRTtJQUVJLGlCQUFBO0lBQ0EsdUJBQUE7SUFDQSxpQkFBQTtJQUNBLG1CQUFBO0VBcEJOOztFQXdCRTtJQUNJLHFCQUFBO0VBckJOOztFQXdCRTtJQUNJLFlBQUE7RUFyQk47QUFDRjs7QUF5QkE7RUFFSTtJQUNJLGFBQUE7RUF4Qk47O0VBMkJFO0lBQ0ksWUFBQTtJQUNBLGFBQUE7RUF4Qk47QUFDRiIsImZpbGUiOiJ3ZWxjb21lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1haW4tY29udGFpbmVyIC5jb250ZW50LWNvbnRhaW5lciAuY29udGVudC1hcmVhIHtcbiAgICBwYWRkaW5nOiAwO1xufVxuXG4udHJhbnNwb3J0LWhlcm8tY292ZXIge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogMHB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogNTYycHg7XG4gICAgdG9wOiAtMTI0cHg7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCByZ2JhKDAsIDAsIDAsIDAuOSkgNDAlLCByZ2JhKDAsIDAsIDAsIDAuMCkgNjAlKTtcbiAgICB6LWluZGV4OiAxMTtcbn1cblxuLnRyYW5zcG9ydC1oZXJvIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgb3ZlcmZsb3cteTogaGlkZGVuO1xuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHJnYmEoMCwgMCwgMCwgMC42NSkgMCUsIHJnYmEoMCwgMCwgMCwgMC4yMCkgMTIwJSk7XG59XG5cblxuLnRyYW5zcG9ydC1oZXJvLWNvbnRlbnQge1xuICAgIGhlaWdodDogMzQwcHg7XG4gICAgbWF4LXdpZHRoOiAxMjQ4cHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHotaW5kZXg6IDEyO1xufVxuXG4udHJhbnNwb3J0LWhlcm8tY29udGVudCBoMSB7XG4gICAgbWFyZ2luLXRvcDogNDBweDtcbn1cblxuLmJvbGQge1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG59XG5cbi53aGl0ZSB7XG4gICAgY29sb3I6ICNmZmZmZmY7XG59XG5cbi50cmFuc3BvcnQtaGVybyBidXR0b24ge1xuICAgIHdpZHRoOiAxNjhweDtcbiAgICBoZWlnaHQ6IDQ4cHg7XG4gICAgbGluZS1oZWlnaHQ6IDQ3cHg7XG4gICAgbWFyZ2luOiA1MHB4IDE4cHggMCAwO1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG59XG5cblxuLnRyYW5zcG9ydC1oZXJvIGgxIHtcbiAgICBmb250LXdlaWdodDogMjAwO1xuICAgIGxldHRlci1zcGFjaW5nOiAtLjAyZW07XG4gICAgbGluZS1oZWlnaHQ6IDcycHg7XG4gICAgZm9udC1zaXplOiA2NHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDEycHg7XG59XG5cbi50cmFuc3BvcnQtbG9nbyB7XG4gICAgd2lkdGg6IDIwMHB4O1xufVxuXG4jd2VsY29tZS1jb250ZW50IHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCByZ2JhKDAsIDAsIDAsIDAuNzApIDAlLCByZ2JhKDAsIDAsIDAsIDApIDQwJSk7XG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICMyMTJmMzU7XG59XG5cbi53ZWxjb21lLWNvbnRlbnQtY29scyB7XG4gICAgLy9ib3JkZXI6IDJweCBzb2xpZCAjNGM0MTY5O1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAvL2JhY2tncm91bmQtY29sb3I6ICMwMjAwMDY1NztcbiAgICAvL2JveC1zaGFkb3c6IDAgM3B4IDAgMCAjMmYyNTRjO1xuICAgIHBhZGRpbmc6IDIwcHggMHB4IDIwcHggMHB4O1xufVxuXG4ud2VsY29tZS1jb250ZW50LWNvbnRhaW5lciB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1pbi1oZWlnaHQ6IDMwMHB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1heC13aWR0aDogMTI0OHB4O1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIHotaW5kZXg6IDE7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG59XG5cbi50YWJiZWQtY29uc29sZS1jb250ZW50IHtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuXG4uY29uc29sZS1jb250ZW50IHtcbiAgICB3aWR0aDogMTAwJTtcbn1cblxuXG4jd2VsY29tZS1jb250ZW50IGgxIHtcbiAgICBtYXJnaW46IDIwcHggMCAyMHB4IDA7XG4gICAgZm9udC1zaXplOiAyLjZlbTtcbiAgICAvL2NvbG9yOiB3aGl0ZTtcbn1cblxuI2ZhYnJpYy1iYW5uZXIgaDIge1xuICAgIGxpbmUtaGVpZ2h0OiAwcHg7XG59XG5cbi5tYWluLWNvbnRhaW5lciAuY29udGVudC1jb250YWluZXIgLmNvbnRlbnQtYXJlYSB7XG4gICAgcGFkZGluZzogMHB4O1xufVxuXG4uaGVyby1pY29ucyB7XG4gICAgaGVpZ2h0OiAxMDBweDtcbiAgICB3aWR0aDogMTAwcHg7XG4gICAgLy9jb2xvcjogI2FhOWRjYztcbn1cblxuLmhvbWUtY2FyZCB7XG4gICAgcGFkZGluZzogMjBweCA1MHB4IDIwcHggNTBweDtcbn1cblxuLmhvbWUtY2FyZCBwIHtcbiAgICBmb250LXNpemU6IDEuMmVtO1xufVxuXG4uaG9tZS1jYXJkIGgzIHtcbiAgICBmb250LXNpemU6IDEuN2VtO1xufVxuXG4udmlkZW8tY29udGVudCB7XG4gICAgd2lkdGg6IDg1NHB4O1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXJnaW4tdG9wOiA2MHB4O1xufVxuXG4udmlkZW8tY29udGVudCBoMSB7XG4gICAgZm9udC1zaXplOiAyLjdlbTtcbiAgICAvL2NvbG9yOiAjYjVhOGQ2O1xufVxuXG4udmlkZW8ge1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDtcbiAgICB3aWR0aDogODU0cHg7XG4gICAgaGVpZ2h0OiA0ODBweDtcbiAgICBib3JkZXI6IG5vbmU7XG59XG5cbiN3ZWxjb21lLWNvbnRlbnQgaDEge1xuICAgIGNvbG9yOiAjNGFhZWQ5O1xufVxuXG5cbi52aWRlbyB7XG4gICAgd2lkdGg6IDEyNTBweDtcblxufVxuXG5cbkBtZWRpYSAobWF4LXdpZHRoOiAxMDI0cHgpIHtcblxuICAgIC50cmFuc3BvcnQtaGVybyB7XG4gICAgICAgIGhlaWdodDogMjI0cHg7XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgfVxuXG4gICAgLnRyYW5zcG9ydC1sb2dvIHtcbiAgICAgICAgd2lkdGg6IDEwMHB4O1xuICAgIH1cbiAgICAud2VsY29tZS1jb250ZW50LWNvbnRhaW5lciB7XG4gICAgICAgIG1pbi1oZWlnaHQ6IDMwMHB4O1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgbWF4LXdpZHRoOiAxMjQ4cHg7XG4gICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICB6LWluZGV4OiAxO1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgfVxuXG4gICAgLndlbGNvbWUtY29udGVudC1jb2xzIHtcbiAgICAgICAgcGFkZGluZzogMjBweDtcbiAgICB9XG5cbiAgICAudHJhbnNwb3J0LWhlcm8tY29udGVudCAuYnRuIHtcbiAgICAgICAgbWFyZ2luOiAxNXB4IDEwcHggMCAwO1xuICAgIH1cblxuXG4gICAgLnRyYW5zcG9ydC1oZXJvLWNvbnRlbnQgaDEge1xuXG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAtLjAyZW07XG4gICAgICAgIGxpbmUtaGVpZ2h0OiA3MnB4O1xuICAgICAgICBmb250LXNpemU6IDIuMHJlbTtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTJweDtcbiAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICB9XG5cbiAgICAudHJhbnNwb3J0LWhlcm8tY29udGVudCBoMiB7XG5cbiAgICAgICAgZm9udC1zaXplOiAwLjlyZW07XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAtMC4wMmVtO1xuICAgICAgICBsaW5lLWhlaWdodDogMjBweDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTJweDtcbiAgICB9XG5cbiAgICAudHJhbnNwb3J0LWhlcm8tY29udGVudCB7XG4gICAgICAgIHBhZGRpbmc6IDAgMjBweCAyMHB4IDIwcHg7XG4gICAgICAgIGhlaWdodDogMjUzcHg7XG4gICAgfVxuXG4gICAgLnRyYW5zcG9ydC1oZXJvLWNvdmVyIHtcbiAgICAgICAgdG9wOiAwO1xuXG4gICAgfVxuXG4gICAgLnZpZGVvIHtcbiAgICAgICAgd2lkdGg6IDk4MHB4O1xuICAgIH1cbn1cblxuLmdpdGh1Yi1sb2dvIHtcbiAgICB3aWR0aDogNTBweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDVweDtcbn1cblxuLnNvdXJjZS1saW5rIHtcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gICAgLnZpZGVvIHtcbiAgICAgICAgd2lkdGg6IDcyMHB4O1xuICAgIH1cbn1cblxuXG5cbkBtZWRpYSAobWF4LXdpZHRoOiA0MjBweCkge1xuXG4gICAgaDEge1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgfVxuXG4gICAgaDIge1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIG1hcmdpbi10b3A6IDA7XG4gICAgfVxuICAgIC5hY3Rpb24tYnV0dG9ucyB7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB9XG5cbiAgICAudHJhbnNwb3J0LWhlcm8tY292ZXIge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiA1NjJweDtcbiAgICAgICAgdG9wOiAtMTI0cHg7XG4gICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC44KTtcbiAgICAgICAgei1pbmRleDogMTE7XG4gICAgfVxuXG4gICAgLnRyYW5zcG9ydC1oZXJvLWNvbnRlbnQge1xuICAgICAgICBwYWRkaW5nOiAwIDIwcHggMjBweCAyMHB4O1xuICAgICAgICBoZWlnaHQ6IDI1M3B4O1xuICAgIH1cblxuICAgIC50cmFuc3BvcnQtaGVyby1jb250ZW50IC5idG4ge1xuICAgICAgICBtYXJnaW46IDE1cHggMCAwIDA7XG4gICAgfVxuXG4gICAgLnRyYW5zcG9ydC1oZXJvIHtcbiAgICAgICAgbWF4LXdpZHRoOiA0MjBweDtcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB9XG5cbiAgICAudHJhbnNwb3J0LWxvZ28ge1xuICAgICAgICB3aWR0aDogMTAwcHg7XG4gICAgfVxuICAgIC53ZWxjb21lLWNvbnRlbnQtY29udGFpbmVyIHtcbiAgICAgICAgbWluLWhlaWdodDogMzAwcHg7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBtYXgtd2lkdGg6IDEyNDhweDtcbiAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgIHotaW5kZXg6IDE7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB9XG5cbiAgICAud2VsY29tZS1jb250ZW50LWNvbHMge1xuICAgICAgICBwYWRkaW5nOiAwIDEwcHggMjBweCAxMHB4O1xuICAgIH1cblxuICAgICN3ZWxjb21lLWNvbnRlbnQgaDEge1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIHBhZGRpbmc6IDAgMjBweCAwIDIwcHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xuICAgIH1cbiAgICAudHJhbnNwb3J0LWhlcm8tY29udGVudCBoMSB7XG5cbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IC0uMDJlbTtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDcycHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMi4wcmVtO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMnB4O1xuICAgIH1cblxuICAgIC50cmFuc3BvcnQtaGVyby1jb250ZW50IGgyIHtcblxuICAgICAgICBmb250LXNpemU6IDAuOHJlbTtcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IC0wLjAyZW07XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMnB4O1xuICAgIH1cblxuXG4gICAgLnRyYW5zcG9ydC1oZXJvLWNvbnRlbnQgLmJ0biB7XG4gICAgICAgIG1hcmdpbjogMTVweCAxMHB4IDAgMDtcbiAgICB9XG5cbiAgICAudmlkZW8ge1xuICAgICAgICB3aWR0aDogMzkwcHg7XG4gICAgfVxufVxuXG5cbkBtZWRpYSAobWF4LXdpZHRoOiAzNzVweCkge1xuXG4gICAgLnRyYW5zcG9ydC1oZXJvIHtcbiAgICAgICAgaGVpZ2h0OiAyODBweDtcbiAgICB9XG5cbiAgICAudmlkZW8ge1xuICAgICAgICB3aWR0aDogMzU1cHg7XG4gICAgICAgIGhlaWdodDogMjUwcHg7XG4gICAgfVxuXG59XG5cblxuXG5cblxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WelcomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-welcome',
                templateUrl: './welcome.component.html',
                styleUrls: ['./welcome.component.scss']
            }]
    }], function () { return [{ type: _vmw_transport_docs_services_highlight_service__WEBPACK_IMPORTED_MODULE_3__["HighlightService"] }]; }, null); })();


/***/ }),

/***/ "JGbl":
/*!******************************************!*\
  !*** ./src/app/models/base.component.ts ***!
  \******************************************/
/*! exports provided: BaseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseComponent", function() { return BaseComponent; });
/* harmony import */ var _vmw_transport_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @vmw/transport/core */ "/bWC");
/*
 * Copyright 2021 VMware, Inc.
 * SPDX-License-Identifier: BSD-2-Clause
 */

class BaseComponent extends _vmw_transport_core__WEBPACK_IMPORTED_MODULE_0__["AbstractBase"] {
}


/***/ }),

/***/ "K+pE":
/*!********************************************************************************!*\
  !*** ./src/app/transport-hero-animation/transport-hero-animation.component.ts ***!
  \********************************************************************************/
/*! exports provided: TransportHeroAnimationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransportHeroAnimationComponent", function() { return TransportHeroAnimationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _models_base_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/base.component */ "JGbl");
/* harmony import */ var snapsvg_cjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! snapsvg-cjs */ "QczR");
/* harmony import */ var snapsvg_cjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(snapsvg_cjs__WEBPACK_IMPORTED_MODULE_2__);
/*
 * Copyright 2021 VMware, Inc.
 * SPDX-License-Identifier: BSD-2-Clause
 */





class TransportHeroAnimationComponent extends _models_base_component__WEBPACK_IMPORTED_MODULE_1__["BaseComponent"] {
    constructor() {
        super('WelcomeComponent');
        this.MIN_ANIMATE = 1000;
        this.MAX_ANIMATE = 2100;
        this.MIN_DELAY = 4500;
        this.MAX_DELAY = 7000;
        this.MIN_STAGGER = 350;
        this.MAX_STAGGER = 1200;
    }
    ngOnInit() {
        this.hero = snapsvg_cjs__WEBPACK_IMPORTED_MODULE_2___default()('#transport-hero-banner');
        if (this.hero != null) {
            this.pinkPath1 = this.hero.select("#pink-path-1");
            this.pinkPath2 = this.hero.select("#pink-path-2");
            this.pinkPath3 = this.hero.select("#pink-path-3");
            this.bluePath1 = this.hero.select("#blue-path-1");
            this.bluePath2 = this.hero.select("#blue-path-2");
            this.purplePath = this.hero.select("#purple-path");
            this.lightBluePath1 = this.hero.select("#light-blue-path-1");
            this.lightBluePath2 = this.hero.select("#light-blue-path-2");
            this.pinkMessage = this.hero.select("#pink-message");
            this.blueMessage = this.hero.select("#blue-message");
            this.purpleMessage = this.hero.select("#purple-message");
            this.lightBlueMessage = this.hero.select("#light-blue-message");
            // hide paths
            this.bluePath1.attr({
                display: "none"
            });
            this.bluePath2.attr({
                display: "none"
            });
            this.lightBluePath1.attr({
                display: "none"
            });
            this.lightBluePath2.attr({
                display: "none"
            });
            this.pinkPath1.attr({
                display: "none"
            });
            this.pinkPath2.attr({
                display: "none"
            });
            this.pinkPath3.attr({
                display: "none"
            });
            this.purplePath.attr({
                display: "none"
            });
            this.startAnimations();
        }
    }
    startAnimations() {
        this.pinkPath1Interval = setInterval(() => {
            this.runPinkLine1Message();
        }, 8000);
        this.pinkPath2Interval = setInterval(() => {
            this.runPinkLine2Message();
        }, this.getRandomValue(this.MIN_DELAY, this.MAX_DELAY));
        this.pinkPath3Interval = setInterval(() => {
            this.runPinkLine3Message();
        }, this.getRandomValue(this.MIN_DELAY, this.MAX_DELAY));
        this.bluePath1Interval = setInterval(() => {
            this.runBlueLine1Message();
        }, this.getRandomValue(this.MIN_DELAY, this.MAX_DELAY));
        this.bluePath2Interval = setInterval(() => {
            this.runBlueLine2Message();
        }, this.getRandomValue(this.MIN_DELAY, this.MAX_DELAY));
        this.lightBluePath1Interval = setInterval(() => {
            this.runLightBlueLine1Message();
        }, this.getRandomValue(this.MIN_DELAY, this.MAX_DELAY));
        this.lightBluePath2Interval = setInterval(() => {
            this.runLightBlueLine1Message();
        }, this.getRandomValue(this.MIN_DELAY, this.MAX_DELAY));
        this.purplePathInterval = setInterval(() => {
            this.runPurpleMessage();
        }, this.getRandomValue(this.MIN_DELAY, this.MAX_DELAY));
        this.runPinkLine1Message();
        this.bus.api.tickEventLoop(() => {
            this.runPinkLine2Message();
        }, this.getRandomValue(this.MIN_STAGGER, this.MAX_STAGGER));
        this.bus.api.tickEventLoop(() => {
            this.runPinkLine3Message();
        }, this.getRandomValue(this.MIN_STAGGER, this.MAX_STAGGER));
        this.bus.api.tickEventLoop(() => {
            this.runBlueLine1Message();
            this.runPurpleMessage();
        }, this.getRandomValue(this.MIN_STAGGER, this.MAX_STAGGER));
        this.bus.api.tickEventLoop(() => {
            this.runBlueLine2Message();
        }, this.getRandomValue(this.MIN_STAGGER, this.MAX_STAGGER));
        this.bus.api.tickEventLoop(() => {
            this.runLightBlueLine1Message();
        }, this.getRandomValue(this.MIN_STAGGER, this.MAX_STAGGER));
        this.bus.api.tickEventLoop(() => {
            this.runLightBlueLine2Message();
        }, this.getRandomValue(this.MIN_STAGGER, this.MAX_STAGGER));
    }
    runPurpleMessage() {
        let msg = this.pinkMessage.clone().children()[0];
        this.runLine(msg, this.purplePath, this.getRandomValue(this.MIN_ANIMATE, this.MAX_ANIMATE));
    }
    runBlueLine1Message() {
        let msg = this.lightBlueMessage.clone().children()[0];
        this.runLine(msg, this.bluePath1, this.getRandomValue(this.MIN_ANIMATE, this.MAX_ANIMATE));
    }
    runLightBlueLine1Message() {
        let msg = this.blueMessage.clone().children()[0];
        this.runLine(msg, this.lightBluePath1, this.getRandomValue(this.MIN_ANIMATE, this.MAX_ANIMATE));
    }
    runLightBlueLine2Message() {
        let msg = this.blueMessage.clone().children()[0];
        this.runLine(msg, this.lightBluePath2, this.getRandomValue(this.MIN_ANIMATE, this.MAX_ANIMATE));
    }
    runBlueLine2Message() {
        let msg = this.lightBlueMessage.clone().children()[0];
        this.runLine(msg, this.bluePath2, this.getRandomValue(this.MIN_ANIMATE, this.MAX_ANIMATE));
    }
    runPinkLine1Message() {
        let msg = this.purpleMessage.clone().children()[0];
        this.runLine(msg, this.pinkPath1, this.getRandomValue(this.MIN_ANIMATE, this.MAX_ANIMATE));
    }
    runPinkLine2Message() {
        let msg = this.purpleMessage.clone().children()[0];
        this.runLine(msg, this.pinkPath2, this.getRandomValue(this.MIN_ANIMATE, this.MAX_ANIMATE));
    }
    runPinkLine3Message() {
        let msg = this.purpleMessage.clone().children()[0];
        this.runLine(msg, this.pinkPath3, this.getRandomValue(this.MIN_ANIMATE, this.MAX_ANIMATE));
    }
    getRandomValue(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min) + min);
    }
    runLine(msg, path, duration) {
        msg.transform('t-685.99,108');
        snapsvg_cjs__WEBPACK_IMPORTED_MODULE_2___default.a.animate(0, snapsvg_cjs__WEBPACK_IMPORTED_MODULE_2___default.a.path.getTotalLength(path), (l) => {
            let dot = path.getPointAtLength(l);
            msg.attr({
                cx: dot.x,
                cy: dot.y,
            });
        }, duration, snapsvg_cjs__WEBPACK_IMPORTED_MODULE_2___default.a.easeinout);
    }
}
TransportHeroAnimationComponent.ɵfac = function TransportHeroAnimationComponent_Factory(t) { return new (t || TransportHeroAnimationComponent)(); };
TransportHeroAnimationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TransportHeroAnimationComponent, selectors: [["transport-hero-animation"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 57, vars: 0, consts: [[1, "transport-hero-background"], ["id", "transport-hero-banner", "xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", "viewBox", "0 0 1211.01 571"], ["id", "radial-gradient", "cx", "1095.02", "cy", "189.57", "r", "67.25", "gradientTransform", "translate(-720.05 82.75) scale(1.05 1.23)", "gradientUnits", "userSpaceOnUse"], ["offset", "0", "stop-color", "#b3edff"], ["offset", "0.22", "stop-color", "#aee9fc"], ["offset", "0.36", "stop-color", "#a8e5f8"], ["offset", "0.43", "stop-color", "#a1e0f3"], ["offset", "0.54", "stop-color", "#8cd0e7"], ["offset", "0.68", "stop-color", "#6bb8d3"], ["offset", "0.83", "stop-color", "#3c95b6"], ["offset", "0.99", "stop-color", "#026992"], ["offset", "1", "stop-color", "#006891"], ["id", "radial-gradient-2", "cx", "658.78", "cy", "250.44", "r", "73.35", "gradientTransform", "matrix(1, 0, 0, 1, 0, 0)", 0, "xlink", "href", "#radial-gradient"], ["id", "radial-gradient-3", "cx", "529.5", "cy", "262.44", "r", "71.71", "gradientTransform", "matrix(-1, 0, 0, 1, 1192.01, 108)", 0, "xlink", "href", "#radial-gradient"], ["id", "radial-gradient-4", "cx", "315.01", "cy", "315", "r", "29", "gradientTransform", "matrix(1, 0, 0, 1, 0, 0)", 0, "xlink", "href", "#radial-gradient"], ["id", "radial-gradient-5", "cx", "524.76", "cy", "316.75", "r", "59.25", "gradientTransform", "matrix(1, 0, 0, 1, 0, 0)", 0, "xlink", "href", "#radial-gradient"], ["id", "radial-gradient-6", "cx", "760.01", "cy", "206", "r", "36", "gradientTransform", "matrix(1, 0, 0, 1, 0, 0)", 0, "xlink", "href", "#radial-gradient"], ["id", "radial-gradient-7", "cx", "775.01", "cy", "426", "r", "43", "gradientTransform", "matrix(1, 0, 0, 1, 0, 0)", 0, "xlink", "href", "#radial-gradient"], ["id", "right-channels"], ["id", "right-blue-pipe", "points", "766.51 396.5 1085.01 396.5 1167.51 504.5 1167.51 517", 2, "fill", "none", "stroke", "#175f75", "stroke-linejoin", "round", "stroke-width", "41px"], ["id", "right-pink-pipe", "points", "788.51 199.5 1107.01 199.5 1190.51 99.5 1190.51 90", 2, "fill", "none", "stroke", "#88599e", "stroke-miterlimit", "10", "stroke-width", "41px"], ["id", "right-light-blue-pipe", "points", "776.01 451.5 1055.01 451.5 1098.51 507.5 1114.51 530.5", 2, "fill", "none", "stroke", "#2789af", "stroke-linejoin", "round", "stroke-width", "41px"], ["id", "left-channels"], ["id", "left-purple-pipe", "d", "M943.5,400V227.23a10.18,10.18,0,0,0-3-7.22L700.5-20.5", "transform", "translate(-685.99 108)", 2, "fill", "none", "stroke", "#491d5e", "stroke-miterlimit", "10", "stroke-width", "41px"], ["id", "left-pink-pipe", "d", "M995.5,400V203.23a10.18,10.18,0,0,0-3-7.22L772-25", "transform", "translate(-685.99 108)", 2, "fill", "none", "stroke", "#88599e", "stroke-miterlimit", "10", "stroke-width", "41px"], ["id", "main-bus"], ["id", "middle-light-blue-pipe", "x1", "524.51", "y1", "507", "x2", "524.51", "y2", "106", 2, "fill", "none", "stroke", "#2789af", "stroke-miterlimit", "10", "stroke-width", "41px"], ["id", "middle-blue-pipe", "x1", "569.51", "y1", "507", "x2", "569.51", "y2", "106", 2, "fill", "none", "stroke", "#175f75", "stroke-miterlimit", "10", "stroke-width", "41px"], ["id", "middle-pink-pipe", "x1", "479.51", "y1", "507", "x2", "479.51", "y2", "106", 2, "fill", "none", "stroke", "#88599e", "stroke-miterlimit", "10", "stroke-width", "41px"], ["id", "pipes"], ["id", "middle-pipe", "x1", "326.01", "y1", "316.75", "x2", "525.01", "y2", "316.75", 2, "stroke", "#002635", "stroke-miterlimit", "10", "stroke-width", "45px", "fill", "url(#radial-gradient)"], ["id", "top-right-pipe", "x1", "565.51", "y1", "295.84", "x2", "752.06", "y2", "205.05", 2, "stroke", "#002635", "stroke-miterlimit", "10", "stroke-width", "45px", "fill", "url(#radial-gradient-2)"], ["id", "bottom-right-pipe", "x1", "569.51", "y1", "330", "x2", "755.51", "y2", "410.88", 2, "stroke", "#002635", "stroke-miterlimit", "10", "stroke-width", "45px", "fill", "url(#radial-gradient-3)"], ["id", "messages"], ["id", "purple-message"], ["cx", "300.01", "cy", "68", "r", "17", 2, "fill", "#491d5e"], ["id", "pink-message"], ["cx", "262.01", "cy", "68", "r", "17", 2, "fill", "#8959a5"], ["id", "blue-message"], ["cx", "338.01", "cy", "68", "r", "17", 2, "fill", "#105666"], ["id", "light-blue-message"], ["cx", "377.01", "cy", "68", "r", "17", 2, "fill", "#328c9b"], ["id", "nodes"], ["id", "left-node", "cx", "315.01", "cy", "315", "r", "29", 2, "stroke", "#002635", "stroke-miterlimit", "10", "stroke-width", "10px", "fill", "url(#radial-gradient-4)"], ["id", "middle-node", "cx", "524.76", "cy", "316.75", "r", "59.25", 2, "stroke", "#002635", "stroke-miterlimit", "10", "stroke-width", "16px", "fill", "url(#radial-gradient-5)"], ["id", "top-right-node", "cx", "760.01", "cy", "206", "r", "36", 2, "stroke", "#002635", "stroke-miterlimit", "10", "stroke-width", "16px", "fill", "url(#radial-gradient-6)"], ["id", "bottom-right-node", "cx", "775.01", "cy", "426", "r", "43", 2, "stroke", "#002635", "stroke-miterlimit", "10", "stroke-width", "16px", "fill", "url(#radial-gradient-7)"], ["id", "paths"], ["id", "pink-path-1", "d", "M691-108,994.68,200.58a21.79,21.79,0,0,0,15.33,6.5l200.74,1.67,233.4-112.42A24.19,24.19,0,0,1,1454.38,94L1793,91.5,1895-33", "transform", "translate(-685.99 108)", 2, "fill", "none"], ["id", "blue-path-1", "d", "M1853.5,429.68V401.31a14.24,14.24,0,0,0-2.92-8.63L1774.45,293a11.48,11.48,0,0,0-9.13-4.52H1487.15a11.12,11.12,0,0,0-8.48,3.93L1468,305.08a12.35,12.35,0,0,1-14.38,3.34L1263,225.26a11.62,11.62,0,0,1-7-10.64V-14.21", "transform", "translate(-685.99 108)", 2, "fill", "none"], ["id", "light-blue-path-1", "d", "M1211,412.07V-.08a15.33,15.33,0,0,0-7.66-13.27L1171-32", "transform", "translate(-685.99 108)", 2, "fill", "none"], ["id", "pink-path-2", "d", "M1165.5,409V223.48A14.48,14.48,0,0,0,1151,209H1006.87a14.16,14.16,0,0,1-10-4.15L741-57", "transform", "translate(-685.99 108)", 2, "fill", "none"], ["id", "purple-path", "d", "M691.7-29.25,938.18,217.23A18.07,18.07,0,0,1,943.47,230V417.79", "transform", "translate(-685.99 108)", 2, "fill", "none"], ["id", "pink-path-3", "d", "M1165.5-29,1165,194.35A12.68,12.68,0,0,1,1152.35,207H1007.67a12.17,12.17,0,0,0-12.17,12.17V463", "transform", "translate(-685.99 108)", 2, "fill", "none"], ["id", "blue-path-2", "d", "M1255.5,405.46V231a5.86,5.86,0,0,1,8.23-5.36L1450.3,308a16,16,0,0,0,13.31-.2l37.79-18.1a12.8,12.8,0,0,1,5.48-1.24h255.76a12.6,12.6,0,0,1,9.9,4.82l78,99.42a13.84,13.84,0,0,1,3,8.54v35.89", "transform", "translate(-685.99 108)", 2, "fill", "none"], ["id", "light-blue-path-2", "d", "M1800.5,422.5l-55.65-73.89a12.83,12.83,0,0,0-10.24-5.11H1480a13.22,13.22,0,0,1-9.35-3.88L1430.26,299a13.2,13.2,0,0,0-4.4-2.93L1222.2,213.3a8.16,8.16,0,0,0-11.23,7.54L1210.5,420", "transform", "translate(-685.99 108)", 2, "fill", "none"]], template: function TransportHeroAnimationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "defs");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "radialGradient", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "stop", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "stop", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "stop", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "stop", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "stop", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "stop", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "stop", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "stop", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "stop", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "radialGradient", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "radialGradient", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "radialGradient", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "radialGradient", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "radialGradient", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "radialGradient", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "g", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "polyline", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "polyline", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "polyline", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "g", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "path", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "path", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "g", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "line", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "line", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "line", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "g", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "line", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "line", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "line", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "g", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "g", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "circle", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "g", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "circle", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "g", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "circle", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "g", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "circle", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "g", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "circle", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "circle", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "circle", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "circle", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "g", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "path", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "path", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "path", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "path", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "path", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "path", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "path", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "path", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".transport-hero-background[_ngcontent-%COMP%] {\n  position: absolute;\n  right: -90px;\n  width: 1252px;\n  height: 562px;\n  top: -124px;\n  z-index: 10;\n}\n\n@media (max-width: 1024px) {\n  .transport-hero-background[_ngcontent-%COMP%] {\n    right: -270px;\n    width: 1034px;\n    height: 562px;\n    top: -139px;\n  }\n}\n\n@media (max-width: 420px) {\n  .transport-hero-background[_ngcontent-%COMP%] {\n    right: -188px;\n    width: 903px;\n    height: 562px;\n    top: -83px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3RyYW5zcG9ydC1oZXJvLWFuaW1hdGlvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7QUFDSjs7QUFJQTtFQUVJO0lBQ0ksYUFBQTtJQUNBLGFBQUE7SUFDQSxhQUFBO0lBQ0EsV0FBQTtFQUZOO0FBQ0Y7O0FBU0E7RUFFSTtJQUVJLGFBQUE7SUFDQSxZQUFBO0lBQ0EsYUFBQTtJQUNBLFVBQUE7RUFUTjtBQUNGIiwiZmlsZSI6InRyYW5zcG9ydC1oZXJvLWFuaW1hdGlvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50cmFuc3BvcnQtaGVyby1iYWNrZ3JvdW5kIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcmlnaHQ6IC05MHB4O1xuICAgIHdpZHRoOiAxMjUycHg7XG4gICAgaGVpZ2h0OiA1NjJweDtcbiAgICB0b3A6IC0xMjRweDtcbiAgICB6LWluZGV4OiAxMDtcbn1cblxuXG5cbkBtZWRpYSAobWF4LXdpZHRoOiAxMDI0cHgpIHtcblxuICAgIC50cmFuc3BvcnQtaGVyby1iYWNrZ3JvdW5kIHtcbiAgICAgICAgcmlnaHQ6IC0yNzBweDtcbiAgICAgICAgd2lkdGg6IDEwMzRweDtcbiAgICAgICAgaGVpZ2h0OiA1NjJweDtcbiAgICAgICAgdG9wOiAtMTM5cHg7XG5cbiAgICB9XG5cbn1cblxuXG5cbkBtZWRpYSAobWF4LXdpZHRoOiA0MjBweCkge1xuXG4gICAgLnRyYW5zcG9ydC1oZXJvLWJhY2tncm91bmQge1xuXG4gICAgICAgIHJpZ2h0OiAtMTg4cHg7XG4gICAgICAgIHdpZHRoOiA5MDNweDtcbiAgICAgICAgaGVpZ2h0OiA1NjJweDtcbiAgICAgICAgdG9wOiAtODNweDtcblxuICAgIH1cblxufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TransportHeroAnimationComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'transport-hero-animation',
                templateUrl: './transport-hero-animation.component.html',
                styleUrls: ['./transport-hero-animation.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "PCNd":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _clr_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @clr/angular */ "8MG2");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./header/header.component */ "320Y");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./footer/footer.component */ "jQpT");
/* harmony import */ var _animated_console_animated_console_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./animated-console/animated-console.component */ "CyPm");
/* harmony import */ var _services_highlight_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../services/highlight.service */ "SrJx");
/* harmony import */ var _quickstart_quickstart_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./quickstart/quickstart.component */ "7FZi");
/* harmony import */ var _changelog_changelog_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./changelog/changelog.component */ "PFjW");
/*
 * Copyright 2021 VMware, Inc.
 * SPDX-License-Identifier: BSD-2-Clause
 */












class SharedModule {
}
SharedModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: SharedModule });
SharedModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function SharedModule_Factory(t) { return new (t || SharedModule)(); }, providers: [_services_highlight_service__WEBPACK_IMPORTED_MODULE_8__["HighlightService"]], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ClarityModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SharedModule, { declarations: [_header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"],
        _footer_footer_component__WEBPACK_IMPORTED_MODULE_6__["FooterComponent"],
        _animated_console_animated_console_component__WEBPACK_IMPORTED_MODULE_7__["AnimatedConsoleComponent"],
        _quickstart_quickstart_component__WEBPACK_IMPORTED_MODULE_9__["QuickstartComponent"],
        _changelog_changelog_component__WEBPACK_IMPORTED_MODULE_10__["ChangelogComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ClarityModule"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"]], exports: [_header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"],
        _footer_footer_component__WEBPACK_IMPORTED_MODULE_6__["FooterComponent"],
        _animated_console_animated_console_component__WEBPACK_IMPORTED_MODULE_7__["AnimatedConsoleComponent"],
        _quickstart_quickstart_component__WEBPACK_IMPORTED_MODULE_9__["QuickstartComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SharedModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"],
                    _footer_footer_component__WEBPACK_IMPORTED_MODULE_6__["FooterComponent"],
                    _animated_console_animated_console_component__WEBPACK_IMPORTED_MODULE_7__["AnimatedConsoleComponent"],
                    _quickstart_quickstart_component__WEBPACK_IMPORTED_MODULE_9__["QuickstartComponent"],
                    _changelog_changelog_component__WEBPACK_IMPORTED_MODULE_10__["ChangelogComponent"],
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ClarityModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                ],
                exports: [
                    _header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"],
                    _footer_footer_component__WEBPACK_IMPORTED_MODULE_6__["FooterComponent"],
                    _animated_console_animated_console_component__WEBPACK_IMPORTED_MODULE_7__["AnimatedConsoleComponent"],
                    _quickstart_quickstart_component__WEBPACK_IMPORTED_MODULE_9__["QuickstartComponent"],
                ],
                providers: [_services_highlight_service__WEBPACK_IMPORTED_MODULE_8__["HighlightService"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "PFjW":
/*!*********************************************************!*\
  !*** ./src/app/shared/changelog/changelog.component.ts ***!
  \*********************************************************/
/*! exports provided: VersionComparator, ChangelogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VersionComparator", function() { return VersionComparator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangelogComponent", function() { return ChangelogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _clr_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @clr/angular */ "8MG2");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/*
 * Copyright 2021 VMware, Inc.
 * SPDX-License-Identifier: BSD-2-Clause
 */





function ChangelogComponent_clr_dg_row_7_li_8_a_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "| Code Review");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const note_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", note_r3.review_uri, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function ChangelogComponent_clr_dg_row_7_li_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ChangelogComponent_clr_dg_row_7_li_8_a_2_Template, 2, 1, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const note_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", note_r3.description, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", note_r3.review_uri != null);
} }
function ChangelogComponent_clr_dg_row_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "clr-dg-row");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "clr-dg-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "clr-dg-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "clr-dg-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ul", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, ChangelogComponent_clr_dg_row_7_li_8_Template, 3, 2, "li", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const log_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](log_r1.version);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 3, log_r1.date));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", log_r1.notes);
} }
class VersionComparator {
    compare(a, b) {
        const pa = a.version.split('.');
        const pb = b.version.split('.');
        for (let i = 0; i < 3; i++) {
            let na = Number(pa[i]);
            let nb = Number(pb[i]);
            if (na > nb)
                return 1;
            if (nb > na)
                return -1;
            if (!isNaN(na) && isNaN(nb))
                return 1;
            if (isNaN(na) && !isNaN(nb))
                return -1;
        }
        return 0;
    }
}
class ChangelogComponent {
    constructor() {
        this.changelog = [];
        this.versionComparator = new VersionComparator();
        this.ClrDatagridSortOrder = _clr_angular__WEBPACK_IMPORTED_MODULE_1__["ClrDatagridSortOrder"];
        this.loading = true;
    }
    ngOnInit() {
    }
}
ChangelogComponent.ɵfac = function ChangelogComponent_Factory(t) { return new (t || ChangelogComponent)(); };
ChangelogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ChangelogComponent, selectors: [["transport-changelog"]], inputs: { changelog: "changelog" }, decls: 10, vars: 4, consts: [[3, "clrDgLoading"], [3, "clrDgSortOrder"], [4, "clrDgItems", "clrDgItemsOf"], [1, "list"], [4, "ngFor", "ngForOf"], [3, "href", 4, "ngIf"], [3, "href"]], template: function ChangelogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "clr-datagrid", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "clr-dg-column", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Version");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "clr-dg-column");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "clr-dg-column");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Notes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, ChangelogComponent_clr_dg_row_7_Template, 9, 5, "clr-dg-row", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "clr-dg-footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("clrDgLoading", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("clrDgSortOrder", ctx.ClrDatagridSortOrder.DESC);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("clrDgItemsOf", ctx.changelog);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.changelog.length, " Releases");
    } }, directives: [_clr_angular__WEBPACK_IMPORTED_MODULE_1__["ClrDatagrid"], _clr_angular__WEBPACK_IMPORTED_MODULE_1__["ÇlrDatagridMainRenderer"], _clr_angular__WEBPACK_IMPORTED_MODULE_1__["ÇlrDatagridWillyWonka"], _clr_angular__WEBPACK_IMPORTED_MODULE_1__["ÇlrActionableOompaLoompa"], _clr_angular__WEBPACK_IMPORTED_MODULE_1__["ÇlrExpandableOompaLoompa"], _clr_angular__WEBPACK_IMPORTED_MODULE_1__["ClrDatagridColumn"], _clr_angular__WEBPACK_IMPORTED_MODULE_1__["ÇlrDatagridHeaderRenderer"], _clr_angular__WEBPACK_IMPORTED_MODULE_1__["ClrDatagridItems"], _clr_angular__WEBPACK_IMPORTED_MODULE_1__["ClrDatagridFooter"], _clr_angular__WEBPACK_IMPORTED_MODULE_1__["ClrDatagridRow"], _clr_angular__WEBPACK_IMPORTED_MODULE_1__["ÇlrDatagridRowRenderer"], _clr_angular__WEBPACK_IMPORTED_MODULE_1__["ClrDatagridCell"], _clr_angular__WEBPACK_IMPORTED_MODULE_1__["ÇlrDatagridCellRenderer"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjaGFuZ2Vsb2cuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChangelogComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'transport-changelog',
                templateUrl: './changelog.component.html',
                styleUrls: ['./changelog.component.scss']
            }]
    }], function () { return []; }, { changelog: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "QOlJ":
/*!*********************************!*\
  !*** ./src/app/shared/model.ts ***!
  \*********************************/
/*! exports provided: goTerminalCommands, javaTerminalCommands, tsTerminalCommands */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "goTerminalCommands", function() { return goTerminalCommands; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "javaTerminalCommands", function() { return javaTerminalCommands; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tsTerminalCommands", function() { return tsTerminalCommands; });
/*
 * Copyright 2021 VMware, Inc.
 * SPDX-License-Identifier: BSD-2-Clause
 */
const goTerminalCommands = [
    {
        title: 'Step 1: Get the code',
        command: 'git clone https://github.com/vmware/transport-go.git',
        notes: 'Pull down the transport-go code from github'
    },
    {
        title: 'Step 2: Build the code',
        command: './build-transport.sh',
        notes: 'Build the transport-go sample server and example services'
    },
    {
        title: 'Step 3: Run the code',
        command: './transport service&',
        notes: 'Start the transport-go sample services'
    },
    {
        title: 'Step 4: Play with the code',
        command: './transport demo',
        notes: 'Run a simple example that connects to the sample service and makes a request'
    },
];
const javaTerminalCommands = [
    {
        title: 'Step 1: Get the code',
        command: 'git clone https://github.com/vmware/transport-java.git',
        notes: 'Pull down the transport-java code from github'
    },
    {
        title: 'Step 2: Run the code',
        command: './gradlew :sample-app:bootRun',
        notes: 'Build the example application and watch the logs'
    },
    {
        title: 'Step 3: Play with the code',
        command: 'ls sample-app/src/main/java/samples',
        notes: 'Explore the various examples, see how they work'
    }
];
const tsTerminalCommands = [
    {
        title: 'Step 1:  Install the code',
        command: 'npm install @vmw/transport --save',
        notes: 'Install transport-typescript into your app'
    },
];


/***/ }),

/***/ "SrJx":
/*!***********************************************!*\
  !*** ./src/app/services/highlight.service.ts ***!
  \***********************************************/
/*! exports provided: HighlightService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HighlightService", function() { return HighlightService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var clipboard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! clipboard */ "sxGJ");
/* harmony import */ var clipboard__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(clipboard__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prismjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prismjs */ "wZee");
/* harmony import */ var prismjs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prismjs__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var prismjs_plugins_toolbar_prism_toolbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prismjs/plugins/toolbar/prism-toolbar */ "45FF");
/* harmony import */ var prismjs_plugins_toolbar_prism_toolbar__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prismjs_plugins_toolbar_prism_toolbar__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var prismjs_plugins_copy_to_clipboard_prism_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! prismjs/plugins/copy-to-clipboard/prism-copy-to-clipboard */ "c2Kr");
/* harmony import */ var prismjs_plugins_copy_to_clipboard_prism_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prismjs_plugins_copy_to_clipboard_prism_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var prismjs_plugins_line_highlight_prism_line_highlight__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! prismjs/plugins/line-highlight/prism-line-highlight */ "fwNl");
/* harmony import */ var prismjs_plugins_line_highlight_prism_line_highlight__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(prismjs_plugins_line_highlight_prism_line_highlight__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var prismjs_components_prism_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! prismjs/components/prism-css */ "ZgVT");
/* harmony import */ var prismjs_components_prism_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(prismjs_components_prism_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var prismjs_components_prism_javascript__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! prismjs/components/prism-javascript */ "QWvX");
/* harmony import */ var prismjs_components_prism_javascript__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(prismjs_components_prism_javascript__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var prismjs_components_prism_java__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! prismjs/components/prism-java */ "ki2X");
/* harmony import */ var prismjs_components_prism_java__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(prismjs_components_prism_java__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var prismjs_components_prism_go__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! prismjs/components/prism-go */ "GYl3");
/* harmony import */ var prismjs_components_prism_go__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(prismjs_components_prism_go__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var prismjs_components_prism_json__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! prismjs/components/prism-json */ "85O/");
/* harmony import */ var prismjs_components_prism_json__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(prismjs_components_prism_json__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var prismjs_components_prism_markup__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! prismjs/components/prism-markup */ "bPOv");
/* harmony import */ var prismjs_components_prism_markup__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(prismjs_components_prism_markup__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var prismjs_components_prism_markdown__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! prismjs/components/prism-markdown */ "gmzG");
/* harmony import */ var prismjs_components_prism_markdown__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(prismjs_components_prism_markdown__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var prismjs_components_prism_yaml__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! prismjs/components/prism-yaml */ "RX2a");
/* harmony import */ var prismjs_components_prism_yaml__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(prismjs_components_prism_yaml__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var prismjs_components_prism_typescript__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! prismjs/components/prism-typescript */ "XIHC");
/* harmony import */ var prismjs_components_prism_typescript__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(prismjs_components_prism_typescript__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var prismjs_components_prism_sass__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! prismjs/components/prism-sass */ "eWXi");
/* harmony import */ var prismjs_components_prism_sass__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(prismjs_components_prism_sass__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var prismjs_components_prism_scss__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! prismjs/components/prism-scss */ "hnpa");
/* harmony import */ var prismjs_components_prism_scss__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(prismjs_components_prism_scss__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var prismjs_components_prism_bash__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! prismjs/components/prism-bash */ "gAkk");
/* harmony import */ var prismjs_components_prism_bash__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(prismjs_components_prism_bash__WEBPACK_IMPORTED_MODULE_18__);
/*
 * Copyright 2021 VMware, Inc.
 * SPDX-License-Identifier: BSD-2-Clause
 */





















class HighlightService {
    constructor(platformId) {
        this.platformId = platformId;
    }
    highlightAll() {
        if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["isPlatformBrowser"])(this.platformId)) {
            Prism.highlightAll();
        }
    }
}
HighlightService.ɵfac = function HighlightService_Factory(t) { return new (t || HighlightService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"])); };
HighlightService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: HighlightService, factory: HighlightService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HighlightService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]]
            }] }]; }, null); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/*
 * Copyright 2021 VMware, Inc.
 * SPDX-License-Identifier: BSD-2-Clause
 */



class AppComponent {
    constructor() {
        this.title = 'documentation';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], null, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _clr_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @clr/angular */ "8MG2");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./welcome/welcome.component */ "J7Q4");
/* harmony import */ var _transport_hero_animation_transport_hero_animation_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./transport-hero-animation/transport-hero-animation.component */ "K+pE");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./about/about.component */ "84zG");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./shared/shared.module */ "PCNd");
/*
 * Copyright 2021 VMware, Inc.
 * SPDX-License-Identifier: BSD-2-Clause
 */











class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _clr_angular__WEBPACK_IMPORTED_MODULE_4__["ClarityModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_9__["SharedModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_6__["WelcomeComponent"],
        _transport_hero_animation_transport_hero_animation_component__WEBPACK_IMPORTED_MODULE_7__["TransportHeroAnimationComponent"],
        _about_about_component__WEBPACK_IMPORTED_MODULE_8__["AboutComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _clr_angular__WEBPACK_IMPORTED_MODULE_4__["ClarityModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_9__["SharedModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_6__["WelcomeComponent"],
                    _transport_hero_animation_transport_hero_animation_component__WEBPACK_IMPORTED_MODULE_7__["TransportHeroAnimationComponent"],
                    _about_about_component__WEBPACK_IMPORTED_MODULE_8__["AboutComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                    _clr_angular__WEBPACK_IMPORTED_MODULE_4__["ClarityModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_9__["SharedModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "jQpT":
/*!***************************************************!*\
  !*** ./src/app/shared/footer/footer.component.ts ***!
  \***************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _models_base_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/base.component */ "JGbl");
/* harmony import */ var _vmw_transport_docs_environments_version__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @vmw/transport-docs/environments/version */ "octk");
/* harmony import */ var _vmw_transport_fabric_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @vmw/transport/fabric.api */ "6K84");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/*
 * Copyright 2021 VMware, Inc.
 * SPDX-License-Identifier: BSD-2-Clause
 */






class FooterComponent extends _models_base_component__WEBPACK_IMPORTED_MODULE_1__["BaseComponent"] {
    constructor(cd) {
        super('FooterComponent');
        this.cd = cd;
        this.date = new Date().getFullYear();
        this.version = _vmw_transport_docs_environments_version__WEBPACK_IMPORTED_MODULE_2__["VERSION"];
        this.buildTime = Date.parse(_vmw_transport_docs_environments_version__WEBPACK_IMPORTED_MODULE_2__["VERSION"].time);
        this.connectionState = 'Disconnected from broker';
        this.connected = false;
        this.connecting = false;
        this.connectionFailed = false;
        this.connectionClass = 'label-warning';
    }
    setConnected() {
        this.connected = true;
        this.connecting = false;
        this.connectionClass = 'label-success';
        this.connectionState = 'Connected to transport-bus.io';
        this.cd.detectChanges();
    }
    setConnecting() {
        this.connected = false;
        this.connecting = true;
        this.connectionClass = 'label-warning';
        this.connectionState = 'Connecting to transport-bus.io';
        this.cd.detectChanges();
    }
    setDisconnected() {
        this.connected = false;
        this.connecting = false;
        this.connectionClass = 'label-warning';
        this.connectionState = 'Disconnected from transport-bus.io';
        this.cd.detectChanges();
    }
    setConnectError() {
        this.connected = false;
        this.connecting = false;
        this.connectionFailed = true;
        this.connectionClass = 'label-danger';
        this.connectionState = 'Unable to connect to transport-bus.io';
        this.cd.detectChanges();
    }
    ngOnDestroy() {
    }
    ngOnInit() {
        this.connectionStateStore = this.storeManager.getStore('connectionState');
        this.connecting = this.connectionStateStore.get('connecting');
        this.connected = this.connectionStateStore.get(_vmw_transport_fabric_api__WEBPACK_IMPORTED_MODULE_3__["FabricConnectionState"].Connected);
        this.connectionFailed = this.connectionStateStore.get(_vmw_transport_fabric_api__WEBPACK_IMPORTED_MODULE_3__["FabricConnectionState"].Failed);
        this.listenForStateChanges();
        if (this.connecting) {
            this.setConnecting();
        }
        if (this.connected) {
            this.setConnected();
        }
        else {
            this.setConnected();
        }
        if (this.connectionFailed) {
            this.setConnectError();
        }
        this.listenForStateChanges();
    }
    listenForStateChanges() {
        this.connectionStateStream = this.connectionStateStore.onChange(_vmw_transport_fabric_api__WEBPACK_IMPORTED_MODULE_3__["FabricConnectionState"].Connected);
        this.connectionStateStream.subscribe((connected) => {
            if (connected) {
                this.setConnected();
            }
            else {
                this.setDisconnected();
            }
        });
        this.disconnectStateStream = this.connectionStateStore.onChange(_vmw_transport_fabric_api__WEBPACK_IMPORTED_MODULE_3__["FabricConnectionState"].Failed);
        this.disconnectStateStream.subscribe(() => {
            this.setConnectError();
        });
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"])); };
FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["transport-footer"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 8, vars: 11, consts: [["id", "footer"], [1, "build-version"], [1, "connection-status"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "section", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" \u00A9 ", ctx.date, " VMware Inc. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate3"](" Commit Hash: ", ctx.version.hash, " | Version: ", ctx.version.version, " | Built: ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](4, 8, ctx.buildTime, "short"), " EST ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("label ", ctx.connectionClass, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.connectionState);
    } }, pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DatePipe"]], styles: ["#footer[_ngcontent-%COMP%] {\n  background-color: #0e161b;\n  padding: 10px;\n}\n\n.connection-status[_ngcontent-%COMP%] {\n  float: right;\n}\n\n@media (max-width: 420px) {\n  .connection-status[_ngcontent-%COMP%] {\n    display: none;\n  }\n\n  .build-version[_ngcontent-%COMP%] {\n    display: none;\n  }\n\n  #footer[_ngcontent-%COMP%] {\n    font-size: 0.7em;\n    padding: 5px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2Zvb3Rlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHlCQUFBO0VBQ0YsYUFBQTtBQUNGOztBQU9BO0VBQ0UsWUFBQTtBQUpGOztBQU9BO0VBQ0U7SUFDRSxhQUFBO0VBSkY7O0VBTUE7SUFDRSxhQUFBO0VBSEY7O0VBTUE7SUFDRSxnQkFBQTtJQUNBLFlBQUE7RUFIRjtBQUNGIiwiZmlsZSI6ImZvb3Rlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNmb290ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwZTE2MWI7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIC8vY29sb3I6ICNiZWI4Y2M7XG59XG5cbi5idWlsZC12ZXJzaW9uIHtcbiAgLy9jb2xvcjogIzY4NjE3Yjtcbn1cblxuLmNvbm5lY3Rpb24tc3RhdHVzIHtcbiAgZmxvYXQ6IHJpZ2h0O1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNDIwcHgpIHtcbiAgLmNvbm5lY3Rpb24tc3RhdHVzIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG4gIC5idWlsZC12ZXJzaW9uIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG5cbiAgI2Zvb3RlciB7XG4gICAgZm9udC1zaXplOiAwLjdlbTtcbiAgICBwYWRkaW5nOiA1cHg7XG4gIH1cbn1cblxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'transport-footer',
                templateUrl: './footer.component.html',
                styleUrls: ['./footer.component.scss']
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }]; }, null); })();


/***/ }),

/***/ "octk":
/*!*************************************!*\
  !*** ./src/environments/version.ts ***!
  \*************************************/
/*! exports provided: VERSION */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VERSION", function() { return VERSION; });
// IMPORTANT: THIS FILE IS AUTO GENERATED! DO NOT MANUALLY EDIT OR CHECKIN!
/* tslint:disable */
const VERSION = {
    "dirty": false,
    "raw": "1bfca39",
    "hash": "1bfca39",
    "distance": null,
    "tag": null,
    "semver": null,
    "suffix": "1bfca39",
    "semverString": null,
    "version": "1.1.0",
    "time": "2021-08-27T00:23:36.752Z"
};
/* tslint:enable */


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./welcome/welcome.component */ "J7Q4");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./about/about.component */ "84zG");
/* harmony import */ var _vmw_transport_docs_typescript_iframes_iframe_demo_iframe_demo_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @vmw/transport-docs/typescript/iframes/iframe-demo/iframe-demo.component */ "6wZ4");
/*
 * Copyright 2021 VMware, Inc.
 * SPDX-License-Identifier: BSD-2-Clause
 */







const routes = [
    { path: '', component: _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_2__["WelcomeComponent"] },
    { path: 'about', component: _about_about_component__WEBPACK_IMPORTED_MODULE_3__["AboutComponent"] },
    { path: 'ts', loadChildren: () => Promise.all(/*! import() | typescript-typescript-module */[__webpack_require__.e("common"), __webpack_require__.e("typescript-typescript-module")]).then(__webpack_require__.bind(null, /*! ./typescript/typescript.module */ "Fn1H")).then(m => m.TypescriptModule) },
    { path: 'java', loadChildren: () => Promise.all(/*! import() | java-java-module */[__webpack_require__.e("common"), __webpack_require__.e("java-java-module")]).then(__webpack_require__.bind(null, /*! ./java/java.module */ "L83D")).then(m => m.JavaModule) },
    { path: 'golang', loadChildren: () => Promise.all(/*! import() | golang-golang-module */[__webpack_require__.e("common"), __webpack_require__.e("golang-golang-module")]).then(__webpack_require__.bind(null, /*! ./golang/golang.module */ "xZAH")).then(m => m.GolangModule) },
    { path: 'iframe-demo', component: _vmw_transport_docs_typescript_iframes_iframe_demo_iframe_demo_component__WEBPACK_IMPORTED_MODULE_4__["IframeDemoComponent"] },
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, { relativeLinkResolution: 'legacy' })], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, { relativeLinkResolution: 'legacy' })],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _vmw_transport_util_bus_util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @vmw/transport/util/bus.util */ "raco");
/* harmony import */ var _vmw_transport_log__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @vmw/transport/log */ "Av6t");
/* harmony import */ var _vmw_transport_fabric_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @vmw/transport/fabric.api */ "6K84");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/*
 * Copyright 2021 VMware, Inc.
 * SPDX-License-Identifier: BSD-2-Clause
 */







if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_5__["AppModule"])
    .catch(err => console.error(err));
const bus = _vmw_transport_util_bus_util__WEBPACK_IMPORTED_MODULE_2__["BusUtil"].bootBusWithOptions(_vmw_transport_log__WEBPACK_IMPORTED_MODULE_3__["LogLevel"].Debug, false, true);
// Called when connected to broker
const connectedHandler = (sessionId) => {
    bus.logger.info(`Connected to transport-bus.io with sessionId ${sessionId}`, 'main.ts');
};
// Called when disconnected.
const disconnectedHandler = () => {
    bus.logger.info('Disconnected from transport-bus.io', 'main.ts');
};
let connectionStore;
// Create state stores
function createStores() {
    let state = new Map();
    state.set(_vmw_transport_fabric_api__WEBPACK_IMPORTED_MODULE_4__["FabricConnectionState"].Connected, false);
    state.set('connecting', false);
    state.set(_vmw_transport_fabric_api__WEBPACK_IMPORTED_MODULE_4__["FabricConnectionState"].Failed, false);
    connectionStore = bus.stores.createStore('connectionState', state);
    connectionStore.initialize();
}
createStores();
// Connect to Broker.
bus.fabric.connect(connectedHandler, disconnectedHandler, 'transport-bus.io', 443, '/ws', true);
connectionStore.put('connecting', true, null);
// listen for connection state changes
bus.fabric.whenConnectionStateChanges()
    .subscribe((stateChange) => {
    switch (stateChange) {
        case _vmw_transport_fabric_api__WEBPACK_IMPORTED_MODULE_4__["FabricConnectionState"].Connected:
            connectionStore.put(_vmw_transport_fabric_api__WEBPACK_IMPORTED_MODULE_4__["FabricConnectionState"].Connected, true, null);
            connectionStore.put('connecting', false, null);
            break;
        case _vmw_transport_fabric_api__WEBPACK_IMPORTED_MODULE_4__["FabricConnectionState"].Disconnected:
            connectionStore.put(_vmw_transport_fabric_api__WEBPACK_IMPORTED_MODULE_4__["FabricConnectionState"].Connected, false, null);
            connectionStore.put('connecting', false, null);
            break;
        case _vmw_transport_fabric_api__WEBPACK_IMPORTED_MODULE_4__["FabricConnectionState"].Failed:
            connectionStore.put(_vmw_transport_fabric_api__WEBPACK_IMPORTED_MODULE_4__["FabricConnectionState"].Failed, true, null);
            connectionStore.put('connecting', false, null);
            break;
    }
});


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map