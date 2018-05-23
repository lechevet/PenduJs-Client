import { gameConstants} from '../constants';

export function game(state = {}, action) {
    switch (action.type) {
        case gameConstants.RES_SUCCESS:
            return { item: action.res };
        default:
            return state;
    }
}