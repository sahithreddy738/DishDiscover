const Contact=() => {
    return (
        <div>
            <h1 className="font-black m-2">Contact us page</h1>
            <div className="flex space-x-2 mx-2">
                <input placeholder="name" className="border border-black rounded-lg p-2"></input>
                <input placeholder="password" className="border border-black rounded-lg p-2"></input>
                <button className="text-white bg-black rounded-lg p-2">Submit</button>
            </div>
        </div>
    )
}

export default Contact;