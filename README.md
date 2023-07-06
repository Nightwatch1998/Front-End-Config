# 这是一个前端工程化的配置项目

使用前先禁用vscode中的eslint等相关插件

问题npm run lint会有一些奇怪的错误



## TypeScript

```
npm i typescript -D
npx tsc --init
```

## Eslint

```
npm i eslint -D
npx eslint --init
npm i eslint-config-standard-with-typescript -D
```

## Prettier

注意版本兼容问题

```
npm i prettier -D
echo {}> .prettierrc.json
npm i eslint-config-prettier^8.8.0 eslint-plugin-prettier^5.0.0-alpha.1 -D
```

## Husky

在git提交前后自动执行一些脚本，例如代码检查

```
npm i husky -D
npx husky install
// 添加钩子 类unix
npx husky add .husky/pre-commit "npm run lint" 
// windows系统
node node_modules/husky/lib/bin add .husky/pre-commit "npm run lint"
```



## Commitlint

便于在changelog文件中提取commit信息，因此需要commit规范

```
// 安装命令行工具和基于Angular的约定规定
npm i @commitlint/config-conventional @commitlint/cli -D
// 将commitlint添加到钩子
npx husky add .husky/commit-msg 'npx --no-install commitlint --edit "$1"'
// windows注意使用双引号
node node_modules/husky/lib/bin add .husky/commit-msg "npx --no-install commitlint --edit \"$1\""
```



## Jest

## Github Actions
