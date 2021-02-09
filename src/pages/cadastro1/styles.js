import styled from 'styled-components';

const Container = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-flow: column wrap;
    justify-content: center;
    align-items: center;
    background-color: inherit;

    @media (max-width: 768px){
        height: 100%;
        width: 100%;
    }
`;

const Header = styled.div`
    height: 15%;
    width: 100%;
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: center;
    border-bottom: 2px solid #002e54;
`;

const DivTitle = styled.div`
    max-height: 10%;
    width: 95%;
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: center;
    margin-top: 10px;
    margin-bottom: 10px;
`;

const Title = styled.h1`
    color: #002e54;
`;

const Main = styled.div`
    height: 75%;
    width: 95%;
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: center;
`;

const Image = styled.img`
    height: 90%;
    background-color: inherit;
`;

const Input = styled.input`
    height: 50px;
    width: 45%;
    font-size: 100%;
    border-bottom: 2px solid #002e54;
    &:focus {
        border-bottom: 2px solid #5098d0;
    }
    background-color: inherit;
    margin: 5px;
    padding: 2px;

    @media (max-width: 768px){
        height: 50px;
        width: 100%;
        margin: 2px;
    }
`;

const Button = styled.button`
    height: 50%;
    font-size: 100%;
    border-radius: 6px;
    color: white;
    background-color: #002e54;
    &:hover{
        background-color: #5098d0;
    }

    @media (max-width: 768px){
        height: 50px
    }
    padding: 2px;
    margin: 2px;
`;

const DivButtons = styled.div`
    height: 15%;
    width: 95%;
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: center;
    margin: 5px;
`;

const Form = styled.form`
    height: 100%;
    width: 100%;
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-items: center;

    @media (max-width: 768px){
        justify-content: space-evenly;
    }



`;



export {
    Container,
    Image,
    Button,
    Input,
    Header,
    Main,
    DivTitle,
    DivButtons,
    Title,
    Form
};
