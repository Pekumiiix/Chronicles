import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontSize: {
        title: "72px",
      },
      backgroundColor: {
        "bottom-right":
          "linear-gradient(270deg,#fdfbfa 5%,#d9d9d9 52.5%,#95a9d6 95%)",
      },
      backgroundImage: {
        "custom-conic":
          "conic-gradient(from 183.43deg at 41.07% 50%, #FFBF50 -2.64deg, #5856CA 140.99deg, #C837AB 221.11deg, #DF437D 271.16deg, #FFBF50 357.36deg, #5856CA 500.99deg)",
        "bottom-right":
          "linear-gradient(270deg,#fdfbfa 5%,#d9d9d9 52.5%,#95a9d6 95%)",
        "bottom-left":
          "linear-gradient(270deg,#95a9d6 2.62%,#d9d9d9 48%,#fdfbfa 100%)",
        "dot-gradient":
          "linear-gradient(270deg,#223B73 9.78%,#A10145 37.46%,#621E5C 66.94%)",
        "text-gradient": "linear-gradient(to right, #ff0000, #0000ff)",
      },
      boxShadow: {
        "inset-sm": "inset 0px 0px 1px 0px #00000066",
        "stack-shadow": "-8px 4px 20px 0px #0000000D",
      },
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
        caption: "#757575",
        stroke: "#DBDBDB",
        placeholder: "#B1B1B6",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
        "border-spin": {
          "100%": {
            transform: "rotate(-360deg)",
          },
        },
        slideToLeft: {
          from: { transform: "translateX(0%)" },
          to: { transform: "translateX(-100%)" },
        },
        slideToRight: {
          from: { transform: "translateX(0%)" },
          to: { transform: "translateX(100%)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "border-spin": "border-spin 7s linear infinite",
        slideToLeft: "slideToLeft 9s linear infinite",
        slideToRight: "slideToRight 9s linear infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
