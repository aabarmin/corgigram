/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.
import { Injectable } from "@angular/core";
import API, { graphqlOperation, GraphQLResult } from "@aws-amplify/api-graphql";
import { Observable } from "zen-observable-ts";

export interface SubscriptionResponse<T> {
  value: GraphQLResult<T>;
}

export type CreateAccountInput = {
  id?: string | null;
  accountName: string;
  _version?: number | null;
};

export type ModelAccountConditionInput = {
  accountName?: ModelStringInput | null;
  and?: Array<ModelAccountConditionInput | null> | null;
  or?: Array<ModelAccountConditionInput | null> | null;
  not?: ModelAccountConditionInput | null;
};

export type ModelStringInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null"
}

export type ModelSizeInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  between?: Array<number | null> | null;
};

export type Account = {
  __typename: "Account";
  id: string;
  accountName: string;
  posts?: ModelPostConnection | null;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
  createdAt: string;
  updatedAt: string;
};

export type ModelPostConnection = {
  __typename: "ModelPostConnection";
  items?: Array<Post | null> | null;
  nextToken?: string | null;
  startedAt?: number | null;
};

export type Post = {
  __typename: "Post";
  id: string;
  title: string;
  accountId: string;
  account?: Account | null;
  comments?: ModelCommentConnection | null;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
  createdAt: string;
  updatedAt: string;
};

export type ModelCommentConnection = {
  __typename: "ModelCommentConnection";
  items?: Array<Comment | null> | null;
  nextToken?: string | null;
  startedAt?: number | null;
};

export type Comment = {
  __typename: "Comment";
  id: string;
  text: string;
  postId: string;
  post?: Post | null;
  authorId: string;
  author?: Account | null;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
  createdAt: string;
  updatedAt: string;
};

export type UpdateAccountInput = {
  id: string;
  accountName?: string | null;
  _version?: number | null;
};

export type DeleteAccountInput = {
  id: string;
  _version?: number | null;
};

export type CreatePostInput = {
  id?: string | null;
  title: string;
  accountId: string;
  _version?: number | null;
};

export type ModelPostConditionInput = {
  title?: ModelStringInput | null;
  accountId?: ModelIDInput | null;
  and?: Array<ModelPostConditionInput | null> | null;
  or?: Array<ModelPostConditionInput | null> | null;
  not?: ModelPostConditionInput | null;
};

export type ModelIDInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
};

export type UpdatePostInput = {
  id: string;
  title?: string | null;
  accountId?: string | null;
  _version?: number | null;
};

export type DeletePostInput = {
  id: string;
  _version?: number | null;
};

export type CreateCommentInput = {
  id?: string | null;
  text: string;
  postId: string;
  authorId: string;
  _version?: number | null;
};

export type ModelCommentConditionInput = {
  text?: ModelStringInput | null;
  postId?: ModelIDInput | null;
  authorId?: ModelIDInput | null;
  and?: Array<ModelCommentConditionInput | null> | null;
  or?: Array<ModelCommentConditionInput | null> | null;
  not?: ModelCommentConditionInput | null;
};

export type UpdateCommentInput = {
  id: string;
  text?: string | null;
  postId?: string | null;
  authorId?: string | null;
  _version?: number | null;
};

export type DeleteCommentInput = {
  id: string;
  _version?: number | null;
};

export type ModelAccountFilterInput = {
  id?: ModelIDInput | null;
  accountName?: ModelStringInput | null;
  and?: Array<ModelAccountFilterInput | null> | null;
  or?: Array<ModelAccountFilterInput | null> | null;
  not?: ModelAccountFilterInput | null;
};

export type ModelAccountConnection = {
  __typename: "ModelAccountConnection";
  items?: Array<Account | null> | null;
  nextToken?: string | null;
  startedAt?: number | null;
};

export type ModelPostFilterInput = {
  id?: ModelIDInput | null;
  title?: ModelStringInput | null;
  accountId?: ModelIDInput | null;
  and?: Array<ModelPostFilterInput | null> | null;
  or?: Array<ModelPostFilterInput | null> | null;
  not?: ModelPostFilterInput | null;
};

export type ModelCommentFilterInput = {
  id?: ModelIDInput | null;
  text?: ModelStringInput | null;
  postId?: ModelIDInput | null;
  authorId?: ModelIDInput | null;
  and?: Array<ModelCommentFilterInput | null> | null;
  or?: Array<ModelCommentFilterInput | null> | null;
  not?: ModelCommentFilterInput | null;
};

