install:
	npm ci

link update:
	sudo npm link

brain-games:
	node bin/brain-games.js

publish:
	npm publish --dry-run

lint:
	npx eslint .

test:
	npx jest .

test-coverage:
	npx jest -- --coverage --coverageProiveder=v8 .
