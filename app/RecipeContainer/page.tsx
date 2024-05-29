"use client";

import { Bookmarks } from "../Bookmarks/page";
import { RecipeCard } from "../components/RecipeCard";
import { useState } from "react";
import { Recipe } from "../types/interfaces";

interface RecipesContainerProps {
  recipes: Recipe[];
}

export const RecipeContainer: React.FC<RecipesContainerProps> = ({ recipes }) => {
  const [bookmarks, setBookmarks] = useState<Recipe[]>([]);
  const [showBookmarks, setShowBookmarks] = useState<boolean>(false);

  const handleAddBookmark = (recipe: Recipe) => {
    if (!bookmarks.find((r) => r.id === recipe.id)) {
      setBookmarks([...bookmarks, recipe]);
    }
  };

  const removeRecipeCard = (index: number) => {
    const updatedBookmarks = [...bookmarks];
    updatedBookmarks.splice(index, 1);
    setBookmarks(updatedBookmarks);
  };

  const toggleView = () => {
    setShowBookmarks((prev) => !prev);
  };

  return (
    <>
      <main className="p-10">
        <div className="flex flex-row justify-between">
          <div className="flex-grow text-center text-xl tracking-wider">RECIPE BOX</div>
          <button onClick={toggleView} className="mr-8">
            {showBookmarks ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-4">
                <path
                  fillRule="evenodd"
                  d="M9.53 2.47a.75.75 0 0 1 0 1.06L4.81 8.25H15a6.75 6.75 0 0 1 0 13.5h-3a.75.75 0 0 1 0-1.5h3a5.25 5.25 0 1 0 0-10.5H4.81l4.72 4.72a.75.75 0 1 1-1.06 1.06l-6-6a.75.75 0 0 1 0-1.06l6-6a.75.75 0 0 1 1.06 0Z"
                  clipRule="evenodd"
                />
              </svg>
            ) : (
              <span className="mr-8">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-6">
                  <path
                    fillRule="evenodd"
                    d="M6.32 2.577a49.255 49.255 0 0 1 11.36 0c1.497.174 2.57 1.46 2.57 2.93V21a.75.75 0 0 1-1.085.67L12 18.089l-7.165 3.583A.75.75 0 0 1 3.75 21V5.507c0-1.47 1.073-2.756 2.57-2.93Z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
            )}
          </button>
        </div>

        {showBookmarks ? (
          <Bookmarks bookmarkedRecipes={bookmarks} removeBookmark={removeRecipeCard} />
        ) : (
          <div className="grid grid-cols-4 gap-3">
            {recipes &&
              recipes.map((recipe, index) => (
                <RecipeCard
                  key={recipe.id}
                  recipe={recipe}
                  onBookmark={handleAddBookmark}
                  removeRecipeCard={() => removeRecipeCard(index)}
                  isBookmarked={!!bookmarks.find((r) => r.id === recipe.id)}
                  showRemoveButton={false}
                />
              ))}
          </div>
        )}
      </main>
    </>
  );
};

export default RecipeContainer;
