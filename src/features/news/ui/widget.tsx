import type { NewsItem } from "../news.types"
import { Divider } from "../../../components/divider"
import { NewsWidgetPagination } from "./widget-pagination"
import { NewsCardStandart } from "./card-standart"
import { NewsCardAccent } from "./card-accent"

export interface INewsWidgetProps {
    newsData: NewsItem[]
    isLoading: boolean
    error: string | null
    widgetType: "accent" | "standart"
    widgetTitle: string
    minDatePublication: string
}

export function NewsWidget({
    newsData,
    isLoading,
    error,
    widgetType,
    widgetTitle,
    minDatePublication
}: INewsWidgetProps) {
    return (
        <div className="flex h-fit w-full max-w-xl flex-col rounded-2xl bg-white p-3.5 sm:p-5.25">
            <div className="flex flex-col gap-1.75">
                <div>
                    <h2 className="mb-1.75 text-2xl font-semibold">{widgetTitle}</h2>
                    <span className="text-foreground-secondary text-sm font-normal">
                        {minDatePublication}
                    </span>

                    <Divider />
                </div>

                <ul className="sm:space-y-3.5">
                    {newsData.map((newsItem, index) => (
                        <>
                            <li key={newsItem.id}>
                                {widgetType === "standart" && (
                                    <NewsCardStandart isFirst={index === 0} newsItem={newsItem} />
                                )}
                                {widgetType === "accent" && (
                                    <NewsCardAccent isFirst={index === 0} newsItem={newsItem} />
                                )}
                            </li>
                            {index !== newsData.length - 1 && (
                                <Divider key={`divider-${newsItem.id}`} className="sm:hidden" />
                            )}
                        </>
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
            </div>
        </div>
    )
}
