import { NewsWidget } from "./features/news/ui/widget"
import { MOCK_NEWS } from "./mock"

function App() {
    return (
        <div className="flex min-h-screen flex-col items-center justify-center gap-3.5 bg-zinc-100 p-3.5">
            <NewsWidget
                newsData={MOCK_NEWS}
                isLoading={false}
                error={null}
                widgetType="standart"
                widgetTitle="Новости компании"
                minDatePublication="2025-01-31T08:03:00Z"
            />
            <NewsWidget
                newsData={MOCK_NEWS}
                isLoading={false}
                error={null}
                widgetType="accent"
                widgetTitle="Новости компании"
                minDatePublication="2025-01-31T08:03:00Z"
            />
        </div>
    )
}

export default App
