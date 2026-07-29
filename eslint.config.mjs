import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";
import jsxA11y from "eslint-plugin-jsx-a11y";
import prettier from "eslint-config-prettier/flat";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  // Must come last of the shared configs: turns off formatting rules that
  // would otherwise fight Prettier.
  prettier,
  {
    files: ["**/*.{js,jsx,ts,tsx}"],
    rules: {
      // `eslint-config-next` already registers the jsx-a11y plugin, so the
      // rules are spread in directly. Re-declaring the plugin is a config
      // error.
      ...jsxA11y.flatConfigs.recommended.rules,

      // Accessibility is a build gate on this project, not a review comment.
      "jsx-a11y/alt-text": "error",
      "jsx-a11y/anchor-is-valid": "error",
      "jsx-a11y/heading-has-content": "error",
      "@typescript-eslint/no-explicit-any": "error",
      "@typescript-eslint/no-non-null-assertion": "error",
    },
  },
  globalIgnores([".next/**", "out/**", "build/**", "next-env.d.ts"]),
]);

export default eslintConfig;
