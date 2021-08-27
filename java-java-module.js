(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["java-java-module"],{

/***/ "13ML":
/*!*************************************************************!*\
  !*** ./src/app/java/abstractions/abstractions.component.ts ***!
  \*************************************************************/
/*! exports provided: AbstractionsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AbstractionsComponent", function() { return AbstractionsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _vmw_transport_docs_services_highlight_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @vmw/transport-docs/services/highlight.service */ "SrJx");
/*
 * Copyright 2021 VMware, Inc.
 * SPDX-License-Identifier: BSD-2-Clause
 */



class AbstractionsComponent {
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
AbstractionsComponent.ɵfac = function AbstractionsComponent_Factory(t) { return new (t || AbstractionsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_vmw_transport_docs_services_highlight_service__WEBPACK_IMPORTED_MODULE_1__["HighlightService"])); };
AbstractionsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AbstractionsComponent, selectors: [["transport-abstractions"]], decls: 85, vars: 0, consts: [[1, "clr-code"], ["id", "abstractcore"], [1, "emphasis"], [1, "code"], [1, "language-java"], ["href", "https://github.com/vmware/transport-java/blob/master/java/src/main/com/vmware/transport/core/AbstractBase.java", "target", "_blank"], ["id", "abstractservice"], [1, "language-typescript"]], template: function AbstractionsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Accessing the bus and features via class Abstractions (Java)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " In the Java version of the Transport, there are currently only two abstractions available. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "code", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "AbstractBase");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " and ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "code", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "AbstractService");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " (which extends from ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "code", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "AbstractBase");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, ")\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " Extending your classes from these abstractions is pretty important if you want a clean, consistent design in your app.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "h3", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Using ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "code", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "AbstractBase");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " - ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Base class for bus enabled classes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "code", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "AbstractBase");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " provides access to the event bus and logging.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "pre", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "code", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "import com.vmware.transport.core.AbstractBase;\n\n@Component\npublic class MyClass extends AbstractBase {\n    // .. regular Java stuff goes here.\n}");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "code", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "AbstractBase");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, " is actually quite basic, You can see the code at: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, " https://github.com/vmware/transport-java/blob/master/java/src/main/com/vmware/transport/core/AbstractBase.java ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, " There is a single required interface method that you need to implement in order to use ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "code", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "AbstractBase");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, ". This interface method is ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "code", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "initialize()");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, ". This is your kick off / boot method, to do what ever you need to.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "pre", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "code", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "import com.vmware.transport.core.AbstractBase;\n\n@Component\npublic class MyClass extends AbstractBase {\n    public void initialize() {\n        // .. kick off your stuff here.\n    }\n}");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "h3", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Using ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "code", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "AbstractService<ReqT, RespT>");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, " - ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "For services");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "code", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "AbstractService");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, " allows you to build services that can respond to requests via the distributed bus via Galactic Channels.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, " If you want to build custom services that perform any kind of complex business logic, or call APIs.. and you want to make them available to any UI or CLI that is operating over the fabric, then this is the class for you!\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, " The two generic params are the Request type and Response type of what your class is expecting to receive. The request comes from the consumer, the response is what the service returns to the consumer (as the service is the producer).\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, " Let's create a sample service called ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "CalendarService");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, " that simply returns a date or time. This is a very simple example of a service that uses ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "code", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "AbstractService");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, ".\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "Java CalendarService");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "pre", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "code", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "package samples;\n\nimport com.vmware.transport.bridge.Request;\nimport com.vmware.transport.bridge.Response;\nimport com.vmware.transport.bus.model.Message;\nimport com.vmware.transport.core.AbstractService;\nimport org.springframework.stereotype.Component;\n\nimport java.text.SimpleDateFormat;\nimport java.util.Calendar;\nimport java.util.GregorianCalendar;\n\n@Component\npublic class CalendarService extends AbstractService<Request<String>, Response<String>> {\n\n    // define the channel the service operates on,.\n    public static final String Channel = \"calendar-service\";\n\n    CalendarService() {\n        super(CalendarService.Channel);\n    }\n\n    // handle service request.\n    protected void handleServiceRequest(Request request, Message busMessage) {\n\n        // which command/request shall we run?\n        switch(request.getRequest()) {\n            case SampleCommand.Date:\n                handleDate(request);\n                break;\n\n            case SampleCommand.Time:\n                handleTime(request);\n                break;\n\n            default:\n                this.handleUnknownRequest(request);\n        }\n    }\n\n    private String formatCalendar(String format) {\n        Calendar calendar = GregorianCalendar.getInstance();\n        SimpleDateFormat fmt = new SimpleDateFormat(format);\n        return fmt.format(calendar.getTime());\n    }\n\n    private void handleTime(Request request) {\n        Response<String> response = new Response<>(request.getId(), formatCalendar(\"hh:mm:ss a\"));\n        this.sendResponse(response, request.getId(), request.getTargetUser());\n    }\n\n    private void handleDate(Request request) {\n        Response<String> response = new Response<>(request.getId(), formatCalendar(\"yyyy-MM-dd\"));\n        this.sendResponse(response, request.getId(), request.getTargetUser());\n    }\n}\n\nabstract class SampleCommand {\n    static final String Time = \"time\";\n    static final String Date = \"date\";\n}");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "How would I call CalendarService from a UI?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, " It's still pretty simple. The Demo component above looks like this:\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "Angular CalendarComponent");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "pre", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "code", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, "import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';\nimport { ClrLoadingState } from '@clr/angular';\nimport { APIResponse, AbstractBase } from '@vmw/transport';\nimport { GeneralUtil } from '@vmw/transport/util/util';\nimport { FabricConnectionState } from '@vmw/transport/fabric.api';\n\n@Component({\n    selector: 'calendar-service-component',\n    template: `\n        <div class=\"clr-row\" *ngIf=\"connected\">\n            <div class=\"clr-col-6\">\n                <button [clrLoading]=\"requestLoading\" class=\"btn btn-primary-outline btn-sm\" (click)=\"requestTime()\">\n                    Request Time\n                </button>\n                <button [clrLoading]=\"requestLoading\" class=\"btn btn-primary-outline btn-sm\" (click)=\"requestDate()\">\n                    Request Date\n                </button>\n                <button [clrLoading]=\"requestLoading\" class=\"btn btn-primary-outline btn-sm\" (click)=\"unknownCommand()\">\n                    Send Invalid Command\n                </button>\n            </div>\n            <div class=\"clr-col-6\" *ngIf=\"item\">\n                Fabric Calendar Service Response: <span class=\"emphasis\">{{item}}</span>\n            </div>\n        </div>`\n})\nexport class CalendarServiceComponent extends AbstractBase implements OnInit, OnDestroy {\n\n    requestLoading: ClrLoadingState = ClrLoadingState.DEFAULT;\n    public item: string;\n\n    constructor() {\n        super('CalendarServiceComponent');\n    }\n\n    ngOnDestroy() {\n        // stop channel from being extended to fabric.\n        this.bus.markChannelAsLocal('calendar-service');\n    }\n\n    ngOnInit(): void {\n        // extend channel to fabric.\n        this.bus.markChannelAsGalactic('calendar-service');\n    }\n\n    private makeRequest(command: string) {\n        // show state on the button\n        this.requestLoading = ClrLoadingState.LOADING;\n        const request = this.fabric.generateFabricRequest(command);\n\n        this.bus.requestOnceWithId(GeneralUtil.genUUIDShort(), 'calendar-service', request)\n            .handle((response: APIResponse<string>) => {\n                this.item = response.payload;\n                this.requestLoading = ClrLoadingState.DEFAULT;\n            });\n    }\n\n    requestTime(): void {\n        this.makeRequest('time');\n    }\n\n    requestDate(): void {\n        this.makeRequest('date');\n    }\n\n    unknownCommand(): void {\n        this.makeRequest('invalid');\n    }\n}\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhYnN0cmFjdGlvbnMuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AbstractionsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'transport-abstractions',
                templateUrl: './abstractions.component.html',
                styleUrls: ['./abstractions.component.scss']
            }]
    }], function () { return [{ type: _vmw_transport_docs_services_highlight_service__WEBPACK_IMPORTED_MODULE_1__["HighlightService"] }]; }, null); })();


/***/ }),

/***/ "3VFl":
/*!*****************************************************!*\
  !*** ./src/app/java/overview/overview.component.ts ***!
  \*****************************************************/
/*! exports provided: OverviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OverviewComponent", function() { return OverviewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _vmw_transport_docs_base_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @vmw/transport-docs/base.component */ "w7eE");
/* harmony import */ var _vmw_transport_docs_shared_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @vmw/transport-docs/shared/model */ "QOlJ");
/* harmony import */ var _vmw_transport_docs_services_highlight_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @vmw/transport-docs/services/highlight.service */ "SrJx");
/* harmony import */ var _clr_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @clr/angular */ "8MG2");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _shared_animated_console_animated_console_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/animated-console/animated-console.component */ "CyPm");
/*
 * Copyright 2021 VMware, Inc.
 * SPDX-License-Identifier: BSD-2-Clause
 */









