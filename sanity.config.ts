// Single workspace configuration

import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {schema} from './sanity/schema'
import { projectId, dataset } from './sanity/env'

export default defineConfig({
    projectId,
    dataset,
    plugins: [structureTool()],
    schema: {
        types: schema.types,
    },
})
