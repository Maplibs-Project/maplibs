import { type SchemaTypeDefinition } from 'sanity'

import reflection from './schemaTypes/reflection'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [reflection],
}
