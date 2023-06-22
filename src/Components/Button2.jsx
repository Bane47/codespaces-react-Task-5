import syled from 'styled-components';

const StyledButton = styled.button`
background-color: ${(props)=> props.color};
font-size:${(props)=>props.size};
padding:10px 20px 0px 0px;
border:none;
color:red;`;

const Button2 = ({text,color,size})=>{
return <StyledButton color={color} size={size}>{text}</StyledButton>
}