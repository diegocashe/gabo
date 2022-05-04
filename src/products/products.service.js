const Product = require('./product.model')

let mockData = [
    {
        id: 1,
        title: "Perrarina",
        price: 8,
        thumbnail: 'https://www.rd.com/wp-content/uploads/2020/11/GettyImages-889552354-e1606774439626.jpg'
    },
    {
        id: 2,
        title: "Gatarina",
        price: 10,
        thumbnail: 'https://i.pinimg.com/originals/f1/78/d1/f178d1a13fb21218c3f39a46543aa69a.jpg'
    },
    {
        id: 3,
        title: "Juguetes de Gato",
        price: 15,
        thumbnail: 'https://www.boredpanda.com/blog/wp-content/uploads/2017/10/3D-Printed-Cat-Accessories-59f646048fe4b__880.jpg'
    },
    {
        id: 4,
        title: "Juguetes de Perro",
        price: 15,
        thumbnail: 'https://pawsandreward.com/wp-content/uploads/2019/01/paws-and-reward-mental-stimulation.jpg'
    },
    {
        id: 5,
        title: "Shampoo de Gatos",
        price: 20,
        thumbnail: 'https://st2.depositphotos.com/1063397/8027/i/950/depositphotos_80276094-stock-photo-bathing-a-cat.jpg'
    },
    {
        id: 6,
        title: "Shampoo de Perros",
        price: 22,
        thumbnail: 'https://www.petmd.com/sites/default/files/clean-dog-breeds-main.jpg'
    },
    {
        id: 7,
        title: "Collar de Gatos",
        price: 11,
        thumbnail: 'https://www.boredpanda.com/blog/wp-content/uploads/2017/10/1-59f64443e4462__880.jpg'
    },
    {
        id: 8,
        title: "Collar de Perros",
        price: 13,
        thumbnail: 'http://d2r9epyceweg5n.cloudfront.net/stores/019/016/products/collar_isabelino_perros_gatos1-aa9c92f16b5608d67d15121881553734-640-0.jpg'
    },
].map(e => new Product({ ...e }))

class ProductsService {
    productDAO = ''

    //get All products
    findAll() {
        return mockData
    }

    //get one product
    find(id) {
        const prd = mockData.find(e => e.id === id)
        if (prd) {
            return prd
        }
        throw new Error('Product dosnt exists')
    }

    // add a product
    add(product) {
        const id = (mockData[mockData.length - 1]).id + 1
        const newPrd = new Product({ ...product, id })
        console.log(newPrd)
        mockData.push(newPrd)
        return newPrd
    }

    // Edit a product
    edit(id, product) {
        const prd = mockData.find(e => e.id === id)

        if (prd) {
            prd.patchEntity({ id, ...product })
            const data = mockData.filter(e => e.id !== id)
            data.push(prd)
            mockData = data
            return prd
        }
        throw new Error('Product dosnt exists')
    }

    // Delete an product
    delete(id) {
        if (mockData.find(e => e.id === id)) {
            const data = mockData.filter(e => e.id !== id)
            mockData = data
            return true
        } else {
            throw new Error('Product dosnt exists')
        }
    }

}

module.exports = ProductsService