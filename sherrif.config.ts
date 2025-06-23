import { SheriffConfig, sameTag } from '@softarc/sheriff-core';

export const config: SheriffConfig = {
  autoTagging: true,
  enableBarrelLess: true,
  modules: {
    'src/features/<domain>': ['domain:<domain>', 'type:feature'],
    'src/app': ['domain:app', 'type:app'],
    'src/shared': ['type:shared'],
  }, // apply tags to your modules
  depRules: {
    'type:feature': [sameTag, 'type:shared'],
    'domain:app': [sameTag, 'type:shared', 'type:feature'],
    'domain:*': [sameTag, 'type:shared'],
    'type:app': [sameTag, 'type:feature', 'type:shared'],
    'type:shared': [sameTag],
    root: ['type:app'],
  },
};
