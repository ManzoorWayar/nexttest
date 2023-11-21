import React from 'react'

const getCustomers = async () => {
    const res = await fetch(`http://localhost:3000/api/customers`);

    if (!res.ok) {
        const response = await res?.json();

        throw new Error(response[0]?.message);
    }

    const response = await res?.json();

    return response;
};

async function Skl() {
    const data = await getCustomers()

    return (
        data?.map(customer => (


            <div key={customer._id}>{customer?.fullName}/</div>

        ))
    )
}

export default Skl