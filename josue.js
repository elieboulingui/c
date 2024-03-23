class josue{
    ecole="maison"
    constructor(name,prenom, age){
        this.name = name;
        this.prenom= prenom;
        this.age = age
    }
}
class maison extends josue{
    ecole="travail"
    super(name,lieu){
        this.name = name;
        this.lieu = lieu;
        this.age =this.age

    }
}
const jiji = new josue("bouli","sota",12);
const roro = new maison("onepiece",'bikele',12)
console.log(jiji)
console.log(roro)
;
class calculator{
    add(A,B){
        if(arguments.length===1){
            return A + 0;
        }else{
            return A+B
        }
    }
}
let jsoue = new calculator();
console.log(jsoue.add(2,34))