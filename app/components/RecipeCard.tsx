"use client";

import { Recipe } from "../types/interfaces";

interface RecipeCardProps {
  recipe: Recipe;
  onBookmark: (recipe: Recipe) => void;
  removeRecipeCard: () => void;
  isBookmarked: boolean;
  showRemoveButton: boolean;
}

export const RecipeCard: React.FC<RecipeCardProps> = ({
  recipe,
  onBookmark,
  removeRecipeCard,
  isBookmarked,
  showRemoveButton,
}) => {
  const handleBookmarkClick = () => {
    onBookmark(recipe);
  };

  return (
    <div className="border-black border-solid border-2 p-10">
      <div>{recipe.title}</div>
      {recipe.image.length > 0 && <img src={recipe.image[0].url} alt={recipe.title} />}
      <button onClick={handleBookmarkClick}>Bookmark</button>
      {isBookmarked && showRemoveButton && <button onClick={removeRecipeCard}>Remove</button>}
    </div>
  );
};
