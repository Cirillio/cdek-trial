import { type NewsItem } from "./features/news/news.types"

export const MOCK_NEWS: NewsItem[] = [
    {
        id: "1",
        title: "CDEK открывает новый сортировочный центр в Шанхае",
        publishedAt: "2026-04-18T10:00:00Z",
        isBreaking: true,
        isImportant: true,
        isLiked: false,
        likeCount: 124,
        viewCount: 1500,
        viewed: false,
        needConfirmation: false,
        rubrics: [{ id: 1, name: "Логистика", slug: "logistics" }],
        directions: [{ id: 1, name: "Китай", slug: "china" }],
        cover: {
            type: "carousel",
            images: [
                {
                    hd: "https://picsum.photos/id/1/1200/800",
                    l: "https://picsum.photos/id/1/800/600",
                    m: "https://picsum.photos/id/1/600/400",
                    s: "https://picsum.photos/id/1/300/200"
                },
                {
                    hd: "https://picsum.photos/id/2/1200/800",
                    l: "https://picsum.photos/id/2/800/600",
                    m: "https://picsum.photos/id/2/600/400",
                    s: "https://picsum.photos/id/2/300/200"
                }
            ]
        }
    },
    {
        id: "2",
        title: "Обновление личного кабинета: новые функции для бизнеса",
        publishedAt: "2026-04-17T15:30:00Z",
        isBreaking: false,
        isImportant: true,
        isLiked: true,
        likeCount: 45,
        viewCount: 890,
        viewed: true,
        needConfirmation: true,
        rubrics: [{ id: 2, name: "IT", slug: "it" }],
        directions: [{ id: 2, name: "Россия", slug: "russia" }],
        cover: {
            type: "gallery",
            images: [
                {
                    hd: "https://picsum.photos/id/3/1200/800",
                    l: "https://picsum.photos/id/3/800/600",
                    m: "https://picsum.photos/id/3/600/400",
                    s: "https://picsum.photos/id/3/300/200"
                }
            ]
        }
    },
    {
        id: "3",
        title: "Итоги года: рост доставок на 40%",
        publishedAt: "2026-04-16T09:15:00Z",
        isBreaking: false,
        isImportant: false,
        isLiked: false,
        likeCount: 230,
        viewCount: 3400,
        viewed: false,
        needConfirmation: false,
        rubrics: [{ id: 3, name: "Финансы", slug: "finance" }],
        directions: [{ id: 2, name: "Россия", slug: "russia" }],
        cover: {
            type: "carousel",
            images: [
                {
                    hd: "https://picsum.photos/id/4/1200/800",
                    l: "https://picsum.photos/id/4/800/600",
                    m: "https://picsum.photos/id/4/600/400",
                    s: "https://picsum.photos/id/4/300/200"
                },
                {
                    hd: "https://picsum.photos/id/5/1200/800",
                    l: "https://picsum.photos/id/5/800/600",
                    m: "https://picsum.photos/id/5/600/400",
                    s: "https://picsum.photos/id/5/300/200"
                },
                {
                    hd: "https://picsum.photos/id/6/1200/800",
                    l: "https://picsum.photos/id/6/800/600",
                    m: "https://picsum.photos/id/6/600/400",
                    s: "https://picsum.photos/id/6/300/200"
                }
            ]
        }
    }
]
