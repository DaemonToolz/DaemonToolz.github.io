export class Study {
    public school!: string;
    public location!: string;

    public from!: number;
    public to!: number;

    public diploma!: string;
    public score!: number;

    public specialization!: string;
    public achievements!: Achievemnts[];
    public courses!: string[];
}

export class Achievemnts{
    public date!: number;
    public name!: string;
    public score!: number;
}