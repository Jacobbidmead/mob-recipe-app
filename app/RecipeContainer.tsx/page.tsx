"use client";

import { Bookmarks } from "../components/Bookmarks";
import { RecipeCard } from "../components/RecipeCard";
import { useState } from "react";

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
        {recipes.map((recipe) => (
          <RecipeCard key={recipe.id} recipe={recipe} onBookmark={handleAddBookmark} />
        ))}
        <Bookmarks bookmarkedRecipes={bookmarks} />
      </div>
    </>
  );
};
