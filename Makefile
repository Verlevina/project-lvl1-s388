
install:
	npm install

start:
	npx babel-node -- src/bin/brain-games.js

publish:
	npm publish

lint:
	npx eslint .

game-even:
	npx babel-node -- src/bin/brain-even.js