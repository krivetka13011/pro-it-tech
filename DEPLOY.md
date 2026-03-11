# Деплой Pro IT Tech

## Ссылки

| Сервис | URL |
|--------|-----|
| **Сайт (Cloudflare Pages)** | https://pro-it-tech.pages.dev |
| **API (Worker)** | https://pro-it-tech-api.krivetkagames.workers.dev |

Эндпоинты API: `/`, `/health`, `/api/info`

---

## GitHub Actions — секреты

1. Откройте: **https://github.com/YOUR_USERNAME/pro-it-tech/settings/secrets/actions**  
   (замените `YOUR_USERNAME` на ваш GitHub)

2. Добавьте секреты:

   | Имя | Значение |
   |-----|----------|
   | `CLOUDFLARE_API_TOKEN` | API токен из Cloudflare |
   | `CLOUDFLARE_ACCOUNT_ID` | `abd3a9f30b070ba7b27946ecb6b82945` |

3. API токен: **Cloudflare Dashboard** → **My Profile** → **API Tokens** → **Create Token** (шаблон «Edit Cloudflare Workers»).

---

## Ручной деплой

```bash
# Worker (при сетевых ошибках в CI — выполните локально)
cd worker && npx wrangler deploy

# Pages (из корня)
npx wrangler pages deploy . --project-name=pro-it-tech
```

> **Примечание:** Worker `pro-it-tech-api` создаётся при первом деплое. Если ссылка API возвращает 404 — выполните `npx wrangler deploy` в папке `worker`.
