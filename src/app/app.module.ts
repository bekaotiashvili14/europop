import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NZ_I18N, en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';

import { NavLoginComponent } from './components/nav-login/nav-login.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { HeaderComponent } from './components/header/header.component';
import { NewsComponent } from './components/news/news.component';
import { NewstickerComponent } from './components/newsticker/newsticker.component';
import { AnalyticalArticlesComponent } from './components/analytical-articles/analytical-articles.component';
import { AwayMeetingsComponent } from './components/away-meetings/away-meetings.component';
import { PopularAuthorsComponent } from './components/popular-authors/popular-authors.component';
import { EuropopForumComponent } from './components/europop-forum/europop-forum.component';
import { LatestNewsComponent } from './components/latest-news/latest-news.component';
import { SocialNetworksComponent } from './components/social-networks/social-networks.component';
import { PoweredByEuropebetComponent } from './components/powered-by-europebet/powered-by-europebet.component';
import { SubscribeComponent } from './components/subscribe/subscribe.component';
import { PostPageComponent } from './components/post-page/post-page.component';
import { PostPageNewsComponent } from './components/post-page-news/post-page-news.component';
import { SearchPageComponent } from './components/search-page/search-page.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { RegisterPageComponent } from './components/register-page/register-page.component';
import { PasswordRecoveryPageComponent } from './components/password-recovery-page/password-recovery-page.component';
import { StripHtmlPipe } from './strip-html.pipe';
import { BackgroundmodeComponent } from './components/backgroundmode/backgroundmode.component';
import { CommonModule } from '@angular/common';
import { TimeAgoPipe } from './time-ago.pipe';
import { LoadPageComponent } from './components/load-page/load-page.component';
import { NzCarouselModule } from 'ng-zorro-antd/carousel';
registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    NavLoginComponent,
    MainPageComponent,
    HeaderComponent,
    NewsComponent,
    NewstickerComponent,
    AnalyticalArticlesComponent,
    AwayMeetingsComponent,
    PopularAuthorsComponent,
    EuropopForumComponent,
    LatestNewsComponent,
    SocialNetworksComponent,
    PoweredByEuropebetComponent,
    SubscribeComponent,
    PostPageComponent,
    PostPageNewsComponent,
    SearchPageComponent,
    LoginPageComponent,
    RegisterPageComponent,
    PasswordRecoveryPageComponent,
    StripHtmlPipe,
    BackgroundmodeComponent,
    TimeAgoPipe,
    LoadPageComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    CommonModule,
    NzCarouselModule,
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent],
})
export class AppModule {}
