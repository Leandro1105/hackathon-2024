import { mode } from "@chakra-ui/theme-tools";

export const globalStyles = {
  colors: {
    brand: {
      100: "#A8E6CE", // verde claro
      200: "#DCEDC1", // verde médio
      300: "#FFD54F", // verde oliva
      400: "#FFB74D", // verde mais escuro
      500: "#388E3C", // verde padrão
      600: "#4CAF50", // verde forte
      700: "#2E7D32", // verde escuro
      800: "#1B5E20", // verde mais escuro
      900: "#004D40", // verde muito escuro
    },
    brandScheme: {
      100: "#A8E6CE", // verde claro
      200: "#DCEDC1", // verde médio
      300: "#FFD54F", // verde oliva
      400: "#FFB74D", // verde mais escuro
      500: "#388E3C", // verde padrão
      600: "#4CAF50", // verde forte
      700: "#2E7D32", // verde escuro
      800: "#1B5E20", // verde mais escuro
      900: "#004D40", // verde muito escuro
    },
    brandTabs: {
      100: "#E0F2F1",
      200: "#00796B",
      300: "#00796B",
      400: "#00796B",
      500: "#00796B",
      600: "#004D40",
      700: "#00332A",
      800: "#00251A",
      900: "#001D12",
    },
    secondaryGray: {
      100: "#E0E5F2",
      200: "#E1E9F8",
      300: "#F4F7FE",
      400: "#E9EDF7",
      500: "#8F9BBA",
      600: "#A3AED0",
      700: "#707EAE",
      800: "#707EAE",
      900: "#1B2559",
    },
    red: {
      100: "#FEEFEE",
      500: "#EE5D50",
      600: "#FF0000",
    },
    red2: {
      100: "#FF0000",
      500: "#FF0000",
      600: "#FF0000",
    },
    blue: {
      50: "#EFF4FB",
      500: "#3965FF",
    },
    orange: {
      100: "#FFF6DA",
      500: "#FFB547",
    },
    green: {
      100: "#E6FAF5", // verde claro
      500: "#01B574", // verde padrão
    },
    navy: {
      50: "#d0dcfb",
      100: "#aac0fe",
      200: "#a3b9f8",
      300: "#728fea",
      400: "#3652ba",
      500: "#1b3bbb",
      600: "#24388a",
      700: "#1B254B",
      800: "#111c44",
      900: "#0b1437",
    },
    gray: {
      100: "#FAFCFE",
    },
  },
  styles: {
    global: (props) => ({
      body: {
        overflowX: "hidden",
        bg: mode("secondaryGray.300", "navy.900")(props),
        fontFamily: "DM Sans",
        letterSpacing: "-0.5px",
      },
      input: {
        color: "gray.700",
      },
      html: {
        fontFamily: "DM Sans",
      },
    }),
  },
};
