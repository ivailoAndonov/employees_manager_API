'use strict'

const express = require('express');
const router = express.Router();

const skillsList = require('../globals/skillsList')
const sectorsList = require('../globals/sectorsList')

module.exports = {
    editSettingsSkills: router.post('/settings/skills', async (req, res) => {

        try {
            return res.json({
                ok: 'editSettingsSkills'
            })
        } catch (error) {
            console.log(error);
            return res.status(500).send();
        }

    }),
    editSettingsSectors: router.post('/settings/sectors', async (req, res) => {

        try {
            return res.json({
                ok: 'editSettingsSectors'
            })
        } catch (error) {
            console.log(error);
            return res.status(500).send();
        }

    }),
    getTemplates: router.get('/settings/templates', async (req, res) => {

        try {
            let sectors = sectorsList.getSectors();
            let skills = skillsList.getSkills();
            
            return res.json({
                    sectors,
                    skills
                })
        } catch (error) {
            console.log(error);
            return res.status(500).send();
        }

    })
};