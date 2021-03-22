/* eslint-disable @typescript-eslint/no-explicit-any */
export interface RequiredContext extends NodeRequire {
  context: (path: string, subDir: boolean, regExp: RegExp) => any;
}
