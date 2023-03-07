import {definePlugin} from 'sanity'
import {CustomDefaultLayout} from './CustomDefaultLayout'
import {muxInput} from 'sanity-plugin-mux-input'

export const getStartedPlugin = definePlugin({
  name: 'sanity-plugin-tutorial',
  studio: {
    components: {
      layout: CustomDefaultLayout,
    },
  },
  plugins: [muxInput({mp4_support: 'standard'})],
})
