import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

// Import _fakeBackend
import { fakeBackendProvider } from '@core/_fakeBackend/fake-backend';

// Import Authentication Services
import { AuthenticationService } from '@core/authentication/authentication.service';

// Import Guards Services
import { AuthGuard } from '@core/guards/auth.guard';

// Import Interceptors
import { ErrorInterceptor } from '@core/interceptors/error.interceptor';
import { BasicAuthInterceptor } from '@core/interceptors/basic-auth.interceptor';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [
    AuthenticationService
  ]
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error('CoreModule has already been loaded. You should only import Core modules in the AppModule only.');
    }
  }
}
