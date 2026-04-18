import { IconEye, IconThumbUp } from "@tabler/icons-react"
import type { INewsCardProps } from "../news.types"
import { Badge } from "../../../components/badge"
import { formatIsoDate } from "../../../lib/DateFormatter"

export function NewsCardStandart({ newsItem, isFirst }: INewsCardProps) {
    return (
        <article className="grid grid-cols-[auto_1fr] gap-3.5 max-sm:flex max-sm:flex-col">
            <picture
                className={`bg-secondary flex h-32 w-full items-center justify-center rounded-xl sm:w-46 ${isFirst ? "" : "max-sm:hidden"}`}
            ></picture>
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
                        className="hover:text-primary active:text-primary line-clamp-3 text-lg font-normal transition"
                    >
                        {newsItem.title}
                    </a>
                </div>
                <div className="mt-auto flex items-center justify-between">
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
                    <div className="flex items-center gap-1.75 text-sm">
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
