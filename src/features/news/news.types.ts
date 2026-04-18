export type NewsWidgetType = "standart" | "accent"

export interface INewsCardProps {
    newsItem: NewsItem
    isFirst: boolean
    className?: string
}

export type CoverType = "gallery" | "carousel"

export interface CoverImage {
    hd: string
    l: string
    m: string
    s: string
}

export interface Cover {
    images: CoverImage[]
    type: CoverType
}

export interface Rubric {
    id: number
    name: string
    slug: string
}

export interface Direction {
    id: number
    name: string
    slug: string
}

export interface NewsItem {
    id: string
    title: string
    cover: Cover
    publishedAt: string
    rubrics: Rubric[]
    directions: Direction[]
    isBreaking: boolean
    isImportant: boolean
    isLiked: boolean
    likeCount: number
    viewCount: number
    viewed: boolean
    needConfirmation: boolean
}

export interface NewsApiResponse {
    news: NewsItem[]
    perPage: number
    totalPages: number
    minDatePublication: string
}
