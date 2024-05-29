### Project: Recipe Box

#### Overview

This project is a simple recipe management application built using Next.js & TypeScript. It allows users to browse recipes, bookmark their favorite recipes, and view their bookmarked recipes. The application leverages server-side rendering to fetch data efficiently and pass it to client-side components for rendering and interactivity.

#### Component Breakdown

### Diagram of file structure

├── app

│ ├── Recipes.tsx // Server-side component to fetch data

│ ├── RecipeContainer.tsx // Client-side component to manage and display recipes

│ ├── Bookmarks.tsx // Component to display bookmarked recipes

│ ├── components
│ │ └── RecipeCard.tsx // Reusable component to display individual recipes

│ └── types
│ └── interfaces.ts // TypeScript interfaces for type definitions

├── public

├── styles

└── README.md // Project documentation

1. **Recipes.tsx (Server-side)**

   - **Purpose**: Fetches the recipe data from the API on the server side.
   - **Functionality**:
     - Uses `fetch` to retrieve recipe data.
     - Passes the fetched data as props to the `RecipeContainer` component.
   - **Importance**: Fetching data on the server side is crucial for performance and SEO. It ensures that data is ready when the page loads, reducing the time it takes for the user to see the content.

2. **RecipeContainer.tsx (Client-side)**

   - **Purpose**: Manages the state of the recipes and bookmarks.
   - **Functionality**:
     - Receives recipe data as props from `Recipes.tsx`.
     - Uses `useState` to manage the list of bookmarks.
     - Provides functions to add and remove bookmarks.
     - Passes relevant props and functions to `RecipeCard` and `Bookmarks` components.

3. **RecipeCard.tsx (Client-side)**

   - **Purpose**: Displays individual recipes and allows users to bookmark them.
   - **Functionality**:
     - Receives recipe data and bookmark functions as props.
     - Displays recipe details including the image, title, and bookmark status.
     - Contains buttons to bookmark/unbookmark a recipe.
     - Calls `onBookmark` to add a recipe to bookmarks and `removeRecipeCard` to remove it.
     - By fetching data in the parent and passing to the card, we could potentially use this card again our application with a different set of data.

4. **Bookmarks.tsx (Client-side)**
   - **Purpose**: Displays the list of bookmarked recipes.
   - **Functionality**:
     - Receives the list of bookmarked recipes and the remove function as props.
     - Renders each bookmarked recipe using the `RecipeCard` component.
     - Allows users to remove recipes from bookmarks.

### Data flow

A[Recipes.tsx] -->|Fetch data on server| B[RecipeContainer.tsx]

B -->|Pass props| C[RecipeCard.tsx]

B -->|Pass props| D[Bookmarks.tsx]

C -->|User action: Bookmark| B
    
D -->|User action: Remove bookmark| B

#### Explanation of Functions

1. **fetchData (in Recipes.tsx)**

   - Fetches data from the API.
   - Ensures data is fetched server-side for better performance and SEO.

2. **handleAddBookmark (in RecipeContainer.tsx)**

   - Adds a recipe to the bookmarks list if it is not already bookmarked.

3. **removeBookmark (in RecipeContainer.tsx)**

   - Removes a recipe from the bookmarks list.

4. **handleBookmarkClick (in RecipeCard.tsx)**

   - Calls `onBookmark` to add a recipe to bookmarks.

5. **handleRemoveClick (in RecipeCard.tsx)**
   - Calls `removeRecipeCard` to remove a recipe from bookmarks.

#### Conclusion

This project demonstrates a well-structured approach to building a recipe management application with Next.js, leveraging server-side rendering for data fetching and passing props to client-side components for dynamic interactivity. The separation of concerns ensures maintainability and scalability, allowing for easy additions and modifications in the future.

By fetching data on the server, the application delivers content faster and enhances SEO, while the client-side components handle user interactions smoothly, providing a seamless user experience.

### Future changes

Due to time constraints, I have not built in the mobile view slider to hold the bookmarks. The book marks are held in a page which would work well on desktop and large screen sizes, but I would like to add the mobile slider, per the designs, later on in the project.
