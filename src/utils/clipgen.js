export default function clipgen() {
    let count = 16
    let values = 'polygon(';

    for(let i = 0; i < count; i++) {
        values += ((Math.random() * 99) + 1).toFixed(1) + '% ' + ((Math.random() * 99) + 1).toFixed(1) + '%';
        if(i !== count - 1)
            values += ', ';
        else
            values += ')'
    }

    return values;
}