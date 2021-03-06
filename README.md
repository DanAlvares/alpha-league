# Alpha League

## Running the app
	$ git clone <REPO_URL>
	$ cd alpha-league
	$ npm i
	$ npm start 

Or you can just [open in Stackblitz](https://stackblitz.com/github/DanAlvares/alpha-league) to view the code.  
[View generated documentation](https://ng-alpha-football.netlify.com/docs/index.html)

## Running the tests  
	$ npm test 
	$ npm run test:coverage 
By default, the Angular CLI sets up Jasmine & Karma as the testing framework. I replaced that with Jest.   
There are 2 commands for running tests, with or without coverage. 28 unit tests (13 test suites) run on commit as they run in under 5 seconds, which I think is acceptable at this scale.   
[View test coverage](https://ng-alpha-football.netlify.com/coverage/lcov-report)   
 

## Why a Framework?
There are always trade-offs. There is of course the risk of being tied to a framework which may or may not be a bad thing, but I feel there are so many components to frontend development these days (security/performance/accessibility/internationalisation etc), a framework can get developers most of the way there. To me, no framework effectively means custom built framework, which would be far more work to maintain, scale, and could be more difficult when on-boarding new developers.

## Why I used Angular?
Although I would be happy with React, Vue... (Or no framework) I chose Angular for this project because I tend to work a little quicker. Overall though, Angular is probably the most opinionated of major JS Frameworks which makes it easier to maintain standards in the codebase and amongst the team. It boilerplates a lot, promoting unit tests, clean architecture and best practices on all components/services etc. and uses TypeScript by default, making it 'that' much harder to introduce bad habits. It also does a great job lazy loading. Angular also has 'Elements'. A feature that can be utilised to create vanilla Web Components from custom pre-built Angular components, then use those web components in any Vue, React, Pure JS app etc.

## CSS
To avoid building out an entire pattern library, I have used pieces of the Bootstrap CSS framework. I have gone for pure CSS as it is too easy to get tied down with a CSS abstraction (eg. SCSS, Less). It is trivial to spin up an Angular user LESS or SCSS but is easier to migrate *to* SCSS than it would be to remove it from a project. With current developments in CSS (and good browser support) it is far more beneficial. For example: CSS Custom Properties (variables) can be updated by JavaScript or in Dev tools, on the fly. 

## Workflow
I have used gitflow workflow process. Creating feature branches and merging to develop once a feature is done. I setup a basic CI/CD process whereby each commit lints staged `.ts` files and runs the whole unit test suite (as mentioned in Running the tests). Merging to master automatically deploys to Netlify. https://ng-alpha-football.netlify.com/
