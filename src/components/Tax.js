const Tax = (props) =>{
    return(
        <div>
            <p> The tax (13%) for price ${props.price} is ${props.price * 0.13}</p>
        </div>

    )
}

export default Tax 