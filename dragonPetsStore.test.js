if(orderTotal({
    items: [
        { name: "Dragon food",         price: 8 },
        { name: "Dragon cage (small)", price: 800 }
    ]

}) !== 808 ) {
    throw new Error('Check fail: Happy path Example One')
}

if(orderTotal({
    items: [
        { name: "Dragon collar",         price: 20 },
        { name: "Dragon chew toy", price: 40 }
    ]

}) !== 60 ) {
    throw new Error('Check fail: Happy path Example Two')
}

function orderTotal(order) {
    return order.items.reduce((prev, cur) => cur.price + prev, 0)
}
