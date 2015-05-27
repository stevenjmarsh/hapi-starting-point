# ToDo
* Boom
* Lout
* coding style review

# hapi-starting-point
This project is a simple node application, created to gain experience with hapi, and to be used as a starting point (not quite a boilerplate) for node hapi applications.   and address some basic needs of simple projects

The application contains a light UI and api, with database connectivity. A variety of supporting packages were used.

A hapi boilerplate created from scratch, based on several popular existing boilerplates, for the purpose of learning project structure and hapi fundamentals.

This project was built referencing the following other boilerplates and tutorials: hapi-ninja (by poetic-ninja), aqua (by jedireza), nodejs-account-boilerplate (by fs-opensource), and mullet (by lynnaloo).

Folder structure, practices & style, and functionality were borrowed from each.

Instead of forking and copying much of the source, this project was assembled from scratch to gain understanding of each piece individually, as well as what components and practices are fundamental to robust web servers.

### References
Most reference material was found simply through online search. Hapi, however, also provides a list of boilerplates (http://hapijs.com/plugins#Boilerplate).

#### Articles / Tutorials
* The Pursuit of Hapi-ness: An Introduction to Hapi 3.0
    - Author: Fionn Kelleher
    - URL: https://medium.com/@_expr/the-pursuit-of-hapi-ness-d82777afaa4b
* Testing Hapi Services with Lab 
    - Author: Fionn Kelleher
    - URL: https://medium.com/the-spumko-suite/testing-hapi-services-with-lab-96ac463c490a
* Creating Validation Schemas with Joi
    - Author: Fionn Kelleher
    - URL: https://medium.com/the-spumko-suite/creating-validation-schemas-with-joi-eb4ff19f6688
* Manifests, plugins and schemas: Organizing your hapi application
    - Author: Dave Stevens
    - URL: https://medium.com/zappos-engineering/manifests-plugins-and-schemas-organizing-your-hapi-application-68cf316730ef
* Building an Application with Ember CLI, Hapi, Bookshelf, Knex.js & Sqlite3
    - Author: Kirt Henrie
    - URL: http://blog.optimalcadence.com/building-an-application-with-ember-cli-hapi-bookshelf-knex-js-sqlite3-part-1/
    - KEY TAKE-AWAY: tutorial starts with very simple hapi server, then refactors to structure project similar to hapi-ninja (was very helpful in understanding project structure)
#### Boilerplates
* aqua
    - Author: jedireza (Reza Akhavan)
    - URL: https://github.com/jedireza/aqua
* hapi-ninja
    - Author: poeticninja (Saul Maddox)
    - URL: https://github.com/poeticninja/hapi-ninja
* nodejs-account-boilerplate (note, uses Express)
    - Author: fs-opensource (Future Studio, http://futurestud.io)
    - URL: https://github.com/fs-opensource/nodejs-account-boilerplate
* mullet
    - Author: lynnaloo (Linda Nichols)
    - URL: https://github.com/lynnaloo/mullet
#### Online Resources
* Modern Business (UI: bootstrap, html templates)
    - Author: Start Bootstrap / Iron Summit Media Strategies
    - URL: http://startbootstrap.com/template-overviews/modern-business/


### Features / Practices 
Here is a list of technologies, packages, features, and best practices I wanted to gain experience with:
* UI (serving from hapi)
    - Handlebars, partials
    - Bootstrap / Modern Business (html templates)
    - Navbar
    - hapi-named-routes
* API 
* ORM / DB 
    - Bookshelf
    - Knex 
* Validation
    - Joi
* Logging
    - good, good-console
* HTTP error response
    - Boom
* Endpoint documentation
    - Lout
* Test
    - Lab, Chai 
* Tasks 
    - Gulp 
* Coding Standards / Conventions
    - Work in progress. Still junior to writing javascript, and settling in on convention and style, but feel is a very important aspect.
    - Example: http://hapijs.com/styleguide

## Usage Notes 
* Environment Variables
    - PORT - webserver port number, defaults to 3000
    - NODE_ENV - development, test, staging, production environment setting (defaults to development)
* Navbar - active menu item setup
    - To have the page set the menu item to active, based on which page is being viewed (home, about, ...), html element attributes need to be set associating the current page being shown (a partial, div) to the corresponding menu item (li a), using a data-menu attribute
        + for more background on this, see micro blog entry (Navbar - active menu item)
    - CSS Settings
        + in partial of current page being shown, div id must be 'current-page'
            * ```<div id='current-page'> ...```
        + in partial of current page being shown, data-menu must be set to a value of one of the menu bar (li) items
            * ```<div data-menu='homepage' id=...```
        + in the nav menu, the corresponding menu item must have the data-menu value set 
            * ```<li data-menu='homepage'>...```
* Images (a logo, favicon, and sample graphic) are used/referenced in the source code, but not stored in the repository. Tests will fail, reminding you to provide those images or update those image names.

### Database setup
* Steps derived from http://knexjs.org/#Migrations-CLI
* knex init
    - creates a default knexfile.js
    - then add lines from corresponding project file 
    - NOTE: to be safe, make sure the directory referenced in the knexfile.js file is created (I don't recall for sure, but I think one of the following steps failed without creating the directory first [in this case, the folder is './db'])
* knex migrate:make contacts
    - creates a TIMESTAMP_contacts.js file
    - then add lines from corresponding project file 
* knex migrate:latest
* knex seed:make contacts 
    - creates a seeds directory and contact.js seed file
    - then add lines from corresponding project file 
* knex seed:run

### Gulp Tasks
* clear - clears the console (typically used before any of the 'watch' based tasks are rerun)
* lint - runs jslint once against indicated source files
* lintw - sets a watch to run lint when any of the source files changes
* test - runs lab test once
* testw - sets a watch to run lab test any time indicated source files change
* nodemon - runs the server, and restarts any time source files change 


## Dev Journal

### Goals
At the onset, some goals in mind were to gain experience with the following components:
* Hapi
    - named routes
* Handlebars
* Bootstrap
* Locale
* Config (port ?)
* Testing (Lab)
* Gulp 

### Coding Style 
Please note, in this project I am not following any particular documented coding style, but habits I have acquired over time (many from my days with C).

I do however feel readable code and consistent style are very important. And, am open to following any team's predefined style.
* One such example, http://hapijs.com/styleguide

### Notes
* npm start & directory structure
    - I opted with creating an executeable bin/www, matching a technique I've seen used with some express examples (and pointed out by a Code School instructor, also commonly used by developers at NodeJS)
    - One reason I liked this, is because it the server class definition and creation in one file (server.js), and the launching or exection in another file. Seemed like a sensible separation of concerns.
* Both hapi-ninja and aqua boilerplates registered their routes as plugins. I initially followed suit (then later chose a style from the ember hapi tutorial)
* Explicitly caches and serves the favicon
* Navbar menu affects
    - I initially wrote the navbar functionality after viewing the Code School Bootstrap online course
    - It was missing some desired functionality (and also strayed a little from Bootstrap practices and documentation)
        + use of data-toggle and data-target on the dropdown menu  
    - I ended up reviewing the bootstrap docs in detail, and finding a helpful video on YouTube by Ben Bigras (https://www.youtube.com/watch?v=lx0IysyYLH0), to help add additional functionality (hover over dropdown displays dropdown, navbar link as 'active' based on which page is being shown)
        + NOTE: I did refactor the code for adding the 'active' class, and instead of using javascript used CSS to implement hover/dropdown
* ...

### Components / Practices to use and/or consider
* good, good-console
* hapi-named-routes
* lab
* gulp (or grunt)
* directory structure (best practices)
* i18n ?, locale (internationalization)
* TBD code style - http://hapijs.com/styleguide 

### How'd I do? (my perspective, a self critique...)
* directory structure: ended up with something that made sense, but not sure how standard
* coding style, like to think I kept it neat, but know I need to be more consistent. I do strongly believe neat/readable code is extremely important. And willing to follow any agreed upon coding style
* Definitely overthought some areas, being concerned with following best practices
    - some of which are more easily produced with experience; instead of obsessing over getting them right through reading, research, pontificating

### Micro blog
* found it challenging to sort out / choose a project folder structure. Saw several examples. Some were simple, some were more complex. It was difficult to in some cases to ascertain what the advantages are of the various structures. That is where experience comes in to play. Ultimately, I will settle on something simple for now, which seems neat and organized. I likely over thought this at this stage of the game (which did cost me some time)
* Navbar - active menu item
    - I 'think' I like how I implemented this. I wanted to associate the current page (a partial) being shown, with a particular menu option, and set it active when the page was displayed
    - The original strategy was based on "Bootstrap Menu...", by Ben From BenBigras.com 
    - I wanted to reduce the repeated code in his example, and make it testable
    - The result is less code, but does require some configuration via html/attribute css
    - I definitely spent too much time on this, and overthought it. But will chalk that up to practice (and trying to learn best practices)
    - on a performance note, I was a little concerned about using a data attribute as a selector, so narrowed the selection first reasonably (by first selecting menu list items from the nav bar
    - some fear exists of trying to be too clever
* 
