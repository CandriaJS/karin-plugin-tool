import Request from './request'

/**
 * 异步判断是否在海外环境
 * @returns 如果在海外环境返回 true，否则返回 false
 * @throws 如果获取 IP 位置失败，则抛出异常
 */
export const isAbroad = async (): Promise<boolean> => {
  const urls = [
    'https://blog.cloudflare.com/cdn-cgi/trace',
    'https://developers.cloudflare.com/cdn-cgi/trace',
    'https://hostinger.com/cdn-cgi/trace',
    'https://ahrefs.com/cdn-cgi/trace'
  ]

  try {
    const responses = await Promise.all(
      urls.map((url) => Request.get(url, null, null, 'text'))
    )
    const traceTexts = responses.map((res) => res.data).filter(Boolean)
    const traceLines = traceTexts
      .flatMap((text: string) =>
        text.split('\n').filter((line: string) => line)
      )
      .map((line) => line.split('='))

    const traceMap = Object.fromEntries(traceLines)
    return traceMap.loc !== 'CN'
  } catch (error) {
    throw new Error(`获取 IP 所在地区出错: ${(error as Error).message}`)
  }
}
