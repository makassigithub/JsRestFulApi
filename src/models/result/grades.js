module.exports = function(mark) {
    switch(mark){
    case 100 >= mark >= 90:
        return 'A+';
    case 90 > mark >= 89.89:
        return 'A';
    case 89.99 > mark >= 86:
        return 'A-';
    case 85.99 > mark >= 80:
        return 'B+';
    case 79.99 > mark >= 77:
        return 'B';
    case 76.99 > mark >= 74:
        return 'B-';
    case 73.99 > mark >= 72:
        return 'C+';
    case 71.99 > mark >= 69:
        return 'C';
    case 68.99 > mark >= 65:
        return 'C-';
    case 64.99 > mark >= 61:
        return 'D+';
    case 60.99 > mark >= 60:
        return 'D';
    default:
        return 'E';
    }
};
