const initState = {
    wishes: [
        {
            title: 'my wish 1',
            category: 'book',
            description: 'Some description',
            imageURL: 'https://test.com/someimage1'
        },
        {
            title: 'my wish 2',
            category: 'item',
            description: 'Some description',
            imageURL: 'https://test.com/someimage2'
        }
    ]
}

const wishListReducer = (state = initState, action) => {
    switch(action.type) {
        case 'WISH_ADD':
            
    }
    return state;
}

export default wishListReducer