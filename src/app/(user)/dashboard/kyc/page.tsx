import React from 'react'
import KycForm from '../_components/forms/KycForm'

const page = () => {
  return (
    <div>
        <h1 className='text-2xl font-bold'>KYC</h1>
        <p className=' text-gray-300'>Please fill in the form below to complete your KYC.</p>
        <KycForm />
    </div>
  )
}

export default page