import { useState } from "react"
import { useQuery } from "@tanstack/react-query"
import { fetchNews } from "../api/news-api"
import type { NewsApiResponse } from "../news.types"

export interface UseNewsWidgetParams {
    category: string
    startPage?: number
    perPage?: number
    endpoint?: "short" | "empty"
}

export interface UseNewsWidgetReturn {
    data: NewsApiResponse | undefined
    isLoading: boolean
    error: string | null
    page: number
    canNext: boolean
    canPrev: boolean
    goNext: () => void
    goPrev: () => void
    retry: () => void
}

export function useNewsWidget({
    category,
    startPage = 1,
    perPage = 3,
    endpoint = "short"
}: UseNewsWidgetParams): UseNewsWidgetReturn {
    const [page, setPage] = useState<number>(startPage)

    const { data, isLoading, isError, error, refetch } = useQuery({
        queryKey: ["news", category, endpoint, page, perPage],
        queryFn: () => fetchNews({ category, page, perPage, endpoint }),
        staleTime: 5 * 60 * 1000
    })

    const totalPages = data?.totalPages ?? 1

    return {
        data,
        isLoading,
        error: isError ? (error?.message ?? "Неизвестная ошибка.") : null,
        page,
        canNext: page < totalPages,
        canPrev: page > 1,
        goNext: () => setPage((p) => p + 1),
        goPrev: () => setPage((p) => p - 1),
        retry: () => refetch()
    }
}
