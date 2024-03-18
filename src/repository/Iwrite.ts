export interface Iwrite<T> {

    store(id: String, voobj: T): Promise<T>;

    delete(id:String): Promise<Boolean>;

}