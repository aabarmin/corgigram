import { Component, Input, OnInit } from '@angular/core';
import { PhotoRecord } from '../models/photo-record';

@Component({
  selector: 'corgigram-photo-card',
  templateUrl: './photo-card.component.html',
  styleUrls: ['./photo-card.component.css']
})
export class PhotoCardComponent implements OnInit {

  @Input()
  record: PhotoRecord;

  constructor() { }

  ngOnInit(): void {
  }

}
