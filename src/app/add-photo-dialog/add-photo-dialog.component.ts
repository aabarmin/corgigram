import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { DataStore } from '@aws-amplify/datastore';
import { Storage } from '@aws-amplify/storage';
import { Account, Post } from 'src/models';
import { AccountService } from '../account.service';

type UploadInfo = {
  key: string
};

@Component({
  selector: 'corgigram-add-photo-dialog',
  templateUrl: './add-photo-dialog.component.html',
  styleUrls: ['./add-photo-dialog.component.css']
})
export class AddPhotoDialogComponent implements OnInit {

  descirption: string = 'Test description';
  inProgress: boolean = false;

  @ViewChild("photo")
  photoUpload: ElementRef;

  constructor(
    private dialogRef: MatDialogRef<AddPhotoDialogComponent>,
    private accountService: AccountService
  ) { }

  ngOnInit(): void {
    
  }

  onSubmit(): void {
    this.inProgress = true;
    Promise.all([
      this.uploadFile(),
      this.checkAccount()
    ]).then(result => {
      const [ uploadInfo, account ] = result;
      const newPost = new Post({
        title: this.descirption,
        account: account,
        photo: uploadInfo.key 
      });
      DataStore.save(newPost).then(() => {
        this.dialogRef.close();
      });
    });
  }

  private uploadFile(): Promise<UploadInfo> {
    return new Promise(r => {
      const file = this.photoUpload.nativeElement.files[0];
      Storage.put(file.name, file).then((result: UploadInfo) => {
        r(result);
      });
    })
  }

  private checkAccount(): Promise<Account> {
    return this.accountService.getCurrentUserAccount();
  }
}
