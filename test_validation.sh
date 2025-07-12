# cd submodules/vercel-auth-starter
pnpm install           # or npm install if you prefer
npx prisma db push     # Ensure schema is applied
npx ts-node prisma/seed.ts   # Seed dummy users
pnpm dev               # Launch dev server

open http://localhost:3000

