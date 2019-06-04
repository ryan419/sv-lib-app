import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { CreateComponent } from './book/create/create.component';
import { BookService } from './book/book.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(public dialog: MatDialog, private bookService: BookService) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(CreateComponent, {
      width: '500px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed', result);
      this.bookService.refresh();
      // this.animal = result;
    });
  }

}
