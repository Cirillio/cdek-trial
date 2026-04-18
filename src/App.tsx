import { NewsWidget } from "./features/news/ui/widget"
import { MOCK_NEWS } from "./mock"

function App() {
    const MOCK_ERROR = "Не удалось установить соединение с сервером"

    return (
        <div className="flex min-h-screen flex-col items-center justify-center gap-3.5 bg-zinc-100 p-3.5">
            <NewsWidget
                widgetType="standart"
                widgetTitle="Новости компании"
                minDateType="lastNews"
                minDatePublication={MOCK_NEWS[0].publishedAt}
                newsData={MOCK_NEWS}
                isLoading={false}
                error={null}
            />
            <NewsWidget
                widgetType="accent"
                widgetTitle="Бизнес"
                minDateType="lastNews"
                minDatePublication={MOCK_NEWS[0].publishedAt}
                newsData={MOCK_NEWS}
                isLoading={false}
                error={null}
            />
            <NewsWidget
                widgetType="standart"
                widgetTitle="Новости компании"
                minDateType="lastNews"
                minDatePublication={MOCK_NEWS[0].publishedAt}
                newsData={MOCK_NEWS}
                isLoading={true}
                error={null}
            />
            <NewsWidget
                widgetType="accent"
                widgetTitle="Бизнес"
                minDateType="lastNews"
                minDatePublication={MOCK_NEWS[0].publishedAt}
                newsData={MOCK_NEWS}
                isLoading={true}
                error={null}
            />
            <NewsWidget
                widgetType="standart"
                widgetTitle="Последние новости"
                minDateType={MOCK_ERROR ? "today" : "lastNews"}
                minDatePublication={MOCK_NEWS[0].publishedAt}
                onRetry={() => console.log("Retry clicked!")}
                newsData={[]}
                isLoading={false}
                error={MOCK_ERROR}
            />
            <NewsWidget
                widgetType="accent"
                widgetTitle="Важные новости"
                minDateType="today"
                minDatePublication={MOCK_NEWS[0].publishedAt}
                newsData={[]}
                isLoading={false}
                error={null}
            />
        </div>
    )
}

export default App
