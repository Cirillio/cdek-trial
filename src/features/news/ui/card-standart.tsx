import { IconEye, IconThumbUp } from "@tabler/icons-react"
import type { INewsCardProps } from "../news.types"

export function NewsCardStandart({ newsItem, isFirst }: INewsCardProps) {
    return (
        <article className="grid grid-cols-[auto_1fr] gap-3.5 max-sm:flex max-sm:flex-col">
            <picture
                className={`bg-secondary flex h-32 w-full items-center justify-center rounded-xl sm:w-46 ${isFirst ? "" : "max-sm:hidden"}`}
            ></picture>
            <div className="flex flex-col gap-3.5">
                <div>
                    <span className="text-foreground-secondary text-base font-normal">
                        {newsItem.publishedAt}
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
                            <span
                                title={"Направление: " + dir.name}
                                className="bg-secondary rounded-lg px-1.75 py-1"
                            >
                                {dir.name}
                            </span>
                        ))}
                        {newsItem.rubrics.map((rubric) => (
                            <span
                                title={"Рубрика: " + rubric.name}
                                className="bg-info-bg text-info rounded-lg px-1.75 py-1"
                            >
                                {rubric.name}
                            </span>
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
