import styled from 'styled-components';

const Container = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-flow: column wrap;
    justify-content: center;
    align-items: center;
    background-color: inherit;
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

const DivFilter = styled.div`
    height:10%;
    max-width: 60%;
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: center;

`;

const Main = styled.div`
    height: 65%;
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

const Select = styled.select`
    height: 50%;
    font-size: 100%;
    border: 2px solid #002e54;
    border-radius: 6px;
    &:focus {
        border: 2px solid #5098d0;
    }
    background-color: inherit;
    margin: 2px;
    padding: 2px;
`;

const Button = styled.button`
    max-width: 90%;
    font-size: 100%;
    border-radius: 6px;
    color: white;
    background-color: #002e54;
    &:hover{
        background-color: #5098d0;
    }
    padding: 10px;

    @media (max-width: 768px){
        padding: 2px;
    }
`;

const UL = styled.ul`
    height: 100%;
    width: 60%;
    list-style: none;

    @media (max-width: 768px){
        width: 100%;
    }
`;

const Card = styled.li`
    min-height: 20%;
    width: 100%;
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-items: center;
    border: 2px solid #002e54;
    border-radius: 10px;
    margin-bottom: 5px;
`;

const DivCardTitle = styled.div`
    height: 25%;
    width: 100%;
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: center;
`;

const CardTitle = styled.h2`
    padding: 5px;
    color: #002e54;
`;

const DivCardInfos = styled.div`
    height: 75%;
    width: 70%;
    display: flex;
    flex-flow: row nowrap;
    justify-content: flex-start;
    align-items: center;
    padding: 5px;
`;

const DivCardButton = styled.div`
    height: 75%;
    width: 30%;
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: center;
`;

export {
    Container,
    Image,
    Select,
    Button,
    UL,
    Card,
    DivCardTitle,
    CardTitle,
    DivCardButton,
    DivCardInfos,
    Header,
    Main,
    DivFilter,
    DivTitle,
    Title
};
