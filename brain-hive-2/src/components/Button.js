import React from 'react'; 

const Button = (props) => {
    return <button style={myStyles.button}
    {...props}>
    {props.children}
    </button>;
}

const myStyles = {
    button: {
        alignSelf: "center", 
        backgroundColor: "grey", 
        marginLeft: 5, 
        marginRight: 5, 
        marginBottom: 10, 
        marginTop: 5, 
        width: "60%",
        borderRadius: 10,
        fontSize: 13,
        paddingTop: 10, 
        paddingBottom: 10
    }
};

export default Button;