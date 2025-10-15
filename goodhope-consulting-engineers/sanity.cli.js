import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: 'vf8trktc',
    dataset: 'production'
  },

  deployment: {
    appId: 'rxjz4m1raqn6rf2asedmt1a7',
    /**
     * Enable auto-updates for studios.
     * Learn more at https://www.sanity.io/docs/cli#auto-updates
     */
    autoUpdates: true,
  }
})
