export class DataTransmitter {
    private type: any;
    private data: any;

    constructor(type: string, data: any) {
        this.type = type;
        this.data = data;
    }
    transmit() {
        return { type: this.type, data: this.data };
    }
}