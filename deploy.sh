# !/bin/bash

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run docs:build

# 进入生成的文件夹
cd docs/.vuepress/dist

# 如果是发布到自定义域名
# echo 'www.example.com' > CNAME

# 配置ssh
if [ -n "${ACCESS_TOKEN_DEPLOY}" ]; then
    echo "设置 ACCESS_TOKEN_DEPLOY"
    SSH_DIR="${HOME}/.ssh"
    # SSH_DIR="/root/.ssh"
    mkdir "${SSH_DIR}"
    ssh-keyscan -t rsa github.com >"${SSH_DIR}/known_hosts"
    echo "${ACCESS_TOKEN_DEPLOY}" >"${SSH_DIR}/id_rsa"
    chmod 400 "${SSH_DIR}/id_rsa"
    remote_repo="git@github.com:${PUBLISH_REPOSITORY}.git"
fi

# 跳过配置personal_token 和 github_token
remote_branch="${PUBLISH_BRANCH}"

git init
git checkout --orphan "${remote_branch}" # 积累无数次commit，不算分支

git config user.name "${GITHUB_ACTOR}"
git config user.email "${GITHUB_ACTOR}@users.noreply.github.com"


git remote rm origin || true
git remote add origin "${remote_repo}"

git add -A
git commit -m 'deploy'

# 如果发布到 https://<USERNAME>.github.io/<REPO>

git push origin -f "${PUBLISH_BRANCH}"

cd -