function OverviewComponent_section_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "transport-animated-console", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const cmd_r1 = ctx.$implicit;
    const i_r2 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](cmd_r1.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("inputCommand", cmd_r1.command)("helperTxt", cmd_r1.notes)("consoleTheme", "macOS")("loopAnimation", false)("delay", i_r2 * 1000);
} }
class OverviewComponent extends _vmw_transport_docs_base_component__WEBPACK_IMPORTED_MODULE_1__["BaseComponent"] {
    constructor(highlightService) {
        super('OverviewComponent');
        this.highlightService = highlightService;
        this.highlighted = false;
    }
    highlight() {
        this.highlightService.highlightAll();
    }
    ngOnInit() {
        this.javaCommands = _vmw_transport_docs_shared_model__WEBPACK_IMPORTED_MODULE_2__["javaTerminalCommands"];
    }
    ngAfterViewChecked() {
        if (!this.highlighted) {
            this.highlightService.highlightAll();
            this.highlighted = true;
        }
    }
}
OverviewComponent.ɵfac = function OverviewComponent_Factory(t) { return new (t || OverviewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_vmw_transport_docs_services_highlight_service__WEBPACK_IMPORTED_MODULE_3__["HighlightService"])); };
OverviewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: OverviewComponent, selectors: [["transport-overview"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 23, vars: 1, consts: [["src", "assets/github.png", "alt", "github", "title", "transport on github", 1, "github-logo"], ["href", "https://github.com/vmware/transport-java"], ["role", "alert", 1, "alert", "alert-info"], [1, "alert-items"], [1, "alert-item", "static"], [1, "alert-icon-wrapper"], ["shape", "exclamation-circle", 1, "alert-icon"], [1, "alert-text"], ["href", "https://spring.io/projects/spring-framework"], [4, "ngFor", "ngForOf"], ["routerLink", "/java/importing", 1, "btn", "btn-primary", "btn-block", "btn-outline"], [1, "code-step"], [3, "inputCommand", "helperTxt", "consoleTheme", "loopAnimation", "delay"]], template: function OverviewComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Transport for Java");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "View Java source on Github");
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " We're still working on these docs. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " This implementation is written in Java and depends on the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Spring Framework");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, ", because it's awesome.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, OverviewComponent_section_19_Template, 4, 6, "section", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Next Steps: Importing Transport");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.javaCommands);
    } }, directives: [_clr_angular__WEBPACK_IMPORTED_MODULE_4__["ClrIconCustomTag"], _clr_angular__WEBPACK_IMPORTED_MODULE_4__["ClrAlertText"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLinkWithHref"], _shared_animated_console_animated_console_component__WEBPACK_IMPORTED_MODULE_7__["AnimatedConsoleComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJvdmVydmlldy5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OverviewComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'transport-overview',
                templateUrl: './overview.component.html',
                styleUrls: ['./overview.component.scss']
            }]
    }], function () { return [{ type: _vmw_transport_docs_services_highlight_service__WEBPACK_IMPORTED_MODULE_3__["HighlightService"] }]; }, null); })();


/***/ }),

/***/ "7pst":
/*!*******************************************************!*\
  !*** ./src/app/java/importing/importing.component.ts ***!
  \*******************************************************/
/*! exports provided: ImportingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImportingComponent", function() { return ImportingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _vmw_transport_docs_services_highlight_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @vmw/transport-docs/services/highlight.service */ "SrJx");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
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
ImportingComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ImportingComponent, selectors: [["transport-importing"]], decls: 26, vars: 0, consts: [[1, "code"], [1, "language-typescript"], [1, "language-markup"], ["routerLink", "/java/initializing", 1, "btn", "btn-primary", "btn-block", "btn-outline"]], template: function ImportingComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Importing Transport into your Spring Application");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " The Java version of Transport can be consumed via gradle, or maven.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "What does the Transport depend on?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Magic doesn't come for free, so Transport heavily depends on RxJava, Spring, Jackson, Apache Commons and a few others.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Configuring Gradle");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Add a dependency to the desired Transport jar version and its dependencies.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "pre", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "code", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "dependencies {\n    compile \"com.vmware.transport:vmw-transport:1.0.0\"\n    compile \"org.springframework.boot:spring-boot-starter-web:1.5.18.RELEASE\"\n    compile \"org.springframework.boot:spring-boot-starter-websocket:1.5.18.RELEASE\"\n    compile \"org.springframework.security:spring-security-web:4.2.2.RELEASE\"\n    compile \"org.springframework.security:spring-security-config:4.2.2.RELEASE\"\n    compile \"io.reactivex.rxjava2:rxjava:2.1.9\"\n    compile \"com.fasterxml.jackson.core:jackson-databind:2.9.4\"\n    compile \"com.fasterxml.jackson.module:jackson-module-jsonSchema:2.9.4\"\n    compile \"org.slf4j:slf4j-api:1.7.25\"\n    compile \"ch.qos.logback:logback-classic:1.2.3\"\n    compile \"com.google.code.gson:gson:2.8.1\"\n    compile \"joda-time:joda-time:2.9.9\"\n    compile \"org.apache.httpcomponents:httpclient:4.5.6\"\n    compile \"org.apache.commons:commons-lang3:3.8.1\"\n}");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Configuring Maven");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " Next add a dependency to Transport\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "pre", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "code", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "<dependencies>\n    <dependency>\n        <groupId>com.vmware.transport</groupId>\n        <artifactId>vmw-transport</artifactId>\n        <version>1.0.0</version>\n    </dependency>\n    <dependency>\n        <groupId>org.springframework.boot</groupId>\n        <artifactId>spring-boot-starter-web</artifactId>\n        <version>1.5.18.RELEASE</version>\n    </dependency>\n    <dependency>\n        <groupId>org.springframework.boot</groupId>\n        <artifactId>spring-boot-starter-websocket</artifactId>\n        <version>1.5.18.RELEASE</version>\n    </dependency>\n    <dependency>\n        <groupId>org.springframework.security</groupId>\n        <artifactId>spring-security-web</artifactId>\n        <version>4.2.2.RELEASE</version>\n    </dependency>\n    <dependency>\n        <groupId>org.springframework.security</groupId>\n        <artifactId>spring-security-config</artifactId>\n        <version>4.2.2.RELEASE</version>\n    </dependency>\n    <dependency>\n        <groupId>io.reactivex.rxjava2</groupId>\n        <artifactId>rxjava</artifactId>\n        <version>2.1.9</version>\n    </dependency>\n    <dependency>\n        <groupId>com.fasterxml.jackson.core</groupId>\n        <artifactId>jackson-databind</artifactId>\n        <version>2.9.4</version>\n    </dependency>\n    <dependency>\n        <groupId>com.fasterxml.jackson.module</groupId>\n        <artifactId>jackson-module-jsonSchema</artifactId>\n        <version>2.9.4</version>\n    </dependency>\n    <dependency>\n        <groupId>org.slf4j:slf4j</groupId>\n        <artifactId>slf4j-api</artifactId>\n        <version>1.7.25</version>\n    </dependency>\n    <dependency>\n        <groupId>ch.qos.logback</groupId>\n        <artifactId>logback-classic</artifactId>\n        <version>1.2.3</version>\n    </dependency>\n    <dependency>\n        <groupId>com.google.code.gson</groupId>\n        <artifactId>gson</artifactId>\n        <version>2.8.1</version>\n    </dependency>\n    <dependency>\n        <groupId>joda-time</groupId>\n        <artifactId>joda-time</artifactId>\n        <version>2.9.9</version>\n    </dependency>\n    <dependency>\n        <groupId>org.apache.httpcomponents</groupId>\n        <artifactId>httpclient</artifactId>\n        <version>4.5.6</version>\n    </dependency>\n    <dependency>\n        <groupId>org.apache.commons</groupId>\n        <artifactId>commons-lang3</artifactId>\n        <version>3.8.1</version>\n    </dependency>\n</dependencies>");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Next Steps: Initializing Transport");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJpbXBvcnRpbmcuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ImportingComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'transport-importing',
                templateUrl: './importing.component.html',
                styleUrls: ['./importing.component.scss']
            }]
    }], function () { return [{ type: _vmw_transport_docs_services_highlight_service__WEBPACK_IMPORTED_MODULE_1__["HighlightService"] }]; }, null); })();


/***/ }),

/***/ "L83D":
/*!*************************************!*\
  !*** ./src/app/java/java.module.ts ***!
  \*************************************/
/*! exports provided: JavaModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JavaModule", function() { return JavaModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _java_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./java-routing.module */ "j2Z/");
/* harmony import */ var _overview_overview_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./overview/overview.component */ "3VFl");
/* harmony import */ var _java_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./java.component */ "QCp3");
/* harmony import */ var _vmw_transport_docs_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @vmw/transport-docs/shared/shared.module */ "PCNd");
/* harmony import */ var _clr_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @clr/angular */ "8MG2");
/* harmony import */ var _importing_importing_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./importing/importing.component */ "7pst");
/* harmony import */ var _initializing_initializing_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./initializing/initializing.component */ "yGaA");
/* harmony import */ var _hello_world_hello_world_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./hello-world/hello-world.component */ "gElA");
/* harmony import */ var _configuring_configuring_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./configuring/configuring.component */ "nIlH");
/* harmony import */ var _building_services_building_services_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./building-services/building-services.component */ "t59s");
/* harmony import */ var _private_channels_private_channels_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./private-channels/private-channels.component */ "qe5x");
/* harmony import */ var _messaging_messaging_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./messaging/messaging.component */ "tDT8");
/* harmony import */ var _transactions_transactions_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./transactions/transactions.component */ "rCBy");
/* harmony import */ var _logging_logging_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./logging/logging.component */ "Y6/t");
/* harmony import */ var _rest_rest_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./rest/rest.component */ "VRiJ");
/* harmony import */ var _abstractions_abstractions_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./abstractions/abstractions.component */ "13ML");
/*
 * Copyright 2021 VMware, Inc.
 * SPDX-License-Identifier: BSD-2-Clause
 */



















