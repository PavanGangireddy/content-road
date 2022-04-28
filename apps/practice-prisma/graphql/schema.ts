// /graphql/schema.ts
import { makeSchema } from 'nexus';
import { join } from 'path';
import {
  Link,
  LinksQuery,
  CreateLinkMutation,
  Edge,
  PageInfo,
  Response,
  User
} from './types/index';

export const schema = makeSchema({
  types: [Link, LinksQuery, CreateLinkMutation, Edge, PageInfo, Response, User],
  outputs: {
    typegen: join(
      process.cwd(),
      'node_modules',
      '@types',
      'nexus-typegen',
      'index.d.ts'
    ),
    schema: join(process.cwd(), 'graphql', 'schema.graphql')
  },
  contextType: {
    export: 'Context',
    module: join(process.cwd(), 'graphql', 'context.ts')
  }
});
