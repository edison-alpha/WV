import { heroui } from "@heroui/react";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  darkMode: "class",
  plugins: [
    heroui({
      layout: {
        dividerWeight: "1px", 
        disabledOpacity: 0.45, 
        fontSize: {
          tiny: "0.75rem",
          small: "0.875rem",
          medium: "0.9375rem",
          large: "1.125rem",
        },
        lineHeight: {
          tiny: "1rem", 
          small: "1.25rem", 
          medium: "1.5rem", 
          large: "1.75rem", 
        },
        radius: {
          small: "8px", 
          medium: "12px", 
          large: "16px", 
        },
        borderWidth: {
          small: "1px", 
          medium: "1px", 
          large: "2px", 
        },
      },
      themes: {
        dark: {
          colors: {
            background: {
              DEFAULT: "#0A0A0F"
            },
            content1: {
              DEFAULT: "#12121A",
              foreground: "#ECEDEE"
            },
            content2: {
              DEFAULT: "#1A1A25",
              foreground: "#ECEDEE"
            },
            content3: {
              DEFAULT: "#23232F",
              foreground: "#ECEDEE"
            },
            content4: {
              DEFAULT: "#2C2C3A",
              foreground: "#ECEDEE"
            },
            divider: {
              DEFAULT: "rgba(255, 255, 255, 0.1)"
            },
            focus: {
              DEFAULT: "#FF5E3A"
            },
            foreground: {
              50: "#18181b",
              100: "#27272a",
              200: "#3f3f46",
              300: "#52525b",
              400: "#71717a",
              500: "#a1a1aa",
              600: "#d4d4d8",
              700: "#e4e4e7",
              800: "#f4f4f5",
              900: "#fafafa",
              DEFAULT: "#ECEDEE"
            },
            overlay: {
              DEFAULT: "#000000"
            },
            danger: {
              50: "#310413",
              100: "#610726",
              200: "#920b3a",
              300: "#c20e4d",
              400: "#f31260",
              500: "#f54180",
              600: "#f871a0",
              700: "#faa0bf",
              800: "#fdd0df",
              900: "#fee7ef",
              DEFAULT: "#f31260",
              foreground: "#ffffff"
            },
            default: {
              50: "#18181b",
              100: "#27272a",
              200: "#3f3f46",
              300: "#52525b",
              400: "#71717a",
              500: "#a1a1aa",
              600: "#d4d4d8",
              700: "#e4e4e7",
              800: "#f4f4f5",
              900: "#fafafa",
              DEFAULT: "#3f3f46",
              foreground: "#fff"
            },
            primary: {
              50: "#1A0E07",
              100: "#341C0E",
              200: "#4E2A15",
              300: "#68381C",
              400: "#824623",
              500: "#FF5E3A",
              600: "#FF7D5F",
              700: "#FF9C85",
              800: "#FFBBAA",
              900: "#FFDAD0",
              DEFAULT: "#FF5E3A",
              foreground: "#fff"
            },
            secondary: {
              50: "#180828",
              100: "#301050",
              200: "#481878",
              300: "#6020A0",
              400: "#7828C8",
              500: "#9353D3",
              600: "#AE7EDE",
              700: "#C9A9E9",
              800: "#E4D4F4",
              900: "#F2EAFA",
              DEFAULT: "#9353D3",
              foreground: "#fff"
            },
            success: {
              50: "#052814",
              100: "#095028",
              200: "#0e793c",
              300: "#12a150",
              400: "#17c964",
              500: "#45d483",
              600: "#74dfa2",
              700: "#a2e9c1",
              800: "#d1f4e0",
              900: "#e8faf0",
              DEFAULT: "#17c964",
              foreground: "#000"
            },
            warning: {
              50: "#312107",
              100: "#62420e",
              200: "#936316",
              300: "#c4841d",
              400: "#f5a524",
              500: "#f7b750",
              600: "#f9c97c",
              700: "#fbdba7",
              800: "#fdedd3",
              900: "#fefce8",
              DEFAULT: "#f5a524",
              foreground: "#000"
            }
          }
        }
      }
    })
  ]
}
