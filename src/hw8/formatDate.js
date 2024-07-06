export function formatDate (date) {
    const [dayN, monthN, yearN] = date.split('.');
    const formatedDate = +new Date(`${yearN}-${monthN}-${dayN}`);
    return formatedDate;
}