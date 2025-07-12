#!/bin/bash

echo "🚀 Setting up your Vercel Auth Starter environment..."

# cd "$(dirname "$0")/submodules/vercel-auth-starter" || exit 1

# Check for .env file
if [ ! -f ".env" ]; then
    echo "📄 Copying .env.example to .env"
    cp .env.example .env
else
    echo "✅ .env file already exists"
fi

# Install dependencies using pnpm (fallback to npm if not installed)
if command -v pnpm &> /dev/null; then
    echo "📦 Installing dependencies with pnpm..."
    pnpm install
else
    echo "⚠️ pnpm not found, using npm instead..."
    npm install
fi

# Optional: Run Prisma migrate (commented out for safety)
# echo '🧱 Running Prisma migrate...'
# npx prisma migrate dev --name init

echo "✅ Setup complete. You can now run:"
echo ""
echo "cd submodules/vercel-auth-starter"
echo "pnpm dev  # or npm run dev"
