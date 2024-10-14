# Frontend challenge

Assuming you have Node.js and pnpm installed, follow these steps to launch the app:

1. **Add `.env` file:**

   Create a `.env` file with the following contents:

   ```text
   VITE_API_URL=# enter your API URL here
   ```

2. **Install the dependencies:**

   Install all project dependencies via the following command:

   ```bash
   pnpm install
   ```

3. **Run the project:**

   Start running the development server via the following command:

   ```bash
   pnpm dev
   ```

# Project description

## Design

Since Stacks and Stack components do not depend directly on one another (stacks may exist without components, and components may exist without stacks), both were separated into different pages. Both pages use lists to display all stacks/components as this seemed the clearest option for the user.

It might be useful to add colorful icons to the components listing page to differentiate different component types. Also, for a large number of records it would be useful to add pagination.

Stacks and their components have separate info pages to view their respective details. Stack details page contains a list of links to all its components. This allows the user to quickly view the details of each of the stack components. It might be useful to make those links open in a new tab or a drawer, so that the user would not lose the context of the stack details that disapear from the page.

Breadcrumbs were added to aid navigation and add clarity in terms of route location.

## Error handling

Two types of error boundaries were used: one for the whole app and another for a specific route. Route-wise boundary catches any errors that arise from the route, while the app one is meant to catch everything else.

When the API request fails for 3 consecutive times, an error should be shown as a toast message (called from QueryClient onError method). However, the toast component was not added due to time constraints so the message is not shown.

Custom errors are read and handled from the API response and could be read/displayed wherever they are caught.

## Future features

Adding CRUD functionality to a stack/component would amount to adding a button "Add new" in the listing page and a dropdown menu in each row of the table with options "Edit", "Delete". Each of those options would open a dialog with related info to complete the action.

A provider wrapper could be used to enable authentication for the app. On initial load, a request would be made to ensure the user is authenticated. If authentication is confirmed, I would prefer to leave cookie handling to the browser and the backend as this I believe is more secure (attaching cookies to requests to respective domains, removing them when backed responds with a specific header).

In terms of the closed-sourced features, I would fork the open-source project and build those features on top of the private fork. Then I would periodically merge back changes from the open project to the fork so that they would not diverge too much.
