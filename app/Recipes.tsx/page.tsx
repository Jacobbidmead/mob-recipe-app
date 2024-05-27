import { RecipeCard } from "../components/RecipeCard";

export const Recipes: React.FC = () => {
  return (
    <>
      <div className="grid grid-cols-4">
        <RecipeCard />
      </div>
    </>
  );
};
