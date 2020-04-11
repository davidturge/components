import { Injectable, ɵɵdefineInjectable, Component, NgModule } from '@angular/core';

/**
 * @fileoverview added by tsickle
 * Generated from: lib/infra-base-components.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var InfraBaseComponentsService = /** @class */ (function () {
    function InfraBaseComponentsService() {
    }
    InfraBaseComponentsService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    InfraBaseComponentsService.ctorParameters = function () { return []; };
    /** @nocollapse */ InfraBaseComponentsService.ngInjectableDef = ɵɵdefineInjectable({ factory: function InfraBaseComponentsService_Factory() { return new InfraBaseComponentsService(); }, token: InfraBaseComponentsService, providedIn: "root" });
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
        { type: Component, args: [{
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
        { type: NgModule, args: [{
                    declarations: [InfraBaseComponentsComponent],
                    imports: [],
                    exports: [InfraBaseComponentsComponent]
                },] }
    ];
    return InfraBaseComponentsModule;
}());

/**
 * @fileoverview added by tsickle
 * Generated from: public-api.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: sizmek-infra-base-components.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { InfraBaseComponentsComponent, InfraBaseComponentsModule, InfraBaseComponentsService };
//# sourceMappingURL=sizmek-infra-base-components.js.map
