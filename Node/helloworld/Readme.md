# node 初期設定

ファイル上で npm init
node の型/ts-node が js に変換しなくても実行できるコマンド
→ npm install --save-dev @types/node typescript ts-node
ts の設定ファイル
→ npx tsc --init
tsconfig.json 52 行目
outDir のコメントアウト解除、./dist 追加
→ 同じ階層に js ファイルを作らない（邪魔なため）

index.ts 作成

```ts
"tsc": "./node_modules/.bin/tsc",
"ts-node": "./node_modules/.bin/ts-node",
```

tsc:ts から js にコンパイル
ts-node：実行環境
dev:ts ファイルの実行
"start": "node ./dist/index.js"
↑dist の中の js ファイル起動
"watch": "tsc --watch"：自動コンパイル
