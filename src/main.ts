import {
  bootstrapApplication,
  createApplication,
} from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { importProvidersFrom } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { createCustomElement } from '@angular/elements';
import { CatDetailsModalComponent } from './app/components/cat-details-modal/cat-details-modal.component';

(async () => {
  const app = await createApplication({
    providers: [importProvidersFrom(MatDialogModule, BrowserAnimationsModule)],
  });

  const catDetailsModalElement = createCustomElement(CatDetailsModalComponent, {
    injector: app.injector,
  });
  customElements.define('cat-details-modal', catDetailsModalElement);

  bootstrapApplication(AppComponent, appConfig).catch((err) =>
    console.error(err)
  );
})();
