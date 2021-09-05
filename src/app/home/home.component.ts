import { DataSource } from '@angular/cdk/collections';
import { Component, OnInit } from '@angular/core';
import { DataStore } from 'aws-amplify';
import { Post } from 'src/models';
import { PhotoRecord } from '../models/photo-record';

@Component({
  selector: 'corgigram-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  records: PhotoRecord[] = [];
  isDataLoading: boolean = false;

  constructor() { }

  ngOnInit(): void {
    this.loadData();
    this.subscribe();
  }

  private subscribe(): void {
    DataStore.observe(Post).subscribe(message => {
      this.loadData();
    });
  }

  private loadData() {
    this.isDataLoading = true;
    DataStore.query(Post).then(records => {
      this.isDataLoading = false;
      this.records = records;
    });
  }
}
