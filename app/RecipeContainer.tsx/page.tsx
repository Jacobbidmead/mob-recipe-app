"use client";

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
  const [bookMarks, setBookMarks] = useState([]);
  return (
    <>
      <div className="grid grid-cols-4 gap-4">
        {recipes.map((recipe) => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))}
      </div>
    </>
  );
};
