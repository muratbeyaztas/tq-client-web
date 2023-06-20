

export default function LoginLayout({ children }) {

    return (<>
        <div className="w-full h-full bg-sky-100 flex justify-center items-center bg-[url('https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] bg-cover">
            {children}
        </div>
    </>)
}