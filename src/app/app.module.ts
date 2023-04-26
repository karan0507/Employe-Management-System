import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NZ_I18N, en_US } from 'ng-zorro-antd/i18n';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';

import { registerLocaleData, PathLocationStrategy, LocationStrategy } from '@angular/common';
import en from '@angular/common/locales/en';

import { AppRoutingModule } from './app-routing.module';
import { TemplateModule } from './shared/template/template.module';
import { SharedModule } from './shared/shared.module';

import { AppComponent } from './app.component';
import { CommonLayoutComponent } from './layouts/common-layout/common-layout.component';
import { FullLayoutComponent } from './layouts/full-layout/full-layout.component';

import { NgChartjsModule } from 'ng-chartjs';
import { ThemeConstantService } from './shared/services/theme-constant.service';
import { NzMessageModule, NzMessageService } from 'ng-zorro-antd/message';
// import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CustomInterceptor } from './service/custom.interceptor';
import { NgxPermissionsModule } from 'ngx-permissions';
import { AgmCoreModule } from '@agm/core';
// import { NgxGoogleMapModule } from 'ngx-google-map';
registerLocaleData(en);

@NgModule({
    declarations: [
        AppComponent,
        CommonLayoutComponent,
        FullLayoutComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        NzBreadCrumbModule,
        TemplateModule,
        SharedModule,
        NzMessageModule,
        NgChartjsModule,
        AgmCoreModule.forRoot({
            apiKey: '',
            libraries: ['drawing']
        }),
        // NgxGoogleMapModule,
        // NgxGoogleMapsModule,
        // NgxGoogleMapsModule.forRoot({
        //     key: '', // your Google API key retrieved from the Google Developer Console
        //     language: 'en', // see https://developers.google.com/maps/documentation/javascript/localization
        //     libraries: 'geometry', // see https://developers.google.com/maps/documentation/javascript/libraries
        //     loadScript: true, // whether or not the <script> tag of the Google Maps API should be loaded
        //     options: { panControl: true, panControlOptions: { position: 9 } }, // see https://developers.google.com/maps/documentation/javascript/3.exp/reference#MapOptions
        //     region: 'US', // see https://developers.google.com/maps/documentation/javascript/localization#Region
        //   }),
     
        NgxPermissionsModule.forRoot(),
        
    ],
    providers: [
        { 
            provide: NZ_I18N,
            useValue: en_US, 
        },
        {
            provide: LocationStrategy, 
            useClass: PathLocationStrategy
        },
        {
            provide: HTTP_INTERCEPTORS,
            useClass: CustomInterceptor,
            multi: true
        },
        ThemeConstantService,NzMessageService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
