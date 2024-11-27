export type Server = {
  hackingSkill: number;
  ports: number;
  ram: number;
  depth: number;
  maxMoney: number;
  minSecurity: number;
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
      depth: 1,
      maxMoney: 1750000,
      minSecurity: 1.000
  },
  [Servers.FOODNSTUFF]: {
    hackingSkill: 1,
    ports: 0,
    ram: 16,
    depth: 1,
    maxMoney: 50000000,
    minSecurity: 3.000
  },
  [Servers.SIGMA_COSMETICS]: {
    hackingSkill: 5,
    ports: 0,
    ram: 16,
    depth: 1,
    maxMoney: 57500000,
    minSecurity: 3.000
  },
  [Servers.JOES_GUNS]: {
    hackingSkill: 10,
    ports: 0,
    ram: 16,
    depth: 1,
    maxMoney: 62500000,
    minSecurity: 5.000
  },
  [Servers.NECTAR_NET]: {
    hackingSkill: 20,
    ports: 0,
    ram: 16,
    depth: 2,
    maxMoney: 68750000,
    minSecurity: 7.000
  },
  [Servers.NEO_NET]: {
    hackingSkill: 20,
    ports: 1,
    ram: 32,
    depth: 3,
    maxMoney: 125000000,
    minSecurity: 8.000
  },
  [Servers.THE_HUB]: {
    hackingSkill: 282,
    ports: 2,
    ram: 16,
    depth: 4,
    maxMoney: 4311000000,
    minSecurity: 12.000
  },
  [Servers.SYSCORE]: {
    hackingSkill: 589,
    ports: 4,
    ram: 0,
    depth: 5,
    maxMoney: 11522000000,
    minSecurity: 26.000
  },
  [Servers.COMPUTEK]: {
    hackingSkill: 348,
    ports: 3,
    ram: 0,
    depth: 4,
    maxMoney: 5922000000,
    minSecurity: 20.000
  },
  [Servers.JOHNSON_ORTHO]: {
    hackingSkill: 299,
    ports: 2,
    ram: 0,
    depth: 4,
    maxMoney: 2093000000,
    minSecurity: 19.000
  },
  [Servers.ROTHMAN_UNI]: {
    hackingSkill: 377,
    ports: 3,
    ram: 64,
    depth: 5,
    maxMoney: 5369000000,
    minSecurity: 16.000
  },
  [Servers.PHANTASY]: {
    hackingSkill: 100,
    ports: 2,
    ram: 32,
    depth: 3,
    maxMoney: 600000000,
    minSecurity: 7.000
  },
  [Servers.CRUSH_FITNESS]: {
    hackingSkill: 267,
    ports: 2,
    ram: 0,
    depth: 4,
    maxMoney: 1441000000,
    minSecurity: 13.000
  },
  [Servers.SUMMIT_UNI]: {
    hackingSkill: 437,
    ports: 3,
    ram: 32,
    depth: 5,
    maxMoney: 6785000000,
    minSecurity: 19.000
  },
  [Servers.I_I_I_I]: {
    hackingSkill: 358,
    ports: 3,
    ram: 256,
    depth: 5,
    maxMoney: 0,
    minSecurity: 1.000
  },
  [Servers.CSEC]: {
    hackingSkill: 60,
    ports: 1,
    ram: 8,
    depth: 2,
    maxMoney: 0,
    minSecurity: 1.000
  },
  [Servers.SILVER_HELIX]: {
    hackingSkill: 150,
    ports: 2,
    ram: 64,
    depth: 3,
    maxMoney: 1125000000,
    minSecurity: 10.000
  },
  [Servers.NETLINK]: {
    hackingSkill: 384,
    ports: 3,
    ram: 16,
    depth: 4,
    maxMoney: 6875000000,
    minSecurity: 21.000
  },
  [Servers.ZB_INSTITUTE]: {
    hackingSkill: 736,
    ports: 5,
    ram: 32,
    depth: 5,
    maxMoney: 26551000000,
    minSecurity: 27.000
  },
  [Servers.CATALYST]: {
    hackingSkill: 437,
    ports: 3,
    ram: 64,
    depth: 5,
    maxMoney: 9255000000,
    minSecurity: 23.000
  },
  [Servers.NITESEC]: {
    hackingSkill: 209,
    ports: 2,
    ram: 16,
    depth: 4,
    maxMoney: 0,
    minSecurity: 1.000
  },
  [Servers.HONG_FANG_TEA]: {
    hackingSkill: 30,
    ports: 0,
    ram: 16,
    depth: 1,
    maxMoney: 75000000,
    minSecurity: 5.000
  },
  [Servers.HARAKIRI_SUSHI]: {
    hackingSkill: 40,
    ports: 0,
    ram: 16,
    depth: 1,
    maxMoney: 100000000,
    minSecurity: 5.000
  },
  [Servers.ZER0]: {
    hackingSkill: 75,
    ports: 1,
    ram: 32,
    depth: 2,
    maxMoney: 187500000,
    minSecurity: 8.000
  },
  [Servers.OMEGA_NET]: {
    hackingSkill: 192,
    ports: 2,
    ram: 32,
    depth: 3,
    maxMoney: 1634000000,
    minSecurity: 11.000
  },
  [Servers.IRON_GYM]: {
    hackingSkill: 100,
    ports: 1,
    ram: 32,
    depth: 1,
    maxMoney: 500000000,
    minSecurity: 10.000
  },
  [Servers.MAX_HARDWARE]: {
    hackingSkill: 80,
    ports: 1,
    ram: 32,
    depth: 2,
    maxMoney: 250000000,
    minSecurity: 5.000
  },
  [Servers.DARKWEB]: {
    hackingSkill: 1,
    ports: 5,
    ram: 0,
    depth: 1,
    maxMoney: 0,
    minSecurity: 1.000
  }
}