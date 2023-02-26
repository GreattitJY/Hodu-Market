import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    basicWidth: string;

    color: {
      green100: string;
      gray100: string;
    };
  }
}
