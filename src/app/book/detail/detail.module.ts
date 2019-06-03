import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';

import { DetailRoutingModule } from './detail-routing.module';
import { DetailComponent } from './detail.component';
import { DetailService } from './detail.service';

@NgModule({
  declarations: [DetailComponent],
  imports: [CommonModule, DetailRoutingModule, MatCardModule],
  providers: [DetailService],
})
export class DetailModule {}
