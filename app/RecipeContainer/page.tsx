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

  return (
    <>
      <div className="grid grid-cols-4 gap-4 p-10">
        {recipes &&
          recipes.map((recipe, index) => (
            <RecipeCard
              key={recipe.id}
              recipe={recipe}
              onBookmark={handleAddBookmark}
              removeRecipeCard={() => removeRecipeCard(index)}
              isBookmarked={!!bookmarks.find((r) => r.id === recipe.id)}
            />
          ))}
      </div>
      <Bookmarks bookmarkedRecipes={bookmarks} removeBookmark={removeRecipeCard} />
    </>
  );
};

export default RecipeContainer;
