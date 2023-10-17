import React from 'react'
import { TextField } from '@mui/material'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


function Address() {
    const state = ["Andhra Pradesh",
        "Arunachal Pradesh",
        "Assam",
        "Bihar",
        "Chhattisgarh",
        "Goa",
        "Gujarat",
        "Haryana",
        "Himachal Pradesh",
        "Jammu and Kashmir",
        "Jharkhand",
        "Karnataka",
        "Kerala",
        "Madhya Pradesh",
        "Maharashtra",
        "Manipur",
        "Meghalaya",
        "Mizoram",
        "Nagaland",
        "Odisha",
        "Punjab",
        "Rajasthan",
        "Sikkim",
        "Tamil Nadu",
        "Telangana",
        "Tripura",
        "Uttarakhand",
        "Uttar Pradesh",
        "West Bengal",
        "Andaman and Nicobar Islands",
        "Chandigarh",
        "Dadra and Nagar Haveli",
        "Daman and Diu",
        "Delhi",
        "Lakshadweep",
        "Puducherry"]
    return (
        <div className="h-full ">
            <div className="bg-white pt-10 shadow-md mb-10">
                <img src="address.png" alt="" className="mx-auto" />
            </div>
            <div className="px-10 flex flex-col gap-5">

                <TextField id="outlined-basic" label="Full Name (required)*" variant="outlined" className='mt-8 w-full bg-white' />
                <TextField id="outlined-basic" label="Mobile Number (required)*" variant="outlined" className='mt-8 w-full bg-white' />
                <TextField id="outlined-basic" label="Pincode (required)*" variant="outlined" className='mt-8 w-full bg-white' />
                <div className="flex justify-between gap-2">
                    <TextField id="outlined-basic" label="City (required)*" variant="outlined" className='mt-8 w-full bg-white ' />
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">State (required) *</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            label="State (required) *"
                            className='bg-white'
                        >
                            {
                                state.map((element) => {
                                    return <MenuItem value={element}>{element}</MenuItem>
                                })
                            }

                        </Select>
                    </FormControl>
                </div>
                <TextField id="outlined-basic" label="House No. Building name (required)*" variant="outlined" className='mt-8 w-full bg-white' />
                <TextField id="outlined-basic" label="Road Area colony (required)*" variant="outlined" className='mt-8 w-full bg-white' />
            </div>
        <div className="flex justify-center">
        <button className="fixed bottom-0 py-2 text-xl hover:text-white px-6 w-full max-w-5xl bg-[#FB641B] block mx-auto">
                            Save Address
        </button>
        </div>
        </div>
    )
}

export default Address