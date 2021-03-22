import { camelCase } from 'lodash';

import { RequiredContext } from '@/models';

const buildModuleArray = (): { [key: string]: string } => {
  const modules: { [key: string]: string } = {};

  const requireModule = (require as RequiredContext).context('.', true, /\.store\.ts$/);

  requireModule.keys().forEach((fileName: string) => {
    if (fileName === './index.ts') return;

    const moduleName = camelCase(fileName.replace(/(\.\/|\.ts)/g, ''));

    modules[moduleName] = {
      ...requireModule(fileName)
    };
  });

  return modules;
};

export const buildStoreModule = (): void => {
  buildModuleArray();
};
