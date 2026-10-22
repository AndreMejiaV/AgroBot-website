import { navigate } from '../navigation'

export default function SiteLink({ href, onClick, children, ...props }) {
  return <a href={href} {...props} onClick={event => {
    onClick?.(event)
    if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return
    const url = new URL(href, window.location.href)
    if (url.origin !== window.location.origin || props.target || props.download) return
    if (url.pathname === window.location.pathname && url.hash) return
    event.preventDefault()
    navigate(url.pathname + url.search + url.hash)
  }}>{children}</a>
}
