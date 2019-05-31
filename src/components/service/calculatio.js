export class Calculation {
    constructor(num1, num2) {
        this.num1 = num1;
        this.num2 = num2;
    }
    multi() {
        return this.num1 * this.num2;
    }
    
    addi() {
        return this.num1 + this.num2;
    }

}

export class Sum extends Calculation{
    constructor(num1, num2){
        super(num1, num2);
    }

    summation(){
        return this.num1 + this.num2;
    }
}







