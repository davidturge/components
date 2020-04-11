(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('@sizmek/infra-base-components', ['exports', '@angular/core'], factory) :
    (global = global || self, factory((global.sizmek = global.sizmek || {}, global.sizmek['infra-base-components'] = {}), global.ng.core));
}(this, (function (exports, core) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/infra-base-components.service.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var InfraBaseComponentsService = /** @class */ (function () {
        function InfraBaseComponentsService() {
        }
        InfraBaseComponentsService.decorators = [
            { type: core.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        InfraBaseComponentsService.ctorParameters = function () { return []; };
        /** @nocollapse */ InfraBaseComponentsService.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function InfraBaseComponentsService_Factory() { return new InfraBaseComponentsService(); }, token: InfraBaseComponentsService, providedIn: "root" });
        return InfraBaseComponentsService;
    }());

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/infra-base-components.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var InfraBaseComponentsComponent = /** @class */ (function () {
        function InfraBaseComponentsComponent() {
        }
        /**
         * @return {?}
         */
        InfraBaseComponentsComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
        };
        InfraBaseComponentsComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'lib-infra-base-components',
                        template: "\n    <p>\n      infra-base-components works!\n    </p>\n  "
                    }] }
        ];
        /** @nocollapse */
        InfraBaseComponentsComponent.ctorParameters = function () { return []; };
        return InfraBaseComponentsComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/infra-base-components.module.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var InfraBaseComponentsModule = /** @class */ (function () {
        function InfraBaseComponentsModule() {
        }
        InfraBaseComponentsModule.decorators = [
            { type: core.NgModule, args: [{
                        declarations: [InfraBaseComponentsComponent],
                        imports: [],
                        exports: [InfraBaseComponentsComponent]
                    },] }
        ];
        return InfraBaseComponentsModule;
    }());

    exports.InfraBaseComponentsComponent = InfraBaseComponentsComponent;
    exports.InfraBaseComponentsModule = InfraBaseComponentsModule;
    exports.InfraBaseComponentsService = InfraBaseComponentsService;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=sizmek-infra-base-components.umd.js.map
