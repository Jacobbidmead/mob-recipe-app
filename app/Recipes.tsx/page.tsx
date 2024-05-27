import { RecipeCard } from "../components/RecipeCard";

interface Recipes {
  title: string;
  url: string;
  id: number;
}

const fetchData = async (): Promise<Recipes[]> => {
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
    console.log("Fetched data:", data);

    const recipeData: Recipes[] = data;

    return recipeData;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};
export const Recipes: React.FC = async () => {
  const recipes = await fetchData();
  return (
    <>
      <div className="grid grid-cols-4">
        <RecipeCard recipes={recipes} />
      </div>
    </>
  );
};
