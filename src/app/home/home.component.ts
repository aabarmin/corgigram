import { Component, OnInit } from '@angular/core';
import { DataStore, Predicates, SortDirection } from '@aws-amplify/datastore';
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
    DataStore.query(Post, Predicates.ALL, {sort: (record) => record.createdAt(SortDirection.DESCENDING)}).then(records => {
      this.isDataLoading = false;
      this.records = records.map(r => this.toRecord(r));
    });
  }

  private toRecord(post: Post): PhotoRecord {
    const createdAt = post.createdAt ? Date.parse(post.createdAt) : Date.now();

    const record = new PhotoRecord();
    record.id = post.id;
    record.title = post.title;
    record.created = this.formatDate(createdAt);
    record.author = post.account ? post.account.accountName : "Unknown";
    record.photoKey = post.photo;
    return record;
  }

  private formatDate(date: number): string {
    const obj = new Date(date);
    return `${obj.getFullYear()}.${obj.getMonth() + 1}.${obj.getDate()}`;
  }
}
