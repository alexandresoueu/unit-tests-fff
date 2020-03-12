const orderTotal = require('./orderTotal')

it('Quantity', () => {
    expect(orderTotal({
        items: [
            { 'name': 'Dragon candy',      price: 2, quantity: 3 }
        ]
    })).toBe(6)
})

it('No Quantity specified', () => {
    expect(orderTotal({
        items: [
            { 'name': 'Dragon candy',      price: 3 }
        ]
    })).toBe(3)
})

it('Happy path Example One', () => {
    expect(orderTotal({
        items: [
            { name: "Dragon food",         price: 8,   quantity: 1 },
            { name: "Dragon cage (small)", price: 800, quantity: 1 }
        ]
    
    })).toBe(808)
})

it('Happy path Example Two', () => {
    expect(orderTotal({
        items: [
            { name: "Dragon collar",         price: 20, quantity: 1 },
            { name: "Dragon chew toy",       price: 40, quantity: 1 }
        ]
    
    })).toBe(60)
})
