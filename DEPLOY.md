# Деплой Worker на Cloudflare

## Worker URL
**https://korrekciya-fotografiy-api.krivetkagames.workers.dev**

Эндпоинты: `/`, `/health`, `/api/info`

---

## GitHub Actions — добавление секретов

1. Откройте: **https://github.com/arbttwin3akk-debug/korrekciya-fotografiy/settings/secrets/actions**

2. Нажмите **New repository secret** и добавьте:

   | Имя | Значение |
   |-----|----------|
   | `CLOUDFLARE_API_TOKEN` | Ваш API токен из Cloudflare |
   | `CLOUDFLARE_ACCOUNT_ID` | `abd3a9f30b070ba7b27946ecb6b82945` |

3. API токен: **Cloudflare Dashboard** → **My Profile** → **API Tokens** → **Create Token** (шаблон «Edit Cloudflare Workers»).

---

## ⚠️ Безопасность

Если вы ранее делились API токеном — **отзовите его** в Cloudflare и создайте новый.
