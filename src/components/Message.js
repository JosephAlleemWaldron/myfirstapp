const Message = (props) =>{
    return(
        <div>
        <h1>Hello, {props.friendName}...it's {props.myName} here !</h1>
        <h2>{props.detail}</h2>
        </div>

    )
}
export default Message