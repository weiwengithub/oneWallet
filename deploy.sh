#!/bin/bash

# OneWallet 一键部署脚本
# 使用方法: ./deploy.sh [dev|prod]

set -e

# 颜色输出
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# 打印信息
print_info() {
    echo -e "${GREEN}[INFO]${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

print_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

# 检查 Docker 是否安装
check_docker() {
    if ! command -v docker &> /dev/null; then
        print_error "Docker 未安装，请先安装 Docker"
        exit 1
    fi

    if ! command -v docker-compose &> /dev/null; then
        print_error "Docker Compose 未安装，请先安装 Docker Compose"
        exit 1
    fi

    print_info "Docker 版本: $(docker --version)"
    print_info "Docker Compose 版本: $(docker-compose --version)"
}

# 创建必要的目录
create_directories() {
    print_info "创建必要的目录..."
    # 不再需要 nginx 目录
    return 0
}

# 部署开发环境
deploy_dev() {
    print_info "部署开发环境..."
    docker-compose -f docker-compose.dev.yml down
    docker-compose -f docker-compose.dev.yml build
    docker-compose -f docker-compose.dev.yml up -d
    print_info "开发环境部署完成！"
    print_info "访问地址: http://localhost:3000"
}

# 部署生产环境
deploy_prod() {
    print_info "部署生产环境..."

    # 检查环境变量文件
    if [ ! -f .env ]; then
        print_warning ".env 文件不存在，从示例文件复制..."
        if [ -f .env.example ]; then
            cp .env.example .env
            print_warning "请编辑 .env 文件配置环境变量"
        fi
    fi

    # 构建并启动
    docker-compose down
    docker-compose build --no-cache
    docker-compose up -d

    print_info "生产环境部署完成！"
    print_info "访问地址: http://localhost:3000"

    # 显示日志
    print_info "查看日志: docker-compose logs -f"
}

# 主函数
main() {
    print_info "OneWallet Docker 部署脚本"
    print_info "=========================="

    # 检查 Docker
    check_docker

    # 创建目录
    create_directories

    # 根据参数选择部署模式
    MODE=${1:-prod}

    case $MODE in
        dev)
            deploy_dev
            ;;
        prod)
            deploy_prod
            ;;
        *)
            print_error "无效的模式: $MODE"
            echo "使用方法: ./deploy.sh [dev|prod]"
            exit 1
            ;;
    esac

    print_info "部署完成！"
    print_info ""
    print_info "常用命令:"
    print_info "  查看日志:    docker-compose logs -f"
    print_info "  停止服务:    docker-compose down"
    print_info "  重启服务:    docker-compose restart"
    print_info "  查看状态:    docker-compose ps"
}

# 执行主函数
main "$@"
