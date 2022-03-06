import GlobalStyles from "../src/styles/global-styles";
import { CardProvider } from "../src/contexts/CardContext";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
export const decorators = [
  (Story) => (
    <>
      <GlobalStyles />
      <CardProvider>
        <Story />
      </CardProvider>
    </>
  ),
];
