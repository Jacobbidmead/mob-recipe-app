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
      {recipe.image.length > 0 && <img src={recipe.image[0].url} alt={recipe.title} />}
      <div className="flex flex-row">
        <div className="text-[10px]">{recipe.title}</div>
        {isBookmarked ? (
          "saved"
        ) : (
          <button onClick={handleBookmarkClick}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-4">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z"
              />
            </svg>
          </button>
        )}
        {isBookmarked && showRemoveButton && <button onClick={removeRecipeCard}>Remove</button>}
      </div>
    </div>
  );
};
