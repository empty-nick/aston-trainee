export interface IPerson<N, A>{
    name: N;
    age: A;
    greetUser?: () => string
}

export type CounterType = {
    [key: string]: number;
    count: number;
}

export interface SuperObject{
    [key: string]: string;
}

export interface IObjects {
    [key: string]: any;
    here: {
        is: string;
        other: string;
    };
    object: string
}

export type DeepEqualType = <F extends object, S extends object>(obj1: F, obj2: S) => boolean
export type DeepEqual2 = (...object: object[]) => boolean