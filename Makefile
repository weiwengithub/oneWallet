# OneWallet Makefile - 简化 Docker 操作
# 使用 pnpm 作为包管理器

.PHONY: help build up down restart logs clean shell ps rebuild

# 默认目标
help:
@echo "OneWallet Docker 管理命令 (使用 pnpm)"
@echo ""
@echo "使用方法:"
@echo "  make <target>"
@echo ""
@echo "可用目标:"
@echo "  help       - 显示此帮助信息"
@echo "  build      - 构建生产环境镜像"
@echo "  up         - 启动生产环境容器"
@echo "  down       - 停止并删除容器"
@echo "  restart    - 重启容器"
@echo "  logs       - 查看容器日志"
@echo "  shell      - 进入容器 shell"
@echo "  clean      - 清理所有容器、镜像和缓存"
@echo "  ps         - 查看运行状态"
@echo "  rebuild    - 清理并重新构建"

# 构建生产环境镜像
build:
@echo "正在构建生产环境镜像 (使用 pnpm)..."
docker-compose build --no-cache

# 启动生产环境
up:
@echo "启动生产环境容器..."
docker-compose up -d
@echo "容器已启动，访问 http://localhost:3000"

# 停止容器
down:
@echo "停止容器..."
docker-compose down

# 重启容器
restart:
@echo "重启容器..."
docker-compose restart

# 查看日志
logs:
docker-compose logs -f

# 进入容器
shell:
docker exec -it onewallet sh

# 查看运行状态
ps:
docker-compose ps

# 清理所有
clean:
@echo "清理容器、镜像和缓存..."
docker-compose down -v
docker rmi onewallet:latest 2>/dev/null || true
docker system prune -f
@echo "清理完成"

# 重新构建
rebuild: clean build up
@echo "重新构建完成！"
