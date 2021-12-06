exports.getRes = (obj) => {
    let result = {status: 1};
    if (obj?.status) {
        result.status = obj.status;
    }
    if (obj?.error) {
        result.error = obj.error;
        result.status = 0
    }
    if (obj?.message) {
        result.message = obj.message;
    }
    if (obj?.data) {
        result.data = obj.data;
    }
    return result;
}