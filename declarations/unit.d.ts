declare type WowUnitIdArena = "arena1" | "arena2" | "arena3" | "arena4" | "arena5"
declare type WowUnitIdRaidPlayer = "raid1" | "raid2" | "raid3" | "raid4" | "raid5" | "raid6" | "raid7" | "raid8" | "raid9" |
    "raid10" | "raid11" | "raid12" | "raid13" | "raid14" | "raid15" | "raid16" | "raid17" | "raid18" | "raid19" | "raid20" |
    "raid21" | "raid22" | "raid23" | "raid24" | "raid25" | "raid26" | "raid27" | "raid28" | "raid29" | "raid30" | "raid31" |
    "raid32" | "raid33" | "raid34" | "raid35" | "raid36" | "raid37" | "raid38" | "raid39" | "raid40";
declare type WowUnitIdRaidPlayerPet = "raidpet1" | "raidpet2" | "raidpet3" | "raidpet4" | "raidpet5" | "raidpet6" | "raidpet7" | "raidpet8" | "raidpet9" |
    "raidpet10" | "raidpet11" | "raidpet12" | "raidpet13" | "raidpet14" | "raidpet15" | "raidpet16" | "raidpet17" | "raidpet18" | "raidpet19" | "raidpet20" |
    "raidpet21" | "raidpet22" | "raidpet23" | "raidpet24" | "raidpet25" | "raidpet26" | "raidpet27" | "raidpet28" | "raidpet29" | "raidpet30" | "raidpet31" |
    "raidpet32" | "raidpet33" | "raidpet34" | "raidpet35" | "raidpet36" | "raidpet37" | "raidpet38" | "raidpet39" | "raidpet40";
declare type WowUnitIdParty = "party1" | "party2" | "party3" | "party4";
declare type WowUnitIdPartyPet = "partypet1" | "partypet2" | "partypet3" | "partypet4";
declare type WowUnitIdOther = "player" | "pet" | "focus" | "mouseover" | "vehicle" | "target" | "none" | "npc" | "targettarget";
declare type WowUnitId = WowUnitIdOther | WowUnitIdArena | WowUnitIdRaidPlayer | WowUnitIdRaidPlayerPet | WowUnitIdParty | WowUnitIdPartyPet;