"use client";

interface RecipeCardProps {
  recipe: {
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
  };
}

export const RecipeCard: React.FC<RecipeCardProps> = ({ recipe }) => {
  return (
    <div className="border-black border-solid border-2 p-10">
      <div>{recipe.title}</div>
      {recipe.image.length > 0 && <img src={recipe.image[0].url} alt={recipe.title} />}
      <button>Bookmark</button>
    </div>
  );
};
