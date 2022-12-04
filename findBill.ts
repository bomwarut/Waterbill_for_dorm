var wBillval_old : string = process.argv[2];
var wBill_old : number = Number(wBillval_old);
var wBillval_new : string = process.argv[3];
var wBill_new : number = Number(wBillval_new);
var waterRate : string = process.argv[4];
var water_Rate : number = Number(waterRate);

function water_Bill(wBill_old : number,wBill_new : number,water_Rate : number) : number{
    var amountW_present = wBill_old - wBill_new;
    var waterBill = amountW_present * water_Rate;
     return waterBill; 
}

console.log(water_Bill(wBill_old ,wBill_new ,water_Rate ));