export type CreateAccountMutation = {
  __typename: "Account";
  id: string;
  accountName: string;
  posts?: {
    __typename: "ModelPostConnection";
    items?: Array<{
      __typename: "Post";
      id: string;
      title: string;
      accountId: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
  createdAt: string;
  updatedAt: string;
};

export type UpdateAccountMutation = {
  __typename: "Account";
  id: string;
  accountName: string;
  posts?: {
    __typename: "ModelPostConnection";
    items?: Array<{
      __typename: "Post";
      id: string;
      title: string;
      accountId: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
  createdAt: string;
  updatedAt: string;
};

export type DeleteAccountMutation = {
  __typename: "Account";
  id: string;
  accountName: string;
  posts?: {
    __typename: "ModelPostConnection";
    items?: Array<{
      __typename: "Post";
      id: string;
      title: string;
      accountId: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
  createdAt: string;
  updatedAt: string;
};

export type CreatePostMutation = {
  __typename: "Post";
  id: string;
  title: string;
  accountId: string;
  account?: {
    __typename: "Account";
    id: string;
    accountName: string;
    posts?: {
      __typename: "ModelPostConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
    createdAt: string;
    updatedAt: string;
  } | null;
  comments?: {
    __typename: "ModelCommentConnection";
    items?: Array<{
      __typename: "Comment";
      id: string;
      text: string;
      postId: string;
      authorId: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
  createdAt: string;
  updatedAt: string;
};

export type UpdatePostMutation = {
  __typename: "Post";
  id: string;
  title: string;
  accountId: string;
  account?: {
    __typename: "Account";
    id: string;
    accountName: string;
    posts?: {
      __typename: "ModelPostConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
    createdAt: string;
    updatedAt: string;
  } | null;
  comments?: {
    __typename: "ModelCommentConnection";
    items?: Array<{
      __typename: "Comment";
      id: string;
      text: string;
      postId: string;
      authorId: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
  createdAt: string;
  updatedAt: string;
};

export type DeletePostMutation = {
  __typename: "Post";
  id: string;
  title: string;
  accountId: string;
  account?: {
    __typename: "Account";
    id: string;
    accountName: string;
    posts?: {
      __typename: "ModelPostConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
    createdAt: string;
    updatedAt: string;
  } | null;
  comments?: {
    __typename: "ModelCommentConnection";
    items?: Array<{
      __typename: "Comment";
      id: string;
      text: string;
      postId: string;
      authorId: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
  createdAt: string;
  updatedAt: string;
};

export type CreateCommentMutation = {
  __typename: "Comment";
  id: string;
  text: string;
  postId: string;
  post?: {
    __typename: "Post";
    id: string;
    title: string;
    accountId: string;
    account?: {
      __typename: "Account";
      id: string;
      accountName: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      createdAt: string;
      updatedAt: string;
    } | null;
    comments?: {
      __typename: "ModelCommentConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
    createdAt: string;
    updatedAt: string;
  } | null;
  authorId: string;
  author?: {
    __typename: "Account";
    id: string;
    accountName: string;
    posts?: {
      __typename: "ModelPostConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
    createdAt: string;
    updatedAt: string;
  } | null;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
  createdAt: string;
  updatedAt: string;
};

export type UpdateCommentMutation = {
  __typename: "Comment";
  id: string;
  text: string;
  postId: string;
  post?: {
    __typename: "Post";
    id: string;
    title: string;
    accountId: string;
    account?: {
      __typename: "Account";
      id: string;
      accountName: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      createdAt: string;
      updatedAt: string;
    } | null;
    comments?: {
      __typename: "ModelCommentConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
    createdAt: string;
    updatedAt: string;
  } | null;
  authorId: string;
  author?: {
    __typename: "Account";
    id: string;
    accountName: string;
    posts?: {
      __typename: "ModelPostConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
    createdAt: string;
    updatedAt: string;
  } | null;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
  createdAt: string;
  updatedAt: string;
};

export type DeleteCommentMutation = {
  __typename: "Comment";
  id: string;
  text: string;
  postId: string;
  post?: {
    __typename: "Post";
    id: string;
    title: string;
    accountId: string;
    account?: {
      __typename: "Account";
      id: string;
      accountName: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      createdAt: string;
      updatedAt: string;
    } | null;
    comments?: {
      __typename: "ModelCommentConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
    createdAt: string;
    updatedAt: string;
  } | null;
  authorId: string;
  author?: {
    __typename: "Account";
    id: string;
    accountName: string;
    posts?: {
      __typename: "ModelPostConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
    createdAt: string;
    updatedAt: string;
  } | null;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
  createdAt: string;
  updatedAt: string;
};

export type SyncAccountsQuery = {
  __typename: "ModelAccountConnection";
  items?: Array<{
    __typename: "Account";
    id: string;
    accountName: string;
    posts?: {
      __typename: "ModelPostConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  nextToken?: string | null;
  startedAt?: number | null;
};

export type GetAccountQuery = {
  __typename: "Account";
  id: string;
  accountName: string;
  posts?: {
    __typename: "ModelPostConnection";
    items?: Array<{
      __typename: "Post";
      id: string;
      title: string;
      accountId: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
  createdAt: string;
  updatedAt: string;
};

export type ListAccountsQuery = {
  __typename: "ModelAccountConnection";
  items?: Array<{
    __typename: "Account";
    id: string;
    accountName: string;
    posts?: {
      __typename: "ModelPostConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  nextToken?: string | null;
  startedAt?: number | null;
};

export type SyncPostsQuery = {
  __typename: "ModelPostConnection";
  items?: Array<{
    __typename: "Post";
    id: string;
    title: string;
    accountId: string;
    account?: {
      __typename: "Account";
      id: string;
      accountName: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      createdAt: string;
      updatedAt: string;
    } | null;
    comments?: {
      __typename: "ModelCommentConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  nextToken?: string | null;
  startedAt?: number | null;
};

export type GetPostQuery = {
  __typename: "Post";
  id: string;
  title: string;
  accountId: string;
  account?: {
    __typename: "Account";
    id: string;
    accountName: string;
    posts?: {
      __typename: "ModelPostConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
    createdAt: string;
    updatedAt: string;
  } | null;
  comments?: {
    __typename: "ModelCommentConnection";
    items?: Array<{
      __typename: "Comment";
      id: string;
      text: string;
      postId: string;
      authorId: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
  createdAt: string;
  updatedAt: string;
};

export type ListPostsQuery = {
  __typename: "ModelPostConnection";
  items?: Array<{
    __typename: "Post";
    id: string;
    title: string;
    accountId: string;
    account?: {
      __typename: "Account";
      id: string;
      accountName: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      createdAt: string;
      updatedAt: string;
    } | null;
    comments?: {
      __typename: "ModelCommentConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  nextToken?: string | null;
  startedAt?: number | null;
};

export type SyncCommentsQuery = {
  __typename: "ModelCommentConnection";
  items?: Array<{
    __typename: "Comment";
    id: string;
    text: string;
    postId: string;
    post?: {
      __typename: "Post";
      id: string;
      title: string;
      accountId: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      createdAt: string;
      updatedAt: string;
    } | null;
    authorId: string;
    author?: {
      __typename: "Account";
      id: string;
      accountName: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      createdAt: string;
      updatedAt: string;
    } | null;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  nextToken?: string | null;
  startedAt?: number | null;
};

export type GetCommentQuery = {
  __typename: "Comment";
  id: string;
  text: string;
  postId: string;
  post?: {
    __typename: "Post";
    id: string;
    title: string;
    accountId: string;
    account?: {
      __typename: "Account";
      id: string;
      accountName: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      createdAt: string;
      updatedAt: string;
    } | null;
    comments?: {
      __typename: "ModelCommentConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
    createdAt: string;
    updatedAt: string;
  } | null;
  authorId: string;
  author?: {
    __typename: "Account";
    id: string;
    accountName: string;
    posts?: {
      __typename: "ModelPostConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
    createdAt: string;
    updatedAt: string;
  } | null;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
  createdAt: string;
  updatedAt: string;
};

export type ListCommentsQuery = {
  __typename: "ModelCommentConnection";
  items?: Array<{
    __typename: "Comment";
    id: string;
    text: string;
    postId: string;
    post?: {
      __typename: "Post";
      id: string;
      title: string;
      accountId: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      createdAt: string;
      updatedAt: string;
    } | null;
    authorId: string;
    author?: {
      __typename: "Account";
      id: string;
      accountName: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      createdAt: string;
      updatedAt: string;
    } | null;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  nextToken?: string | null;
  startedAt?: number | null;
};

export type OnCreateAccountSubscription = {
  __typename: "Account";
  id: string;
  accountName: string;
  posts?: {
    __typename: "ModelPostConnection";
    items?: Array<{
      __typename: "Post";
      id: string;
      title: string;
      accountId: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateAccountSubscription = {
  __typename: "Account";
  id: string;
  accountName: string;
  posts?: {
    __typename: "ModelPostConnection";
    items?: Array<{
      __typename: "Post";
      id: string;
      title: string;
      accountId: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteAccountSubscription = {
  __typename: "Account";
  id: string;
  accountName: string;
  posts?: {
    __typename: "ModelPostConnection";
    items?: Array<{
      __typename: "Post";
      id: string;
      title: string;
      accountId: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
  createdAt: string;
  updatedAt: string;
};

export type OnCreatePostSubscription = {
  __typename: "Post";
  id: string;
  title: string;
  accountId: string;
  account?: {
    __typename: "Account";
    id: string;
    accountName: string;
    posts?: {
      __typename: "ModelPostConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
    createdAt: string;
    updatedAt: string;
  } | null;
  comments?: {
    __typename: "ModelCommentConnection";
    items?: Array<{
      __typename: "Comment";
      id: string;
      text: string;
      postId: string;
      authorId: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdatePostSubscription = {
  __typename: "Post";
  id: string;
  title: string;
  accountId: string;
  account?: {
    __typename: "Account";
    id: string;
    accountName: string;
    posts?: {
      __typename: "ModelPostConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
    createdAt: string;
    updatedAt: string;
  } | null;
  comments?: {
    __typename: "ModelCommentConnection";
    items?: Array<{
      __typename: "Comment";
      id: string;
      text: string;
      postId: string;
      authorId: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
  createdAt: string;
  updatedAt: string;
};

export type OnDeletePostSubscription = {
  __typename: "Post";
  id: string;
  title: string;
  accountId: string;
  account?: {
    __typename: "Account";
    id: string;
    accountName: string;
    posts?: {
      __typename: "ModelPostConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
    createdAt: string;
    updatedAt: string;
  } | null;
  comments?: {
    __typename: "ModelCommentConnection";
    items?: Array<{
      __typename: "Comment";
      id: string;
      text: string;
      postId: string;
      authorId: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
  createdAt: string;
  updatedAt: string;
};

export type OnCreateCommentSubscription = {
  __typename: "Comment";
  id: string;
  text: string;
  postId: string;
  post?: {
    __typename: "Post";
    id: string;
    title: string;
    accountId: string;
    account?: {
      __typename: "Account";
      id: string;
      accountName: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      createdAt: string;
      updatedAt: string;
    } | null;
    comments?: {
      __typename: "ModelCommentConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
    createdAt: string;
    updatedAt: string;
  } | null;
  authorId: string;
  author?: {
    __typename: "Account";
    id: string;
    accountName: string;
    posts?: {
      __typename: "ModelPostConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
    createdAt: string;
    updatedAt: string;
  } | null;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateCommentSubscription = {
  __typename: "Comment";
  id: string;
  text: string;
  postId: string;
  post?: {
    __typename: "Post";
    id: string;
    title: string;
    accountId: string;
    account?: {
      __typename: "Account";
      id: string;
      accountName: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      createdAt: string;
      updatedAt: string;
    } | null;
    comments?: {
      __typename: "ModelCommentConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
    createdAt: string;
    updatedAt: string;
  } | null;
  authorId: string;
  author?: {
    __typename: "Account";
    id: string;
    accountName: string;
    posts?: {
      __typename: "ModelPostConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
    createdAt: string;
    updatedAt: string;
  } | null;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteCommentSubscription = {
  __typename: "Comment";
  id: string;
  text: string;
  postId: string;
  post?: {
    __typename: "Post";
    id: string;
    title: string;
    accountId: string;
    account?: {
      __typename: "Account";
      id: string;
      accountName: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      createdAt: string;
      updatedAt: string;
    } | null;
    comments?: {
      __typename: "ModelCommentConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
    createdAt: string;
    updatedAt: string;
  } | null;
  authorId: string;
  author?: {
    __typename: "Account";
    id: string;
    accountName: string;
    posts?: {
      __typename: "ModelPostConnection";
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
    createdAt: string;
    updatedAt: string;
  } | null;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
  createdAt: string;
  updatedAt: string;
};

@Injectable({
  providedIn: "root"
})
export class APIService {
  async CreateAccount(
    input: CreateAccountInput,
    condition?: ModelAccountConditionInput
  ): Promise<CreateAccountMutation> {
    const statement = `mutation CreateAccount($input: CreateAccountInput!, $condition: ModelAccountConditionInput) {
        createAccount(input: $input, condition: $condition) {
          __typename
          id
          accountName
          posts {
            __typename
            items {
              __typename
              id
              title
              accountId
              _version
              _deleted
              _lastChangedAt
              createdAt
              updatedAt
            }
            nextToken
            startedAt
          }
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateAccountMutation>response.data.createAccount;
  }
  async UpdateAccount(
    input: UpdateAccountInput,
    condition?: ModelAccountConditionInput
  ): Promise<UpdateAccountMutation> {
    const statement = `mutation UpdateAccount($input: UpdateAccountInput!, $condition: ModelAccountConditionInput) {
        updateAccount(input: $input, condition: $condition) {
          __typename
          id
          accountName
          posts {
            __typename
            items {
              __typename
              id
              title
              accountId
              _version
              _deleted
              _lastChangedAt
              createdAt
              updatedAt
            }
            nextToken
            startedAt
          }
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateAccountMutation>response.data.updateAccount;
  }
  async DeleteAccount(
    input: DeleteAccountInput,
    condition?: ModelAccountConditionInput
  ): Promise<DeleteAccountMutation> {
    const statement = `mutation DeleteAccount($input: DeleteAccountInput!, $condition: ModelAccountConditionInput) {
        deleteAccount(input: $input, condition: $condition) {
          __typename
          id
          accountName
          posts {
            __typename
            items {
              __typename
              id
              title
              accountId
              _version
              _deleted
              _lastChangedAt
              createdAt
              updatedAt
            }
            nextToken
            startedAt
          }
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteAccountMutation>response.data.deleteAccount;
  }
  async CreatePost(
    input: CreatePostInput,
    condition?: ModelPostConditionInput
  ): Promise<CreatePostMutation> {
    const statement = `mutation CreatePost($input: CreatePostInput!, $condition: ModelPostConditionInput) {
        createPost(input: $input, condition: $condition) {
          __typename
          id
          title
          accountId
          account {
            __typename
            id
            accountName
            posts {
              __typename
              nextToken
              startedAt
            }
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
          }
          comments {
            __typename
            items {
              __typename
              id
              text
              postId
              authorId
              _version
              _deleted
              _lastChangedAt
              createdAt
              updatedAt
            }
            nextToken
            startedAt
          }
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreatePostMutation>response.data.createPost;
  }
  async UpdatePost(
    input: UpdatePostInput,
    condition?: ModelPostConditionInput
  ): Promise<UpdatePostMutation> {
    const statement = `mutation UpdatePost($input: UpdatePostInput!, $condition: ModelPostConditionInput) {
        updatePost(input: $input, condition: $condition) {
          __typename
          id
          title
          accountId
          account {
            __typename
            id
            accountName
            posts {
              __typename
              nextToken
              startedAt
            }
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
          }
          comments {
            __typename
            items {
              __typename
              id
              text
              postId
              authorId
              _version
              _deleted
              _lastChangedAt
              createdAt
              updatedAt
            }
            nextToken
            startedAt
          }
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdatePostMutation>response.data.updatePost;
  }
  async DeletePost(
    input: DeletePostInput,
    condition?: ModelPostConditionInput
  ): Promise<DeletePostMutation> {
    const statement = `mutation DeletePost($input: DeletePostInput!, $condition: ModelPostConditionInput) {
        deletePost(input: $input, condition: $condition) {
          __typename
          id
          title
          accountId
          account {
            __typename
            id
            accountName
            posts {
              __typename
              nextToken
              startedAt
            }
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
          }
          comments {
            __typename
            items {
              __typename
              id
              text
              postId
              authorId
              _version
              _deleted
              _lastChangedAt
              createdAt
              updatedAt
            }
            nextToken
            startedAt
          }
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeletePostMutation>response.data.deletePost;
  }
  async CreateComment(
    input: CreateCommentInput,
    condition?: ModelCommentConditionInput
  ): Promise<CreateCommentMutation> {
    const statement = `mutation CreateComment($input: CreateCommentInput!, $condition: ModelCommentConditionInput) {
        createComment(input: $input, condition: $condition) {
          __typename
          id
          text
          postId
          post {
            __typename
            id
            title
            accountId
            account {
              __typename
              id
              accountName
              _version
              _deleted
              _lastChangedAt
              createdAt
              updatedAt
            }
            comments {
              __typename
              nextToken
              startedAt
            }
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
          }
          authorId
          author {
            __typename
            id
            accountName
            posts {
              __typename
              nextToken
              startedAt
            }
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
          }
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateCommentMutation>response.data.createComment;
  }
  async UpdateComment(
    input: UpdateCommentInput,
    condition?: ModelCommentConditionInput
  ): Promise<UpdateCommentMutation> {
    const statement = `mutation UpdateComment($input: UpdateCommentInput!, $condition: ModelCommentConditionInput) {
        updateComment(input: $input, condition: $condition) {
          __typename
          id
          text
          postId
          post {
            __typename
            id
            title
            accountId
            account {
              __typename
              id
              accountName
              _version
              _deleted
              _lastChangedAt
              createdAt
              updatedAt
            }
            comments {
              __typename
              nextToken
              startedAt
            }
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
          }
          authorId
          author {
            __typename
            id
            accountName
            posts {
              __typename
              nextToken
              startedAt
            }
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
          }
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateCommentMutation>response.data.updateComment;
  }
  async DeleteComment(
    input: DeleteCommentInput,
    condition?: ModelCommentConditionInput
  ): Promise<DeleteCommentMutation> {
    const statement = `mutation DeleteComment($input: DeleteCommentInput!, $condition: ModelCommentConditionInput) {
        deleteComment(input: $input, condition: $condition) {
          __typename
          id
          text
          postId
          post {
            __typename
            id
            title
            accountId
            account {
              __typename
              id
              accountName
              _version
              _deleted
              _lastChangedAt
              createdAt
              updatedAt
            }
            comments {
              __typename
              nextToken
              startedAt
            }
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
          }
          authorId
          author {
            __typename
            id
            accountName
            posts {
              __typename
              nextToken
              startedAt
            }
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
          }
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteCommentMutation>response.data.deleteComment;
  }
  async SyncAccounts(
    filter?: ModelAccountFilterInput,
    limit?: number,
    nextToken?: string,
    lastSync?: number
  ): Promise<SyncAccountsQuery> {
    const statement = `query SyncAccounts($filter: ModelAccountFilterInput, $limit: Int, $nextToken: String, $lastSync: AWSTimestamp) {
        syncAccounts(filter: $filter, limit: $limit, nextToken: $nextToken, lastSync: $lastSync) {
          __typename
          items {
            __typename
            id
            accountName
            posts {
              __typename
              nextToken
              startedAt
            }
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
          }
          nextToken
          startedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    if (lastSync) {
      gqlAPIServiceArguments.lastSync = lastSync;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <SyncAccountsQuery>response.data.syncAccounts;
  }
  async GetAccount(id: string): Promise<GetAccountQuery> {
    const statement = `query GetAccount($id: ID!) {
        getAccount(id: $id) {
          __typename
          id
          accountName
          posts {
            __typename
            items {
              __typename
              id
              title
              accountId
              _version
              _deleted
              _lastChangedAt
              createdAt
              updatedAt
            }
            nextToken
            startedAt
          }
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetAccountQuery>response.data.getAccount;
  }
  async ListAccounts(
    filter?: ModelAccountFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListAccountsQuery> {
    const statement = `query ListAccounts($filter: ModelAccountFilterInput, $limit: Int, $nextToken: String) {
        listAccounts(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            accountName
            posts {
              __typename
              nextToken
              startedAt
            }
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
          }
          nextToken
          startedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListAccountsQuery>response.data.listAccounts;
  }
  async SyncPosts(
    filter?: ModelPostFilterInput,
    limit?: number,
    nextToken?: string,
    lastSync?: number
  ): Promise<SyncPostsQuery> {
    const statement = `query SyncPosts($filter: ModelPostFilterInput, $limit: Int, $nextToken: String, $lastSync: AWSTimestamp) {
        syncPosts(filter: $filter, limit: $limit, nextToken: $nextToken, lastSync: $lastSync) {
          __typename
          items {
            __typename
            id
            title
            accountId
            account {
              __typename
              id
              accountName
              _version
              _deleted
              _lastChangedAt
              createdAt
              updatedAt
            }
            comments {
              __typename
              nextToken
              startedAt
            }
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
          }
          nextToken
          startedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    if (lastSync) {
      gqlAPIServiceArguments.lastSync = lastSync;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <SyncPostsQuery>response.data.syncPosts;
  }
  async GetPost(id: string): Promise<GetPostQuery> {
    const statement = `query GetPost($id: ID!) {
        getPost(id: $id) {
          __typename
          id
          title
          accountId
          account {
            __typename
            id
            accountName
            posts {
              __typename
              nextToken
              startedAt
            }
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
          }
          comments {
            __typename
            items {
              __typename
              id
              text
              postId
              authorId
              _version
              _deleted
              _lastChangedAt
              createdAt
              updatedAt
            }
            nextToken
            startedAt
          }
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetPostQuery>response.data.getPost;
  }
  async ListPosts(
    filter?: ModelPostFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListPostsQuery> {
    const statement = `query ListPosts($filter: ModelPostFilterInput, $limit: Int, $nextToken: String) {
        listPosts(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            title
            accountId
            account {
              __typename
              id
              accountName
              _version
              _deleted
              _lastChangedAt
              createdAt
              updatedAt
            }
            comments {
              __typename
              nextToken
              startedAt
            }
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
          }
          nextToken
          startedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListPostsQuery>response.data.listPosts;
  }
  async SyncComments(
    filter?: ModelCommentFilterInput,
    limit?: number,
    nextToken?: string,
    lastSync?: number
  ): Promise<SyncCommentsQuery> {
    const statement = `query SyncComments($filter: ModelCommentFilterInput, $limit: Int, $nextToken: String, $lastSync: AWSTimestamp) {
        syncComments(filter: $filter, limit: $limit, nextToken: $nextToken, lastSync: $lastSync) {
          __typename
          items {
            __typename
            id
            text
            postId
            post {
              __typename
              id
              title
              accountId
              _version
              _deleted
              _lastChangedAt
              createdAt
              updatedAt
            }
            authorId
            author {
              __typename
              id
              accountName
              _version
              _deleted
              _lastChangedAt
              createdAt
              updatedAt
            }
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
          }
          nextToken
          startedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    if (lastSync) {
      gqlAPIServiceArguments.lastSync = lastSync;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <SyncCommentsQuery>response.data.syncComments;
  }
  async GetComment(id: string): Promise<GetCommentQuery> {
    const statement = `query GetComment($id: ID!) {
        getComment(id: $id) {
          __typename
          id
          text
          postId
          post {
            __typename
            id
            title
            accountId
            account {
              __typename
              id
              accountName
              _version
              _deleted
              _lastChangedAt
              createdAt
              updatedAt
            }
            comments {
              __typename
              nextToken
              startedAt
            }
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
          }
          authorId
          author {
            __typename
            id
            accountName
            posts {
              __typename
              nextToken
              startedAt
            }
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
          }
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetCommentQuery>response.data.getComment;
  }
  async ListComments(
    filter?: ModelCommentFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListCommentsQuery> {
    const statement = `query ListComments($filter: ModelCommentFilterInput, $limit: Int, $nextToken: String) {
        listComments(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            text
            postId
            post {
              __typename
              id
              title
              accountId
              _version
              _deleted
              _lastChangedAt
              createdAt
              updatedAt
            }
            authorId
            author {
              __typename
              id
              accountName
              _version
              _deleted
              _lastChangedAt
              createdAt
              updatedAt
            }
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
          }
          nextToken
          startedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListCommentsQuery>response.data.listComments;
  }
  OnCreateAccountListener: Observable<
    SubscriptionResponse<OnCreateAccountSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateAccount {
        onCreateAccount {
          __typename
          id
          accountName
          posts {
            __typename
            items {
              __typename
              id
              title
              accountId
              _version
              _deleted
              _lastChangedAt
              createdAt
              updatedAt
            }
            nextToken
            startedAt
          }
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnCreateAccountSubscription>>;

  OnUpdateAccountListener: Observable<
    SubscriptionResponse<OnUpdateAccountSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateAccount {
        onUpdateAccount {
          __typename
          id
          accountName
          posts {
            __typename
            items {
              __typename
              id
              title
              accountId
              _version
              _deleted
              _lastChangedAt
              createdAt
              updatedAt
            }
            nextToken
            startedAt
          }
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnUpdateAccountSubscription>>;

  OnDeleteAccountListener: Observable<
    SubscriptionResponse<OnDeleteAccountSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteAccount {
        onDeleteAccount {
          __typename
          id
          accountName
          posts {
            __typename
            items {
              __typename
              id
              title
              accountId
              _version
              _deleted
              _lastChangedAt
              createdAt
              updatedAt
            }
            nextToken
            startedAt
          }
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnDeleteAccountSubscription>>;

  OnCreatePostListener: Observable<
    SubscriptionResponse<OnCreatePostSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreatePost {
        onCreatePost {
          __typename
          id
          title
          accountId
          account {
            __typename
            id
            accountName
            posts {
              __typename
              nextToken
              startedAt
            }
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
          }
          comments {
            __typename
            items {
              __typename
              id
              text
              postId
              authorId
              _version
              _deleted
              _lastChangedAt
              createdAt
              updatedAt
            }
            nextToken
            startedAt
          }
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnCreatePostSubscription>>;

  OnUpdatePostListener: Observable<
    SubscriptionResponse<OnUpdatePostSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdatePost {
        onUpdatePost {
          __typename
          id
          title
          accountId
          account {
            __typename
            id
            accountName
            posts {
              __typename
              nextToken
              startedAt
            }
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
          }
          comments {
            __typename
            items {
              __typename
              id
              text
              postId
              authorId
              _version
              _deleted
              _lastChangedAt
              createdAt
              updatedAt
            }
            nextToken
            startedAt
          }
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnUpdatePostSubscription>>;

  OnDeletePostListener: Observable<
    SubscriptionResponse<OnDeletePostSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeletePost {
        onDeletePost {
          __typename
          id
          title
          accountId
          account {
            __typename
            id
            accountName
            posts {
              __typename
              nextToken
              startedAt
            }
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
          }
          comments {
            __typename
            items {
              __typename
              id
              text
              postId
              authorId
              _version
              _deleted
              _lastChangedAt
              createdAt
              updatedAt
            }
            nextToken
            startedAt
          }
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnDeletePostSubscription>>;

  OnCreateCommentListener: Observable<
    SubscriptionResponse<OnCreateCommentSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateComment {
        onCreateComment {
          __typename
          id
          text
          postId
          post {
            __typename
            id
            title
            accountId
            account {
              __typename
              id
              accountName
              _version
              _deleted
              _lastChangedAt
              createdAt
              updatedAt
            }
            comments {
              __typename
              nextToken
              startedAt
            }
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
          }
          authorId
          author {
            __typename
            id
            accountName
            posts {
              __typename
              nextToken
              startedAt
            }
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
          }
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnCreateCommentSubscription>>;

  OnUpdateCommentListener: Observable<
    SubscriptionResponse<OnUpdateCommentSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateComment {
        onUpdateComment {
          __typename
          id
          text
          postId
          post {
            __typename
            id
            title
            accountId
            account {
              __typename
              id
              accountName
              _version
              _deleted
              _lastChangedAt
              createdAt
              updatedAt
            }
            comments {
              __typename
              nextToken
              startedAt
            }
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
          }
          authorId
          author {
            __typename
            id
            accountName
            posts {
              __typename
              nextToken
              startedAt
            }
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
          }
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnUpdateCommentSubscription>>;

  OnDeleteCommentListener: Observable<
    SubscriptionResponse<OnDeleteCommentSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteComment {
        onDeleteComment {
          __typename
          id
          text
          postId
          post {
            __typename
            id
            title
            accountId
            account {
              __typename
              id
              accountName
              _version
              _deleted
              _lastChangedAt
              createdAt
              updatedAt
            }
            comments {
              __typename
              nextToken
              startedAt
            }
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
          }
          authorId
          author {
            __typename
            id
            accountName
            posts {
              __typename
              nextToken
              startedAt
            }
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
          }
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnDeleteCommentSubscription>>;
}
