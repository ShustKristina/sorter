class Sorter {
  constructor() {
    // your implementation
  this.arr=[];
  this.compare = function(a, b){
    return a-b;
  };
  }

  add(element) {
    // your implementation
this.arr.push(element);
  }

  at(index) {
    // your implementation
    return this.arr[index];
  }

  get length() {
    // your implementation
    return this.arr.length;
  }

  toArray() {
    // your implementation
    return this.arr;
  }

  sort(indices) {
    // your implementation
   var sortArr = [];
   indices.sort(this.compare);

   for (var i=0; i<indices.length; i++){
     sortArr.push(this.arr[indices[i]]);
   }
   sortArr.sort(this.compare);
   for (i=0; i<sortArr.length; i++){
     this.arr[indices[i]]=sortArr[i];
   }
  }

  setComparator(compareFunction) {
    // your implementation
    this.сompare=compareFunction;
  }
}

module.exports = Sorter;