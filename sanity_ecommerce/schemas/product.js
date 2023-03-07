import {tryGetFile} from '@sanity/asset-utils' // this function creates production link
export default {
  name: 'product',
  title: 'Product',
  type: 'document',
  fields: [
    {
      name: 'image',
      title: 'Image',
      type: 'array',
      of: [{type: 'image'}],
      options: {
        hotspot: true,
      },
    },
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 90,
      },
    },
    {
      name: 'price',
      titel: 'Price',
      type: 'number',
    },
    {
      name: 'details',
      title: 'Details',
      type: 'string',
    },
    {
      name: 'category',
      title: 'Category',
      type: 'string',
    },
    {
      name: 'inDemand',
      title: 'inDemand',
      type: 'string',
    },
    {
      name: 'videoFile',
      type: 'file',
      title: 'Video File',
      description: 'The video file to upload',
      options: {
        accept: 'video/*',
      },
      constraints: {
        mimeType: 'video/*',
      },
    },
    {
      name: 'generatedVideoURL',
      title: 'Generate URL Link to this video',
      description:
        'Click GENERATE to get Link to video file, if you by mistake change it, click generate again. Then Copy link below and paste it anywhere you want',
      type: 'slug',
      options: {
        // this source takes all data that is currently in this document and pass it as argument
        // then tryGetFile() - getting file from sanity with all atributes like url, original name etc
        source: ({videoFile}) => {
          if (!videoFile) return 'Missing Video File'

          const {asset} = tryGetFile(videoFile?.asset?._ref, {
            // put your own envs
            dataset: 'production',
            projectId: '8kwwqgc9',
          })
          return asset?.url
        },
        // this slugify prevent from changing "/" to "-" it keeps the original link and prevent from slugifying
        slugify: (link) => link,
      },
    },
  ],
}
