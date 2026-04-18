import { NewsWidget } from "./features/news/ui/widget"
import { useNewsWidget } from "./features/news/hooks/useNewsWidget"
import { Header } from "./features/news/header/ui/header"

function App() {
    const companyNews = useNewsWidget({
        category: "company",
        perPage: 3
    })

    const businessNews = useNewsWidget({
        category: "company",
        perPage: 3
    })

    return (
        <div className="bg-accent flex min-h-screen flex-col gap-5.75">
            <Header />
            <div className="w-full sm:px-5.75">
                <div className="app-container mx-auto flex w-full gap-3.5 rounded-t-3xl bg-neutral-200 p-3.5">
                    <aside className="flex w-full max-w-xl min-w-0 flex-col gap-3.5">
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
                    </aside>

                    <main></main>
                </div>
            </div>
        </div>
    )
}

export default App
