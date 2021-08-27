(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["golang-golang-module"],{

/***/ "/7wi":
/*!*************************************************************!*\
  !*** ./src/app/golang/hello-world/hello-world.component.ts ***!
  \*************************************************************/
/*! exports provided: HelloWorldComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HelloWorldComponent", function() { return HelloWorldComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _vmw_transport_docs_services_highlight_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @vmw/transport-docs/services/highlight.service */ "SrJx");
/*
 * Copyright 2021 VMware, Inc.
 * SPDX-License-Identifier: BSD-2-Clause
 */



class HelloWorldComponent {
    constructor(highlightService) {
        this.highlightService = highlightService;
        this.highlighted = false;
    }
    ngOnInit() {
    }
    ngAfterViewChecked() {
        if (!this.highlighted) {
            this.highlightService.highlightAll();
            this.highlighted = true;
        }
    }
}
HelloWorldComponent.ɵfac = function HelloWorldComponent_Factory(t) { return new (t || HelloWorldComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_vmw_transport_docs_services_highlight_service__WEBPACK_IMPORTED_MODULE_1__["HighlightService"])); };
HelloWorldComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HelloWorldComponent, selectors: [["transport-hello-world"]], decls: 12, vars: 0, consts: [[1, "code"], [1, "language-go"], [1, "log-output"]], template: function HelloWorldComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Hello World in Golang");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " This is a very simple example, but it should shows the mechanics of how it works. These segments of code could be anywhere in your code base, it would work exactly the same.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "pre", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "code", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "// listen for a single request on 'some-channel'\ntr := bus.GetBus()\nchannel := \"hello-world\"\n\n// create new channel\ntr.GetChannelManager().CreateChannel(channel)\n\n// listen for a single request on 'hello-world'\nrequestHandler, _ := tr.ListenRequestStream(channel)\n\n// define request handler logic\nrequestHandler.Handle(\n   func(msg *model.Message) {\n        resp := msg.Payload.(string)\n        fmt.Printf(\"\\\\nHello: %s\\\\n\", resp)\n\n        // send a response back.\n        tr.SendResponseMessage(channel, resp + \" Doodly\", msg.DestinationId)\n   },\n   func(err error) {\n        // something went wrong...\n   }\n)\n\n// send a request to 'hello-world' and handle a single response\nresponseHandler, _ := tr.RequestOnce(channel, \"Howdy\")\n\n// define response handler logic\nresponseHandler.Handle(\n   func(msg *model.Message) {\n        fmt.Printf(\"World: %s\\\\n\", msg.Payload.(string))\n   },\n   func(err error) {\n        // something went wrong...\n   })\n\n// fire the request.\nresponseHandler.Fire()\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " This will produce something like...\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "pre", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "\uD83C\uDF08 Transport booted with id [e495e5d5-2b72-46dd-8013-d49049bd4800]\nHello: Howdy\nWorld: Howdy Doodly\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJoZWxsby13b3JsZC5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HelloWorldComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'transport-hello-world',
                templateUrl: './hello-world.component.html',
                styleUrls: ['./hello-world.component.scss']
            }]
    }], function () { return [{ type: _vmw_transport_docs_services_highlight_service__WEBPACK_IMPORTED_MODULE_1__["HighlightService"] }]; }, null); })();


/***/ }),

/***/ "JVd6":
/*!***************************************************************!*\
  !*** ./src/app/golang/initializing/initializing.component.ts ***!
  \***************************************************************/
/*! exports provided: InitializingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InitializingComponent", function() { return InitializingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _vmw_transport_docs_services_highlight_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @vmw/transport-docs/services/highlight.service */ "SrJx");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/*
 * Copyright 2021 VMware, Inc.
 * SPDX-License-Identifier: BSD-2-Clause
 */




