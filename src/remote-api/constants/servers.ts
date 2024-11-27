export type Server = {
  hackingSkill: number;
  ports: number;
  ram: number;
  depth: number;
}

export enum Servers {
  N00DLES = 'n00dles',
  FOODNSTUFF = 'foodnstuff',
  SIGMA_COSMETICS = 'sigma-cosmetics',
  JOES_GUNS = 'joesguns',
  NECTAR_NET = 'nectar-net',
  NEO_NET = 'neo-net',
  THE_HUB = 'the-hub',
  SYSCORE = 'syscore',
  COMPUTEK = 'computek',
  JOHNSON_ORTHO = 'johnson-ortho',
  ROTHMAN_UNI = 'rothman-uni',
  PHANTASY = 'phantasy',
  CRUSH_FITNESS = 'crush-fitness',
  SUMMIT_UNI = 'summit-uni',
  I_I_I_I = 'I.I.I.I',
  CSEC = 'CSEC',
  SILVER_HELIX = 'silver-helix',
  NETLINK = 'netlink',
  ZB_INSTITUTE = 'zb-institute',
  CATALYST = 'catalyst',
  NITESEC = 'avmnite-02h',
  HONG_FANG_TEA = 'hong-fang-tea',
  HARAKIRI_SUSHI = 'harakiri-sushi',
  ZER0 = 'zer0',
  OMEGA_NET = 'omega-net',
  IRON_GYM = 'iron-gym',
  MAX_HARDWARE = 'max-hardware',
  DARKWEB = 'darkweb'
}

export const SERVER_LIST: { [key in Servers]: Server } = {
  [Servers.N00DLES]: {
      hackingSkill: 1,
      ports: 0,
      ram: 4,
      depth: 1
  },
  [Servers.FOODNSTUFF]: {
    hackingSkill: 1,
    ports: 0,
    ram: 16,
    depth: 1
  },
  [Servers.SIGMA_COSMETICS]: {
    hackingSkill: 5,
    ports: 0,
    ram: 16,
    depth: 1
  },
  [Servers.JOES_GUNS]: {
    hackingSkill: 10,
    ports: 0,
    ram: 16,
    depth: 1
  },
  [Servers.NECTAR_NET]: {
    hackingSkill: 20,
    ports: 0,
    ram: 16,
    depth: 2
  },
  [Servers.NEO_NET]: {
    hackingSkill: 20,
    ports: 1,
    ram: 32,
    depth: 3
  },
  [Servers.THE_HUB]: {
    hackingSkill: 282,
    ports: 2,
    ram: 16,
    depth: 4
  },
  [Servers.SYSCORE]: {
    hackingSkill: 589,
    ports: 4,
    ram: 0,
    depth: 5
  },
  [Servers.COMPUTEK]: {
    hackingSkill: 348,
    ports: 3,
    ram: 0,
    depth: 4
  },
  [Servers.JOHNSON_ORTHO]: {
    hackingSkill: 299,
    ports: 2,
    ram: 0,
    depth: 4
  },
  [Servers.ROTHMAN_UNI]: {
    hackingSkill: 377,
    ports: 3,
    ram: 64,
    depth: 5,
  },
  [Servers.PHANTASY]: {
    hackingSkill: 100,
    ports: 2,
    ram: 32,
    depth: 3
  },
  [Servers.CRUSH_FITNESS]: {
    hackingSkill: 267,
    ports: 2,
    ram: 0,
    depth: 4
  },
  [Servers.SUMMIT_UNI]: {
    hackingSkill: 437,
    ports: 3,
    ram: 32,
    depth: 5
  },
  [Servers.I_I_I_I]: {
    hackingSkill: 358,
    ports: 3,
    ram: 256,
    depth: 5
  },
  [Servers.CSEC]: {
    hackingSkill: 60,
    ports: 1,
    ram: 8,
    depth: 2
  },
  [Servers.SILVER_HELIX]: {
    hackingSkill: 150,
    ports: 2,
    ram: 64,
    depth: 3
  },
  [Servers.NETLINK]: {
    hackingSkill: 384,
    ports: 3,
    ram: 16,
    depth: 4
  },
  [Servers.ZB_INSTITUTE]: {
    hackingSkill: 736,
    ports: 5,
    ram: 32,
    depth: 5
  },
  [Servers.CATALYST]: {
    hackingSkill: 437,
    ports: 3,
    ram: 64,
    depth: 5,
  },
  [Servers.NITESEC]: {
    hackingSkill: 209,
    ports: 2,
    ram: 16,
    depth: 4,
  },
  [Servers.HONG_FANG_TEA]: {
    hackingSkill: 30,
    ports: 0,
    ram: 16,
    depth: 1
  },
  [Servers.HARAKIRI_SUSHI]: {
    hackingSkill: 40,
    ports: 0,
    ram: 16,
    depth: 1,
  },
  [Servers.ZER0]: {
    hackingSkill: 75,
    ports: 1,
    ram: 32,
    depth: 2,
  },
  [Servers.OMEGA_NET]: {
    hackingSkill: 192,
    ports: 2,
    ram: 32,
    depth: 3,
  },
  [Servers.IRON_GYM]: {
    hackingSkill: 100,
    ports: 1,
    ram: 32,
    depth: 1,
  },
  [Servers.MAX_HARDWARE]: {
    hackingSkill: 80,
    ports: 1,
    ram: 32,
    depth: 2
  },
  [Servers.DARKWEB]: {
    hackingSkill: 1,
    ports: 5,
    ram: 0,
    depth: 1,
  }
}