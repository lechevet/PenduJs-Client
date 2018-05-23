import { gameConstants } from '../redux/constants';

export const gameActions = {
    getRes
};


function getRes(res) {
    return dispatch => {
        dispatch(success(res));
    };

    function success(res) { return { type: gameConstants.RES_SUCCESS, res } }
}