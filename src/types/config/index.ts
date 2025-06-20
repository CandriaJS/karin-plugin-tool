import { otherType } from '@/types/config/other'
import { toolType } from '@/types/config/tool'

export interface ConfigType {
  /** 工具配置文件 */
  tool: toolType
  /** 其他配置文件 */
  other: otherType
}
