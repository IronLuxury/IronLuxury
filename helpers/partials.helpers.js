module.exports = (hbs) => {
    hbs.registerHelper('formatDate', (date, options) => {
        let array = date.toString().split(' ');
        return `${array[1]} ${array[2]} ${array[3]}`;
    })
}