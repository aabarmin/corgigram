// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';


const { Account, Post, Comment } = initSchema(schema);

export {
  Account,
  Post,
  Comment
};