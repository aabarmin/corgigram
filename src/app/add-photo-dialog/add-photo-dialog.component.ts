import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Auth, DataStore } from 'aws-amplify';
import { Post } from 'src/models';
import { AccountService } from '../account.service';

@Component({
  selector: 'corgigram-add-photo-dialog',
  templateUrl: './add-photo-dialog.component.html',
  styleUrls: ['./add-photo-dialog.component.css']
})
export class AddPhotoDialogComponent implements OnInit {

  descirption: string = 'Test description';

  constructor(
    private dialogRef: MatDialogRef<AddPhotoDialogComponent>,
    private accountService: AccountService
  ) { }

  ngOnInit(): void {
    
  }

  onSubmit(): void {
    this.accountService.getCurrentUserAccount().then(account => {
      const newPost = new Post({
        title: this.descirption,
        account: account
      });
      DataStore.save(newPost).then(() => {
        this.dialogRef.close();
      });
    });
  }

}