class JavaModule {
}
JavaModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: JavaModule });
JavaModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function JavaModule_Factory(t) { return new (t || JavaModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _vmw_transport_docs_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _clr_angular__WEBPACK_IMPORTED_MODULE_6__["ClarityModule"],
            _java_routing_module__WEBPACK_IMPORTED_MODULE_2__["JavaRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](JavaModule, { declarations: [_overview_overview_component__WEBPACK_IMPORTED_MODULE_3__["OverviewComponent"], _java_component__WEBPACK_IMPORTED_MODULE_4__["JavaComponent"], _importing_importing_component__WEBPACK_IMPORTED_MODULE_7__["ImportingComponent"], _initializing_initializing_component__WEBPACK_IMPORTED_MODULE_8__["InitializingComponent"], _hello_world_hello_world_component__WEBPACK_IMPORTED_MODULE_9__["HelloWorldComponent"], _configuring_configuring_component__WEBPACK_IMPORTED_MODULE_10__["ConfiguringComponent"], _building_services_building_services_component__WEBPACK_IMPORTED_MODULE_11__["BuildingServicesComponent"], _private_channels_private_channels_component__WEBPACK_IMPORTED_MODULE_12__["PrivateChannelsComponent"], _messaging_messaging_component__WEBPACK_IMPORTED_MODULE_13__["MessagingComponent"], _transactions_transactions_component__WEBPACK_IMPORTED_MODULE_14__["TransactionsComponent"], _logging_logging_component__WEBPACK_IMPORTED_MODULE_15__["LoggingComponent"], _rest_rest_component__WEBPACK_IMPORTED_MODULE_16__["RestComponent"], _abstractions_abstractions_component__WEBPACK_IMPORTED_MODULE_17__["AbstractionsComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _vmw_transport_docs_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
        _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _clr_angular__WEBPACK_IMPORTED_MODULE_6__["ClarityModule"],
        _java_routing_module__WEBPACK_IMPORTED_MODULE_2__["JavaRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](JavaModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_overview_overview_component__WEBPACK_IMPORTED_MODULE_3__["OverviewComponent"], _java_component__WEBPACK_IMPORTED_MODULE_4__["JavaComponent"], _importing_importing_component__WEBPACK_IMPORTED_MODULE_7__["ImportingComponent"], _initializing_initializing_component__WEBPACK_IMPORTED_MODULE_8__["InitializingComponent"], _hello_world_hello_world_component__WEBPACK_IMPORTED_MODULE_9__["HelloWorldComponent"], _configuring_configuring_component__WEBPACK_IMPORTED_MODULE_10__["ConfiguringComponent"], _building_services_building_services_component__WEBPACK_IMPORTED_MODULE_11__["BuildingServicesComponent"], _private_channels_private_channels_component__WEBPACK_IMPORTED_MODULE_12__["PrivateChannelsComponent"], _messaging_messaging_component__WEBPACK_IMPORTED_MODULE_13__["MessagingComponent"], _transactions_transactions_component__WEBPACK_IMPORTED_MODULE_14__["TransactionsComponent"], _logging_logging_component__WEBPACK_IMPORTED_MODULE_15__["LoggingComponent"], _rest_rest_component__WEBPACK_IMPORTED_MODULE_16__["RestComponent"], _abstractions_abstractions_component__WEBPACK_IMPORTED_MODULE_17__["AbstractionsComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _vmw_transport_docs_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _clr_angular__WEBPACK_IMPORTED_MODULE_6__["ClarityModule"],
                    _java_routing_module__WEBPACK_IMPORTED_MODULE_2__["JavaRoutingModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "QCp3":
/*!****************************************!*\
  !*** ./src/app/java/java.component.ts ***!
  \****************************************/
/*! exports provided: JavaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JavaComponent", function() { return JavaComponent; });
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
function JavaComponent_clr_vertical_nav_group_children_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "clr-vertical-nav-group-children");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Importing Transport ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Configuring Spring ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Initializing Transport ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Hello World! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function JavaComponent_clr_vertical_nav_group_children_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "clr-vertical-nav-group-children");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Messaging Types ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Building Services ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Private Channels ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Transactions ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Logging ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function JavaComponent_clr_vertical_nav_group_children_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "clr-vertical-nav-group-children");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Calling RESTful APIs ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Built in Abstractions ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class JavaComponent {
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
JavaComponent.ɵfac = function JavaComponent_Factory(t) { return new (t || JavaComponent)(); };
JavaComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: JavaComponent, selectors: [["transport-java"]], viewQuery: function JavaComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.mainContentDiv = _t.first);
    } }, decls: 19, vars: 5, consts: [[1, "content-container"], [3, "clrVerticalNavCollapsible", "clr-nav-level"], ["clrVerticalNavLink", "", "routerLink", "./overview", "routerLinkActive", "active"], ["routerLinkActive", "active"], [4, "clrIfExpanded"], ["id", "main-content", 1, "content-area"], ["mainContent", ""], [3, "activate"], ["clrVerticalNavLink", "", "routerLink", "./importing", "routerLinkActive", "active"], ["clrVerticalNavLink", "", "routerLink", "./configuring", "routerLinkActive", "active"], ["clrVerticalNavLink", "", "routerLink", "./initializing", "routerLinkActive", "active"], ["clrVerticalNavLink", "", "routerLink", "./hello-world", "routerLinkActive", "active"], ["clrVerticalNavLink", "", "routerLink", "./messaging", "routerLinkActive", "active"], ["clrVerticalNavLink", "", "routerLink", "./building-services", "routerLinkActive", "active"], ["clrVerticalNavLink", "", "routerLink", "./private-channels", "routerLinkActive", "active"], ["clrVerticalNavLink", "", "routerLink", "./transactions", "routerLinkActive", "active"], ["clrVerticalNavLink", "", "routerLink", "./logging", "routerLinkActive", "active"], ["clrVerticalNavLink", "", "routerLink", "./rest", "routerLinkActive", "active"], ["clrVerticalNavLink", "", "routerLink", "./abstractions", "routerLinkActive", "active"]], template: function JavaComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "clr-main-container");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "transport-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "clr-vertical-nav", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Java Overview ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "clr-vertical-nav-group", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Getting Started ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, JavaComponent_clr_vertical_nav_group_children_8_Template, 9, 0, "clr-vertical-nav-group-children", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "clr-vertical-nav-group", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Operations ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, JavaComponent_clr_vertical_nav_group_children_11_Template, 11, 0, "clr-vertical-nav-group-children", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "clr-vertical-nav-group", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " Utilities ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, JavaComponent_clr_vertical_nav_group_children_14_Template, 5, 0, "clr-vertical-nav-group-children", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 5, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "router-outlet", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("activate", function JavaComponent_Template_router_outlet_activate_17_listener($event) { return ctx.onActivate($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "transport-footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("clrVerticalNavCollapsible", false)("clr-nav-level", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("clrIfExpanded", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("clrIfExpanded", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("clrIfExpanded", true);
    } }, directives: [_clr_angular__WEBPACK_IMPORTED_MODULE_1__["ClrMainContainer"], _clr_angular__WEBPACK_IMPORTED_MODULE_1__["MainContainerWillyWonka"], _shared_header_header_component__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"], _clr_angular__WEBPACK_IMPORTED_MODULE_1__["ClrVerticalNav"], _clr_angular__WEBPACK_IMPORTED_MODULE_1__["ClrNavLevel"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _clr_angular__WEBPACK_IMPORTED_MODULE_1__["ClrVerticalNavLink"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkActive"], _clr_angular__WEBPACK_IMPORTED_MODULE_1__["ClrVerticalNavGroup"], _clr_angular__WEBPACK_IMPORTED_MODULE_1__["ÇlrDatagridDetailRegisterer"], _clr_angular__WEBPACK_IMPORTED_MODULE_1__["ClrIfExpanded"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"], _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_4__["FooterComponent"], _clr_angular__WEBPACK_IMPORTED_MODULE_1__["ClrVerticalNavGroupChildren"]], styles: ["clr-vertical-nav-group[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  margin-bottom: 10px;\n}\n\n.content-area[_ngcontent-%COMP%] {\n  padding: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2phdmEuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnQkFBQTtFQUNBLG1CQUFBO0FBQ0o7O0FBRUE7RUFDSSxhQUFBO0FBQ0oiLCJmaWxlIjoiamF2YS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImNsci12ZXJ0aWNhbC1uYXYtZ3JvdXAge1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cblxuLmNvbnRlbnQtYXJlYSB7XG4gICAgcGFkZGluZzogMjBweDtcbn1cblxuXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](JavaComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'transport-java',
                templateUrl: './java.component.html',
                styleUrls: ['./java.component.scss']
            }]
    }], function () { return []; }, { mainContentDiv: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ["mainContent"]
        }] }); })();


/***/ }),

/***/ "VRiJ":
/*!*********************************************!*\
  !*** ./src/app/java/rest/rest.component.ts ***!
  \*********************************************/
/*! exports provided: RestComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RestComponent", function() { return RestComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _vmw_transport_docs_services_highlight_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @vmw/transport-docs/services/highlight.service */ "SrJx");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/*
 * Copyright 2021 VMware, Inc.
 * SPDX-License-Identifier: BSD-2-Clause
 */




class RestComponent {
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
RestComponent.ɵfac = function RestComponent_Factory(t) { return new (t || RestComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_vmw_transport_docs_services_highlight_service__WEBPACK_IMPORTED_MODULE_1__["HighlightService"])); };
RestComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RestComponent, selectors: [["transport-rest"]], decls: 96, vars: 0, consts: [[1, "clr-code"], [1, "emphasis"], [1, "code"], [1, "language-java"], ["routerLink", "/java/abstractions", 1, "btn", "btn-primary", "btn-block", "btn-outline"]], template: function RestComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Making RESTful API Requests");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " At some point (pretty quickly) you will need to start making remote calls to APIs in order to do interesting things.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Transport provides a built-in service that abstracts the need to be concerned with handling HTTP operations. The Java version of the RestService is a little more advanced than the TypeScript version.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " The Java version of ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "code", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "RestService");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " knows how to make remote calls to external URIs, as well as knowing how to make calls to local Rest Controllers in your existing application. If the URI is local to your Java application, the RestService will ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Look up your Rest Controller using reflection");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " and ensure it's a match. Once the local controller has been found, the RestService will ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "strong", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "call your controller locally");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, ". This means all existing security is also honoured and evaluated, there is also no additional network hop.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " The ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "code", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "RestService");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " provides operations for ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "code", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "GET, PUT, POST, PATCH");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " and ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "code", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "DELETE");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, " RESTful RPC calls. It can be called from your service when you extend from ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "code", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "AbstractService");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, ". It can also be called from your class when you extend from ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "code", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "AbstractBase");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, ".\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Loading the RestService");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, " The RestService is automatically loaded when Transport boots. There is no need to instantiate it manually\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, " In Angular applications, this would be in your ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "code", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "main.ts");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, " file. Like with Services you build yourself, you would use the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "code", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "ServiceLoader");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, " to instantiate and boot the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "code", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "RestService");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, " and start it listening for requests.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Calling RestService from a Java Class");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, " When your service extends from ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "code", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "AbstractBase");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, " or ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "code", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "AbstractService");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, ", a method named ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "code", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "restServiceRequest()");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, " is provided. There are a couple of overloaded versions of the method, however we will focus on the main one.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "pre", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "code", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "/**\n * Used By RestService to convert an incoming request into a RestOperation.\n * @param <Payld> The Request Payload Type (what is being sent)\n * @param <Resp> The Response Payload Type (what we're expecting back)\n */\npublic class RestOperation<Payld, Resp> {\n    @Getter @Setter\n    private UUID id;\n\n    @Getter @Setter\n    private URI uri;\n\n    @Getter @Setter\n    private HttpMethod method;\n\n    @Getter @Setter\n    private Payld body;\n\n    @Getter @Setter\n    private String apiClass;\n\n    @Getter @Setter\n    private Map<String,String> headers;\n\n    @Getter @Setter\n    private String sentFrom;\n\n    @Getter @Setter\n    private Consumer<Resp> successHandler;\n\n    @Getter @Setter\n    private Consumer<RestError> errorHandler;\n{\n\n/**\n * Make a new RestService call.\n *\n * @param operation RestOperation for call Encapsulates individual argument calls.\n * @param <Req>     Type of the payload being sent.\n * @param <Resp>    Type of the response being returned.\n */\nprotected <Req, Resp> void restServiceRequest(RestOperation<Req, Resp> operation);");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](66, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, " Let's create a simple service called ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "code", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "CloudServicesStatus");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, " that calls a remote API via the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "code", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "RestService");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, " to check the status of VMware Cloud Services as an example.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "Java VMWCloudServicesStatus");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "pre", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "code", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "package samples.rest;\n\nimport com.vmware.transport.bridge.Request;\nimport com.vmware.transport.bridge.Response;\nimport com.vmware.transport.bus.model.Message;\nimport com.vmware.transport.core.AbstractService;\nimport com.vmware.transport.core.error.RestError;\nimport com.vmware.transport.core.model.RestOperation;\nimport com.vmware.transport.core.model.RestServiceResponse;\nimport com.vmware.transport.core.util.ClassMapper;\nimport org.springframework.http.HttpMethod;\nimport org.springframework.stereotype.Component;\n\nimport java.net.URI;\nimport java.util.UUID;\n\n/**\n * Sample service that makes calls to VMW Cloud Services status API.\n */\n@Component\npublic class VMWCloudServiceStatus extends AbstractService<Request<String>, Response<CloudServicesStatusResponse>> {\n\n    VMCCloudServiceStatus() {\n        super(\"services-CloudServiceStatus\");\n    }\n\n    @Override\n    protected void handleServiceRequest(Request<String> request, Message busMessage) throws Exception {\n\n        // there is only a single operation for this service. We can ignore all requests and auto run our\n        // one request handler.\n        this.handleCloudServiceStatusRequest(request);\n    }\n\n    private void handleCloudServiceStatusRequest(Request req) throws Exception {\n\n        // create a rest call for cloud services.\n        super.restServiceRequest(\n                UUID.randomUUID(),\n                new URI(\"https://status.vmware-services.io/api/v2/status.json\"),\n                HttpMethod.GET,\n                null, null,\n                \"samples.rest.CloudServicesStatusResponse\",\n                (Response<CloudServicesStatusResponse> resp) -> {\n                    this.sendResponse(resp, req.getId(), req.getTargetUser());\n                },\n                (Response<RestError> error) -> {\n                    this.sendError(error, req.getId());\n                }\n        );\n\n    }\n}");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "\uD83D\uDC49 No more CORS Issues! \uD83D\uDC48");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, " You can call any API you want now, without having to worry about CORS.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, "What does the UI Component look like?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, " If you have been following along with the TypeScript Examples, this should look pretty familiar now.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, "Angular CloudServicesApiComponent ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "pre", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "code", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, "import { Component, OnDestroy, OnInit } from '@angular/core';\nimport { ClrLoadingState } from '@clr/angular';\nimport { APIResponse } from '@vmw/transport';\nimport { GeneralUtil } from '@vmw/transport/util/util';\nimport { FabricConnectionState } from '@vmw/transport/fabric.api';\nimport { CloudServicesStatusResponse } from './cloud-services.models';\n\n@Component({\n    selector: 'cloudapi-service-component',\n    template: `\n        <div *ngIf=\"connected\">\n            <section>\n                <button [clrLoading]=\"requestLoading\" class=\"btn btn-primary-outline btn-sm\" (click)=\"makeRequest()\">\n                    Request Cloud Services Status\n                </button>\n            </section>\n            <div *ngIf=\"response\">\n                <table class=\"table left table-verticaltable-compact\">\n                    <tbody>\n                    <tr>\n                        <th>Status ID</th>\n                        <td>{{response.page.id}}</td>\n                    </tr>\n                    <tr>\n                        <th>Name</th>\n                        <td>{{response.page.name}}</td>\n                    </tr>\n                    <tr>\n                        <th>Timezone</th>\n                        <td>{{response.page.time_zone}}</td>\n                    </tr>\n                    <tr>\n                        <th>Last Updated</th>\n                        <td>{{response.page.updated_at}}</td>\n                    </tr>\n                    <tr>\n                        <th>Fetched From</th>\n                        <td>{{response.page.url}}</td>\n                    </tr>\n                    <tr>\n                        <th>Indicator</th>\n                        <td>{{response.status.indicator}}</td>\n                    </tr>\n                    <tr>\n                        <th>Service Status</th>\n                        <td>{{response.status.description}}</td>\n                    </tr>\n                    </tbody>\n                </table>\n            </div>\n        </div>\n        <strong *ngIf=\"!connected\">Not connected to fabric, connect to run this code</strong>`\n})\nexport class CloudServicesApiComponent extends AbstractBase implements OnInit, OnDestroy {\n\n    public response: CloudServicesStatusResponse;\n    requestLoading: ClrLoadingState = ClrLoadingState.DEFAULT;\n\n    constructor() {\n        super('CloudServicesApiComponent');\n    }\n\n    ngOnDestroy() {\n        // stop channel from being extended to fabric.\n        this.bus.markChannelAsLocal('services-CloudServiceStatus');\n    }\n\n    ngOnInit(): void {\n        // extend channel to fabric.\n        this.bus.markChannelAsGalactic('services-CloudServiceStatus');\n    }\n\n    private makeRequest() {\n        // show state on the button\n        this.requestLoading = ClrLoadingState.LOADING;\n\n        const request = this.fabric.generateFabricRequest('');\n\n        // make request.\n        this.bus.requestOnceWithId(GeneralUtil.genUUIDShort(), 'services-CloudServiceStatus', request)\n            .handle((response: APIResponse<CloudServicesStatusResponse>) => {\n                this.response = response.payload;\n                this.requestLoading = ClrLoadingState.DEFAULT;\n            });\n    }\n}\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](93, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, "Next Steps: Using Abstractions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZXN0LmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RestComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'transport-rest',
                templateUrl: './rest.component.html',
                styleUrls: ['./rest.component.scss']
            }]
    }], function () { return [{ type: _vmw_transport_docs_services_highlight_service__WEBPACK_IMPORTED_MODULE_1__["HighlightService"] }]; }, null); })();


