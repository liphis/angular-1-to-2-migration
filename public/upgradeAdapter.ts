import { UpgradeAdapter } from '@angular/upgrade';
import AppModule from './app.module'

export let upgradeAdapter = new UpgradeAdapter(AppModule);