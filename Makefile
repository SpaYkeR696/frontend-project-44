install: 
	npm ci

brain-games:
	npx node bin/brain-games.js

brain-even:
	npx node bin/brain-even.js

brain-calc:
	npx node bin/brain-calc.js

publish:
	npm publish --dry-run

lint:
	npx eslint .