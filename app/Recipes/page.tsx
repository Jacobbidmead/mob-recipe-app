import { RecipeContainer } from "../RecipeContainer/page";
import { Recipe } from "../types/interfaces";

const fetchData = async (): Promise<Recipe[]> => {
  const username = process.env.NEXT_PUBLIC_USERNAME;
  const password = process.env.NEXT_PUBLIC_PASSWORD;
  const url = process.env.NEXT_PUBLIC_API_URL;

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

  return <RecipeContainer recipes={recipes} />;
};
