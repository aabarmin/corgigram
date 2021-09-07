import { Component, Input, OnInit } from '@angular/core';
import { PhotoRecord } from '../models/photo-record';
import { Storage } from '@aws-amplify/storage';

@Component({
  selector: 'corgigram-photo-card',
  templateUrl: './photo-card.component.html',
  styleUrls: ['./photo-card.component.css']
})
export class PhotoCardComponent implements OnInit {

  @Input()
  record: PhotoRecord;

  inProgress: boolean = false;
  imageUrl: string = '';

  constructor() { }

  ngOnInit(): void {
    const config = {
      download: false
    };
    this.inProgress = true;
    Storage.get(this.record.photoKey, config).then((imageUrl: string) => {
      this.imageUrl = imageUrl;
      this.inProgress = false;
    })
  }

}
