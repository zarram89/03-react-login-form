# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript and enable type-aware lint rules. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.


### Установка TypeScript, Prettier и Airbnb конфига ESLint в уже существующий проект требует нескольких шагов. Вот пошаговая инструкция:

### 1. Установка TypeScript
```bash
npm install --save-dev typescript @types/node
```

Инициализируйте конфиг TypeScript:
```bash
npx tsc --init
```
Это создаст `tsconfig.json`. Настройте его под ваш проект.

### 2. Установка ESLint с Airbnb конфигом
```bash
npm install --save-dev eslint eslint-plugin-import eslint-plugin-react eslint-plugin-react-hooks eslint-plugin-jsx-a11y
```

Установите Airbnb конфиг:
```bash
npx install-peerdeps --dev eslint-config-airbnb
```

Добавьте ESLint конфиг для TypeScript:
```bash
npm install --save-dev @typescript-eslint/parser @typescript-eslint/eslint-plugin
```

Создайте `.eslintrc.json`:
```json
{
  "extends": [
    "airbnb",
    "airbnb/hooks",
    "airbnb-typescript",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended"
  ],
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "project": "./tsconfig.json"
  },
  "plugins": ["@typescript-eslint", "prettier"],
  "rules": {
    "react/react-in-jsx-scope": "off",
    "import/prefer-default-export": "off",
    "prettier/prettier": "error"
  }
}
```

### 3. Установка Prettier
```bash
npm install --save-dev prettier eslint-config-prettier eslint-plugin-prettier
```

Создайте `.prettierrc`:
```json
{
  "singleQuote": true,
  "trailingComma": "all",
  "printWidth": 100,
  "tabWidth": 2,
  "semi": true
}
```

### 4. Настройка package.json
Добавьте скрипты в `package.json`:
```json
"scripts": {
  "lint": "eslint . --ext .ts,.tsx,.js,.jsx",
  "lint:fix": "eslint . --ext .ts,.tsx,.js,.jsx --fix",
  "format": "prettier --write ."
}
```

### 5. Дополнительная настройка (опционально)
- Создайте `.eslintignore` и `.prettierignore` для исключения файлов:
  ```
  node_modules
  dist
  build
  ```

### 6. Проверка работы
Запустите линтинг:
```bash
npm run lint
```

Запустите форматирование:
```bash
npm run format
```

### Важные заметки:
1. Убедитесь, что все файлы имеют правильные расширения (`.ts`/`.tsx` для TypeScript).
2. Если у вас React, установите соответствующие типы:
   ```bash
   npm install --save-dev @types/react @types/react-dom
   ```
3. При конфликтах правил между Airbnb и Prettier - настройте их вручную в `.eslintrc.json`.

Этот набор настроек обеспечит:
- Проверку кода по стандартам Airbnb
- Поддержку TypeScript
- Автоматическое форматирование через Prettier
- Совместимость всех инструментов между собой


###


	// function getGenderByName() {
	// 	const serverUrl = 'https://api.genderize.io';
	// 	const url = `${serverUrl}?name=${name}`
	// 	fetch(url)
	// 		.then(response => {
	// 			if (response.status === 404) {
	// 				throw new Error('Запись не найдена');
	// 			}
	// 			return response.json();
	// 		})
	// 		.then(data => alert(`${name} is ${data.gender}`))
	// }
