// Utility class to manage pool of objects
// @author : David Ronai / @Makio64 / makiopolis.com

class ObjectPool{

	constructor(create, minSize, maxSize){
		if( create ) {
		  this.init( create, minSize, maxSize )
		}
	}

  init( create, minSize, maxSize ) {
	this.create = create
		this.minSize = minSize
		this.maxSize = maxSize
		this.list = []
		for(let i = 0; i<minSize; i++){
			this.add()
		}
  }

	add() {
		return this.list.push(this.create())
	}

	get() {
		if(this.list.length == 0){
			return this.create()
		}
		else {
			return this.list.pop()
		}
	}

	release ( item ) {
		if(this.list.length < this.maxSize){
			this.list.push(item)
		}
	}

}

module.exports = ObjectPool
