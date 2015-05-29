# ToDo
* __done.__ Boom
* __done.__ Lout
* refactor tests (spec files)
    - __done.__ split up index_spec in to multiple smaller files
    - DRY up bdd vars (declarations repeated in each file)
* coding style review (consistency)
* __done.__ update / restructure readme
* __done.__ add .gitkeep to needed folders
* add install section
    - update / remove database section 
* Test Coverage to 100%
* Review 
    - https://medium.com/the-spumko-suite/creating-validation-schemas-with-joi-eb4ff19f6688
    - https://medium.com/the-spumko-suite/testing-hapi-services-with-lab-96ac463c490a  (better test coverage?)

# hapi-starting-point
This project is a simple node application, created as practice to gain experience with hapi, and to be used as a reference or starting point for creating simple node hapi projects.

The application addresses some basic needs of simple projects. It contains a light sample UI, API, and database connectivity, along with a collection of useful supporting packages. [features/packages listed below]

The application is based on several popular existing boilerplates, and various tutorials. [references listed below]

Borrowed from each (and personal learning goals) were: hapi fundamentals, project folder structure & code organization, best practices & style, and components & functionality of basic robust web servers.

Instead of forking or copy/pasting any of the source, this project was coded (along) from scratch to gain understanding of each piece individually.

