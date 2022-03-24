import { packageB } from "@nx-npm-workspace/package-b";
export const packageA = () => {
  return `this is package a\n${packageB()}`;
};
