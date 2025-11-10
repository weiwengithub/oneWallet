# 多阶段构建 - 构建阶段
FROM node:20-alpine AS builder

WORKDIR /app

# 安装 pnpm
RUN corepack enable && corepack prepare pnpm@latest --activate

# 复制package文件
COPY package.json pnpm-lock.yaml* ./

# 安装依赖
RUN pnpm install --frozen-lockfile

# 复制源代码
COPY . .

# 设置环境变量
ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

# 构建应用
RUN pnpm run build

# 生产阶段
FROM node:20-alpine AS runner

WORKDIR /app

# 设置非root用户
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

# 复制必要文件
COPY --from=builder /app/public ./public
COPY --from=builder /app/package.json ./package.json

# 自动设置权限并复制.next目录
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

RUN mkdir -p /app/logs && chown -R nextjs:nodejs /app/logs

# 设置用户
USER nextjs

# 暴露端口
EXPOSE 3121

ENV PORT=3121
ENV HOSTNAME="0.0.0.0"
ENV NODE_ENV=production

# 启动应用
#CMD ["node", "server.js"]
CMD ["sh", "-c", "node server.js 2>&1 | tee -a /app/logs/one-wallet-home-page.log"]