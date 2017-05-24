var id=0;

function nextId(){
  id++;
  return 'p'+id;
}

function Product(name,desc,price){
  this.id=nextId();
  this.name=name;
  this.desc=desc;
  this.price=price;
}

var products=[
  new Product('iPhone 7','Apple',6800),
  new Product('ThinkPad','Lenovo',5999),
  new Product('LBP2900','Canon',1099)
];

module.exports={
  getProducts:()=>{
    return products;
  },

  getProduct:(id)=>{
    var i;
    for(i=0;i<products.length;i++){
      if(products[i].id===id){
	return products[i];
      }
    }
    return null;
  },
  createProduct:(name,desc,price)=>{
    var p=new Product(name,desc,price);
    products.push(p);
    return p;
  },
  deleteProduct:(id)=>{
    var i,index;
    for(i=0;i<products.length;i++){
      if(products[i].id===id){
        index=i;
        break;
      }
    }
    if(index>0){
      return products.splice(i,1)[0];
    }
    return null;
  }
}
