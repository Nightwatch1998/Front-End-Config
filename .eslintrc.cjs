module.exports = {
    "env": {
        "browser": true, // 浏览器环境
        "es2021": true, // esm版本
        "node": true // node 环境
    },
    // 预定义配置和代码风格，standard及其扩展包
    "extends": ["standard","eslint-config-standard-with-typescript", "prettier"],
    // typescript的eslint解析器
    "parser": "@typescript-eslint/parser",
    // 针对eslint的配置文件使用node环境
    "overrides": [
        {
            "env": {
                "node": true
            },
            "files": [
                ".eslintrc.{js,cjs}"
            ],
            "parserOptions": {
                "sourceType": "script"
            }
        }
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module",
        "project": "./tsconfig.json" // 项目配置文件路径
    },
    "rules": {
        'prettier/prettier': 'error'
    },
    "plugins": ["@typescript-eslint","prettier"]
}
