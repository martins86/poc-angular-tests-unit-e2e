import { NgModule } from '@angular/core';

import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';

const materialModules = [MatButtonModule, MatTooltipModule];

@NgModule({
  imports: [materialModules],
  exports: [materialModules],
})
export class MaterialModule {}
