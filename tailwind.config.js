const {
    default: flattenColorPalette,
  } = require("tailwindcss/lib/util/flattenColorPalette");
  /** @type {import('tailwindcss').Config} */
import daisyui from "daisyui";
import { transform } from "lodash";
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                poppins: ["Poppins", "sans-serif"],
            },
            animation: {
                aurora: "aurora 60s linear infinite",
                blob : "blob 7s linear infinite"
            },
            keyframes: {
                blob : {
                    "0%" : {
                        transform : "translate(0px, 0px) scale(1)",
                    },
                    "33%" : {
                        transform : "translate(30px, -50px) scale(1)",
                    },
                    "66%" : {
                        transform : "translate(-20px, 20px) scale(1)",
                    },
                    "100%" : {
                        transform : "translate(0px, 0px) scale(1)",
                    }
                },
                aurora: {
                    from: {
                        backgroundPosition: "50% 50%, 50% 50%",
                    },
                    to: {
                        backgroundPosition: "350% 50%, 350% 50%",
                    },
                },
            },
        },
    },
    plugins: [daisyui, addVariablesForColors],
};
function addVariablesForColors({ addBase, theme }) {
    let allColors = flattenColorPalette(theme("colors"));
    let newVars = Object.fromEntries(
      Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
    );
  
    addBase({
      ":root": newVars,
    });
  }
