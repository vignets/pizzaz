import { MantineProviderProps } from "@mantine/core";

export const mantineTheme: Omit<MantineProviderProps, "children"> = {
  theme: {
    /** Put your mantine theme override here */
    fontFamily: "Inter var, sans-serif",
    colorScheme: "light",
    colors: {
      indigo: [
        "#eef2ff",
        "#e0e7ff",
        "#c7d2fe",
        "#a5b4fc",
        "#818cf8",
        "#6366f1",
        "#4f46e5",
        "#4338ca",
        "#3730a3",
        "#312e81",
      ],
    },
    primaryColor: "indigo",
    defaultRadius: "md",
  },
  styles: {
    Modal: (theme) => ({
      // Shared button styles are applied to all buttons
      modal: { borderRadius: theme.radius.md },
      overlay: {
        backgroundColor: `${theme.colors.gray[7]} !important`,
      },
    }),
  },
  defaultProps: {
    Drawer: { position: "right" },
    Checkbox: { radius: "sm" },
    Popover: { radius: "md" },
  },
};
