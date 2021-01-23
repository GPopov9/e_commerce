start-webpack:
	webpack serv --mode development --hot

build-webpack:
	webpack --mode production

lint:
	npx eslint . --ext js,jsx