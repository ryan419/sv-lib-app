import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatNativeDateModule } from '@angular/material/core';

import { AppComponent } from './app.component';
import { GraphQLModule } from './graphql.module';
import { AppRoutingModule } from './app-routing.module';
import { CreateModule } from './book/create/create.module';
import { BookModule } from './book/book.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    GraphQLModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatNativeDateModule,
    MatDialogModule,
    AppRoutingModule,
    CreateModule,
    BookModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
