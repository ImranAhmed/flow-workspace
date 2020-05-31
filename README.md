# FlowWorkspace

This project was generated using [Nx](https://nx.dev).

<p align="center"><img src="https://raw.githubusercontent.com/nrwl/nx/master/nx-logo.png" width="450"></p>

🔎 **Nx is a set of Extensible Dev Tools for Monorepos.**

## Quick Start & Documentation

[Nx Documentation](https://nx.dev/angular)

[10-minute video showing all Nx features](https://nx.dev/angular/getting-started/what-is-nx)

[Interactive Tutorial](https://nx.dev/angular/tutorial/01-create-application)

## Adding capabilities to your workspace

Nx supports many plugins which add capabilities for developing different types of applications and different tools.

These capabilities include generating applications, libraries, etc as well as the devtools to test, and build projects as well.

Below are the main plugins used by this workspace:

- [Angular](https://angular.io)
  - `ng add @nrwl/angular`

## USeful commands

| Command                                                   | Action                     | Notes                                                                                                                                                                     |
| --------------------------------------------------------- | -------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `ng g @nrwl/angular:app my-app`                           | Generate application.      | When using Nx, you can create multiple applications and libraries in the same workspace.                                                                                  |
| `ng g @nrwl/angular:lib my-lib`                           | Generate a library.        | Libraries are sharable across other libraries and applications. They can be imported from `@flow-workspace/my-lib`.                                                       |
| `ng serve`                                                | Run the main flow-web-app. | Navigate to http://localhost:4200/. The app will automatically reload if you change any of the source files.                                                              |
| `ng serve my-app`                                         | Run a specific app.        | Navigate to url specified in console output. The app will automatically reload if you change any of the source files.                                                     |
| `ng g component components/my-component --project=ui-kit` | Generate component.        | Generate a new component in library ui-kit and directory/components. Add component name to [exports] in ui-kit.module in order to make this available outside the module. |

## Run storybook

Run `npm run storybook:g` to generate storybook tests for library ui-kit.

Run `npm run storybook` to view storybook for library ui-kit.

## Build

Run `ng build my-app` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test my-app` to execute the unit tests via [Jest](https://jestjs.io).

Run `nx affected:test` to execute the unit tests affected by a change.

## Running end-to-end tests

Run `ng e2e my-app` to execute the end-to-end tests via [Cypress](https://www.cypress.io).

Run `nx affected:e2e` to execute the end-to-end tests affected by a change.

## Understand your workspace

Run `nx dep-graph` to see a diagram of the dependencies of your projects.

## Further help

Visit the [Nx Documentation](https://nx.dev/angular) to learn more.
