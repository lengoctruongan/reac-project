import styled from 'styled-components'
export const ButtonContainer=styled.button`
text-transform:capitalize
font-size:1.4rem;
background:transparent;
border:2px solid var(--lightBlue);
border-radius:0.5rem;
padding:0.2rem 0.5rem;
margin:0.2rem 0.5rem;
transition: all 0.5s ease-in-out;
&:hover{
    background:var(--lightBlue);
    color:var(--mainWhite);
}
&focus{
    outline:none !important;
}
`