class InitializingComponent {
    constructor(highlightService) {
        this.highlightService = highlightService;
        this.highlighted = false;
    }
    ngOnInit() {
    }
    ngAfterViewChecked() {
        if (!this.highlighted) {
            this.highlightService.highlightAll();
            this.highlighted = true;
        }
    }
}
InitializingComponent.ɵfac = function InitializingComponent_Factory(t) { return new (t || InitializingComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_vmw_transport_docs_services_highlight_service__WEBPACK_IMPORTED_MODULE_1__["HighlightService"])); };
InitializingComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: InitializingComponent, selectors: [["transport-initializing"]], decls: 11, vars: 0, consts: [[1, "code"], [1, "language-go"], ["routerLink", "/golang/hello-world", 1, "btn", "btn-primary", "btn-block", "btn-outline"]], template: function InitializingComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Initializing Transport in Golang");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " The bus exists as a singleton inside your application. The first time you ask for the bus, it will be created automatically and every supplemental call will return that same instance.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "pre", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "code", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "import \"github.com/vmware/transport-go/bus\"\n\nvar transport EventBus = bus.GetBus()");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Next Steps: Hello World");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJpbml0aWFsaXppbmcuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InitializingComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'transport-initializing',
                templateUrl: './initializing.component.html',
                styleUrls: ['./initializing.component.scss']
            }]
    }], function () { return [{ type: _vmw_transport_docs_services_highlight_service__WEBPACK_IMPORTED_MODULE_1__["HighlightService"] }]; }, null); })();


/***/ }),

/***/ "ceXl":
/*!*******************************************************!*\
  !*** ./src/app/golang/overview/overview.component.ts ***!
  \*******************************************************/
/*! exports provided: OverviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OverviewComponent", function() { return OverviewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _vmw_transport_docs_shared_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @vmw/transport-docs/shared/model */ "QOlJ");
/* harmony import */ var _vmw_transport_docs_base_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @vmw/transport-docs/base.component */ "w7eE");
/* harmony import */ var _vmw_transport_docs_services_highlight_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @vmw/transport-docs/services/highlight.service */ "SrJx");
/* harmony import */ var _clr_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @clr/angular */ "8MG2");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _shared_animated_console_animated_console_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/animated-console/animated-console.component */ "CyPm");
/*
 * Copyright 2021 VMware, Inc.
 * SPDX-License-Identifier: BSD-2-Clause
 */









function OverviewComponent_section_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "transport-animated-console", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const cmd_r1 = ctx.$implicit;
    const i_r2 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](cmd_r1.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("inputCommand", cmd_r1.command)("helperTxt", cmd_r1.notes)("consoleTheme", "macOS")("loopAnimation", false)("delay", i_r2 * 1000);
} }
class OverviewComponent extends _vmw_transport_docs_base_component__WEBPACK_IMPORTED_MODULE_2__["BaseComponent"] {
    constructor(highlightService) {
        super('OverviewComponent');
        this.highlightService = highlightService;
        this.highlighted = false;
    }
    highlight() {
        this.highlightService.highlightAll();
    }
    ngOnInit() {
        this.goCommands = _vmw_transport_docs_shared_model__WEBPACK_IMPORTED_MODULE_1__["goTerminalCommands"];
    }
    ngAfterViewChecked() {
        if (!this.highlighted) {
            this.highlightService.highlightAll();
            this.highlighted = true;
        }
    }
}
OverviewComponent.ɵfac = function OverviewComponent_Factory(t) { return new (t || OverviewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_vmw_transport_docs_services_highlight_service__WEBPACK_IMPORTED_MODULE_3__["HighlightService"])); };
OverviewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: OverviewComponent, selectors: [["transport-golang-overview"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 20, vars: 1, consts: [["src", "assets/github.png", "alt", "github", "title", "transport on github", 1, "github-logo"], ["href", "https://github.com/vmware/transport-go"], ["role", "alert", 1, "alert", "alert-info"], [1, "alert-items"], [1, "alert-item", "static"], [1, "alert-icon-wrapper"], ["shape", "exclamation-circle", 1, "alert-icon"], [1, "alert-text"], [4, "ngFor", "ngForOf"], ["routerLink", "/golang/importing", 1, "btn", "btn-primary", "btn-block", "btn-outline"], [1, "code-step"], [3, "inputCommand", "helperTxt", "consoleTheme", "loopAnimation", "delay"]], template: function OverviewComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Transport for Go");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "View Golang source on Github");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "clr-icon", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " We're still working on these docs, please bear with us! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " This implementation is written in Go. It does not use ReactiveX (unlike the Java and TypeScript) implementations. This is because there is no (reasonable) ReactiveX library available. So we built our own directly into Transport.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, OverviewComponent_section_16_Template, 4, 6, "section", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Next Steps: Importing Transport");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.goCommands);
    } }, directives: [_clr_angular__WEBPACK_IMPORTED_MODULE_4__["ClrIconCustomTag"], _clr_angular__WEBPACK_IMPORTED_MODULE_4__["ClrAlertText"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLinkWithHref"], _shared_animated_console_animated_console_component__WEBPACK_IMPORTED_MODULE_7__["AnimatedConsoleComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJvdmVydmlldy5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OverviewComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'transport-golang-overview',
                templateUrl: './overview.component.html',
                styleUrls: ['./overview.component.scss']
            }]
    }], function () { return [{ type: _vmw_transport_docs_services_highlight_service__WEBPACK_IMPORTED_MODULE_3__["HighlightService"] }]; }, null); })();


