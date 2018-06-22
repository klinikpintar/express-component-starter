# express-component-starter
an express starter project with component based grouping.

Goals : 

Create a scalable architecture that can be translated into micro-services easily

Concepts :

## Components vs Services

Services are ideal for highly resilient systems whereby parts of your infrastructure can crash but the rest keeps going gracefully.

Components are designed to fit together to deliver functionality. This doesn't mean that they aren't reusable as a component can be an API that gets used in a wide range of systems and applications.

Services and components aren't mutually exclusive architectures as a service can be made from components. Components may also call services.

## Independent business logic

Business logic inside components should not depends on external libraries. Any external dependencies should be wrapped / implemented in *libraries* folder. Components should access files from *libraries* and should not access any node_modules dependencies directly, without valid reasons / exceptions. We don't want to end up with problems from abandoned external libraries.

some suggestions & rules :
controller & dal should be a pure javascript class / functions without node_modules dependencies
model & repository files will be tightly coupled with ORM / DB lib
route files will be tightly coupled with Express / Backend Framework
validator files might be coupled with external validator libraries
lodash can be accessed directly
other node_modules dependencies should be wrapped and placed inside *libraries*
communication between components should use events / message queues / wrapped in a bridge files

## Style Guide & Code Formatting

Using `standard` - Read more here https://github.com/standard/standard 
Please run `standard --fix` before committing. Or use IDE plugin to auto format on save.

## File Descriptions

index.js -> orchestrator
[singular component name].js -> model ( tight couple with ORM / DB )
[plural component name]API.js -> router file, transform & pass pure js object to controller
[plural component name]Controller.js -> controller
[plural component name]DAL.js -> Data Access Layer / Business Logic ( put save / update  methods here )
[plural component name]Repository.js -> repository ( consume model, consumed by controller to get collections - no save / update methods )
[plural component name]Validator.js -> validate request & response based on validation rules. ( tight couple with validator libraries for rules )


## References

Follow lots of guides from https://github.com/i0natan/nodebestpractices
Watch Repository pattern here https://www.youtube.com/watch?v=rtXpYpZdOzM&feature=youtu.be