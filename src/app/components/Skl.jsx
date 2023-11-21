"use client"

import useSWR from "swr";

// const getCustomers = async () => {
//     const res = await fetch(`http://localhost:3000/api/customers`);

//     if (!res.ok) {
//         const response = await res?.json();

//         throw new Error(response[0]?.message);
//     }

//     const response = await res?.json();

//     return response;
// };

function Skl() {
    // const data = await getCustomers()

    const fetcher = (...args) => fetch(...args).then((res) => res.json());

    const { data, isLoading } = useSWR(
        `/api/customers`,
        fetcher
    );

    if (isLoading) {
        return <div className="relative">lod</div>
    }
    return (
        data?.map(customer => (


            <div key={customer._id}>{customer?.fullName}/</div>

        ))
    )
}

export default Skl