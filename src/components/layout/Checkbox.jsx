
import { FormControl, FormLabel, RadioGroup, FormControlLabel, Radio, FormGroup, Checkbox } from '@mui/material'
import b1 from '../../icons/bleed/1.png'
import b2 from '../../icons/bleed/2.png'
import b3 from '../../icons/bleed/3.png'
import b4 from '../../icons/bleed/4.png'
import m1 from '../../icons/mood/1.png'
import m2 from '../../icons/mood/2.png'
import m3 from '../../icons/mood/3.png'
import m4 from '../../icons/mood/4.png'
import p1 from '../../icons/pain/1.png'
import p2 from '../../icons/pain/2.png'
import p3 from '../../icons/pain/3.png'
import p4 from '../../icons/pain/4.png'




import './Checkbox.css'
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
                <div className='flowGroup'>

                    <FormLabel id='flow-radio-buttons' className='button-title'>
                        <p className='button-title'>
                            Flow
                        </p>
                    </FormLabel>
                    <RadioGroup
                        aria-labelledby='flow-radio-buttons'
                        value={flowChecked}
                        name='flow'
                        row
                        onChange={handleChange}

                    >
                        <FormControlLabel value={1} control={<Radio />} label={<img
                            src={b1}
                            className='img-fluid'
                            alt='tst'
                        />} />
                        <FormControlLabel value={2} control={<Radio />} label={<img
                            src={b2}
                            className='img-fluid'
                            alt='tst'
                        />} />
                        <FormControlLabel value={3} control={<Radio />} label={<img
                            src={b3}
                            className='img-fluid'
                            alt='tst'
                        />} />
                        <FormControlLabel value={4} control={<Radio />} label={<img
                            src={b4}
                            className='img-fluid'
                            alt='tst'
                        />} />

                    </RadioGroup>
                </div>

                <div className='moodGroup'>

                    <FormLabel id='mood-radio-buttons' className='button-title'>
                        <p className='button-title'>
                            Mood
                        </p>
                    </FormLabel>
                    <RadioGroup
                        aria-labelledby='mood-radio-buttons'
                        value={moodChecked}
                        name='mood'
                        row
                        onChange={handleChange}
                    >
                        <FormControlLabel value={1} control={<Radio />} label={<img
                            src={m1}
                            className='img-fluid'
                            alt='tst'
                        />} />
                        <FormControlLabel value={2} control={<Radio />} label={<img
                            src={m2}
                            className='img-fluid'
                            alt='tst'
                        />} />
                        <FormControlLabel value={3} control={<Radio />} label={<img
                            src={m3}
                            className='img-fluid'
                            alt='tst'
                        />} />
                        <FormControlLabel value={4} control={<Radio />} label={<img
                            src={m4}
                            className='img-fluid'
                            alt='tst'
                        />} />

                    </RadioGroup>
                </div>
                <div className='painGroup'>
                    <FormLabel id='pain-Checkbox-buttons' >
                        <p className='button-title'>
                            Pain
                        </p>
                    </FormLabel>
                    <FormGroup row>
                        <FormControlLabel
                            control={
                                <Checkbox onChange={handleChange} name="Abdomen" />
                            }
                            label={<img
                                src={p3}
                                className='img-fluid'
                                alt='tst'
                            />}
                        />
                        <FormControlLabel
                            control={
                                <Checkbox onChange={handleChange} name="Pelvis" />
                            }
                            label={<img
                                src={p4}
                                className='img-fluid'
                                alt='tst'
                            />}
                        />
                        <FormControlLabel
                            control={
                                <Checkbox onChange={handleChange} name="Nipples" />
                            }
                            label={<img
                                src={p2}
                                className='img-fluid'
                                alt='tst'
                            />}
                        />
                        <FormControlLabel
                            control={
                                <Checkbox onChange={handleChange} name="Head" />
                            }
                            label={<img
                                src={p1}
                                className='img-fluid'
                                alt='tst'
                            />}
                        />
                    </FormGroup>
                </div>

            </FormControl>
        </>

    )
}

export default CycleCheckbox