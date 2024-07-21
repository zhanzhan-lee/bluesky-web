import { type SchemaTypeDefinition } from 'sanity'

import product from './schemas/products';

import category from './schemas/category';

import author from './schemas/author';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [product, category, author],
}
