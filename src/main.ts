import { bootstrapApplication } from '@angular/platform-browser';
import { App } from './app/app.component';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes'; // We'll create this next

bootstrapApplication(App, {
  providers: [provideRouter(routes)],
}).catch(err => console.error(err));
