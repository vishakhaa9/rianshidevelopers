import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SliderComponent } from './slider/slider.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { FooterComponent } from './footer/footer.component';
import { PhotoGalleryComponent } from './photo-gallery/photo-gallery.component';
import { FeaturedVideoComponent } from './featured-video/featured-video.component';
import { BlogContentComponent } from './blog-content/blog-content.component';
import { SidebarNavigationComponent } from './sidebar-navigation/sidebar-navigation.component';
import { AboutUsSliderComponent } from './about-us-slider/about-us-slider.component';
import { OnGoingProjectsComponent } from './on-going-projects/on-going-projects.component';
import { CompletedProjectsComponent } from './completed-projects/completed-projects.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SliderComponent,
    ContactUsComponent,
    FooterComponent,
    PhotoGalleryComponent,
    FeaturedVideoComponent,
    BlogContentComponent,
    SidebarNavigationComponent,
    AboutUsSliderComponent,
    OnGoingProjectsComponent,
    CompletedProjectsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