/***/ }),

/***/ "d5DX":
/*!********************************************!*\
  !*** ./src/app/golang/golang.component.ts ***!
  \********************************************/
/*! exports provided: GolangComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GolangComponent", function() { return GolangComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _clr_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @clr/angular */ "8MG2");
/* harmony import */ var _shared_header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/header/header.component */ "320Y");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/footer/footer.component */ "jQpT");
/*
 * Copyright 2021 VMware, Inc.
 * SPDX-License-Identifier: BSD-2-Clause
 */






const _c0 = ["mainContent"];
function GolangComponent_clr_vertical_nav_group_children_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "clr-vertical-nav-group-children");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Importing Transport ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Initializing Transport ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Hello World! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class GolangComponent {
    constructor() {
    }
    ngOnInit() {
    }
    onActivate(_event) {
        // Scrolling back to the top
        // Reference: https://stackoverflow.com/questions/48048299/angular-5-scroll-to-top-on-every-route-click/48048822
        if (this.mainContentDiv) {
            this.mainContentDiv.nativeElement.scrollTop = 0;
        }
    }
}
GolangComponent.ɵfac = function GolangComponent_Factory(t) { return new (t || GolangComponent)(); };
GolangComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GolangComponent, selectors: [["transport-golang"]], viewQuery: function GolangComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.mainContentDiv = _t.first);
    } }, decls: 13, vars: 3, consts: [[1, "content-container"], [3, "clrVerticalNavCollapsible", "clr-nav-level"], ["clrVerticalNavLink", "", "routerLink", "./overview", "routerLinkActive", "active"], ["routerLinkActive", "active"], [4, "clrIfExpanded"], ["id", "main-content", 1, "content-area"], ["mainContent", ""], [3, "activate"], ["clrVerticalNavLink", "", "routerLink", "./importing", "routerLinkActive", "active"], ["clrVerticalNavLink", "", "routerLink", "./initializing", "routerLinkActive", "active"], ["clrVerticalNavLink", "", "routerLink", "./hello-world", "routerLinkActive", "active"]], template: function GolangComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "clr-main-container");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "transport-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "clr-vertical-nav", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Golang Overview ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "clr-vertical-nav-group", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Getting Started ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, GolangComponent_clr_vertical_nav_group_children_8_Template, 7, 0, "clr-vertical-nav-group-children", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "router-outlet", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("activate", function GolangComponent_Template_router_outlet_activate_11_listener($event) { return ctx.onActivate($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "transport-footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("clrVerticalNavCollapsible", false)("clr-nav-level", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("clrIfExpanded", true);
    } }, directives: [_clr_angular__WEBPACK_IMPORTED_MODULE_1__["ClrMainContainer"], _clr_angular__WEBPACK_IMPORTED_MODULE_1__["MainContainerWillyWonka"], _shared_header_header_component__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"], _clr_angular__WEBPACK_IMPORTED_MODULE_1__["ClrVerticalNav"], _clr_angular__WEBPACK_IMPORTED_MODULE_1__["ClrNavLevel"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _clr_angular__WEBPACK_IMPORTED_MODULE_1__["ClrVerticalNavLink"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkActive"], _clr_angular__WEBPACK_IMPORTED_MODULE_1__["ClrVerticalNavGroup"], _clr_angular__WEBPACK_IMPORTED_MODULE_1__["ÇlrDatagridDetailRegisterer"], _clr_angular__WEBPACK_IMPORTED_MODULE_1__["ClrIfExpanded"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"], _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_4__["FooterComponent"], _clr_angular__WEBPACK_IMPORTED_MODULE_1__["ClrVerticalNavGroupChildren"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJnb2xhbmcuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GolangComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'transport-golang',
                templateUrl: './golang.component.html',
                styleUrls: ['./golang.component.scss']
            }]
    }], function () { return []; }, { mainContentDiv: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ["mainContent"]
        }] }); })();


