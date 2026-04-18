import { IconEye, IconStarFilled, IconThumbUp } from "@tabler/icons-react"
import type { INewsCardProps } from "../news.types"
import { Badge } from "../../../components/badge"
import { formatIsoDate } from "../../../lib/DateFormatter"

export function NewsCardAccent({ newsItem, isFirst }: INewsCardProps) {
    return (
        <article className="flex flex-col gap-[3.5px]">
            <picture
                className={`bg-secondary flex h-40 w-full items-center justify-center rounded-xl ${isFirst ? "" : "hidden"}`}
            ></picture>
            <div className="mt-1.75 space-y-[3.5px]">
                {newsItem.isBreaking && (
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
                <div className="text-foreground-secondary flex flex-wrap items-center gap-[3.5px] text-xs">
                    <a href={"/news?direction=" + newsItem.directions[0].slug} className="">
                        #{newsItem.directions[0].name}
                    </a>
                    <a
                        href={"/news?rubric=" + newsItem.rubrics[0].slug}
                        className="text-foreground-secondary"
                    >
                        #{newsItem.rubrics[0].name}
                    </a>
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
        </article>
    )
}
