import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AlertModule } from 'ngx-bootstrap';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { LoginRegisterComponent } from './login-register/login-register.component';
import { HeaderComponent } from './ui/header/header.component';
import { LayoutComponent } from './ui/layout/layout.component';
import {LoginComponent} from './ui/login/login.component';
import { CardsComponent } from './cards/cards.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { AuthService } from './auth.service';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, MatCardModule } from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { FooterComponent } from './ui/footer/footer.component';
import { AgGridModule } from 'ag-grid-angular/main';
import {ChartsModule} from 'ng2-charts';
import { ReactiveFormsModule } from '@angular/forms';
import { CardDeckComponent } from './card-deck/card-deck.component';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    LayoutComponent,
    CardsComponent,
    LoginComponent,
    FooterComponent,
    CardDeckComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    AlertModule.forRoot(),
    MDBBootstrapModule.forRoot(),
    HttpClientModule,
    FormsModule,
    AgGridModule.withComponents([]),
    ChartsModule,
    ReactiveFormsModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
