"use client";

import React from "react";
import { RecipeCard } from "./RecipeCard";
import { Recipe } from "../types/interfaces";

interface BookmarksProps {
  bookmarkedRecipes: Recipe[];
}

export const Bookmarks: React.FC<BookmarksProps> = ({ bookmarkedRecipes }) => {
  return (
    <div className="grid grid-cols-4 gap-4">
      {bookmarkedRecipes &&
        bookmarkedRecipes.map((recipe) => (
          <RecipeCard key={recipe.id} recipe={recipe} onBookmark={() => {}} />
        ))}
    </div>
  );
};