/***/ }),

/***/ "rIcS":
/*!*********************************************************!*\
  !*** ./src/app/golang/importing/importing.component.ts ***!
  \*********************************************************/
/*! exports provided: ImportingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImportingComponent", function() { return ImportingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _vmw_transport_docs_services_highlight_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @vmw/transport-docs/services/highlight.service */ "SrJx");
/* harmony import */ var _shared_animated_console_animated_console_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/animated-console/animated-console.component */ "CyPm");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/*
 * Copyright 2021 VMware, Inc.
 * SPDX-License-Identifier: BSD-2-Clause
 */





class ImportingComponent {
    constructor(highlightService) {
        this.highlightService = highlightService;
        this.highlighted = false;
    }
    ngOnInit() {
    }
    ngAfterViewChecked() {
        if (!this.highlighted) {
            this.highlightService.highlightAll();
            this.highlighted = true;
        }
    }
}
ImportingComponent.ɵfac = function ImportingComponent_Factory(t) { return new (t || ImportingComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_vmw_transport_docs_services_highlight_service__WEBPACK_IMPORTED_MODULE_1__["HighlightService"])); };
ImportingComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ImportingComponent, selectors: [["transport-importing"]], decls: 21, vars: 4, consts: [[1, "clr-code"], [3, "inputCommand", "consoleTheme", "loopAnimation", "delay"], [1, "code"], [1, "language-go"], ["routerLink", "/golang/initializing", 1, "btn", "btn-primary", "btn-block", "btn-outline"]], template: function ImportingComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Importing Transport in Golang");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " The Go version of Transport has go.mod support. You should be able to easily add it using ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "code", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "go get");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "use ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "code", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "go get");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "transport-animated-console", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Adding to your app");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "pre", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "code", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "import \"github.com/vmware/transport-go/bus\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Next Steps: Initializing Transport");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("inputCommand", "go get github.com/vmware/transport-go/...")("consoleTheme", "macOS")("loopAnimation", false)("delay", 1);
    } }, directives: [_shared_animated_console_animated_console_component__WEBPACK_IMPORTED_MODULE_2__["AnimatedConsoleComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJpbXBvcnRpbmcuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ImportingComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'transport-importing',
                templateUrl: './importing.component.html',
                styleUrls: ['./importing.component.scss']
            }]
    }], function () { return [{ type: _vmw_transport_docs_services_highlight_service__WEBPACK_IMPORTED_MODULE_1__["HighlightService"] }]; }, null); })();


/***/ }),

/***/ "xZAH":
/*!*****************************************!*\
  !*** ./src/app/golang/golang.module.ts ***!
  \*****************************************/
/*! exports provided: GolangModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GolangModule", function() { return GolangModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _golang_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./golang-routing.module */ "zrT/");
/* harmony import */ var _vmw_transport_docs_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @vmw/transport-docs/shared/shared.module */ "PCNd");
/* harmony import */ var _clr_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @clr/angular */ "8MG2");
/* harmony import */ var _overview_overview_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./overview/overview.component */ "ceXl");
/* harmony import */ var _golang_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./golang.component */ "d5DX");
/* harmony import */ var _importing_importing_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./importing/importing.component */ "rIcS");
/* harmony import */ var _initializing_initializing_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./initializing/initializing.component */ "JVd6");
/* harmony import */ var _hello_world_hello_world_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./hello-world/hello-world.component */ "/7wi");
/*
 * Copyright 2021 VMware, Inc.
 * SPDX-License-Identifier: BSD-2-Clause
 */











