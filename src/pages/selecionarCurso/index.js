import React,{useState, useEffect} from 'react';
import { Redirect } from 'react-router-dom';
import Axios from 'axios';
import { Container, Image, Select, Button, UL, Header, DivFilter, Main, Card, DivCardTitle, CardTitle, DivCardInfos, DivCardButton, DivTitle, Title } from './styles';
import Logo from '../../assets/logo-horizontal.png';


function SelectCurso() {

    const [cursos, setCursos] = useState(false);
    const [redirect, setRedirect] = useState(false);

    useEffect(() => {
        getCEP();
    },[]);

    const getCEP = async () => {
        Axios.get(process.env.Curso).then((response) => {
            setTimeout(() => {
                setCursos(response.data.data);
            }, 100);
        }).catch((error) => {
            console.log(error);
        })
    }

    const handleClick = (data) => {
        setRedirect(true);
    }

    return (
        <Container>
            <Header>
                <Image src={Logo} />
            </Header>
            <DivTitle>
                <Title> Matriculas 2021/1</Title>
            </DivTitle>
            <DivFilter>
                <p>Filtros:</p>
                    <Select>
                        <option
                            value=""
                            disabled
                            selected
                            hidden
                        >
                            Nivel
                        </option>
                    </Select>
                    <Select>
                    <option
                            value=""
                            disabled
                            selected
                            hidden
                        >
                            Modalidade
                        </option>

                    </Select>
            </DivFilter>
            <Main>
                <UL>
                    {cursos ? (
                        cursos.map((curso, index) => {
                            return (
                                <Card key={index}>
                                    <DivCardTitle>
                                        <CardTitle> {curso.nome} </CardTitle>
                                    </DivCardTitle>
                                    <DivCardInfos>
                                        <UL>
                                            <li>Nivel: {curso.nivel}</li>
                                            <li>Modalidade: {curso.modalidade}</li>
                                            <li>Valor: {curso.investimento}</li>
                                            <li>Parcelas: {curso.parcelas}</li>
                                        </UL>
                                    </DivCardInfos>
                                    <DivCardButton>
                                        <Button onClick={handleClick}> fazer matricula</Button>
                                    </DivCardButton>
                                </Card>
                            );
                        })
                    ) : null}
                   
                </UL>
            </Main>
        {redirect ? (<Redirect to={"/cadastropart1"}/>) : null}
        </Container>
    );
}

export default SelectCurso;
