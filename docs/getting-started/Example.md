To support consistent theming:
```
// tailwind.config.ts
module.exports = {
  content: [
    "./node_modules/softedge-ui/**/*.js",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
```
Add these to your global styles if needed:
```
@tailwind base;
@tailwind components;
@tailwind utilities;
```