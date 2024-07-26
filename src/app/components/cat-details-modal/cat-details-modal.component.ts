import { Component, Inject } from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialogRef,
  MatDialogContent,
  MatDialogActions,
} from '@angular/material/dialog';

@Component({
  selector: 'app-cat-details-dialog',
  standalone: true,
  imports: [MatDialogContent, MatDialogActions],
  templateUrl: './cat-details-modal.component.html',
  styleUrls: ['./cat-details-modal.component.scss'],
})
export class CatDetailsModalComponent {
  constructor(public dialogRef: MatDialogRef<CatDetailsModalComponent>) {}

  onCloseClick(): void {
    this.dialogRef.close();
  }
}