/***/ }),

/***/ "Y6/t":
/*!***************************************************!*\
  !*** ./src/app/java/logging/logging.component.ts ***!
  \***************************************************/
/*! exports provided: LoggingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoggingComponent", function() { return LoggingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/*
 * Copyright 2021 VMware, Inc.
 * SPDX-License-Identifier: BSD-2-Clause
 */



class LoggingComponent {
    constructor() { }
    ngOnInit() {
    }
}
LoggingComponent.ɵfac = function LoggingComponent_Factory(t) { return new (t || LoggingComponent)(); };
LoggingComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoggingComponent, selectors: [["transport-logging"]], decls: 77, vars: 0, consts: [[1, "clr-code"], [1, "list"], [1, "emphasis"], ["routerLink", "/java/rest", 1, "btn", "btn-primary", "btn-block", "btn-outline"]], template: function LoggingComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Logging (Java)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " >> Please don't use ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "code", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "System.out.println()");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " <<\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " When using any of the abstractions provided, they all extend from a single base class called ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "code", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Loggable");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, ".\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " We have created simple helper methods, that provide consistent console output for all levels of logging, however you also have access to ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "code", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "log");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " Which allows you to control your own logging if you don't want to use the pre-defined logging methods available.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " There are a number of logging methods, for each standardized level\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "ol", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "code", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "logInfoMessage(String emoji, String message, String value)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " - ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " INFO level message");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "code", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "logErrorMessage(String message, String value)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, " - ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "ERROR level message.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "code", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "logDebugMessage(String message, String value)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, " - ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "DEBUG level message.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "code", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "logDebugMessage(String message)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, " - ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "DEBUG level message.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "code", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "logTraceMessage(String message, String value)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, " - ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "TRACE level message.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "code", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "logWarnMessage(String message)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, " - ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "WARN level message.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "Using standard logging");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, " If you don't want to use the methods supplied, for what ever reason - you can access ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "code", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "this.log");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, " when using ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "code", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "AbstractBase");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, " as your superclass. When using ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "code", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "this.log");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, ", you actually have a reference to ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "code", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "org.slf4j.Logger");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, ".\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](74, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "Next Steps: Calling RESTFUL APIs");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsb2dnaW5nLmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoggingComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'transport-logging',
                templateUrl: './logging.component.html',
                styleUrls: ['./logging.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "gElA":
/*!***********************************************************!*\
  !*** ./src/app/java/hello-world/hello-world.component.ts ***!
  \***********************************************************/
/*! exports provided: HelloWorldComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HelloWorldComponent", function() { return HelloWorldComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _vmw_transport_docs_services_highlight_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @vmw/transport-docs/services/highlight.service */ "SrJx");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
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
HelloWorldComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HelloWorldComponent, selectors: [["transport-hello-world"]], decls: 94, vars: 0, consts: [[1, "code"], [1, "language-java"], [1, "log-output"], [1, "console-green"], [1, "console-pink"], [1, "console-blue"], [1, "console-grey"], [1, "clr-code"], [1, "emphasis"], ["routerLink", "/java/messaging", 1, "btn", "btn-primary", "btn-block", "btn-outline"]], template: function HelloWorldComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Hello World! (Java)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "To demonstrate the simplest possible use of Transport, we will create a simple class that simply talks to its self.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Java HelloWorld");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "pre", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "code", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "import com.vmware.transport.bus.model.Message;\nimport com.vmware.transport.core.AbstractBase;\nimport org.springframework.stereotype.Component;\n\n@Component\npublic class HelloWorld extends AbstractBase {\n\n    // define a channel.\n    private String myChannel;\n\n    // initialize is the only mandatory method required. This will always run on boot.\n    public void initialize() {\n\n        // create a local channel.\n        myChannel = \"myChannel\";\n\n        // create a responder\n        this.createResponder();\n        this.sendRequest();\n    }\n\n    // send a response to a request.\n    private void createResponder() {\n        this.bus.respondOnce(myChannel,\n                (Message msg) -> msg.getPayload().toString() + \" world\"\n        );\n    }\n\n    // send a request\n    private void sendRequest() {\n        this.bus.requestOnce(myChannel, \"hello\",\n                (Message msg) -> {\n                    this.logInfoMessage(\"HelloWorld:\", \"Got a response! \", msg.getPayload().toString());\n                }\n        );\n    }\n}");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "The output of the component is pretty basic. If you look at your console, you will see something like this");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "pre", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "2021-03-20 22:19:37.229 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "DEBUG");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "1526");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " --- [main] ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "com.vmware.transport.bus.EventBusImpl");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "      : \uD83D\uDD39  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Initializing Transport Service: HelloWorld");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "\n2021-03-20 22:19:37.248 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "INFO");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "1526");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, " --- [main] ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "samples.HelloWorld");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "                         : ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "HelloWorld:  Got a response!:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "strong", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "hello world");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Breakdown of what is happening");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, " The first requirement is to annotate your class with the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "code", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "@Component");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, " annotation provided by Spring. This marks your class as a Spring Bean, meaning it will be picked up and loaded automatically.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "pre", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "code", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "@Component\npublic class HelloWorld extends AbstractBase {\n    // ...\n}\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, " The next step is to ensure your class extends from ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "code", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "AbstractBase");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, ". This is the same as the TypeScript version, however the Java version is mandatory, where the TypeScript version is optional.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, " When you extend from ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "code", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "AbstractBase");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, ". You're also implementing the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "code", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "TransportEnabled");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, " interface, which has a single method you need to implement. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "code", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "initialize()");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "pre", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "code", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "@Component\npublic class HelloWorld extends AbstractBase {\n    public initialize() {\n        // ...\n    }\n}\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "code", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "initialize()");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, " is your start point. You can use a Constructor, however you may not have access to the event bus at that point. It's ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "strong", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "Highly Recommended");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, " that you kick off anything you want to run from this method and ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "strong", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "Not the constructor.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, " The rest of the example simply sets up a responder and sends a request on the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "code", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "myChannel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, " channel. The API is similar to the TypeScript API, with a few small differences. There is no ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "code", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, "handle()");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, " method. You simply pass in your lambdas as and argument.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](86, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, "Why is the API slightly different to TypeScript?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, " Java and TypeScript are completely different languages that operate in very different ways. TypeScript isn't executed, it's transpiled to JavaScript. All languages are different and bring their own designs, we have tried to keep the APIs as close as possible where it makes sense. We have used language specific techniques and designs in some places however.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](91, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, "Next Steps: Messaging Types");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJoZWxsby13b3JsZC5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HelloWorldComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'transport-hello-world',
                templateUrl: './hello-world.component.html',
                styleUrls: ['./hello-world.component.scss']
            }]
    }], function () { return [{ type: _vmw_transport_docs_services_highlight_service__WEBPACK_IMPORTED_MODULE_1__["HighlightService"] }]; }, null); })();


