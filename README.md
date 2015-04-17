# ToDo
* test, lab
* config (port)
* assets (main.css)
* Bootstrap (nav bar)
    - footer  (partial template?)
* localization (International)

# hapi-boilerplate
A hapi boilerplate created from scratch, based on several popular existing boilerplates, for the purpose of learning structure and hapi fundamentals.

This boilerplate was built referencing the following other boiler plates: hapi-ninja (by poetic-ninja), aqua (by jedireza), nodejs-account-boilerplate (by fs-opensource), and mullet (by lynnaloo).

Folder structure, practices & style, and functionality were borrowed from each.

Instead of forking and copying much of the source, this project was assembled from scratch to gain understanding of each piece individually, as well as what components are fundamental to common robust web servers.

### Node boilerplates referenced
* hapi-ninja
* fs-accounts
* aqua
* mullet

## Coding Style 
Please note, in this project I am not following any particular documented coding style, but habits I have acquired over time (many from my days with C).

I do however feel readable code and consistent style are very important. And, am open to following any team's predefined style.
* One such example, http://hapijs.com/styleguide

## Goals
At the onset, some goals in mind were to gain experience with the following components:
* Hapi
    - named routes
* Handlebars
* Bootstrap
* Locale
* Config (port ?)
* Testing (Lab)
* Gulp 

## Tasks using Gulp
* jslint
* ...

## Notes
* hapi-ninja
    - while implementing a partial with swig (using include; perhaps this is an incorrect way to do so), I tried to set the partialsPath option under server.views, hoping the server would use that to locate the partial html file (and not have to create a route path for it like hapi-ninja did). however that didn't work, couldn't find the file. followed hapi-ninja's method, which of course worked.


## Components / Practices to use and/or consider
* good, good-console
* hapi-named-routes
* lab
* gulp (or grunt)
* directory structure (best practices)
* i18n ?, locale (internationalization)
* TBD code style - http://hapijs.com/styleguide 
