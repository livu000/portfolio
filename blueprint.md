# Project Blueprint

## Overview

This document outlines the project structure and architecture of the portfolio application. The goal is to create a maintainable, scalable, and well-documented codebase that follows industry best practices.

## Project Structure

The project is organized into the following directories:

- `src/pages`: Contains the main pages of the application.
- `src/sections`: Contains the different sections of the portfolio, such as "About," "Projects," and "Contact."
- `src/components`: Contains reusable UI components, such as buttons, and layout components, such as the navbar and footer.
- `src/hooks`: Contains custom React hooks that encapsulate reusable logic.
- `src/lib`: Contains utility functions and other shared code.

## Implemented Changes

The following changes have been implemented to improve the project structure and code quality:

- Created a `useTheme` hook to encapsulate the theme-switching logic.
- Refactored the `App.jsx` file to use the `useTheme` hook and the new, more modular `Navbar` and `Footer` components.
- Created dedicated directories for pages, sections, and layout components.
- Moved the existing components to their respective new directories.
- Updated the import statements to reflect the new file paths.
- Removed the unused `src/components/ui` directory.

## Future Plans

- Add more projects to the portfolio.
- Implement a contact form.
- Add a blog section.
