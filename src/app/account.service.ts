import { DataSource } from '@angular/cdk/collections';
import { Injectable } from '@angular/core';
import Auth from '@aws-amplify/auth';
import { DataStore } from '@aws-amplify/datastore';
import { Account } from 'src/models';

type UserInfo = {
  username: string
}

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor() { }

  public getCurrentUserAccount(): Promise<Account> {
    return new Promise(resolve => {
      Auth.currentUserInfo().then((userInfo: UserInfo) => {
          DataStore.query(Account, account => account.accountName("eq", userInfo.username)).then((found: Account[]) => {
            if (found.length == 0) {
              const newAccount = new Account({
                accountName: userInfo.username
              });
              DataStore.save(newAccount).then((saved: Account) => {
                resolve(saved);
              });
            } else {
              resolve(found[0]);
            }
          })
      })
    });
  }
}
