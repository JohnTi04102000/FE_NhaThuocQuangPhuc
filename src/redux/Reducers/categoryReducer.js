import {CHANGE_CATEGORY} from '../Actions/categoryAction';

    const INITIAL_STATE = {
        category_Current: {state: 'check redux', action: 'change category'},
    };

    const categoryReducer = (state = INITIAL_STATE, action) => {

        switch (action.type) {

            case CHANGE_CATEGORY:

               return {

                 ...state, 
                 category_Current: 'tim mạch',

               };

             default: return state;

        }

    };

    export default categoryReducer;