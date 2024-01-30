import React, { useEffect, useState } from 'react'

const Form = () => {
    const [formData, setFormData] = useState({
        name: '',
        surname: '',
        age: 0
    });
    const [errors, setErrors] = useState({
        name: '',
        surname: '',
        age: 0
    });

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData(preValue => ({ ...preValue, [name]: value }));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        validate();
    }

    const validate = () => {
        let errObj;

        Object.entries(formData).map(([key, value]) => {
            if (typeof value === 'number' || !value.trim()) {
                errObj = {
                    ...errObj,
                    [key]: `${key} cannot be empty`
                };
            }
        });

        setErrors(errObj);
    }

    useEffect(() => {
        console.log(formData)
    }, [formData]);

    return (
        <form onSubmit={handleSubmit} className='flex flex-col w-[400] border border-slate-300 p-5'>
            <div className='flex flex-col'>

                <label htmlFor="name"></label>
                <input
                    value={formData.name}
                    className='border border-slate-300'
                    onChange={handleChange}
                    name='name'
                    type="text" />
                <span className={`${errors?.name ? 'block' : 'hidden'} text-red-800 text-sm`}>{errors?.name}</span>
            </div>

            <div className='flex flex-col'>
                <label htmlFor="name"></label>
                <input
                    value={formData.surname}
                    className='border border-slate-300'
                    onChange={handleChange}
                    name='surname'
                    type="text" />
                <span className={`${errors?.surname ? 'block' : 'hidden'} text-red-800 text-sm`}>{errors?.surname}</span>
            </div>

            <div className='flex flex-col'>
                <div className=''>
                    <label htmlFor="age">Age</label>
                    <select
                        required
                        value={formData.age}
                        className='border border-slate-300' onChange={handleChange} name="age" >
                        <option value="10">10</option>
                        <option value="11">11</option>
                        <option value="12">12</option>
                        <option value="13">13</option>
                        <option value="20">20</option>
                    </select>
                    <span
                        className={`${errors?.age ? 'block' : 'hidden'} text-red-800 text-sm`}>{errors?.age}</span>

                </div>
            </div>
            <button type='submit'>Click</button>
        </form>
    )
}

export default Form
