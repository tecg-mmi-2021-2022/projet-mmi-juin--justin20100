import {Tools} from "./Tools";

export class Hero extends Tools{
    constructor(canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D, position: { x: number; y: number }) {
        super(canvas, ctx, position);
        this.draw();
    }

    draw(){

    }
}