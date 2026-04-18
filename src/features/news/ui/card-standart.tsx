import { IconEye, IconThumbUp } from "@tabler/icons-react"
import type { INewsCardProps } from "../news.types"
import { Badge } from "../../../components/badge"
import { formatIsoDate } from "../../../lib/DateFormatter"
import { PUBLIC_URL } from "../../../lib/api"
import { LazyPicture } from "../../../components/lazy-picture"

export function NewsCardStandart({ newsItem, isFirst, className }: INewsCardProps) {
    return (
        <article
            className={`grid grid-cols-[auto_1fr] gap-3.5 max-sm:flex max-sm:flex-col ${className}`}
        >
            <LazyPicture
                className={`flex h-32 w-full min-w-0 items-center justify-center overflow-hidden rounded-xl sm:w-46 ${isFirst ? "" : "max-sm:hidden"}`}
                images={{
                    s: PUBLIC_URL + newsItem.cover.images[0].s,
                    m: PUBLIC_URL + newsItem.cover.images[0].m,
                    l: PUBLIC_URL + newsItem.cover.images[0].l,
                    hd: PUBLIC_URL + newsItem.cover.images[0].hd
                }}
                srcRoot={PUBLIC_URL}
                alt={newsItem.title}
            />
            <div className="flex flex-col gap-3.5">
                <div>
                    <span className="text-foreground-secondary text-base font-normal">
                        {formatIsoDate({
                            isoString: newsItem.publishedAt,
                            locale: "ru-RU",
                            options: { timeZone: "UTC", formatMode: "dateTime" }
                        }).replace(/в /, "")}
                    </span>
                    <a
                        href={"/news/" + newsItem.id}
                        rel="noopener noreferrer"
                        target="_blank"
                        title={newsItem.title}
                        className="hover:text-primary active:text-primary line-clamp-3 text-lg leading-tight font-normal transition"
                    >
                        {newsItem.title}
                    </a>
                </div>
                <div className="mt-auto flex flex-wrap items-center justify-between gap-1.75">
                    <div className="flex items-center gap-1.75 text-xs">
                        {newsItem.directions.map((dir) => (
                            <Badge
                                key={dir.id}
                                title={"Направление: " + dir.name}
                                text={dir.name}
                                color="secondary"
                            />
                        ))}
                        {newsItem.rubrics.map((rubric) => (
                            <Badge
                                key={rubric.id}
                                title={"Рубрика: " + rubric.name}
                                text={rubric.name}
                                color="info"
                            />
                        ))}
                    </div>
                    <div className="ml-auto flex items-center gap-1.75 text-sm">
                        <div
                            title={"Лайки: " + newsItem.likeCount}
                            className="text-foreground-secondary flex items-center gap-0.75"
                        >
                            <IconThumbUp size={22} />
                            <span className="leading-3.75">{newsItem.likeCount}</span>
                        </div>
                        <div
                            title={"Просмотры: " + newsItem.viewCount}
                            className="text-foreground-secondary flex items-center gap-0.75"
                        >
                            <IconEye size={22} />
                            <span className="leading-3.75">{newsItem.viewCount}</span>
                        </div>
                    </div>
                </div>
            </div>
        </article>
    )
}
