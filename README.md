# express-component-starter
an express starter project with component based grouping.

**Goals** : 

Creating a scalable architecture that can be translated into micro-services easily ( with the help of `component-generator` runnable script )

---

## Components vs Services

**Services** are ideal for highly resilient systems whereby parts of your infrastructure can crash but the rest keeps going gracefully.

**Components** are designed to fit together to deliver functionality. This doesn't mean that they aren't reusable as a component can be an API that gets used in a wide range of systems and applications.

Services and components aren't mutually exclusive architectures as a service can be made from components. Components may also call services.

## Independent business logic

Business logic inside components should not depends on external libraries. Any external dependencies should be wrapped / implemented in *libraries* folder. Components should access files from *libraries* and should not access any node_modules dependencies directly, without valid reasons / exceptions. We don't want to end up with problems from abandoned external libraries.

some suggestions & rules :
- **Controller** should be a pure javascript class / functions without direct `node_modules` dependencies ( with some exceptions e.g. `lodash` | other `node_modules` dependencies should be wrapped and placed inside *libraries*
)
- **Model** & **Repository** files will be tightly coupled with ORM / DB library used
- **Route** files will be tightly coupled with Express / Backend Framework
- **Validator** files might be coupled with external validator libraries
- Communication between components should use events / message queues / wrapped in a bridge files inside *libraries*


## Style Guide & Code Formatting

For code formatting, we use `standard` - Read more here https://github.com/standard/standard 
Please run `standard --fix` before committing. Or use IDE plugin to auto format on save ( `npm run dev` or `yarn dev` automatically run `standard --fix` - make sure you have `standard` installed as global module )

## Folder/Architecture Descriptions

- `app/config` : containing configuration files to run your app. Including but not limited to : database configuration, server configuration, provider used
- `app/providers` : containing specific module configuration that your backend framework will use (in this case, ExpressJS). Please note that you need to update `app/config/service-provider.js` after adding file inside this folder.
- `app/*.js` : manager for configurations and server files.
- `components` : the most important part. it contains several layer for you to create your API
    - **Model** : represented by `module-name.js` - feel free to add more model if necessary
    - **Repository** : represented by `module-name-repository.js` - it contains data processing functions for your model & database
    - **Controller** : represented by `module-name-controller.js` - it contains business logic for your components / application
    - **Transformer** : represented by `module-name-transformer.js` - it transform data from API and making sure the schema is always valid & consistent
    - **Validator** : represented by `module-name-validator.js` - it validates requests & responses and making sure all data input & output will conform to client's requirement
    - **Router** : represented by `module-name-api.js` - it contains your route list and logics.
- `libraries` : containing module configuration that your components will use ( e.g for communicating with each other )
- `tests` : your test files. we use `supertest` as the testing library.

## Component Generator

To make things easier, we've made a simple bash script to generate components for you. Call it like this `sh component-generator ComponentName` - and it will generate a folder with files inside `components` folder - it will also generate a folder with test suite template inside `tests/api` folder. Please use `UpperCamelCase` for the parameter.

After creating the component, you can access it from `<HOST>:<PORT>/<API_PREFIX>/<module-name>` - you can also check the test suite template by running `npm run test` / `yarn test`

## References

Follow lots of guides from https://github.com/i0natan/nodebestpractices

Watch repository pattern here https://www.youtube.com/watch?v=rtXpYpZdOzM&feature=youtu.be