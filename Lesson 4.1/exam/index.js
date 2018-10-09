function getFriendlyNumbers(start, end) {
    if( (typeof(start) != 'number') || (typeof(end) != 'number') ||
        start == '' || start == null || end == '' || end == null || 
        start > end || start < 0 || ((start ^ 0) === 0) || ((end ^ 0) === 0)) {
            return false;
    } else {

    }
    return [];
}

module.exports = {
    firstName: 'Name',
    secondName: 'Surname',
    task: getFriendlyNumbers
}