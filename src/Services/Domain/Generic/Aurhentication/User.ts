export class User {
    private _id:number;
    private _name:string;

    constructor(
        id:number,
         name:string
         ) {  
        this._name = name;
        this._id = id;
      }

      get Name():string {
        return this._name;
      }
      
      get Id():number {
        return this._id;
      }
}