export class Personne {
    id: number;
    lastname: string;
    firstname: string;
    age: number;
    path: string;
    cin: number;
    job: string;
    constructor(id=0,lastname='',firstname='',age=0,path='',cin=0,job=''){
        this.id=id;
        this.lastname=lastname;
        this.firstname=firstname;
        this.age=age;
        this.path=path;
        this.cin=cin;
        this.job=job; 
    }
}

