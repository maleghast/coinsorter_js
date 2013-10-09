function CoinSorter() {
    this.coinmap = {
        200:"£2",
        100:"£1",
        50:"50p",
        20:"20p",
        10:"10p",
        5:"5p",
        2:"2p",
        1:"1p"
    };
    this.coinlist = [200,100,50,20,10,5,2,1];
}

//Create a method / function to test clean division and return relevant data to allow
//for creation of greedy algorithm solution based on functional composition.

CoinSorter.prototype.dividescleanby = function(amount, divisor) {
    remainder = amount % divisor;
    if (remainder === 0) {
        return {"dividesclean":true,"coin":divisor,"quotient":(amount/divisor),"remainder":remainder};
    } else {
        return {"dividesclean":false,"coin":divisor,"quotient":Math.floor(amount/divisor),"remainder":remainder};
    }
};

CoinSorter.prototype.solve = function(amount) {
    cycles = this.coinlist.length;
    solution = [];
    for (var i = 0; i < cycles; i++) {
        result = this.dividescleanby(amount, this.coinlist[i]);
        if (result.dividesclean) {
            coin = this.coinmap[this.coinlist[i]];
            num = result.quotient;
            solution.push({cointype:coin,numcoins:num});
            for (var j = i+1; j < cycles; j++) {
                coin = this.coinmap[this.coinlist[j]];
                solution.push({cointype:coin,numcoins:0});
            }
            break;
        } else {
            coin = this.coinmap[this.coinlist[i]];
            num = result.quotient;
            solution.push({cointype:coin,numcoins:num});
            amount = result.remainder;
        }
    }
    return solution;
};