/***/ }),

/***/ "j2Z/":
/*!*********************************************!*\
  !*** ./src/app/java/java-routing.module.ts ***!
  \*********************************************/
/*! exports provided: JavaRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JavaRoutingModule", function() { return JavaRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _vmw_transport_docs_java_java_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @vmw/transport-docs/java/java.component */ "QCp3");
/* harmony import */ var _vmw_transport_docs_java_overview_overview_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @vmw/transport-docs/java/overview/overview.component */ "3VFl");
/* harmony import */ var _vmw_transport_docs_java_importing_importing_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @vmw/transport-docs/java/importing/importing.component */ "7pst");
/* harmony import */ var _vmw_transport_docs_java_initializing_initializing_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @vmw/transport-docs/java/initializing/initializing.component */ "yGaA");
/* harmony import */ var _vmw_transport_docs_java_hello_world_hello_world_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @vmw/transport-docs/java/hello-world/hello-world.component */ "gElA");
/* harmony import */ var _vmw_transport_docs_java_configuring_configuring_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @vmw/transport-docs/java/configuring/configuring.component */ "nIlH");
/* harmony import */ var _vmw_transport_docs_java_building_services_building_services_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @vmw/transport-docs/java/building-services/building-services.component */ "t59s");
/* harmony import */ var _vmw_transport_docs_java_messaging_messaging_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @vmw/transport-docs/java/messaging/messaging.component */ "tDT8");
/* harmony import */ var _vmw_transport_docs_java_private_channels_private_channels_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @vmw/transport-docs/java/private-channels/private-channels.component */ "qe5x");
/* harmony import */ var _vmw_transport_docs_java_transactions_transactions_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @vmw/transport-docs/java/transactions/transactions.component */ "rCBy");
/* harmony import */ var _vmw_transport_docs_java_logging_logging_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @vmw/transport-docs/java/logging/logging.component */ "Y6/t");
/* harmony import */ var _vmw_transport_docs_java_rest_rest_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @vmw/transport-docs/java/rest/rest.component */ "VRiJ");
/* harmony import */ var _vmw_transport_docs_java_abstractions_abstractions_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @vmw/transport-docs/java/abstractions/abstractions.component */ "13ML");
/*
 * Copyright 2021 VMware, Inc.
 * SPDX-License-Identifier: BSD-2-Clause
 */

















