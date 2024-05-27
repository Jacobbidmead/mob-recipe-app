import { RecipeCard } from "../components/RecipeCard";

interface Image {
  id: number;
  title: string;
  url: string;
  width: string;
  height: string;
}

interface Recipe {
  id: number;
  title: string;
  slug: string;
  image: Image[];
}

const fetchData = async (): Promise<Recipe[]> => {
  const username = "mob-api";
  const password = "9r7rey5567ce0m7hbt1u";
  const url = "https://api.mob.co.uk/task/recipes.json";

  if (!username || !password || !url) {
    console.error("Missing environment variables");
    throw new Error("Missing environment variables");
  }

  const headers = new Headers();
  headers.set("Authorization", "Basic " + btoa(username + ":" + password));

  console.log("Fetching data from:", url);
  console.log("Authorization Header:", headers.get("Authorization"));

  try {
    const res = await fetch(url, {
      method: "GET",
      headers: headers,
    });

    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }

    const data = await res.json();
    console.log("JSON response:", data);

    const recipeData: Recipe[] = data.recipes;

    return recipeData;
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
};

export const Recipes = async () => {
  const recipes = await fetchData();

  return (
    <div className="grid grid-cols-4 gap-4">
      {recipes.map((recipe) => (
        <RecipeCard key={recipe.id} recipe={recipe} />
      ))}
    </div>
  );
};
