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
      <button onClick={toggleView}>{showBookmarks ? "Show All Recipes" : "Show Bookmarks"}</button>

      {showBookmarks ? (
        <Bookmarks bookmarkedRecipes={bookmarks} removeBookmark={removeRecipeCard} />
      ) : (
        <div className="grid grid-cols-4 gap-4 p-10">
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
    </>
  );
};

export default RecipeContainer;