const routes = [
    {
        path: '',
        component: _vmw_transport_docs_java_java_component__WEBPACK_IMPORTED_MODULE_2__["JavaComponent"],
        children: [
            { path: '', component: _vmw_transport_docs_java_overview_overview_component__WEBPACK_IMPORTED_MODULE_3__["OverviewComponent"] },
            { path: 'overview', component: _vmw_transport_docs_java_overview_overview_component__WEBPACK_IMPORTED_MODULE_3__["OverviewComponent"] },
            { path: 'importing', component: _vmw_transport_docs_java_importing_importing_component__WEBPACK_IMPORTED_MODULE_4__["ImportingComponent"] },
            { path: 'configuring', component: _vmw_transport_docs_java_configuring_configuring_component__WEBPACK_IMPORTED_MODULE_7__["ConfiguringComponent"] },
            { path: 'initializing', component: _vmw_transport_docs_java_initializing_initializing_component__WEBPACK_IMPORTED_MODULE_5__["InitializingComponent"] },
            { path: 'hello-world', component: _vmw_transport_docs_java_hello_world_hello_world_component__WEBPACK_IMPORTED_MODULE_6__["HelloWorldComponent"] },
            { path: 'building-services', component: _vmw_transport_docs_java_building_services_building_services_component__WEBPACK_IMPORTED_MODULE_8__["BuildingServicesComponent"] },
            { path: 'messaging', component: _vmw_transport_docs_java_messaging_messaging_component__WEBPACK_IMPORTED_MODULE_9__["MessagingComponent"] },
            { path: 'private-channels', component: _vmw_transport_docs_java_private_channels_private_channels_component__WEBPACK_IMPORTED_MODULE_10__["PrivateChannelsComponent"] },
            { path: 'transactions', component: _vmw_transport_docs_java_transactions_transactions_component__WEBPACK_IMPORTED_MODULE_11__["TransactionsComponent"] },
            { path: 'logging', component: _vmw_transport_docs_java_logging_logging_component__WEBPACK_IMPORTED_MODULE_12__["LoggingComponent"] },
            { path: 'rest', component: _vmw_transport_docs_java_rest_rest_component__WEBPACK_IMPORTED_MODULE_13__["RestComponent"] },
            { path: 'abstractions', component: _vmw_transport_docs_java_abstractions_abstractions_component__WEBPACK_IMPORTED_MODULE_14__["AbstractionsComponent"] },
        ]
    }
];
class JavaRoutingModule {
}
JavaRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: JavaRoutingModule });
JavaRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function JavaRoutingModule_Factory(t) { return new (t || JavaRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](JavaRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](JavaRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "nIlH":
/*!***********************************************************!*\
  !*** ./src/app/java/configuring/configuring.component.ts ***!
  \***********************************************************/
/*! exports provided: ConfiguringComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfiguringComponent", function() { return ConfiguringComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _vmw_transport_docs_services_highlight_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @vmw/transport-docs/services/highlight.service */ "SrJx");
/*
 * Copyright 2021 VMware, Inc.
 * SPDX-License-Identifier: BSD-2-Clause
 */



class ConfiguringComponent {
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
ConfiguringComponent.ɵfac = function ConfiguringComponent_Factory(t) { return new (t || ConfiguringComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_vmw_transport_docs_services_highlight_service__WEBPACK_IMPORTED_MODULE_1__["HighlightService"])); };
ConfiguringComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ConfiguringComponent, selectors: [["transport-configuring"]], decls: 121, vars: 0, consts: [[1, "clr-code"], [1, "code"], [1, "language-java"], [1, "emphasis"], [1, "log-output"], [1, "console-green"], [1, "console-pink"], [1, "console-blue"], [1, "console-white"], [1, "console-grey"]], template: function ConfiguringComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Configuring your Spring Application\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Transport makes use of Spring's magic under the covers, in a significant way. This has advantages and disadvantages. It's good because we don't have to re-invent the wheel. It's bad because it means the Java version of Transport is dependent on Spring to operate.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " The Transport Config Class.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " We use the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "code", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "@Configuration");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " annotation provided by Spring to set things up. We also then use the built in STOMP, Messaging, Broker and WebSocket support.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " When creating your configuration class, you need to implement the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "code", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "TransportBridgeConfigurer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, ". This interface allows you to define which endpoints your want your application to expose. This will default to '/fabric'.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " To enable Transport functionality for automatic local and remote broker integration, you need the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "code", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "@EnableTransport");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " annotation also. You can use the bus internally without this, but you won't get the benefits of connecting the bus to a broker.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " What is an endpoint?\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " An endpoint is the destination you want to expose the STOMP pub-sub interface used by the TypeScript client, or any STOMP compatible client. The choice is up to you, however for consistency across applications, we recommend the default '/fabric' endpoint.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, " Inside your configuration, you can configure the endpoints, the allows origins (defaults to all), local broker (/topic) definitions and the publication prefix (/pub)\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, " The publication prefix is where messages are pushed into the local broker. You should not directly push to /topic, because you will receive an echo back yourself. The publication prefix ensures all subscribers get your message, but you don't get a copy back yourself if you're also subscribed to a destination.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, " Here is an example of a Configuration that uses all the defaults. There isn't a need to change any of this, unless you have specific needs or conflicts.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "MyAppFabricConfiguration");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "pre", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "code", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "package com.vmware.skyscraper.configs;\n\nimport com.vmware.transport.bridge.spring.config.TransportBridgeConfiguration;\nimport com.vmware.transport.bridge.spring.config.TransportBridgeConfigurer;\nimport com.vmware.transport.bridge.spring.config.annotation.EnableTransport;\nimport org.springframework.context.annotation.Configuration;\nimport org.springframework.messaging.simp.config.MessageBrokerRegistry;\nimport org.springframework.web.socket.config.annotation.AbstractWebSocketMessageBrokerConfigurer;\nimport org.springframework.web.socket.config.annotation.EnableWebSocketMessageBroker;\nimport org.springframework.web.socket.config.annotation.StompEndpointRegistry;\n\n/**\n * Transport Configuration.\n */\n@Configuration\n@EnableTransport\n@EnableWebSocketMessageBroker\npublic class MyConfiguration extends AbstractWebSocketMessageBrokerConfigurer\n        implements TransportBridgeConfigurer {\n\n    @Override\n    public void configureMessageBroker(MessageBrokerRegistry config) {\n        config.enableSimpleBroker(\"/topic\");\n        config.setApplicationDestinationPrefixes(\"/pub\");\n    }\n\n    @Override\n    public void registerStompEndpoints(StompEndpointRegistry registry) {\n        registry.addEndpoint(\"/fabric\").setAllowedOrigins(\"*\");\n    }\n\n    @Override\n    public void registerTransportDestinationPrefixes(TransportBridgeConfiguration configuration) {\n        configuration.addTransportDestinationPrefixes(\"/topic\", \"/pub\");\n    }\n}\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "h4", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, " And you're done!\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, " How do I know I am done?\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "When you boot you application, you will see something like the following in your console.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "pre", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "2019-03-01 14:34:42.968  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "INFO");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "50737");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "  --- [main] ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "o.s.w.s.s.s.WebSocketHandlerMapping");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "         : ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "Mapped URL path [/transport] onto handler of type [class org.springframework.web.socket.server.support.WebSocketHttpRequestHandler]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "\n2021-03-20 14:34:42.969  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "INFO");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "50737");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "  --- [main] ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "o.s.w.s.s.s.WebSocketHandlerMapping");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "         : ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "Mapped URL path [/fabric] onto handler of type [class org.springframework.web.socket.server.support.WebSocketHttpRequestHandler]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "\n2021-03-20 14:34:43.154  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "INFO");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "50737");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "  --- [main] ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, ".WebSocketAnnotationMethodMessageHandler");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "    : ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "Mapped \"{[/{topicDestination}],messageType=[MESSAGE]}\" onto public void com.vmware.transport.bridge.spring.controllers.MessageController.bridgeMessage(com.vmware.transport.bridge.Request,java.lang.String) throws com.vmware.transport.bridge.RequestException");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, "\n2021-03-20 14:34:43.887  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, "INFO");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, "  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, "50737");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, "  --- [main] ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, "com.vmware.transport.bus.EventBusImpl");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, "       : \uD83C\uDF08  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "strong", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94, "Starting Transport");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, "\n2021-03-20 14:34:43.912  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97, "DEBUG");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](98, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](100, "50737");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](101, "  --- [main] ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](103, "com.vmware.transport.bus.EventBusImpl");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](104, "       : \uD83D\uDD39  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](106, "Initializing Transport Service: RestService");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](107, "\n2021-03-20 14:34:43.912  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](109, "INFO");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](110, "  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](112, "50737");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](113, "  --- [main] ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](115, "c.v.transport.core.operations.RestService");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](116, "   : \uD83D\uDCE3  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](118, "RestService initialized, handling requests on channel: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "strong", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](120, "transport-services::REST");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb25maWd1cmluZy5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ConfiguringComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'transport-configuring',
                templateUrl: './configuring.component.html',
                styleUrls: ['./configuring.component.scss']
            }]
    }], function () { return [{ type: _vmw_transport_docs_services_highlight_service__WEBPACK_IMPORTED_MODULE_1__["HighlightService"] }]; }, null); })();


/***/ }),

/***/ "qe5x":
/*!*********************************************************************!*\
  !*** ./src/app/java/private-channels/private-channels.component.ts ***!
  \*********************************************************************/
/*! exports provided: PrivateChannelsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrivateChannelsComponent", function() { return PrivateChannelsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _vmw_transport_docs_services_highlight_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @vmw/transport-docs/services/highlight.service */ "SrJx");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/*
 * Copyright 2021 VMware, Inc.
 * SPDX-License-Identifier: BSD-2-Clause
 */




class PrivateChannelsComponent {
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
PrivateChannelsComponent.ɵfac = function PrivateChannelsComponent_Factory(t) { return new (t || PrivateChannelsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_vmw_transport_docs_services_highlight_service__WEBPACK_IMPORTED_MODULE_1__["HighlightService"])); };
PrivateChannelsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PrivateChannelsComponent, selectors: [["transport-private-channels"]], decls: 77, vars: 0, consts: [["routerLink", "/java/messaging"], ["routerLink", "/java/configuring"], [1, "clr-code"], [1, "code"], [1, "language-java"], ["routerLink", "/java/building-services"], ["routerLink", "/ts/extending-channels"], [1, "language-ts"], ["routerLink", "/java/transactions", 1, "btn", "btn-primary", "btn-block", "btn-outline"]], template: function PrivateChannelsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Using Private Channels");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " The three ways to conduct direct messaging, as discussed in ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Messaging Types");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, ", have one caveat; it uses a single WebSocket endpoint for both broadcast and direct messaging. The filtering mechanism is implemented on the client side. What this implies is that while the UI will not be able to see and process the response meant for another client's request with a different request ID, under the hood you can still see the message packet arriving at your browser using inspection tools. This could pose a security problem and might not be a feasible solution.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " With Transport, you can now set up 1:1 private channels between the broker and clients which ensures all communication between a client and the broker will always happen on a dedicated channel and other clients will not be able to see the message at all.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " See the following steps to configure and send to and receive from a private channel.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " Configure Spring Boot to add a broker endpoint for private channels\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " Take MyConfiguration from ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Configuring Spring");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " as the starting point. Here we want to 1) add a new endpoint ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "code", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "/queue");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " as the main endpoint for private conversations, and 2) configure a default handshake handler for the STOMP session. The handshake handler is responsible for generating and assigning a unique ID to each session.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "MyConfiguration");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "pre", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "code", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "// ...\n    @Override\n    public void configureMessageBroker(MessageBrokerRegistry config) {\n        config.enableSimpleBroker(\"/topic\", \"/queue\", \"/pub\");\n        config.setApplicationDestinationPrefixes(\"/pub\");\n    }\n\n    @Override\n    public void registerStompEndpoints(StompEndpointRegistry registry) {\n        registry.addEndpoint(\"/fabric\")\n                .setAllowedOrigins(\"*\")\n                .setHandshakeHandler(new DefaultHandshakeHandler() {\n                    @Override\n                    protected Principal determineUser(ServerHttpRequest request,\n                                                      WebSocketHandler wsHandler,\n                                                      Map<String, Object>> attributes) {\n                        return new SessionPrincipal(UUID.randomUUID().toString());\n                    }\n                });\n    }\n\n    @Override\n    public void registerTransportDestinationPrefixes(TransportBridgeConfiguration configuration) {\n        configuration.addTransportDestinationPrefixes(\"/topic\", \"/pub\", \"/user/queue\");\n    }\n// ...\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Principal implementation example");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "pre", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "code", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "public class SessionPrincipal implements Principal {\n    private String name;\n\n    public SessionPrincipal(String name) {\n        this.name = name;\n    }\n\n    @Override\n    public String getName() {\n        return name;\n    }\n\n    public void setName(String name) {\n        this.name = name;\n    }\n}\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, " Then modify your service's ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "code", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "sendResponse()");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, " and ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "code", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "sendError()");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, " See how ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "code", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "sendResponse()");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, " in ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "code", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "PongService");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, " of the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Building Services");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, " section accepts three arguments. The last argument describes the destination's session identifier so that the message or error message, in the case of ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "code", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "sendError()");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, ", will reach its intended audience.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, " And finally, mark the channel as private from the UI\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "code", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "markChannelAsGalactic()");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, " method accepts a channel name as the first required argument, and whether it's a private channel as the second, optional boolean value. By default it is set to false, meaning if you marked your channel without explicitly specifying that it should be a private channel, it would be a broadcast channel. See ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "Extending channels");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, " as a reference. If you wanted to turn the servbot channel private, you would need to simply turn the following:\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "pre", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "code", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "this.bus.markChannelAsGalactic('sergeant-fox');");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, " into this:\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "pre", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "code", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "this.bus.markChannelAsGalactic('sergeant-fox', true);");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, " Try out the sample in multiple browser tabs and notice using your browser's inspect tools how each response is delivered only to the client that made the request.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](74, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "Next Steps: Transactions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcml2YXRlLWNoYW5uZWxzLmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PrivateChannelsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'transport-private-channels',
                templateUrl: './private-channels.component.html',
                styleUrls: ['./private-channels.component.scss']
            }]
    }], function () { return [{ type: _vmw_transport_docs_services_highlight_service__WEBPACK_IMPORTED_MODULE_1__["HighlightService"] }]; }, null); })();


