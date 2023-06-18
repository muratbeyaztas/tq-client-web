


export default function LayoutPage({ children }) {
    return (<>

        <div className="w-full h-full bg-sky-200 flex flex-row">

            <div className="basis-1/4 bg-yellow-100 flex flex-col gap-2">

                <div className="logo w-full h-[100px] bg-green-100 justify-center items-center flex font-semibold">
                    logo
                </div>
                <div className="menu w-full h-full flex items-center justify-center font-semibold">
                    Menu
                </div>
            </div>

            <div className="basis-3/4 bg-red-100 flex items-center justify-center font-semibold">
                {children}
            </div>
        </div>

    </>)
}