class GolangModule {
}
GolangModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: GolangModule });
GolangModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function GolangModule_Factory(t) { return new (t || GolangModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _golang_routing_module__WEBPACK_IMPORTED_MODULE_2__["GolangRoutingModule"],
            _vmw_transport_docs_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _clr_angular__WEBPACK_IMPORTED_MODULE_4__["ClarityModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](GolangModule, { declarations: [_overview_overview_component__WEBPACK_IMPORTED_MODULE_5__["OverviewComponent"], _golang_component__WEBPACK_IMPORTED_MODULE_6__["GolangComponent"], _importing_importing_component__WEBPACK_IMPORTED_MODULE_7__["ImportingComponent"], _initializing_initializing_component__WEBPACK_IMPORTED_MODULE_8__["InitializingComponent"], _hello_world_hello_world_component__WEBPACK_IMPORTED_MODULE_9__["HelloWorldComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _golang_routing_module__WEBPACK_IMPORTED_MODULE_2__["GolangRoutingModule"],
        _vmw_transport_docs_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
        _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _clr_angular__WEBPACK_IMPORTED_MODULE_4__["ClarityModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GolangModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_overview_overview_component__WEBPACK_IMPORTED_MODULE_5__["OverviewComponent"], _golang_component__WEBPACK_IMPORTED_MODULE_6__["GolangComponent"], _importing_importing_component__WEBPACK_IMPORTED_MODULE_7__["ImportingComponent"], _initializing_initializing_component__WEBPACK_IMPORTED_MODULE_8__["InitializingComponent"], _hello_world_hello_world_component__WEBPACK_IMPORTED_MODULE_9__["HelloWorldComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _golang_routing_module__WEBPACK_IMPORTED_MODULE_2__["GolangRoutingModule"],
                    _vmw_transport_docs_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _clr_angular__WEBPACK_IMPORTED_MODULE_4__["ClarityModule"],
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "zrT/":
/*!*************************************************!*\
  !*** ./src/app/golang/golang-routing.module.ts ***!
  \*************************************************/
/*! exports provided: GolangRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GolangRoutingModule", function() { return GolangRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _vmw_transport_docs_golang_golang_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @vmw/transport-docs/golang/golang.component */ "d5DX");
/* harmony import */ var _vmw_transport_docs_golang_overview_overview_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @vmw/transport-docs/golang/overview/overview.component */ "ceXl");
/* harmony import */ var _vmw_transport_docs_golang_initializing_initializing_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @vmw/transport-docs/golang/initializing/initializing.component */ "JVd6");
/* harmony import */ var _vmw_transport_docs_golang_importing_importing_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @vmw/transport-docs/golang/importing/importing.component */ "rIcS");
/* harmony import */ var _vmw_transport_docs_golang_hello_world_hello_world_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @vmw/transport-docs/golang/hello-world/hello-world.component */ "/7wi");
/*
 * Copyright 2021 VMware, Inc.
 * SPDX-License-Identifier: BSD-2-Clause
 */









const routes = [
    {
        path: '',
        component: _vmw_transport_docs_golang_golang_component__WEBPACK_IMPORTED_MODULE_2__["GolangComponent"],
        children: [
            { path: '', component: _vmw_transport_docs_golang_overview_overview_component__WEBPACK_IMPORTED_MODULE_3__["OverviewComponent"] },
            { path: 'overview', component: _vmw_transport_docs_golang_overview_overview_component__WEBPACK_IMPORTED_MODULE_3__["OverviewComponent"] },
            { path: 'initializing', component: _vmw_transport_docs_golang_initializing_initializing_component__WEBPACK_IMPORTED_MODULE_4__["InitializingComponent"] },
            { path: 'importing', component: _vmw_transport_docs_golang_importing_importing_component__WEBPACK_IMPORTED_MODULE_5__["ImportingComponent"] },
            { path: 'hello-world', component: _vmw_transport_docs_golang_hello_world_hello_world_component__WEBPACK_IMPORTED_MODULE_6__["HelloWorldComponent"] },
        ]
    }
];
class GolangRoutingModule {
}
GolangRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: GolangRoutingModule });
GolangRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function GolangRoutingModule_Factory(t) { return new (t || GolangRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](GolangRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GolangRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=golang-golang-module.js.map