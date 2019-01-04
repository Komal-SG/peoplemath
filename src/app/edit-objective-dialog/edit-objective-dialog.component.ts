import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Objective } from '../objective';

export interface EditObjectiveDialogData {
  objective: Objective;
  title: string;
  okAction: string;
  allowCancel: boolean;
  unit: string;
}

@Component({
  selector: 'app-edit-objective-dialog',
  templateUrl: './edit-objective-dialog.component.html',
  styleUrls: ['./edit-objective-dialog.component.css']
})
export class EditObjectiveDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<EditObjectiveDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: EditObjectiveDialogData) { }

  ngOnInit() {
  }

  isDataValid(): boolean {
    return this.data.objective.name && this.data.objective.resourceEstimate > 0;
  }

  onCancel(): void {
    this.dialogRef.close();
  }
}