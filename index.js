console.log("Hello World");

let c = 1;

function Add(a, b) {
  console.log(this.c);
  return a + b;
}

function Something() {
  console.log("nothing");
}

//Arrow function
let add2 = (a, b) => {
  //console.log(this.c) this will fail
  a + b;
};

Add(1, 2);

add2(2, 3);
const something2 = () => {
  console.log("nothing");
};

something2();

var myObject = {
  id: 1,
  add: function () {
    var a = 1;
  },
};
