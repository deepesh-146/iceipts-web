import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';


// import { LayoutsModule } from './layouts/layouts.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './home/home.component';
import { PublicModule } from "./public/public.module";
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { ScrollService } from './scroll.service';
import { RouterModule } from '@angular/router';
// import { PublicModule } from './public/public.module';




@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
    ],
    providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}, ScrollService],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        NgbModule,
        AppRoutingModule,
        PublicModule,
        HttpClientModule,
        RouterModule.forRoot([], {
          useHash: true, // Use hash-based routing
          scrollPositionRestoration: 'top', // Scrolls to top on route change
          anchorScrolling: 'enabled' // Enables scroll anchoring
      })
    ]
})
export class AppModule { }
