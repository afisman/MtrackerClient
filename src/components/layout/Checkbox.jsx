import { useState } from 'react'
import { Form, ToggleButton, ButtonGroup } from 'react-bootstrap'
import { FormControl, FormLabel, RadioGroup, FormControlLabel, Radio, FormGroup, Checkbox } from '@mui/material'

const CycleCheckbox = ({ receivePain, painChecked, receiveMood, moodChecked, receiveFlow, flowChecked }) => {

    const handleChange = e => {
        const { value, name, type } = e.target
        const inputValue = type === 'checkbox' ? e.target.checked : value

        const currentPain = [...painChecked]
        let currentFlow = flowChecked
        let currentMood = moodChecked



        if (name === 'flow') {
            currentFlow = value
        } else if (name === 'mood') {
            currentMood = value
        }
        if (!painChecked.includes(name) && inputValue && type == 'checkbox') {
            currentPain.push(name)
        } else if (painChecked.includes(name)) {
            const painIndex = currentPain.indexOf(name)
            console.log(painIndex)
            painIndex > -1 && currentPain.splice(painIndex, 1)
        }
        receiveFlow(currentFlow)
        receiveMood(currentMood)
        receivePain(currentPain)
    }



    return (
        <>
            <FormControl>
                <FormLabel id='flow-radio-buttons'>Flow</FormLabel>
                <RadioGroup
                    aria-labelledby='flow-radio-buttons'
                    value={flowChecked}
                    name='flow'
                    row
                    onChange={handleChange}

                >
                    <FormControlLabel value={1} control={<Radio />} label='1' />
                    <FormControlLabel value={2} control={<Radio />} label='2' />
                    <FormControlLabel value={3} control={<Radio />} label='3' />
                    <FormControlLabel value={4} control={<Radio />} label='4' />

                </RadioGroup>
                <FormLabel id='mood-radio-buttons'>Mood</FormLabel>
                <RadioGroup
                    aria-labelledby='mood-radio-buttons'
                    value={moodChecked}
                    name='mood'
                    row
                    onChange={handleChange}
                >
                    <FormControlLabel value={1} control={<Radio />} label='1' />
                    <FormControlLabel value={2} control={<Radio />} label='2' />
                    <FormControlLabel value={3} control={<Radio />} label='3' />
                    <FormControlLabel value={4} control={<Radio />} label='4' />

                </RadioGroup>
                <FormLabel id='pain-Checkbox-buttons'>Pain</FormLabel>
                <FormGroup row>
                    <FormControlLabel
                        control={
                            <Checkbox onChange={handleChange} name="Abdomen" />
                        }
                        label="Abdomen"
                    />
                    <FormControlLabel
                        control={
                            <Checkbox onChange={handleChange} name="Pelvis" />
                        }
                        label="Pelvis"
                    />
                    <FormControlLabel
                        control={
                            <Checkbox onChange={handleChange} name="Nipples" />
                        }
                        label="Nipples"
                    />
                    <FormControlLabel
                        control={
                            <Checkbox onChange={handleChange} name="Head" />
                        }
                        label="Head"
                    />
                </FormGroup>
            </FormControl>
            {/* <Form.Group className='mb-3' controlId='flow' name='flow' onChange={handleChange}>
                <Form.Label>Flow</Form.Label>
                <div key={`inline-checkbox`} className="mb-3">
                    <Form.Check
                        inline
                        label="1"
                        name="1"
                        type={`radio`}
                        id={"1"}
                    />
                    <Form.Check
                        inline
                        label="2"
                        name="2"
                        type={`radio`}
                        id={"2"}
                    />
                    <Form.Check
                        inline
                        label="3"
                        name="3"
                        type={`radio`}
                        id={"3"}
                    />
                    <Form.Check
                        inline
                        label="4"
                        name="4"
                        type={`radio`}
                        id={"4"}
                    />
                </div>
            </Form.Group>
            <Form.Group className='mb-3' controlId='mood' name='mood' onChange={handleChange}>
                <Form.Label>Mood</Form.Label>
                <div key={`inline-checkbox`} className="mb-3">
                    <Form.Check
                        inline
                        label="1"
                        name="1"
                        type={`radio`}
                        id={"1"}
                    />
                    <Form.Check
                        inline
                        label="2"
                        name="2"
                        type={`radio`}
                        id={"2"}
                    />
                    <Form.Check
                        inline
                        label="3"
                        name="3"
                        type={`radio`}
                        id={"3"}
                    />
                    <Form.Check
                        inline
                        label="4"
                        name="4"
                        type={`radio`}
                        id={"4"}
                    />
                </div>
            </Form.Group> */}
        </>

    )
}

export default CycleCheckbox