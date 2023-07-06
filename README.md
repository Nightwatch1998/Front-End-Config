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
// 添加钩子
npx husky add .husky/pre-commit "npm run lint" 
// windows系统
node node_modules/husky/lib/bin add .husky/pre-commit "npm run lint"
```



## Commitlint

## Jest

## Github Actions
