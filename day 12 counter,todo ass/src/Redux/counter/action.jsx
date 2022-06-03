


export const ADD_COUNT = "ADD_COUNT";
export const RED_COUNT = "RED_COUNT";

export const appActions = {
    INC_COUNT: "INC_COUNT",
    DEC_COUNT: "DEC_COUNT"
};

//Action Creator

export const addCount = (data) => {

    return {
        type: ADD_COUNT,
        payload: data,
    };
};
export const redCount = (data) => {

    return {
        type: RED_COUNT,
        payload: data,
    };
};
