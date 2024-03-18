export interface Iread<T>{

    findOneById(id:String): Promise<T>;

    findOneById(id:BigInt): Promise<T>;

    findOne(obj:T): Promise<T>;

    findAll(): Promise<T[]>;

    findManyBy(field:T, value:T): Promise<T[]>;

    findManyOrderBy(field:T, value:T, order:T, asc:Boolean): Promise<T[]>;
}