export const PORT = 8789;

export interface PlayerClientInfo {
    readonly id:number;
    readonly cardInventory:Array<CardInfo>;
    //consumableInventory, itemInvectory, relicInvectory
    // playerAbilityScores:PlayerStatBlock;
    readonly playerStatus: EntityStatus;
    readonly inCombat:Boolean;

    readonly combatInfo:CombatInfo;
}

export interface EntityStatus {
    readonly maxHealth:number;
    readonly currentHealth:number;
}

export interface CombatInfo {
    readonly discardPile:Array<CardInfo>;
    readonly cardHand:Array<CardInfo>;
    readonly drawPile:Array<CardInfo>;

    readonly enemiesOnMap:Record<number,NPCInfo>;
}

export interface NPCInfo {
    readonly id:number;
    readonly status:EntityStatus;
}

export interface CardInfo {
    readonly title:string;
    readonly abilityText:string;
    readonly cost:number;

    readonly damage:number;
    readonly heal:number;
    // self damage, ally heal, shield, etc.
}

export type TurnType = "playCard" | "endTurn";

export interface TurnInfo {
    readonly turntype:TurnType;
    readonly card:CardInfo;
}