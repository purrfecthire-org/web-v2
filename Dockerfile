FROM node:22-slim

WORKDIR /app

RUN corepack enable

COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./
RUN pnpm install --frozen-lockfile

COPY . .

# Matches the port already used by .claude/launch.json's "purrfectHireV2" config.
EXPOSE 4325

CMD ["pnpm", "dev", "--host", "0.0.0.0", "--port", "4325"]
