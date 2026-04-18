export function getProxiedImageUrl(url: string): string {
    if (!url) return ""

    if (import.meta.env.PROD && url.startsWith("http://1e14c3489fcb.vps.myjino.ru:5000/assets/")) {
        return url.replace("http://1e14c3489fcb.vps.myjino.ru:5000/assets/", "/assets-proxy/")
    }

    return url
}
