
class Product {
    _id = 0;
    _title = '';
    _price = 0.0;
    _thumbnail = '';

    constructor({id, title, price, thumbnail}){
        if(typeof id !== 'number'){
            throw new Error('id its not an number')
        }

        this._id = id
        this._title = title
        this._price = price
        this._thumbnail = thumbnail
    }

    // metodo publico toJSON
    toPlainObject (){
        return {
            id: this._id,
            title: this._title,
            price: this._price,
            thumbnail: this._thumbnail
        }
    }

    toJson (){
        return JSON.stringify(this.toPlainObject())
    }

    patchEntity({id, title, price, thumbnail}){
        this._id = id
        this._title = title
        this._price = price
        this._thumbnail = thumbnail
    }
    
    get id(){
        return this._id
    }

    set id(id){
        if(typeof id !== 'number'){
            throw new Error('Id its a number')
        }
        this._id = id
    }

    get title(){
        return this._title
    }

    set title(title){
        this._title = title
    }

    get price(){
        return this._price
    }

    set price(price){
        if(typeof price !== 'number'){
            throw new Error('The price not its a number')
        }
        this._price = price
    }

    get thumbnail(){
        return this._thumbnail
    }

    set thumbnail(thumbnail){
        this._thumbnail = thumbnail
    }

}

module.exports = Product