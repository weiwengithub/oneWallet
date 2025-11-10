# OneWallet - Docker 生产环境部署

> 💡 **注意**: 本项目使用 **pnpm** 作为包管理器进行构建和部署。

## 🚀 快速部署

### 方法 1: 一键部署脚本（推荐）

```bash
# 1. 进入项目目录
cd oneWallet

# 2. 运行部署脚本
./deploy.sh prod

# 3. 访问应用
# http://localhost:3000
```

### 方法 2: 使用 Makefile

```bash
# 构建镜像
make build

# 启动服务
make up

# 查看日志
make logs

# 查看所有命令
make help
```

### 方法 3: 使用 Docker Compose

```bash
# 启动
docker-compose up -d

# 停止
docker-compose down

# 查看日志
docker-compose logs -f

# 重启
docker-compose restart
```

## 📋 环境配置

```bash
# 复制环境变量文件（可选）
cp .env.example .env

# 编辑配置
nano .env
```

主要配置项：
```env
NODE_ENV=production
PORT=3000
HOSTNAME=0.0.0.0
NEXT_TELEMETRY_DISABLED=1
```

## 🛠️ 常用命令

### Makefile 命令
```bash
make build       # 构建镜像
make up          # 启动服务
make down        # 停止服务
make restart     # 重启服务
make logs        # 查看日志
make shell       # 进入容器
make clean       # 清理所有
make rebuild     # 重新构建
```

### Docker Compose 命令
```bash
docker-compose up -d              # 启动
docker-compose down               # 停止
docker-compose logs -f            # 查看日志
docker-compose ps                 # 查看状态
docker-compose restart            # 重启
docker-compose build --no-cache   # 重新构建
```

## 🔍 故障排查

### 端口被占用
```bash
# 修改 docker-compose.yml 中的端口
ports:
  - "3001:3000"  # 改为其他端口
```

### 查看日志
```bash
make logs
# 或
docker-compose logs -f onewallet
```

### 重新构建
```bash
make rebuild
# 或
docker-compose down
docker-compose build --no-cache
docker-compose up -d
```

### 进入容器
```bash
make shell
# 或
docker exec -it onewallet sh
```

## 📁 保留的文件

```
oneWallet/
├── Dockerfile              # 生产环境镜像
├── docker-compose.yml      # Docker Compose 配置
├── .dockerignore           # Docker 忽略文件
├── .env.example            # 环境变量示例
├── Makefile                # 命令简化工具
├── deploy.sh               # 一键部署脚本
└── DOCKER_DEPLOY.md        # 本文档
```

## 🎯 部署流程

1. **准备环境**
   ```bash
   # 确保已安装 Docker 和 Docker Compose
   docker --version
   docker-compose --version
   ```

2. **配置环境变量**（可选）
   ```bash
   cp .env.example .env
   # 根据需要修改 .env
   ```

3. **部署**
   ```bash
   # 使用脚本（最简单）
   ./deploy.sh prod

   # 或使用 Makefile
   make build && make up

   # 或使用 Docker Compose
   docker-compose up -d
   ```

4. **验证**
   ```bash
   # 查看容器状态
   docker ps | grep onewallet

   # 查看日志
   docker-compose logs -f

   # 访问应用
   curl http://localhost:3000
   ```

## 🔄 更新部署

```bash
# 1. 拉取最新代码
git pull

# 2. 重新构建并部署
make rebuild
# 或
./deploy.sh prod
# 或
docker-compose down && docker-compose build --no-cache && docker-compose up -d
```

## 📊 监控

### 健康检查
```bash
docker inspect --format='{{json .State.Health}}' onewallet | jq
```

### 资源使用
```bash
docker stats onewallet
```

### 查看日志
```bash
# 实时日志
docker-compose logs -f

# 最近100行
docker-compose logs --tail=100
```

## 🆘 获取帮助

如遇到问题：
1. 查看日志: `make logs` 或 `docker-compose logs -f`
2. 检查容器状态: `docker ps`
3. 查看 GitHub Issues

## 📚 相关文档

- SEO优化说明: `.same/SEO-OPTIMIZATION.md`
- 项目任务列表: `.same/todos.md`

---

**快速提醒**:
- 默认端口: `3000`
- 默认访问: `http://localhost:3000`
- 一键部署: `./deploy.sh prod`
- 查看日志: `make logs`
