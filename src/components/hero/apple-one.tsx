export default function AppleOne() {
    const description = "Apple One bundles up to five Apple subscriptions for one lower monthly price, including up to 2TB of iCloud+ storage. And with the Family plan or Premier plan, you can invite up to five other people to join — with private access across all of their devices. It’s never been easier to get more. For less."
    return (
        <section className="relative w-screen h-screen">
            {/* <img src="/images/references/reference-1.png" alt="Apple One" className="w-full h-full object-cover absolute inset-0" /> */}
            <div className="relative z-10 mx-64 text-center pt-24">
                <div className="flex flex-col gap-2">
                    <p className="text-7xl font-medium"> One</p>
                    <h2 className="text-8xl font-bold">The best of Apple.</h2>
                    <h2 className="text-8xl font-bold">All in one.</h2>
                </div>
                <div className="pt-8 pr-12 pl-12 pb-12">
                    <p className="text-xl sm:text-2xl font-medium tracking-tight">
                        {description}
                    </p>
                </div>
                <button className="bg-[#0071e3] text-white px-8 py-3 rounded-full mt-8">
                    Learn more
                </button>
            </div>
        </section>)
}