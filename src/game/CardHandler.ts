
import { CardPlayer, Player, NPC } from './CardPlayer.ts'

export class CardHandler {
    private readonly players:Array<Player> = [];
    private readonly enemies:Array<NPC> = [];
    private readonly allies:Array<NPC> = [];

    public constructor(players: ReadonlyArray<Player>, enemies: ReadonlyArray<NPC>, allies: ReadonlyArray<NPC>) {
        for (const player of players) {
            this.players.push(player);
        }
        for (const enemy of enemies) {
            this.enemies.push(enemy);
        }
        for (const ally of allies) {
            this.allies.push(ally);
        }
    }
    
    public createTurnOrder() { }

    public executeTurn(entity:CardPlayer) {

    }

}

export class Card {
    private name:string = "";
    private abilityText:string = "";

    private damage:number = 0;

    public constructor(name:string, abilityText:string) {
        this.name = name;
        this.abilityText = abilityText;
    }

    public getName() {
        return this.name;
    }

    public getAbilityText() {
        return this.abilityText;
    }

    public getDamage() {
        return this.damage;
    }
}