/***/ }),

/***/ "rCBy":
/*!*************************************************************!*\
  !*** ./src/app/java/transactions/transactions.component.ts ***!
  \*************************************************************/
/*! exports provided: TransactionsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransactionsComponent", function() { return TransactionsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _vmw_transport_docs_services_highlight_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @vmw/transport-docs/services/highlight.service */ "SrJx");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/*
 * Copyright 2021 VMware, Inc.
 * SPDX-License-Identifier: BSD-2-Clause
 */




class TransactionsComponent {
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
TransactionsComponent.ɵfac = function TransactionsComponent_Factory(t) { return new (t || TransactionsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_vmw_transport_docs_services_highlight_service__WEBPACK_IMPORTED_MODULE_1__["HighlightService"])); };
TransactionsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TransactionsComponent, selectors: [["transport-transactions"]], decls: 129, vars: 0, consts: [[1, "clr-code"], [1, "list"], [1, "emphasis"], [1, "code"], [1, "language-typescript"], ["routerLink", "/java/logging", 1, "btn", "btn-primary", "btn-block", "btn-outline"]], template: function TransactionsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Using Transactions.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " A technique that can be used to encapsulate a conversation between a component and a service, or between services themselves - is to use a transaction.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Transactions via Transport are not traditional transactions, in the sense that they can be rolled back if they fail, instead they are defined as a group of requests and responses that have to occur before the transaction can be considered complete.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " For example, if you need to call a number of services to get a number of responses, in order to be able to construct a response for a component - this would be a transactions. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Similarly if you need to make a number of calls to services and wait for stores to be available and populated, this would also be a transaction. Transactions can be either synchronous, or asynchronous.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Transactions are asynchronous by default. Essentially when you commit transactions, all the requests will be fired at once, the transaction will complete once responses to all those requests have been completed. These responses can arrive in any order and at any time (hence the asynchronous nature).\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " However there may be times when you want your logic to run in a synchronous manner (due to your API design for example). When running a synchronous transaction, each request in the transaction will only fire once the previous one has completed. This is obviously a lot slower, but may be required based on your needs.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " How do I create / start a transaction?\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "code", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "this.bus.createTransaction()");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " is the simplest way to create any transaction. You will be returned a ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "code", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Transaction");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " object, which allows you to track progress of the transaction and more.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " What types of transactions are there available?\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, " There are two types of transactions available.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "ol", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "code", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Asynchronous");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, " - ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "All requests fired at once, no way to determine which response comes back in which order.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "code", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Synchronous");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, " - ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Each request is fired only after the previous request has returned.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, " If don't care about which order your responses come back in, then ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "code", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Asynchronous");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, " is what you're looking for. If you need all your responses to be returned in sequence, ensuring a stepped one-at-a-time process, then ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "code", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Synchronous");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, " is what you need. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "code", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Asynchronous");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, " transactions are ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "strong", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "MUCH FASTER");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, " What happens if something goes wrong mid-transaction?\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, " Like with every other fabric concept, we have built success and error handlers for every operation. If a service errors out during the transaction, then the error handler you supply via ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "code", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "transaction.onError()");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, " will be triggered. You will receive the error that occurred. The remainder of the transaction will be stopped.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](61, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, " Below is an example of a Java Consumer that calls ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "code", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "PongService");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, " and ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "code", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "CalendarService");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, " via an asynchronous transaction\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "Java PongCalendarServiceConsumer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "pre", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "code", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "package samples.pong;\n\nimport com.vmware.transport.bridge.Request;\nimport com.vmware.transport.bridge.Response;\nimport com.vmware.transport.bus.Transaction;\nimport com.vmware.transport.bus.model.Message;\nimport com.vmware.transport.core.AbstractBase;\nimport com.vmware.transport.core.util.ClassMapper;\nimport org.springframework.stereotype.Component;\nimport samples.calendar.CalendarService;\n\nimport java.util.UUID;\nimport java.util.concurrent.Executors;\nimport java.util.concurrent.ScheduledExecutorService;\nimport java.util.concurrent.TimeUnit;\n\n@Component\npublic class PongCalendarServiceConsumer extends AbstractBase {\n\n    private ScheduledExecutorService executorService;\n\n    PongCalendarServiceConsumer() { this.executorService = Executors.newScheduledThreadPool(5); }\n\n    /**\n     * Call PongService and Calendar Service as a part of a transaction\n     */\n    @Override\n    public void initialize() {\n        // create task, wait 1 second before executing.\n        Runnable runTransactionTask = () -> this.runTransaction();\n        executorService.schedule(runTransactionTask, 1000,  TimeUnit.MILLISECONDS);\n    }\n\n    private void runTransaction() {\n        // create async transaction\n        UUID transactionId = UUID.randomUUID();\n        Transaction transaction = bus.createTransaction(Transaction.TransactionType.ASYNC, transactionId);\n\n        // send request to PongService\n        transaction.sendRequest(\n                PongService.Channel,\n                new Request<String>(transactionId, \"Basic\") // request basic pong\n        );\n\n        // send request to CalendarService\n        transaction.sendRequest(\n                CalendarService.Channel,\n                new Request<String>(transactionId, \"time\") // request time\n        );\n\n        // when transaction is done\n        transaction.onComplete(\n                (Message[] responses) -> {\n\n                    // concatenate service responses into a string.\n                    StringBuilder serviceResponses = new StringBuilder();\n                    for(Message msg: responses) {\n\n                        String serviceResponse = ClassMapper.CastPayload(String.class, (Response)msg.getPayload());\n                        serviceResponses.append(\"> \" + serviceResponse + \" \"); // add each response together.\n                    }\n\n                    // log output.\n                    this.logInfoMessage(\"PongCalendarServiceConsumer:\", \"Response\", serviceResponses.toString());\n                }\n        );\n\n        // commit transaction.\n        transaction.commit();\n    }\n}");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](75, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, " What is happening in this example?\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "pre", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "code", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "...\n@Component\npublic class PongCalendarServiceConsumer extends AbstractBase {\n\n    private ScheduledExecutorService executorService;\n\n    PongCalendarServiceConsumer() { this.executorService = Executors.newScheduledThreadPool(5); }\n\n    /**\n     * Call PongService and Calendar Service as a part of a transaction\n     */\n    @Override\n    public void initialize() {\n        // create task, wait 1 second before executing.\n        Runnable runTransactionTask = () -> this.runTransaction();\n        executorService.schedule(runTransactionTask, 1000,  TimeUnit.MILLISECONDS);\n    }\n\n...");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "The first thing this example does is create a new scheduled Java Executor, this is so we can push a Runnable lambda that performs a unit of work, after a certain delay. We do this because this is a working demo, we have to ensure every other service is up before we can start calling them.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, " One thing we're also doing here is ensuring that all service requests in a transaction, use the same ID for each message going across each channel. You can see this in action when we create a ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "code", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, "UUID");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, " that is fed into the transaction, and each request going out.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "pre", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "code", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, "...\nprivate void runTransaction() {\n    // create async transaction\n    UUID transactionId = UUID.randomUUID();\n    Transaction transaction = bus.createTransaction(Transaction.TransactionType.ASYNC, transactionId);\n...");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, " In this next step, we created a new ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "code", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94, "Transaction");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, " that is ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "code", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97, "ASYNC");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](98, ". This means our transaction will fire every request at the same time and collect responses in any order they arrive.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "pre", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "code", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](101, "...\n// send request to PongService\ntransaction.sendRequest(\n    PongService.Channel,\n    new Request<String>(transactionId, \"Basic\") // request basic pong\n);\n\n// send request to CalendarService\ntransaction.sendRequest(\n        CalendarService.Channel,\n        new Request<String>(transactionId, \"time\") // request time\n);\n...");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](103, " In the above step, we actually queue up requests to be sent out as a part of the transaction. In this case, there are two requests, once is for t the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "code", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](105, "CalendarService");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](106, " and the other is for the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "code", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](108, "PongService");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](109, ". ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "pre", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "code", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](112, "...\n// when transaction is done\ntransaction.onComplete(\n    (Message[] responses) -> {\n\n        // concatenate service responses into a string.\n        StringBuilder serviceResponses = new StringBuilder();\n        for(Message msg: responses) {\n\n            String serviceResponse = ClassMapper.CastPayload(String.class, (Response)msg.getPayload());\n            serviceResponses.append(\"> \" + serviceResponse + \" \"); // add each response together.\n        }\n\n        // log output.\n        this.logInfoMessage(\"PongCalendarServiceConsumer:\", \"Response\", serviceResponses.toString());\n    }\n);\n...");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](114, " In the above sample, we're defining our success handler for a successfully completed transaction. Your success handler will simply be passed an array of ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "code", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](116, "Message");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](117, " objects. YOu can then do what you need to with these objects, they will be in a random order if the transaction is async, otherwise they will be in the same order your requests were queued up in.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "pre", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "code", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](120, "...\n // commit transaction.\ntransaction.commit();\n...");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](122, " The last step is to commit the transaction, this essentially fires everything off. Nothing happens until you commit the transaction. The ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "code", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](124, "commit()");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](125, " method returns immediately and the transaction begins.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](126, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](128, "Next Steps: Logging");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0cmFuc2FjdGlvbnMuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TransactionsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'transport-transactions',
                templateUrl: './transactions.component.html',
                styleUrls: ['./transactions.component.scss']
            }]
    }], function () { return [{ type: _vmw_transport_docs_services_highlight_service__WEBPACK_IMPORTED_MODULE_1__["HighlightService"] }]; }, null); })();


/***/ }),

/***/ "t59s":
/*!***********************************************************************!*\
  !*** ./src/app/java/building-services/building-services.component.ts ***!
  \***********************************************************************/
/*! exports provided: BuildingServicesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BuildingServicesComponent", function() { return BuildingServicesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _vmw_transport_docs_services_highlight_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @vmw/transport-docs/services/highlight.service */ "SrJx");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/*
 * Copyright 2021 VMware, Inc.
 * SPDX-License-Identifier: BSD-2-Clause
 */




