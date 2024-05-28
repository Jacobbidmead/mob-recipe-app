"use client";

import { Bookmarks } from "../components/Bookmarks";
import { RecipeCard } from "../components/RecipeCard";
import { useState } from "react";
import { Recipe } from "../types/interfaces";

interface RecipesContainerProps {
  recipes: Recipe[];
}

export const RecipeContainer: React.FC<RecipesContainerProps> = ({ recipes }) => {
  const [bookmarks, setBookmarks] = useState<Recipe[]>([]);

  const handleAddBookmark = (recipe: Recipe) => {
    if (!bookmarks.find((r) => r.id === recipe.id)) {
      setBookmarks([...bookmarks, recipe]);
    }
  };

  return (
    <>
      <div className="grid grid-cols-4 gap-4">
        {recipes &&
          recipes.map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} onBookmark={handleAddBookmark} />
          ))}
      </div>
      <Bookmarks bookmarkedRecipes={bookmarks} />
    </>
  );
};
