import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';

import { CreateComponent } from './create.component';
import { CreateService } from './create.service';
import { GraphQLModule } from '../../graphql.module';

@NgModule({
  declarations: [CreateComponent],
  imports: [
    CommonModule,
    MatDialogModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatDatepickerModule,
    GraphQLModule,
  ],
  entryComponents: [CreateComponent],
  exports: [CreateComponent],
  providers: [CreateService],
})
export class CreateModule {}