class BuildingServicesComponent {
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
BuildingServicesComponent.ɵfac = function BuildingServicesComponent_Factory(t) { return new (t || BuildingServicesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_vmw_transport_docs_services_highlight_service__WEBPACK_IMPORTED_MODULE_1__["HighlightService"])); };
BuildingServicesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BuildingServicesComponent, selectors: [["transport-building-services"]], decls: 36, vars: 0, consts: [[1, "clr-code"], [1, "code"], [1, "language-java"], ["routerLink", "/java/private-channels", 1, "btn", "btn-primary", "btn-block", "btn-outline"]], template: function BuildingServicesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Building Services");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " To get started, we should create a new class called ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "code", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "PongService");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, ".\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " The first thing we need to do in order to create our first simple ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "code", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "PongService");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " is create a ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "code", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "PongServiceRequest");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " model and a ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "code", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "PongServiceResponse");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " model. These two models are responsible for allowing other actors to know what to send to our service, and what to expect in response.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Java PongService");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "pre", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "code", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "\nimport com.vmware.transport.bridge.Request;\nimport com.vmware.transport.bridge.Response;\nimport com.vmware.transport.bus.Transaction;\nimport com.vmware.transport.bus.model.Message;\nimport com.vmware.transport.core.AbstractService;\nimport com.vmware.transport.core.util.ClassMapper;\nimport org.springframework.stereotype.Component;\nimport samples.CalendarService;\n\nimport java.util.UUID;\n\n@Component\npublic class PongService extends AbstractService<Request<String>, Response<String>> {\n    // define the channel the service operates on\n\n    public static final String Channel = \"services-PongService\";\n\n    PongService() {\n        super(PongService.Channel);\n    }\n\n    protected void handleServiceRequest(Request request, Message busMessage) {\n\n        // which command shall we run?\n        switch(request.getRequest()) {\n            case PongRequestType.Basic:\n                this.handleBasicPongRequest(request);\n                break;\n\n            case PongRequestType.Full:\n                this.handleFullPongRequest(request);\n                break;\n\n            case default:\n                this.handleUnknownRequest(request);\n                break;\n        }\n    }\n\n    /**\n     * Handle requests for basic pong needs\n     * @param request The request being sent over the bus.\n     */\n    private void handleBasicPongRequest(Request request) {\n\n        // prepare and send a basic response.\n        Response<String> response = new Response<>(request.getId(), \"Fabric Pong (Basic): Pong\");\n        this.sendResponse(response, request.getId(), request.getTargetUser());\n    }\n\n    /**\n     * Handle requests for full pong needs.\n     * @param request the request being sent over the bus.\n     */\n    private void handleFullPongRequest(Request request) {\n\n        UUID transactionId = request.getId();\n\n        // call our calendar service and get a date and time, in two separate synchronous calls via transaction, pass\n        // in our request ID as the transaction ID, so it can be tracked correctly across service calls.\n        Transaction transaction = bus.createTransaction(Transaction.TransactionType.SYNC, \"calendar-transaction\", transactionId);\n\n        // queue up requests for time and date via Calendar Service.\n        transaction.sendRequest(CalendarService.Channel, new Request<String>(transactionId, \"date\")); // request date\n        transaction.sendRequest(CalendarService.Channel, new Request<String>(transactionId, \"time\")); // request time\n\n        // register complete handler for transaction.\n        transaction.onComplete(\n                (Message[] responses) -> {\n\n                    // concatenate service responses into a string.\n                    StringBuilder dateAndTime = new StringBuilder();\n                    for(Message msg: responses) {\n                        String calendarResponse = ClassMapper.CastPayload(String.class, (Response)msg.getPayload());\n                        dateAndTime.append(calendarResponse + \" \"); // add each response together.\n                    }\n\n                    // prepare a response, with our date and time requests stuck together as a more elaborate response.\n                    Response<String> response = new Response<>(request.getId(),\n                            \"Fabric Pong (Full): Pong++ \" + dateAndTime.toString());\n                    this.sendResponse(response, request.getId(), request.getTargetUser());\n                }\n        );\n\n        // commit transaction.\n        transaction.commit();\n    }\n}\n\nabstract class PongRequestType {\n    static final String Basic = \"Basic\";\n    static final String Full = \"Full\";\n}\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " What is happening in the sample?\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " First of all, the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "code", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "PongService");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, " is handling two requests 'Basic' and 'Full' and everything else is returned as an error, with an unknown request.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "pre", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "code", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "...\nprotected void handleServiceRequest(Request request, Message busMessage) {\n\n    // which command shall we run?\n    switch(request.getRequest()) {\n        case PongRequestType.Basic:\n            this.handleBasicPongRequest(request);\n            break;\n\n        case PongRequestType.Full:\n            this.handleFullPongRequest(request);\n            break;\n\n        case default:\n            this.handleUnknownRequest(request);\n            break;\n    }\n}\n...");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Next Steps: Private Channels");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJidWlsZGluZy1zZXJ2aWNlcy5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BuildingServicesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'transport-building-services',
                templateUrl: './building-services.component.html',
                styleUrls: ['./building-services.component.scss']
            }]
    }], function () { return [{ type: _vmw_transport_docs_services_highlight_service__WEBPACK_IMPORTED_MODULE_1__["HighlightService"] }]; }, null); })();


/***/ }),

/***/ "tDT8":
/*!*******************************************************!*\
  !*** ./src/app/java/messaging/messaging.component.ts ***!
  \*******************************************************/
/*! exports provided: MessagingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessagingComponent", function() { return MessagingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _vmw_transport_docs_services_highlight_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @vmw/transport-docs/services/highlight.service */ "SrJx");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/*
 * Copyright 2021 VMware, Inc.
 * SPDX-License-Identifier: BSD-2-Clause
 */




class MessagingComponent {
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
MessagingComponent.ɵfac = function MessagingComponent_Factory(t) { return new (t || MessagingComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_vmw_transport_docs_services_highlight_service__WEBPACK_IMPORTED_MODULE_1__["HighlightService"])); };
MessagingComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MessagingComponent, selectors: [["transport-messaging"]], decls: 65, vars: 0, consts: [[1, "clr-code"], [1, "empahsis"], [1, "code"], [1, "language-typescript"], ["routerLink", "/java/building-services", 1, "btn", "btn-primary", "btn-block", "btn-outline"]], template: function MessagingComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Understanding 'broadcast' vs 'direct' messaging");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Transport is analogous to Slack (for software), except Transport allows direct messages inside a channel, where as Slack opens up stand-alone conversations between actors outside of a channel. The concept however remains the same. When a component needs to restrict a conversation between its self, and a service - we can use a direct message.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " When another Class/Service is interested in everything being broadcast by a service, then that actor can simply subscribe to the service channel and listen for everything.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " The use case for direct messaging between a consumer and service arrives when you need a specific response to be delivered to a specific consumer, i.e. you don't want every other listener on that channel getting that same response (because we're operating on a single channel). It's like talking in a public chat, vs talking in a direct message with that service.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Sending requests using ID's");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " There are three ways to conduct direct messaging. The first is to use methods in the API that accept an ID. Every API (like request once ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "code", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "()");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, ") has two variations, the first is the same method name that has ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "code", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "...withId()");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " appended to the end of the name.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " The second is ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "code", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "...withIdAndVersion()");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, ". The signature for both is mostly the same, except they obviously take an ID, or an ID and a version. Versions are not used yet, however support is coming in future versions of the fabric.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " The third is with a ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "strong", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Transaction");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, ".\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, " Let's take a look at an example of using one of these methods:\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "pre", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "code", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "const request: PongServiceRequest = {\n    command: PongRequestType.Basic,\n    message: 'basic ping'\n};\n\nthis.bus.requestOnceWithId<PongServiceRequest, PongServiceResponse>(\n    UUID.randomUUID();,           // message id\n    'my-channel',                 // channel on which to send request\n    request,                      // payload to be sent on the channe\n).handle(\n    (response: SomeTypedResponse) => {\n        // do something with this successful request\n    },\n    (error: GeneralError) => {\n        // something went wrong, lets handle it.\n    }\n);");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, " The above example will send a request to ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "code", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "PongService");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, ", but this time, we're sending that message with a ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Random UUID");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, ". This means that the consumer is only going to listen for a response that ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "also contains that same ID");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, ". Any other response coming in over ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "code", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "PongServiceChannel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, " that has a different ID, or has no ID ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "will be ignored");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, " by the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "code", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "handle(...)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, " method.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "Quick note on generating UUID's");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, " Always use a valid UUID. Java makes it really easy. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "code", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "UUID.randomUUID()");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, " is all you need.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](62, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "Next Steps: Building Services");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtZXNzYWdpbmcuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MessagingComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'transport-messaging',
                templateUrl: './messaging.component.html',
                styleUrls: ['./messaging.component.scss']
            }]
    }], function () { return [{ type: _vmw_transport_docs_services_highlight_service__WEBPACK_IMPORTED_MODULE_1__["HighlightService"] }]; }, null); })();


/***/ }),

/***/ "yGaA":
/*!*************************************************************!*\
  !*** ./src/app/java/initializing/initializing.component.ts ***!
  \*************************************************************/
/*! exports provided: InitializingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InitializingComponent", function() { return InitializingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/*
 * Copyright 2021 VMware, Inc.
 * SPDX-License-Identifier: BSD-2-Clause
 */


class InitializingComponent {
    constructor() { }
    ngOnInit() {
    }
}
InitializingComponent.ɵfac = function InitializingComponent_Factory(t) { return new (t || InitializingComponent)(); };
InitializingComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: InitializingComponent, selectors: [["transport-initializing"]], decls: 9, vars: 0, consts: [[1, "emphasis"]], template: function InitializingComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Initializing Transport");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " The Java version of Transport depends on Spring. This makes it much, much simpler to build your applications using the bus.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " There isn't actually anything you need to do to initialize the Transport. It's self booting once you import the Jar into your Java Application.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "strong", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Pretty Cool eh? Don't you just \u2764\uFE0F Spring.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJpbml0aWFsaXppbmcuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InitializingComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'transport-initializing',
                templateUrl: './initializing.component.html',
                styleUrls: ['./initializing.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ })

}]);
//# sourceMappingURL=java-java-module.js.map