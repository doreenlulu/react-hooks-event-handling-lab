// Code Keypad Component Here

function Keypad (){
    
    const handleChange = () => {
        console.log("Entering password...");
    }
    return <>
        <div>
            <h1>how cal i be of help</h1>
            <input type="password" name='search' onChange={handleChange}
            placeholder="enter password" />
        </div>
    </>
}

export default Keypad;
