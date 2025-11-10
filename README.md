# LandingPageB

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 20.3.1.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.

## These variables control the color theme globally

— every green button, border, hover glow, and accent derives from here 👇

:root {
--primary-green: #7AFB03; /_ 🔹 Main brand green (buttons, links, highlights) _/
--primary-green-dark: #00a96e; /_ 🔹 Darker shade for hover/focus states _/
--dark-bg: #0a0a0a; /_ 🔹 Page background color _/
--dark-surface: #1a1a1a; /_ 🔹 Card & section background surfaces _/
--border-green: rgba(0, 208, 132, 0.3); /_ 🔹 Border subtle tint _/
--glow-green: rgba(0, 208, 132, 0.15); /_ 🔹 Shadows, glow, highlights _/
}
