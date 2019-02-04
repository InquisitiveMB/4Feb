import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginRegisterComponent } from './login-register/login-register.component';
import { HeaderComponent } from './ui/header/header.component';
import { FooterComponent } from './ui/footer/footer.component';
import {LoginComponent} from './ui/login/login.component';
import {CardsComponent} from './cards/cards.component';
import {RemCardsComponent} from './rem-cards/rem-cards.component';
import { ModalComponent } from './modal/modal.component';
import { LayoutComponent } from './ui/layout/layout.component';
import {CardDeckComponent } from './card-deck/card-deck.component'

const routes: Routes = [
  { path:'', component : LayoutComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: LoginRegisterComponent },
  { path: 'cards', component: ModalComponent },
  { path: 'cardDeck', component: CardDeckComponent },
  
  // { path: 'cards2', component: CardsComponent },
  // { path: 'twitterId', component: ModalComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [LayoutComponent,CardDeckComponent, HeaderComponent, LoginRegisterComponent, LoginComponent, ModalComponent];
