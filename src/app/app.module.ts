import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { ContentComponent } from './components/content/content.component';
import { HeaderComponent } from './components/header/header.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { ReportsComponent } from './components/reports/reports.component';
import { AdminComponent } from './components/admin/admin.component';
import { PageNotFoundComponent } from './components/pagenotfound/pagenotfound.component';
import { SearchComponent } from './components/search/search.component';
import { UserComponent } from './components/user/user.component';

import { OrderByPipe } from './pipes/orderby/orderby.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ContentComponent,
    HeaderComponent,
    NavbarComponent,
    FooterComponent,
    ReportsComponent,
    AdminComponent,
    PageNotFoundComponent,
    SearchComponent,
    UserComponent,
    OrderByPipe,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
