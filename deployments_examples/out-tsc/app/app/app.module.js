"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = require("@angular/platform-browser");
var animations_1 = require("@angular/platform-browser/animations");
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var forms_2 = require("@angular/forms");
var http_1 = require("@angular/common/http");
var material_1 = require("@angular/material");
var app_component_1 = require("./app.component");
var header_component_1 = require("./header/header.component");
var client_create_component_1 = require("./client/client-create/client-create.component");
var client_show_component_1 = require("./client/client-show/client-show.component");
var client_list_component_1 = require("./client/client-list/client-list.component");
var app_routing_module_1 = require("./app-routing.module");
var login_component_1 = require("./auth/login/login.component");
var logout_component_1 = require("./auth/logout/logout.component");
var signup_component_1 = require("./auth/signup/signup.component");
var print_layout_component_1 = require("./print/print-layout/print-layout.component");
var print_service_1 = require("./print/print.service");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                header_component_1.HeaderComponent,
                client_create_component_1.ClientCreateComponent,
                client_show_component_1.ClientShowComponent,
                client_list_component_1.ClientListComponent,
                login_component_1.LoginComponent,
                logout_component_1.LogoutComponent,
                signup_component_1.SignupComponent,
                print_layout_component_1.PrintLayoutComponent
            ],
            imports: [
                platform_browser_1.BrowserModule,
                app_routing_module_1.AppRoutingModule,
                forms_1.FormsModule,
                forms_2.ReactiveFormsModule,
                animations_1.BrowserAnimationsModule,
                material_1.MatInputModule,
                material_1.MatCardModule,
                material_1.MatButtonModule,
                material_1.MatToolbarModule,
                material_1.MatExpansionModule,
                material_1.MatProgressSpinnerModule,
                material_1.MatPaginatorModule,
                material_1.MatCheckboxModule,
                material_1.MatIconModule,
                http_1.HttpClientModule
            ],
            providers: [print_service_1.PrintService],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map