import { API_BASE } from "../../../lib/api"
import type { NewsApiResponse } from "../news.types"

export interface FetchNewsParams {
    category: string
    page: number
    perPage: number
}

type FetchNewsReturn = Promise<NewsApiResponse>

export async function fetchNews({ category, page, perPage }: FetchNewsParams): FetchNewsReturn {
    const url = `${API_BASE}/news/feed/${category}/short?page=${page}&perPage=${perPage}`
    const res: Response = await fetch(url, {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    })

    if (!res.ok) {
        throw new Error(`Ошибка сервера: ${res.status}`)
    }

    return res.json() as FetchNewsReturn
}
