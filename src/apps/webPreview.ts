import karin, { segment } from 'node-karin'

import { Config } from '@/common'

export const WebPreview = karin.command(/^^https?:\/\/((([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,})|(\d{1,3}(\.\d{1,3}){3}))(:\d{1,5})?$/i, async (e) => {
  if (!Config.tool.WebPreview) return false
  if (Config.tool.WebPreview_Master && !e.hasPermission('master')) return false
  const img = await render(e.msg)
  await e.reply(img)
}, {
  name: '柠糖工具:网页截图',
  priority: -Infinity,
  event: 'message',
  permission: 'all'
})

const render = async (url: string) => {
  const image = await karin.render({
    type: 'jpeg',
    encoding: 'base64',
    file: url,
    screensEval: '#containter',
    pageGotoParams: {
      waitUntil: 'networkidle0',
      timeout: 60000
    },
    fullPage: true,
    setViewport: {
      width: 1920,
      height: 1080
    }
  })
  const base64Image = image.startsWith('base64://') ? image : `base64://${image}`

  return segment.image(base64Image)
}
