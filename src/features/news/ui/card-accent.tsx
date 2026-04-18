import { IconEye, IconStarFilled, IconThumbUp } from "@tabler/icons-react"
import type { INewsCardProps } from "../news.types"
import { Badge } from "../../../components/badge"
import { formatIsoDate } from "../../../lib/DateFormatter"
import { PUBLIC_URL } from "../../../lib/api"
import { LazyPicture } from "../../../components/lazy-picture"
import { formatHashtag } from "../../../lib/FormatHashtag"

export function NewsCardAccent({ newsItem, isFirst, className }: INewsCardProps) {
    return (
        <article className={`flex flex-col gap-[3.5px] ${className}`}>
            <LazyPicture
                className={`flex h-40 w-full items-center justify-center overflow-hidden rounded-xl ${isFirst ? "" : "hidden"}`}
                images={{
                    s: PUBLIC_URL + newsItem.cover.images[0].s,
                    m: PUBLIC_URL + newsItem.cover.images[0].m,
                    l: PUBLIC_URL + newsItem.cover.images[0].l,
                    hd: PUBLIC_URL + newsItem.cover.images[0].hd
                }}
                srcRoot={PUBLIC_URL}
                alt={newsItem.title}
            />
            <div className="mt-1.75 space-y-[3.5px]">
                {newsItem.isImportant && (
                    <Badge
                        icon={IconStarFilled}
                        text="Топ новость"
                        color="warning"
                        className="rounded-full!"
                    />
                )}
                <a
                    href={"/news/" + newsItem.id}
                    rel="noopener noreferrer"
                    target="_blank"
                    title={newsItem.title}
                    className="hover:text-primary active:text-primary line-clamp-3 text-lg font-normal transition"
                >
                    {newsItem.title}
                </a>
            </div>
            <div className="flex items-center justify-between">
                <div className="text-foreground-secondary flex w-fit min-w-0 flex-wrap items-center gap-[3.5px] text-sm">
                    {newsItem.directions[0] && (
                        <a href={"/news?direction=" + newsItem.directions[0].slug} className="">
                            {formatHashtag(newsItem.directions[0].name)}
                        </a>
                    )}
                    {newsItem.rubrics[0] && (
                        <a
                            href={"/news?rubric=" + newsItem.rubrics[0].slug}
                            className="text-foreground-secondary"
                        >
                            {formatHashtag(newsItem.rubrics[0].name)}
                        </a>
                    )}
                    <span>•</span>
                    <span>
                        {formatIsoDate({
                            isoString: newsItem.publishedAt,
                            locale: "ru-RU",
                            options: { timeZone: "UTC", formatMode: "dateOnly" }
                        }).replace(/ г\.$/, "")}
                    </span>
                    <span>•</span>
                    <div
                        title={"Лайки: " + newsItem.likeCount}
                        className="text-foreground-secondary flex shrink-0 items-center gap-0.75"
                    >
                        <IconThumbUp size={18} />
                        <span className="leading-3.75">{newsItem.likeCount}</span>
                    </div>
                    <div
                        title={"Просмотры: " + newsItem.viewCount}
                        className="text-foreground-secondary flex shrink-0 items-center gap-0.75"
                    >
                        <IconEye size={18} />
                        <span className="leading-3.75">{newsItem.viewCount}</span>
                    </div>
                </div>
            </div>
        </article>
    )
}
