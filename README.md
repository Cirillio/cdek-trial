# CDEK Trial

Тестовое задание на стажировку в СДЭК frontend React.

## Технологический стек

- **Core:** [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- **Build Tool:** [Vite](https://vitejs.dev/)
- **Стилизация:** [Tailwind CSS v4](https://tailwindcss.com/)
- **Иконки:** [@tabler/icons-react](https://tabler.io/icons)
- **Фетчинг:** [@tanstack/react-query](https://tanstack.com/query)
- **Пакетный менеджер:** [Bun](https://bun.sh/)
- **Линтинг и форматирование:** ESLint + Prettier

## Запуск проекта

Убедитесь, что у вас установлен [Bun](https://bun.sh/).

1. **Установка зависимостей:**

    ```bash
    bun install
    ```

2. **Запуск сервера разработки:**

    ```bash
    bun run dev

    bun run dev --host
    ```

    Проект будет доступен по адресу, указанному в терминале (обычно `http://localhost:5173`). Если проект запущен с флагом --host, то будет доступен внутри сети по адресу устройства (например, 192.168.0.11) с портом 5173.

3. **Сборка для production:**

    ```bash
    bun run build
    ```

4. **Предпросмотр production-сборки:**

    ```bash
    bun run preview
    ```

5. **Запуск линтера:**

    ```bash
    bun run lint
    ```
