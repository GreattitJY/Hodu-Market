import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    basicWidth: string;

    color: {
      green100: string;
      gray100: string;
      gray200: string;
      gray300: string;
      black100: string;
    };
  }
}
