/**
 * items/page: 8
 * totalItem: 10
 * 
 * -> totalPage: 2    -> ceil(totalItem / items)
 * 
 * 
 */
const getTotalPage = (totalItem, itemsPerPage = 8) => {
    return Math.ceil(totalItem / itemsPerPage);
}

export {
    getTotalPage
}