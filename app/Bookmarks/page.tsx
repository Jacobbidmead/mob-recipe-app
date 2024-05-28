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
    <div className="grid grid-cols-4 gap-4">
      {bookmarkedRecipes &&
        bookmarkedRecipes.map((recipe, index) => (
          <RecipeCard
            key={recipe.id}
            recipe={recipe}
            onBookmark={() => {}}
            removeRecipeCard={() => removeBookmark(index)}
          />
        ))}
    </div>
  );
};
