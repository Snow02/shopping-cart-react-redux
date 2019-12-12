
var initialState = [
    {
        id  : 1 ,
        name : 'Iphone X ' ,
        image : 'data:image/jpeg;base64,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',
        price : 500,
        desc : 'Product by Apple',
        rating : 4

    },
    {
        id  : 2 ,
        name : 'SamSung Galaxy XL ' ,
        image : 'data:image/jpeg;base64,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',
        price : 200,
        desc : 'Product by  SamSung',
        rating : 1

    },
    {
        id  : 3 ,
        name : 'Xiao mi LOL ' ,
        image : 'data:image/jpeg;base64,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',
        price : 100,
        desc : 'Product by Xiaomi',
        rating : 2

    }
];

const myReduce = (state = initialState , action) => {
        switch (action.type) {

            default : {
                return state;
            }
        }
};

export  default myReduce;