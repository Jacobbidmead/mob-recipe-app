"use client";

import React from "react";
import { RecipeCard } from "./RecipeCard";

interface Recipe {
  id: number;
  title: string;
  slug: string;
  image: Image[];
}

interface Image {
  id: number;
  title: string;
  url: string;
  width: string;
  height: string;
}

interface BookmarksProps {
  bookmarkedRecipes: Recipe[];
}

export const Bookmarks: React.FC<BookmarksProps> = ({ bookmarkedRecipes }) => {
  if (bookmarkedRecipes.length === 0) {
    return <div>No bookmarked recipes</div>;
  }

  return (
    <div className="grid grid-cols-4 gap-4">
      {bookmarkedRecipes.map((recipe) => (
        <RecipeCard key={recipe.id} recipe={recipe} onBookmark={() => {}} />
      ))}
    </div>
  );
};
