module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
    "app/**/*.{ts,tsx}",
    "components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "global-intentsactionprimaryforegroundcolor":
          "var(--global-intentsactionprimaryforegroundcolor)",
        "neutral-100": "var(--neutral-100)",
        "neutral-300": "var(--neutral-300)",
        "neutral-600": "var(--neutral-600)",
        "neutral-900": "var(--neutral-900)",
        "neutralneutral-400": "var(--neutralneutral-400)",
        "neutralneutral-600": "var(--neutralneutral-600)",
        "neutralneutral-800": "var(--neutralneutral-800)",
        neutralwhite: "var(--neutralwhite)",
        "primary-500": "var(--primary-500)",
        "primaryprimary-100": "var(--primaryprimary-100)",
        "primaryprimary-200": "var(--primaryprimary-200)",
        "primaryprimary-500": "var(--primaryprimary-500)",
        "primaryprimary-600": "var(--primaryprimary-600)",
        "primaryprimary-700": "var(--primaryprimary-700)",
        "secondarysecondary-300": "var(--secondarysecondary-300)",
        "secondarysecondary-500": "var(--secondarysecondary-500)",
        "secondarysecondary-800": "var(--secondarysecondary-800)",
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      fontFamily: {
        "deprecreated-button-large":
          "var(--deprecreated-button-large-font-family)",
        "deprecreated-button-small":
          "var(--deprecreated-button-small-font-family)",
        "heading-h1-heading": "var(--heading-h1-heading-font-family)",
        "heading-h2-heading": "var(--heading-h2-heading-font-family)",
        "heading-h4-heading": "var(--heading-h4-heading-font-family)",
        "paragraph-paragraph-default":
          "var(--paragraph-paragraph-default-font-family)",
        "paragraph-text-large": "var(--paragraph-text-large-font-family)",
        "paragraph-text-small": "var(--paragraph-text-small-font-family)",
        "utilities-button-small": "var(--utilities-button-small-font-family)",
        sans: [
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          '"Noto Color Emoji"',
        ],
      },
      boxShadow: {
        "card-shadow": "var(--card-shadow)",
        "thumbnail-shadow": "var(--thumbnail-shadow)",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
    container: { center: true, padding: "2rem", screens: { "2xl": "1400px" } },
  },
  plugins: [],
  darkMode: ["class"],
};
