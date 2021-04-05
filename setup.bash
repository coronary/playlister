#1/usr/bin/env bash

search="\&\& exit 1\""
scripts="$search,\n\"build:css\": \"npx postcss global.css -o .\/src\/local.css\",\n\"start\": \"npx browser-sync src\/ -w\""
postcss="module.exports={\n\tplugins: [\n\t\trequire('tailwindcss')\n\t]\n}"
tailwind="@tailwind base;\n@tailwind components;\n@tailwind utiltities"

npm init -y
sed  -i "s/$search/$scripts/"  package.json
npm i tailwindcss postcss-cli
npm i browser-sync --save-dev
npx tailwindcss init
echo $postcss > postcss.config.js
echo $tailwind > global.css
npm run build:css
touch ./src/index.html
npm start
