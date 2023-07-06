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

*Angular 规范说明：*

- *feat*：新功能
- *fix*：修补 BUG
- *docs*：修改文档，比如 README, CHANGELOG, CONTRIBUTE 等等
- *style*：不改变代码逻辑 (仅仅修改了空格、格式缩进、逗号等等)
- *refactor*：重构（既不修复错误也不添加功能）
- *perf*：优化相关，比如提升性能、体验
- *test*：增加测试，包括单元测试、集成测试等
- *build*：构建系统或外部依赖项的更改
- *ci*：自动化流程配置或脚本修改
- *chore*：非 src 和 test 的修改，发布版本等
- *revert*：恢复先前的提交

## Jest

测试模块

```
// 安装jest、类型声明文件、以及相关依赖
npm i jest @types/jest ts-node@9.1.1 ts-jest -D
// 初始化配置文件
npx jest --init
```

修改jest.config.ts文件

```
 preset: 'ts-jest'
```

## Github Actions
