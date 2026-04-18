import { API_BASE } from "../../../lib/api"
import type { NewsApiResponse } from "../news.types"

export interface FetchNewsParams {
    category: string
    page: number
    perPage: number
    endpoint?: "short" | "empty"
}

type FetchNewsReturn = Promise<NewsApiResponse>

export async function fetchNews({
    category,
    page,
    perPage,
    endpoint = "short"
}: FetchNewsParams): FetchNewsReturn {
    const url = `${API_BASE}/news/feed/${category}/${endpoint}?page=${page}&perPage=${perPage}`
    const res: Response = await fetch(url, {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    })

    if (!res.ok) {
        throw new Error(`Ошибка сервера: ${res.status}`)
    }

    const data = (await res.json()) as NewsApiResponse

    data.news = data.news.map((item) => ({
        ...item,
        cover: {
            ...item.cover,
            images: item.cover.images.map((img) => {
                const normalize = (url: string) => {
                    if (!url) return ""
                    // 1. Убираем протокол и домен (например, http://...:5000)
                    let path = url.replace(/^https?:\/\/[^/]+/, "")
                    // 2. Убираем префиксы /assets/ или /static/, если они есть в начале
                    path = path.replace(/^\/(assets|static)\//, "/")
                    return path
                }
                return {
                    s: normalize(img.s),
                    m: normalize(img.m),
                    l: normalize(img.l),
                    hd: normalize(img.hd)
                }
            })
        }
    }))

    return data
}
