"use client";

export const RecipeCard: React.FC = (recipes) => {
  return (
    <>
      <div className="border-black border-solid border-2 p-10">
        <div>{recipes.title}</div>
        <img src="" alt="" />
        <button>Bookmark </button>
      </div>
    </>
  );
};
