export const CHANGE_CATEGORY = 'CHANGE_CATEGORY';
export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';


export const increaseCounter = () => {

    return {

        type: INCREMENT,

    };

};

export const decreaseCounter = () => {

    return {

       type: DECREMENT,

    };

};

export const changeCategory = () => {

    return {
        type: CHANGE_CATEGORY,
    };
}