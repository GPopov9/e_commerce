start-webpack:
	webpack serve --mode development --hot

build-webpack:
	webpack --mode production

lint:
	npx eslint . --ext js,jsx