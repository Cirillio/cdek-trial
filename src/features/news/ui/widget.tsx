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

export interface INewsWidgetProps {
    newsData: NewsItem[]
    isLoading: boolean
    error: string | null
    widgetType: "accent" | "standart"
    widgetTitle: string
    minDatePublication: string
    minDateType: "today" | "lastNews"
    onRetry?: () => void
}

export function NewsWidget({
    newsData,
    isLoading,
    error,
    widgetType,
    widgetTitle,
    minDatePublication,
    minDateType = "lastNews",
    onRetry
}: INewsWidgetProps) {
    return (
        <div className="flex h-fit w-full max-w-xl flex-col rounded-2xl bg-white p-3.5 sm:p-5.25">
            <div className="flex flex-col gap-1.75">
                <div>
                    <h2 className="mb-1.75 text-2xl font-semibold">{widgetTitle}</h2>
                    <span className="text-foreground-secondary text-sm font-normal">
                        {minDateType === "today"
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
                    <ul className="sm:space-y-3.5">
                        {[0, 1, 2].map((index) => (
                            <div key={`skeleton-wrapper-${index}`}>
                                <li key={`skeleton-${index}`}>
                                    {widgetType === "standart" && (
                                        <NewsCardStandartSkeleton isFirst={index === 0} />
                                    )}
                                    {widgetType === "accent" && (
                                        <NewsCardAccentSkeleton isFirst={index === 0} />
                                    )}
                                </li>
                                {index !== 2 && (
                                    <Divider
                                        key={`divider-skeleton-${index}`}
                                        className="sm:hidden"
                                    />
                                )}
                            </div>
                        ))}
                    </ul>
                )}

                {!isLoading && error && <NewsErrorPlaceholder error={error} onRetry={onRetry} />}

                {newsData.length > 0 && !isLoading && !error && (
                    <>
                        <ul className="sm:space-y-3.5">
                            {newsData.map((newsItem, index) => (
                                <div key={newsItem.id}>
                                    <li key={newsItem.id}>
                                        {widgetType === "standart" && (
                                            <NewsCardStandart
                                                isFirst={index === 0}
                                                newsItem={newsItem}
                                            />
                                        )}
                                        {widgetType === "accent" && (
                                            <NewsCardAccent
                                                isFirst={index === 0}
                                                newsItem={newsItem}
                                            />
                                        )}
                                    </li>
                                    {index !== newsData.length - 1 && (
                                        <Divider
                                            key={`divider-${newsItem.id}`}
                                            className={widgetType === "standart" ? "sm:hidden" : ""}
                                        />
                                    )}
                                </div>
                            ))}
                        </ul>

                        <NewsWidgetPagination
                            onNext={() => null}
                            onPrev={() => null}
                            canNext={true}
                            canPrev={false}
                            isLoading={false}
                            className="mt-5.25 ml-auto"
                        />
                    </>
                )}
                {newsData.length === 0 && !isLoading && !error && <NewsEmptyPlaceholder />}
            </div>
        </div>
    )
}
