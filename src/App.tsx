import { NewsWidget } from "./features/news/ui/widget"
import { useNewsWidget } from "./features/news/hooks/useNewsWidget"
import { Header } from "./features/news/header/ui/header"
import { Skeleton } from "./components/skeleton"
import { Card } from "./components/card"
import { IconChevronDown } from "@tabler/icons-react"

function App() {
    const companyNews = useNewsWidget({
        category: "company",
        perPage: 3,
        queryKey: ["companyNews"]
    })

    const businessNews = useNewsWidget({
        category: "company",
        perPage: 3,
        queryKey: ["businessNews"]
    })

    const emptyNews = useNewsWidget({
        category: "company",
        perPage: 3,
        endpoint: "empty",
        queryKey: ["emptyNews"]
    })
    return (
        <div className="bg-accent flex min-h-screen flex-col gap-5.75">
            <Header />
            <div className="w-full sm:px-5.75">
                <div className="app-container mx-auto flex w-full gap-3.5 rounded-t-3xl bg-neutral-200 p-3.5 max-lg:flex-col">
                    <aside className="flex w-full max-w-xl min-w-0 flex-col gap-3.5 max-lg:mx-auto">
                        <section>
                            <Card className="shadow-primary/10 flex items-center gap-3.5 shadow-xl">
                                <div className="to-primary from-primary/25 flex items-center justify-center rounded-full bg-linear-to-br p-3.5">
                                    <span className="text-xl font-semibold text-white">БК</span>
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-foreground-secondary text-base leading-tight font-light">
                                        Добро пожаловать,
                                    </span>
                                    <span className="text-xl leading-tight font-medium">
                                        ООО "Кириллио"
                                    </span>
                                </div>
                                <button
                                    type="button"
                                    className="text-foreground-secondary hover:text-primary hover:bg-secondary/25 active:bg-secondary/35 ml-auto rounded-full p-1.75 transition"
                                >
                                    <IconChevronDown size="24" />
                                </button>
                            </Card>
                        </section>
                        <section>
                            <NewsWidget
                                widgetType="standart"
                                widgetTitle="Новости компании"
                                minDateType="lastNews"
                                minDatePublication={
                                    companyNews.data?.minDatePublication || new Date().toISOString()
                                }
                                newsData={companyNews.data?.news || []}
                                isLoading={companyNews.isLoading}
                                error={companyNews.error}
                                onRetry={companyNews.retry}
                                onNext={companyNews.goNext}
                                onPrev={companyNews.goPrev}
                                canNext={companyNews.canNext}
                                canPrev={companyNews.canPrev}
                            />
                        </section>
                        <section>
                            <NewsWidget
                                widgetType="accent"
                                widgetTitle="Бизнес"
                                minDateType="lastNews"
                                minDatePublication={
                                    businessNews.data?.minDatePublication ||
                                    new Date().toISOString()
                                }
                                newsData={businessNews.data?.news || []}
                                isLoading={businessNews.isLoading}
                                error={businessNews.error}
                                onRetry={businessNews.retry}
                                onNext={businessNews.goNext}
                                onPrev={businessNews.goPrev}
                                canNext={businessNews.canNext}
                                canPrev={businessNews.canPrev}
                            />
                        </section>
                        <section>
                            <NewsWidget
                                widgetType="standart"
                                widgetTitle="Последние новости"
                                minDateType="lastDate"
                                minDatePublication={
                                    emptyNews.data?.minDatePublication || new Date().toISOString()
                                }
                                newsData={emptyNews.data?.news || []}
                                isLoading={emptyNews.isLoading}
                                error={emptyNews.error}
                                onRetry={emptyNews.retry}
                                onNext={emptyNews.goNext}
                                onPrev={emptyNews.goPrev}
                                canNext={emptyNews.canNext}
                                canPrev={emptyNews.canPrev}
                            />
                        </section>
                    </aside>

                    <main className="flex w-full flex-col gap-3.5 max-lg:mx-auto sm:max-w-xl lg:max-w-full">
                        <section className="grid grid-cols-2 gap-3.5 md:grid-cols-4">
                            <Skeleton className="w-ful h-40 rounded-xl bg-white" />
                            <Skeleton className="w-ful h-40 rounded-xl bg-white" />
                            <Skeleton className="w-ful h-40 rounded-xl bg-white" />
                            <Skeleton className="w-ful h-40 rounded-xl bg-white" />
                        </section>
                        <section>
                            <Skeleton className="h-60 w-full rounded-xl bg-white" />
                        </section>
                        <section className="flex gap-3.5 max-sm:flex-col">
                            <Skeleton className="h-72 w-full rounded-xl bg-white" />
                            <Skeleton className="h-72 w-full rounded-xl bg-white" />
                        </section>
                    </main>
                </div>
            </div>
        </div>
    )
}

export default App
