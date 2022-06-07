// class processMonth {
//     constructor (name, monthCarg) {

//         this.name = name;
//         this.monthCarg = monthCarg;


//     }


//     static calculatProcess (monthCarg, hours) {

//         return monthCarg / 720 * hours;
//     }
// }

// let totalProcess = processMonth.calculatProcess(500, 6)

// console.log(totalProcess)



class processMonth {
    constructor (name, monthCarg) {

        this.name = name;
        this.monthCarg = monthCarg;


    }


    static calculatProcess (monthCarg, hours) {

        return monthCarg / 720 * hours;
    }
}

let processor = new processMonth(Gaia, 2000)

let total = processMonth.calculatProcess(processor.monthCarg(10))

console.log(total)