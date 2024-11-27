import { NS } from "@ns";

import { SERVER_LIST, Servers } from "./constants/servers";
import { Entries } from "./types/generics";

export async function main(ns: NS): Promise<void> {
    const hackingLevel = ns.getHackingLevel();
    let highestMaxMoney = 0;
    let recommendedTarget: Servers | undefined;
  
    for (const [serverName, server] of (Object.entries(SERVER_LIST) as Entries<typeof SERVER_LIST>)) {
      if (server.hackingSkill < hackingLevel / 2) {
        if (server.maxMoney > highestMaxMoney) {
          highestMaxMoney = server.maxMoney;
          recommendedTarget = serverName;
        }
      }
    }
  
    // Handle case where no valid targets exist
    if (recommendedTarget === undefined) {
      ns.tprint(`Could not find a suitable target`);
      return;
    }

    ns.tprint(`Recommended Target: ${recommendedTarget}`);;
    ns.tprint(`ServerMaxMoney: ${SERVER_LIST[recommendedTarget].maxMoney}`);
    ns.tprint(`ServerMinSecurityLevel: ${SERVER_LIST[recommendedTarget].minSecurity}`);
    ns.tprint(`ServerNumPortsRequired: ${SERVER_LIST[recommendedTarget].ports}`);
  }