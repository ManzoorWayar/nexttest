
const getCustomers = async () => {
  const res = await fetch(`${process.env.FORONT_URL}/api/customers`);

  if (!res.ok) {
    const response = await res?.json();

    throw new Error(response[0]?.message);
  }

  const response = await res?.json();

  return response;
};

export default async function Home() {

  const data = await getCustomers()

  console.log({ data })

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      aklnsd
      {data?.lenght > 0 && data?.map((customer) => (
        <p key={customer._id}>{customer.fullName}</p>
      ))}
    </main>
  )
}
