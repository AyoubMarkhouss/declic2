import "react-i18next";

declare module "react-i18next" {
  interface CustomTypeOptions {
    // Define the default namespace
    defaultNS: "common";
    // Define the types for resources
    resources: {
      common: {
        welcome: string;
      };
    };
  }
}
