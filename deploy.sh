# !/bin/bash

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run docs:build

# 进入生成的文件夹
cd docs/.vuepress/dist

# 如果是发布到自定义域名
# echo 'www.example.com' > CNAME

git init

git config user.name "${GITHUB_ACTOR}"
git config user.email "${GITHUB_ACTOR}@users.noreply.github.com"


git remote rm origin || true
git remote add origin "${remote_repo}"

git add -A
git commit -m 'deploy'

# 如果发布到 https://<USERNAME>.github.io/<REPO>

git push origin -f "${PUBLISH_BRANCH}"

cd -
