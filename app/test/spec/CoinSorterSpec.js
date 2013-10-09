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
  
});