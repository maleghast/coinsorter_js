describe("CoinSorter", function() {
  var coinsorter;

  beforeEach(function() {
    coinsorter = new CoinSorter();
  });
  
  it("should have a map of coin values to labels and a list of coins as properties", function() {
    expect(coinsorter.coinmap).toBeDefined();
    expect(coinsorter.coinlist).toBeDefined();
    expect(coinsorter.coinmap).toEqual({200:"£2",100:"£1",50:"50p",20:"20p",10:"10p",5:"5p",2:"2p",1:"1p"}); 
    expect(coinsorter.coinlist).toEqual([200,100,50,20,10,5,2,1]); 
  });
  
  it("should have a function for testing clean division", function() {
    expect(coinsorter.dividescleanby).toBeDefined();
    expect(coinsorter.dividescleanby(200,100)).toEqual({"dividesclean":true,"coin":100,"quotient":2,"remainder":0});
    expect(coinsorter.dividescleanby(212,100)).toEqual({"dividesclean":false,"coin":100,"quotient":2,"remainder":12})
    expect(coinsorter.dividescleanby(100,200)).toEqual({"dividesclean":false,"coin":200,"quotient":0,"remainder":100})
  });
  
  it("should have a function for creating coin sort solution", function() {
     expect(coinsorter.solve).toBeDefined();
     expect(coinsorter.solve(100)).toEqual([
                                            {cointype:"£2",numcoins:0},
                                            {cointype:"£1",numcoins:1},
                                            {cointype:"50p",numcoins:0},
                                            {cointype:"20p",numcoins:0},
                                            {cointype:"10p",numcoins:0},
                                            {cointype:"5p",numcoins:0},
                                            {cointype:"2p",numcoins:0},
                                            {cointype:"1p",numcoins:0},
                                            ]);
    expect(coinsorter.solve(112)).toEqual([
                                            {cointype:"£2",numcoins:0},
                                            {cointype:"£1",numcoins:1},
                                            {cointype:"50p",numcoins:0},
                                            {cointype:"20p",numcoins:0},
                                            {cointype:"10p",numcoins:1},
                                            {cointype:"5p",numcoins:0},
                                            {cointype:"2p",numcoins:1},
                                            {cointype:"1p",numcoins:0},
                                            ]);
    expect(coinsorter.solve(547)).toEqual([
                                            {cointype:"£2",numcoins:2},
                                            {cointype:"£1",numcoins:1},
                                            {cointype:"50p",numcoins:0},
                                            {cointype:"20p",numcoins:2},
                                            {cointype:"10p",numcoins:0},
                                            {cointype:"5p",numcoins:1},
                                            {cointype:"2p",numcoins:1},
                                            {cointype:"1p",numcoins:0},
                                            ]);
    expect(coinsorter.solve(14)).toEqual([
                                            {cointype:"£2",numcoins:0},
                                            {cointype:"£1",numcoins:0},
                                            {cointype:"50p",numcoins:0},
                                            {cointype:"20p",numcoins:0},
                                            {cointype:"10p",numcoins:1},
                                            {cointype:"5p",numcoins:0},
                                            {cointype:"2p",numcoins:2},
                                            {cointype:"1p",numcoins:0},
                                            ]);
    expect(coinsorter.solve(3)).toEqual([
                                            {cointype:"£2",numcoins:0},
                                            {cointype:"£1",numcoins:0},
                                            {cointype:"50p",numcoins:0},
                                            {cointype:"20p",numcoins:0},
                                            {cointype:"10p",numcoins:0},
                                            {cointype:"5p",numcoins:0},
                                            {cointype:"2p",numcoins:1},
                                            {cointype:"1p",numcoins:1},
                                            ]);                                       
  });
  
});