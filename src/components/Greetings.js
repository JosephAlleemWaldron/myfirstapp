import Message from "./Message"

//React component



//function component
const Greetings = () => {
    //Must have a return statement returning only one html element

    return(
        <div>
            <h2>Greeting component</h2>

            <h5>Good morning,,,Happy Monday</h5>
            <Message friendName = {"Alex"} 
            myName = {"Paul"} 
            detail = {"Call me at 9"}/>
            {/* JSX - javascript XML */}
            <p>the sum of 9 and 5 is <strong>{9+5}</strong></p>
            <p>add (3, 5) = { add(3,5)}</p>
            <p>add (4, 25) = { add(4,25)}</p>
            <p>add (7, 43) = { add(7,43)}</p>


        </div>
    )

}

const add = (n1, n2) => {
    return (n1 + n2)
}




// Component must be exported to be used in other components
export default Greetings