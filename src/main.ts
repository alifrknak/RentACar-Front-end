import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import "../node_modules/bootstrap/dist/js/bootstrap.min.js"
import { AppModule } from './app/app.module';


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
