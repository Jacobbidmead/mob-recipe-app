"use client";
interface Recipe {
  id: number;
  title: string;
  slug: string;
  image: {
    id: number;
    title: string;
    url: string;
    width: string;
    height: string;
  }[];
}

interface RecipeCardProps {
  recipe: Recipe;
  onBookmark: (recipe: Recipe) => void; // Add the onBookmark prop to the interface
}

export const RecipeCard: React.FC<RecipeCardProps> = ({ recipe, onBookmark }) => {
  const handleBookmarkClick = () => {
    onBookmark(recipe);
  };
  return (
    <div className="border-black border-solid border-2 p-10">
      <div>{recipe.title}</div>
      {recipe.image.length > 0 && <img src={recipe.image[0].url} alt={recipe.title} />}
      <button onClick={handleBookmarkClick}>Bookmark</button>
    </div>
  );
};
