var tipsVipsy = {
  bills : [124,48,268,180,42,100],
  tipscal : function(){
    this.tipsArray = [];
    this.totals = [];
    for (var i = 0; i <= this.bills.length - 1; i++){
      this.tipsArray[i]=((0.2 * this.bills[i]))
      this.totals[i] = this.tipsArray[i] + this.bills[i]
    }

  }
}

tipsVipsy.tipscal()
console.log('bills ' + tipsVipsy.bills)
console.log('tipes ' + tipsVipsy.tipsArray)
console.log('total ' + tipsVipsy.totals)