Any feedback welcome.
<br>
## References
Most reference material was found simply through online search. Hapi, however, also provides a list of boilerplates (http://hapijs.com/plugins#Boilerplate).

#### Articles / Tutorials
* [The Pursuit of Hapi-ness: An Introduction to Hapi 3.0](https://medium.com/@_expr/the-pursuit-of-hapi-ness-d82777afaa4b)
    - Author: Fionn Kelleher
    - Note, even though older version of hapi, still helpful
* [Testing Hapi Services with Lab](https://medium.com/the-spumko-suite/testing-hapi-services-with-lab-96ac463c490a)
    - Author: Fionn Kelleher
    - Note, even though older version of hapi, still helpful
* [Creating Validation Schemas with Joi](https://medium.com/the-spumko-suite/creating-validation-schemas-with-joi-eb4ff19f6688)
    - Author: Fionn Kelleher
* [Manifests, plugins and schemas: Organizing your hapi application](https://medium.com/zappos-engineering/manifests-plugins-and-schemas-organizing-your-hapi-application-68cf316730ef)
    - Author: Dave Stevens
* [Building an Application with Ember CLI, Hapi, Bookshelf, Knex.js & Sqlite3](http://blog.optimalcadence.com/building-an-application-with-ember-cli-hapi-bookshelf-knex-js-sqlite3-part-1/)
    - Author: Kirt Henrie
    - KEY TAKE-AWAY: tutorial starts with very simple hapi server, then refactors to structure project similar to hapi-ninja (was very helpful in understanding project structure)

#### Boilerplates
* [aqua](https://github.com/jedireza/aqua)
    - Author: jedireza (Reza Akhavan)
* [hapi-ninja](https://github.com/poeticninja/hapi-ninja)
    - Author: poeticninja (Saul Maddox)
* [nodejs-account-boilerplate](https://github.com/fs-opensource/nodejs-account-boilerplate) 
    - Author: fs-opensource (Future Studio, http://futurestud.io)
    - Note, uses Express
* [mullet](https://github.com/lynnaloo/mullet)
    - Author: lynnaloo (Linda Nichols)

#### Online Resources
* [Start Bootstrap / Modern Business (UI: bootstrap, html templates)](http://startbootstrap.com/template-overviews/modern-business/)
    - Author: Start Bootstrap / Iron Summit Media Strategies

<br>
## Features / Practices 
Here is a list of packages, features, and best practices I wanted to gain experience with (as well as provide in the project for reuse):

* UI (serving from hapi)
    - Handlebars, partials
    - Bootstrap / Modern Business (html templates)
    - Navbar
    - [hapi-named-routes](https://www.npmjs.com/package/hapi-named-routes)
* ORM / DB 
    - [Bookshelf](https://www.npmjs.com/package/bookshelf)
    - [Knex](https://www.npmjs.com/package/knex)
    - Note, sqlite3 was used here for setup simplicity, however MySQL, Postgres also supported
* Validation
    - [Joi](https://www.npmjs.com/package/joi)
* Logging / Process Monitoring
    - [Good](https://www.npmjs.com/package/good), [Good Console](https://www.npmjs.com/package/good-console)
* HTTP error response
    - [Boom](https://www.npmjs.com/package/boom)
* API documentation generation
    - [Lout](https://www.npmjs.com/package/lout)
* Test
    - [Lab](https://www.npmjs.com/package/lab), [Chai](https://www.npmjs.com/package/chai) 
* Tasks 
    - [Gulp](https://www.npmjs.com/package/gulp)
* Coding Standards / Conventions
    - Work in progress (especially in consistency). Still junior to writing javascript, and settling in on convention and style, but feel is a very important aspect.
    - Example: http://hapijs.com/styleguide

##### Features considered, but not gotten to...
* Locale (internationalization)
    - [i18n](https://www.npmjs.com/package/i18n) (or other)
* Configuration 
    - [config](https://www.npmjs.com/package/config)

<br>
## Usage 
### Installation 
#### Prerequisites
Make sure the following are installed prior to starting the install steps:

Applications Installed: node, npm, git
NPM Global Packages:    knex, lab

```NOTE: lab may not be required as a global install, but can be useful for running tests on the fly from the command line```

#### Database set up
* Several database setup (knex) steps have already been run:
    - knex init (generates knex configuration file, knexfile.js)
    - knex migrate:make (creates database/table schema source file)
    - knex seed:make (generates a seed data source file)
* The files generated from those steps were updated with directory settings, sample schema, and seed data, and have been stored in the repository.
* Those steps do not need to be run prior to installation. For more information on that process, see the [knex documentation](http://knexjs.org/#Migrations-CLI).

```NOTE: prior to running the knex migrate and seed steps, you can modify the schema and seed files, to adjust those as you like. If changes are made, you will need to update the api_spec.js test as well to have the tests reflect any changes made.```

#### Install Steps 
1. git clone https://github.com/stevenjmarsh/hapi-starting-point.git
2. npm install          (installs all necessary local project npm packages)
3. knex migrate:latest  (generates database/table)
4. knex seed:run        (populates dev database/table)
5. add images           (add two image files to public/images: mountain_logo.png, mountain_favicon.ico -of course any images can be used here, but if using different filenames, you will need to search and replace the filenames in the source and tests)

#### Running
gulp lint
gulp test
npm start  (which simply runs ./bin/www)
debug (node-inspector): ./bin/wwwd

#### Gulp Tasks
* clear - clears the console (typically used before any of the 'watch' based tasks are rerun)
* lint - runs jslint once against indicated source files
* lintw - sets a watch to run lint when any of the source files changes
* test - runs lab test once
* testw - sets a watch to run lab test any time indicated source files change
* nodemon - runs the server, and restarts any time source files change 

#### Application Notes 
* Environment Variables
    - PORT - server port number, defaults to 3000
    - NODE_ENV - development, test, staging, production (defaults to development)
* Navbar - active menu item setup
    - To have the current page (home, about, ...) set the menu item to active, html element attributes need to be set associating the current page being shown (a partial, div) to the corresponding menu item (li a), using a data-menu attribute
        + for more background on this, see micro blog entry (Navbar - active menu item)
    - CSS Settings
        + in partial of current page being shown, div id must be 'current-page'
            * ```<div id='current-page'> ...```
        + in partial of current page being shown, data-menu must be set to a value of one of the menu bar (li) items
            * ```<div data-menu='homepage' id=...```
        + in the nav menu, the corresponding menu item must have the data-menu value set 
            * ```<li data-menu='homepage'>...```
* __NOTE:__ examples of using boom for api restful errors are in the api controller. But developer should add more and/or finer grained error type testing based on the needs of the application
* Images (a logo, favicon, and sample graphic) are used/referenced in the source code, but not stored in the repository. Tests will fail, reminding you to provide those images or update image names to those being used.
* API documentation
    - lout is used to generate api route documentation
        + web page routes are explicitly excluded
    - documentation is at http://_host-port_/docs
    - tests are written to verify lout plugin successfully registered
        + makes sure at least one api doc route exists
        + makes sure at least one web page route is excluded
        + copy create more of these tests as you wish

<br>
## Dev Journal

#### Tech Notes
* npm start & directory structure
    - I opted with creating an executeable bin/www, matching a technique I've seen used with some express examples (and pointed out by a Code School instructor, a practice used by developers at NodeJS)
    - One reason I liked this, is because it keeps the definition of the server in one file (server.js), and the launching/starting of the server in another. Seemed like a sensible separation of concerns.
* routing
    - Both hapi-ninja and aqua boilerplates registered their routes as plugins. I initially followed suit (then later chose a style from the ember hapi tutorial; seemed like a fair balance between being scalable and easy to read/follow)
* Explicitly caches and serves the favicon
* Navbar menu affects
    - I initially wrote the navbar functionality after viewing the Code School Bootstrap online course
    - That version was missing some desired functionality (and also strayed a little from Bootstrap practices and documentation)
        + use of data-toggle and data-target on the dropdown menu  
    - I ended up reviewing the bootstrap docs in detail, and finding a helpful [video on YouTube by Ben Bigras](https://www.youtube.com/watch?v=lx0IysyYLH0), to help add additional functionality (hover over dropdown displays dropdown, navbar link as 'active' based on which page is being shown)
        + NOTE: I did refactor the code for adding the 'active' class, and instead of using javascript used CSS to implement hover/dropdown
* Testing coverage, not 100%
    - still working on trying to get 100% coverage 
    - there are a few simple cases where it is difficult or much more effort or more complicated code, than the risk of the code being incorrect or failing (still trying though)
    - in one case, the coverage utility reported two lines in settings.js not being covered
        + spend a lot of time writing tests to cover those lines (most effort around preserving and manipulating process.env vars, and reloading require modules)
        + after tests were complete, coverage util still reporting those lines not tested. :( 
        + did learn more about adding/removing process.env vars, and how to reload modules though.

#### Micro blog (perspective, thoughts, self critique...)
Some notes I took, thoughts I captured while coding...

* coding style, like to think I kept it neat, but know I need to be more consistent. I do strongly believe neat/readable code is extremely important. And willing to follow any agreed upon coding style/convention
* Definitely overthought some areas, being concerned with following best practices
* [early on] found it challenging to sort out / choose a project folder structure. Saw several examples. Some were simple, some were more complex. It was difficult in some cases to ascertain the advantages of the various structures. That is where experience comes in to play. Ultimately, I will settle on something simple for now, which seems neat and organized. I likely over thought this at this stage of the game (which did cost me some time)
    - ended up with something that made sense to me, not sure how standard it is
* Navbar - active menu item
    - I 'think' I like how I implemented this. I wanted to associate the current page (a partial) being shown, with a particular menu option, and set it active when the page was displayed
    - The original strategy was based on "Bootstrap Menu...", by Ben From BenBigras.com 
    - I wanted to reduce the repeated code in his example, and make it testable
    - The result is less code, but does require some configuration via html/attribute css
    - I definitely spent too much time on this, and overthought it. But will chalk that up to practice (and trying to learn best practices)
    - on a performance note, I was a little concerned about using a data attribute as a selector, so narrowed the selection first reasonably (by first selecting menu list items from the nav bar
    - some fear exists of trying to be too clever
