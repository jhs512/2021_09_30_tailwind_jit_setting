module.exports = {
  mode: "jit",
  purge: [
    "./src/main/java/**/*.java",
    "./src/main/resources/templates/**/*.{js,html}",
  ],
  darkMode: "class", // or 'media' or 'class'
  plugins: [require("daisyui")],
};