function BtnAdd1(props) {
    return (
        <button onClick={() => {
            props.setCount(props.count + 1)
        }}>Ajouter 1 click</button>
    )
}

export default BtnAdd1