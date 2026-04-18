import { Fragment } from "react"
import type { NewsItem } from "../news.types"
import { Divider } from "../../../components/divider"
import { NewsWidgetPagination } from "./widget-pagination"
import { NewsCardStandart } from "./card-standart"
import { NewsCardAccent } from "./card-accent"
import { NewsEmptyPlaceholder } from "./empty-placeholder"
import { NewsErrorPlaceholder } from "./error-placeholder"
import { formatIsoDate } from "../../../lib/DateFormatter"
import { NewsCardAccentSkeleton } from "./accent-skeleton"
import { NewsCardStandartSkeleton } from "./standart-skeleton"
import { Card } from "../../../components/card"

export interface INewsWidgetProps {
    newsData: NewsItem[]
    isLoading: boolean
    error: string | null
    widgetType: "accent" | "standart"
    widgetTitle: string
    minDatePublication: string
    minDateType: "lastDate" | "lastNews"
    onRetry?: () => void
    onNext?: () => void
    onPrev?: () => void
    canNext?: boolean
    canPrev?: boolean
}

export function NewsWidget({
    newsData,
    isLoading,
    error,
    widgetType,
    widgetTitle,
    minDatePublication,
    minDateType = "lastNews",
    onRetry,
    onNext,
    onPrev,
    canNext,
    canPrev
}: INewsWidgetProps) {
    return (
        <Card className="flex w-full min-w-0 flex-col">
            <div className="flex flex-col gap-1.75">
                <div>
                    <h2 className="mb-1.75 text-2xl font-semibold">{widgetTitle}</h2>
                    <span className="text-foreground-secondary text-sm font-normal">
                        {minDateType === "lastDate"
                            ? formatIsoDate({
                                  isoString: minDatePublication,
                                  locale: "ru-RU",
                                  options: { timeZone: "UTC", formatMode: "weekdayDate" }
                              })
                            : formatIsoDate({
                                  isoString: minDatePublication,
                                  locale: "ru-RU",
                                  options: { timeZone: "UTC", formatMode: "monthYear" }
                              })}
                    </span>

                    <Divider />
                </div>

                {isLoading && (
                    <>
                        <ul className="sm:space-y-3.5">
                            {[0, 1, 2].map((index) => (
                                <Fragment key={`skeleton-wrapper-${index}`}>
                                    <li>
                                        {widgetType === "standart" ? (
                                            <NewsCardStandartSkeleton isFirst={index === 0} />
                                        ) : (
                                            <NewsCardAccentSkeleton isFirst={index === 0} />
                                        )}
                                    </li>
                                    {index !== 2 && (
                                        <Divider
                                            className={widgetType === "standart" ? "sm:hidden" : ""}
                                        />
                                    )}
                                </Fragment>
                            ))}
                        </ul>
                        <NewsWidgetPagination
                            onNext={onNext}
                            onPrev={onPrev}
                            canNext={canNext}
                            canPrev={canPrev}
                            isLoading={isLoading}
                            className="mt-5.25 ml-auto"
                        />
                    </>
                )}

                {!isLoading && error && <NewsErrorPlaceholder error={error} onRetry={onRetry} />}

                {newsData.length > 0 && !isLoading && !error && (
                    <>
                        <ul className="sm:space-y-3.5">
                            {newsData.map((newsItem, index) => (
                                <Fragment key={newsItem.id}>
                                    <li
                                        style={{ animationDelay: `${index * 35}ms` }}
                                        className="animate-fade-in"
                                    >
                                        {widgetType === "standart" ? (
                                            <NewsCardStandart
                                                isFirst={index === 0}
                                                newsItem={newsItem}
                                            />
                                        ) : (
                                            <NewsCardAccent
                                                isFirst={index === 0}
                                                newsItem={newsItem}
                                            />
                                        )}
                                    </li>
                                    {index !== newsData.length - 1 && (
                                        <Divider
                                            className={widgetType === "standart" ? "sm:hidden" : ""}
                                        />
                                    )}
                                </Fragment>
                            ))}
                        </ul>

                        <NewsWidgetPagination
                            onNext={onNext}
                            onPrev={onPrev}
                            canNext={canNext}
                            canPrev={canPrev}
                            isLoading={isLoading}
                            className="mt-5.25 ml-auto"
                        />
                    </>
                )}
                {newsData.length === 0 && !isLoading && !error && <NewsEmptyPlaceholder />}
            </div>
        </Card>
    )
}
