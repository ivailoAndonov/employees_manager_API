'use strict'

const sectorsArr = [
    'Develop',
    'Management'
]

module.exports = {
    getSectors() {
        return sectorsArr
    },
    addSector(sector) {
        sectorsArr.push(sector)
        return sectorsArr
    }
}