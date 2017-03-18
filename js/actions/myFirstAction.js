export function myFirstAction() {
    return (dispatch, getState) => {
        dispatch({ type: 'MY_FIRST_ACTION' });
    }
}
