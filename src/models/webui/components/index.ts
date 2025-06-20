import { otherComponents } from './other'
import { toolComponents } from './tool'

export const components = async () => {
  const results = await Promise.all([
    toolComponents(),
    otherComponents()
  ])

  return results.flat()
}

export {
  otherComponents,
  toolComponents
}
