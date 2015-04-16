# hapi-boilerplate
A node / hapi web server boiler plate, taking aspects from several other popular boilerplates.

## Node boilerplates referenced
* hapi-ninja
* fs-accounts
* aqua
* mullet

### Boilerplate Features
|                         |    hapi-ninja   |      fs-accounts      |          aqua          | mullet |
|-------------------------|:---------------:|:---------------------:|:----------------------:|:------:|
| **Web Server**          |       hapi      |        express        |          hapi          |  hapi  |
| **Test**                |        -        |         mocha         |           lab          |  jest  |
| **Authentication**      |        -        |  bcrypt,<br/>passport | bcrypt,<br/>hapi-basic-auth |    -   |
| **User Accounts**       |        -        |          yes          |           yes          |    -   |
| **Config / Env**        |      assets     |          db           |           yes          |    -   |
| **Locale**              |        -        |          yes          |            -           |    -   |
| **UI**                  |        -        | bootstrap,<br/> fontawesome |          react         |  react |
| **Structured Folders**  | server / public |     server / public   |     server / client    | public |
| **Tasks**               |       gulp      |        wercker        |          gulp          |  grunt |
| **Data Store**          |        -        |        mongodb        |         mongodb        |    -   |
| **Email**               |        -        |        EmailJS        |        nodemailer      |    -   |
| **Logging**             |       good      |           ?           |            ?           |    ?   |
| **API / Endpoints**     |        -        |          yes          |           yes          |    ?   |

## Components / Practices to use and/or consider
* good, good-console, good-file(tbd), good-http(tbd)
* hapi-named-routes
* lout
* joi
* lab
* gulp (or grunt)
* (TBD) React
* bcrypt, hapi-auth-basic
* directory structure (best practices)
* mongoDB, mongoose
* locale (internationalization)
* code style - http://hapijs.com/styleguide 

### Features to implement (limited)
* Accounts / user management
    - email

