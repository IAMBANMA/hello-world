function Event(name){
	var handlers=[];

	this.getName=function(){
		return name;
	}

	this.addHandler=function(handler){
		handlers.push(handler);
	}

	this.removeHandler=function(handler){
		var index=handlers.indexOf(handler);
		if(index){
			handlers.splice(index,1);
		}
	}

	this.fire=function(eventArgs){
		handlers.forEach(function(h){
			h(eventArgs);
		});
	}
}

function EventAggregator(){
	var events=[];

	this.getEvent=function(eventName){
		return $.grep(events,function(event){
			return event.getName()==eventName;
		})[0];
	}

	this.publish=function(eventName,eventArgs){
		var event=this.getEvent(eventName);
		 if(!event){
		 	event=new Event(eventName);
		 	events.push(event);
		 }
		 event.fire(eventArgs);
	}

	this.subscribe=function(eventName,handler){
		var event=this.getEvent(eventName);
		if(!event){
			event=new Event(eventName);
			events.push(event);	
		}
		event.addHandler(handler);
	}

}

function Product(id,description){
	this.getId=function(){
		return id;
	}

	this.getDescription=function(){
		return description;
	}
}

function Cart(eventAggregator){
	var items=[];

	this.addItem=function(item){
		items.push(item);
		eventAggregator.publish('itemAdded',item);
	}
}

function CartController(cart,eventAggregator){
	eventAggregator.subscribe('itemAdded',function(eventArgs){
		var newItem=$('<li></li>').html(eventArgs.getDescription()).attr('id-cart',eventArgs.getId()).appendTo('#cart');
	});
	eventAggregator.subscribe('productSelected',function(eventArgs){
		cart.addItem(eventArgs.product);
	});
}

function ProductRepository(){
	var products=[new Product(1,'可乐'),new Product(2,'雪碧'),new Product(3,'啤酒'),new Product(4,'面包')];
	this.getProducts=function(){
		return products;
	}
}

function ProductController(eventAggregator,productRepository){
	var products=productRepository.getProducts();

	function onProductSelected(){
		var productId=$(this).attr('id');
		var product=$.grep(products,function(x){
			return x.getId()==productId;
		})[0];
		eventAggregator.publish('productSelected',{product:product});
	}

	products.forEach(function(product){
		var newItem=$('<li></li>').html(product.getDescription())
								.attr('id',product.getId())
								.dblclick(onProductSelected)
								.appendTo('#products');
	})	
}

(function(){
	var eventAggregator=new EventAggregator();
	var cart=new Cart(eventAggregator);
	var cartController=new CartController(cart,eventAggregator);
	var productRepository=new ProductRepository();
	var productController=new ProductController(eventAggregator,productRepository);
}())

















