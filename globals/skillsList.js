'use strict'

const skillsArr = [
    'HTML',
    'JavaScript'
]

module.exports = {
    getSkills() {
        return skillsArr
    },
    addSkill(skill) {
        skillsArr.push(skill)
        return skillsArr
    }
}