import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'

export default defineConfig({
  name: 'default',
  title: 'purple-vulture',

  projectId: '8kwwqgc9',
  dataset: 'ecommerce',

  plugins: [deskTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
