import { useTheme } from "../../Context/ThemeContext";

function DarkTheme() {
  const { theme, setTheme } = useTheme(); // Access theme and setTheme from context

  return (
    <div
      className={`lg:w-full lg:h-full lg:p-20 lg:px-32 md:p-10 rounded-sm md:h-[88vh] md:w-[40vh] w-[30vh] p-4 h-[91vh] 
      bg-primary text-secondary dark:bg-dark_primary`}
    >
      <h1 className="text-center text-lg lg:text-5xl font-extrabold mb-3 md:mb-2 md:text-3xl md:p-5">
        DARK THEME
      </h1>

      <div className="flex justify-center space-x-12">
        <div className="space-x-2 lg:text-2xl font-semibold">
          <input
            type="radio"
            id="dark"
            name="theme"
            checked={theme === "dark"}
            onChange={() => setTheme("dark")}
          />
          <label htmlFor="dark">Dark</label>
        </div>

        <div className="space-x-2 lg:text-2xl font-semibold">
          <input
            type="radio"
            id="light"
            name="theme"
            checked={theme === "light"}
            onChange={() => setTheme("light")}
          />
          <label htmlFor="light">Light</label>
        </div>
      </div>
    </div>
  );
}

export default DarkTheme;
