"use client";

import React from "react";
import { RecipeCard } from "../components/RecipeCard";
import { Recipe } from "../types/interfaces";

interface BookmarksProps {
  bookmarkedRecipes: Recipe[];
  removeBookmark: (index: number) => void;
}

export const Bookmarks: React.FC<BookmarksProps> = ({ bookmarkedRecipes, removeBookmark }) => {
  return (
    <div className="grid m:grid-cols-4 m:gap-4 sm:grid-cols-2 sm:gap-2">
      {bookmarkedRecipes &&
        bookmarkedRecipes.map((recipe, index) => (
          <RecipeCard
            key={recipe.id}
            recipe={recipe}
            onBookmark={() => {}}
            removeRecipeCard={() => removeBookmark(index)}
            isBookmarked={true}
            showRemoveButton={true}
          />
        ))}
    </div>
  );
};
