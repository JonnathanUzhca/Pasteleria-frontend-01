import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { HeaderComponent } from './layout-components/header/header.component';
// import { FooterComponent } from './layout-components/footer/footer.component';
// import { LoaderComponent } from './layout-components/loader/loader.component';
// import { PageHeaderComponent } from './layout-components/page-header/page-header.component';
// import { SidebarComponent } from './layout-components/sidebar/sidebar.component';
// import { SwitcherComponent } from './layout-components/switcher/switcher.component';
// import { TabToTopComponent } from './layout-components/tab-to-top/tab-to-top.component';
// import { ContentLayoutComponent } from './layout-components/layout/content-layout/content-layout.component';
// import { ErrorLayoutComponent } from './layout-components/layout/error-layout/error-layout.component';
// import { FullLayoutComponent } from './layout-components/layout/full-layout/full-layout.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { MenubarModule } from 'primeng/menubar';
import { CalendarModule } from 'angular-calendar';
// import { ityped } from 'ityped';
// import { RightSidebarComponent } from './layout-components/right-sidebar/right-sidebar.component';
import { FullscreenDirective } from './directives/fullscreen-toggle.directive';
import { ColorPickerModule } from 'ngx-color-picker';
import { FormsModule } from '@angular/forms';
import { HoverEffectSidebarDirective } from './directives/hover-effect-sidebar.directive';
import { SidemenuToggleDirective } from './directives/sidemenuToggle';
import { ToggleThemeDirective } from './directives/toggle-theme.directive';
// import { SwitcherLayoutComponent } from './layout-components/layout/switcher-layout/switcher-layout.component';
// import { SwitcherHeaderComponent } from './layout-components/switcher-header/switcherheader.component';
import { NgScrollbarModule } from 'ngx-scrollbar';
import { Error404Component } from './error404/error404.component';
import { Error500Component } from './error500/error500.component';
import { MenuPublicComponent } from './menu-public/menu-public.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FooterComponent } from './footer/footer.component';
import { MenuAdminComponent } from './menu-admin/menu-admin.component';
import { SublevelMenuComponent } from './menu-admin/sublevel-menu.component';
import { HeaderComponent } from './header/header.component';
import { PageHeaderComponent } from './page-header/page-header.component';


@NgModule({
  declarations: [
    FullscreenDirective,
    HoverEffectSidebarDirective,
    SidemenuToggleDirective,
    ToggleThemeDirective,
    Error404Component,
    Error500Component,
    MenuPublicComponent,
    FooterComponent,
    MenuAdminComponent,
    SublevelMenuComponent,
    HeaderComponent,
    PageHeaderComponent,
  ],

  exports: [
    RouterModule,
    Error404Component,
    Error500Component,
    MenuPublicComponent,
    FooterComponent,
    MenuAdminComponent,
    HeaderComponent,
    PageHeaderComponent,
  ],

  imports: [
    CommonModule,
    NgbModule,
    RouterModule,
    ColorPickerModule,
    FormsModule,
    FlexLayoutModule,
    NgScrollbarModule,
    // PageHeaderComponent,
  ],
})
export class SharedModule {}
