import { components } from 'node-karin'

import { Config } from '@/common'

export const toolComponents = () => [
  components.accordion.create('tool', {
    label: '工具设置',
    children: [
      components.accordion.createItem('webui:tool', {
        title: '工具设置',
        subtitle: '用于设置工具, 如是否开启网页截图等功能',
        children: [
          components.switch.create('WebPreview', {
            label: '网页截图',
            description: '是否开启网页截图',
            defaultSelected: Config.tool.WebPreview
          }),
          components.switch.create('WebPreview', {
            label: '网页截图仅主人',
            description: '网页截图是否仅主人可用',
            defaultSelected: Config.tool.WebPreview_Master
          })
        ]
      })
    ]
  })
]
