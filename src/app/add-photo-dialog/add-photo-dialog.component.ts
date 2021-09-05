import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { DataStore } from 'aws-amplify';
import { Post } from 'src/models';

@Component({
  selector: 'corgigram-add-photo-dialog',
  templateUrl: './add-photo-dialog.component.html',
  styleUrls: ['./add-photo-dialog.component.css']
})
export class AddPhotoDialogComponent implements OnInit {

  descirption: string = 'Test description';

  constructor(
    private dialogRef: MatDialogRef<AddPhotoDialogComponent>
  ) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    DataStore.save(new Post({
      title: this.descirption
    })).then(saved => {
      this.dialogRef.close();
    })
  }

}
