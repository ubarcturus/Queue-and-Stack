import { IDataScructure } from "./IDataStructure";

export class Queue implements IDataScructure {
    private _size = 0;

    public size(): number {

        return this._size;
    }
    public add(myParam: string): void {
        this._size = this._size + 1;
    }
}