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

## Useful commands

| Command                                                   | Action                                                                               | Notes                                                                                                                                                                          |
| --------------------------------------------------------- | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `ng g @nrwl/angular:app my-app`                           | Generate application.                                                                | When using Nx, you can create multiple applications and libraries in the same workspace.                                                                                       |
| `ng g @nrwl/angular:lib my-lib`                           | Generate a library.                                                                  | Libraries are sharable across other libraries and applications.<br/><br/> They can be imported from `@flow-workspace/my-lib`.                                                  |
| `ng serve`                                                | Run the main flow-web-app.                                                           | Navigate to http://localhost:4200/. <br/><br/>The app will automatically reload if you change any of the source files.                                                         |
| `ng serve my-app`                                         | Run a specific app.                                                                  | Navigate to url specified in console output. <br/><br/>The app will automatically reload if you change any of the source files.                                                |
| `ng g component components/my-component --project=ui-kit` | Generate component.                                                                  | Generate a new component in library ui-kit and directory/components. <br/>Add component name to [exports] in ui-kit.module in order to make this available outside the module. |
| `npm run storybook:g`                                     | Generate [storybook](https://storybook.js.org/) tests.                               | Generate storybook tests for library.                                                                                                                                          |
| `npm run storybook`                                       | View storybook.                                                                      | Navigate to url specified in console output. <br/><br/>View storybook for library ui-kit.                                                                                      |
| `ng build my-app`                                         | Build project.                                                                       | The build artifacts will be stored in the `dist/` directory. <br/><br/>Use the `--prod` flag for a production build.                                                           |
| `ng test`                                                 | Execute unit tests.                                                                  | Executes unit tests across all applications and libraries via [Jest](https://jestjs.io).                                                                                       |
| `ng test my-app`                                          | Execute unit tests.                                                                  | Executes unit tests for a specific application or library.                                                                                                                     |
| `nx affected:test`                                        | Execute unit tests.                                                                  | Execute unit tests affected by a change.                                                                                                                                       |
| `ng e2e`                                                  | Execute end-to-end tests.                                                            | Execute the end-to-end tests for all applications and libraries via [Cypress](https://www.cypress.io).                                                                         |
| `ng e2e my-app`                                           | Execute end-to-end tests.                                                            | Executes e2e tests for a specific application or library.                                                                                                                      |
| `nx affected:e2e`                                         | Execute end-to-end tests.                                                            | Execute e2e tests affected by a change.                                                                                                                                        |
| `nx dep-graph`                                            | Load [dependency graph](https://nx.dev/angular/guides/monorepo-dependency-diagrams). | Navigate to url specified in console output. <br/><br/>View diagram of the dependencies of your projects.                                                                      |
| `npm run format`                                          | (Format)[https://nx.dev/angular/cli/format-write] code.                              | Formats code as per (pretter)[https://prettier.io/] spec.                                                                                                                      |
| `npm run format:check`                                    | Check format.                                                                        | Returns a list of files that require formatting without formatting them                                                                                                        |

## Further help

Visit the [Nx Documentation](https://nx.dev/angular) to learn more.
