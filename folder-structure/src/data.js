export const data = {
  name: "root",
  children: [
    {
      name: "public",
      children: [{ name: "index.html", children: [], isFolder: false }],
      isFolder: true,
    },
    {
      name: "src",
      children: [
        {
          name: "components",
          children: [
            {
              name: "Auth",
              children: [
                { name: "Login.jsx", children: [], isFolder: false },
                { name: "Signup.jsx", children: [], isFolder: false },
              ],
              isFolder: true,
            },
            { name: "Navbar.jsx", children: [], isFolder: false },
            { name: "Sidebar.jsx", children: [], isFolder: false },
          ],
          isFolder: true,
        },
        {
          name: "hooks",
          children: [
            { name: "useLocalStorage.js", children: [], isFolder: false },
          ],
          isFolder: true,
        },
        { name: "App.jsx", children: [], isFolder: false },
        { name: "index.css", children: [], isFolder: false },
      ],
      isFolder: true,
    },
    { name: "package.json", children: [], isFolder: false },
  ],
  isFolder: true,
};
