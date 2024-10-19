import { Routes } from '@angular/router';

import { SettingsComponent } from './pages/settings/settings.component';
import { WellcomeComponent } from './pages/wellcome/wellcome.component';

export const ROUTES: Routes = [
	{ path: '', redirectTo: 'dashboard', pathMatch: 'full' },
	{ path: 'dashboard', component: WellcomeComponent },
	{ path: 'settings', component: SettingsComponent },
];
