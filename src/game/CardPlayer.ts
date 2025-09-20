// import assert from 'assert';

import { Card } from "./CardHandler.ts"

export class CardPlayer {
    public deck:Array<Card> = [];
    private health:number = 0;

    // private discard:Array<Card> = [];
    // private hand:Array<Card> = [];
    // private draw:Array<Card> = [];

    public constructor(cards: ReadonlyArray<Card>, health:number) {
        for (const card of cards) {
            this.deck.push(card);
        }
        this.health = health;
    }

    // private shuffle() {

    // }

    // public drawCards(numCards:number) {
        
    // }

    public getHealth() {
        return this.health;
    }
}

export class Player extends CardPlayer {
    
    public constructor(cards: ReadonlyArray<Card>, health:number) {
        super(cards, health);
    }
}

export class NPC extends CardPlayer {

    public constructor(cards: ReadonlyArray<Card>, health:number) {
        super(cards, health);
    }
}

