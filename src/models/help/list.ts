import { HelpType } from '@/types'
type HelpListType = HelpType['helpList']

export const helpList:HelpListType = [
  {
    group: '[]内为必填项,{}内为可选项, #均为可选'
  },
  {
    group: '工具命令',
    list: [
      {
        icon: 161,
        title: 'https://xx',
        desc: '发送网址进行网页截图'
      }
    ]
  },
  {
    group: '管理命令，仅主人可用',
    auth: 'master',
    list: [
      {
        icon: 95,
        title: '#柠糖工具(插件)更新',
        desc: '更新插件本体'
      },
      {
        icon: 35,
        title: '#柠糖工具更新emoji数据',
        desc: '更新emoji数据'
      }
    ]
  }
]
