import React from 'react';
import { Container, Image, Select, Button, UL, Header, DivFilter, Main, Card, DivCardTitle, CardTitle, DivCardInfos, DivCardButton, DivTitle, Title } from './styles';
import Logo from '../../assets/logo-horizontal.png';


function SelectCurso() {

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
                    <Card>
                        <DivCardTitle>
                            <CardTitle> bcc </CardTitle>
                        </DivCardTitle>
                        <DivCardInfos>
                            <UL>
                                <li>Nivel: Graduação</li>
                                <li>Modalidade: EAD</li>
                                <li>Valor: 10.200,00</li>
                                <li>Parcelas: 12x R$5000,00</li>
                            </UL>
                        </DivCardInfos>
                        <DivCardButton>
                            <Button> fazer matricula</Button>
                        </DivCardButton>
                    </Card>
                    <Card>
                        <DivCardTitle>
                            <CardTitle> bcc </CardTitle>
                        </DivCardTitle>
                        <DivCardInfos>
                            <UL>
                                <li>Nivel: Graduação</li>
                                <li>Modalidade: EAD</li>
                                <li>Valor: 10.200,00</li>
                                <li>Parcelas: 12x R$5000,00</li>
                            </UL>
                        </DivCardInfos>
                        <DivCardButton>
                            <Button> fazer matricula</Button>
                        </DivCardButton>
                    </Card>
                    <Card>
                        <DivCardTitle>
                            <CardTitle> bcc </CardTitle>
                        </DivCardTitle>
                        <DivCardInfos>
                            <UL>
                                <li>Nivel: Graduação</li>
                                <li>Modalidade: EAD</li>
                                <li>Valor: 10.200,00</li>
                                <li>Parcelas: 12x R$5000,00</li>
                            </UL>
                        </DivCardInfos>
                        <DivCardButton>
                            <Button> fazer matricula</Button>
                        </DivCardButton>
                    </Card>
                    <Card>
                        <DivCardTitle>
                            <CardTitle> bcc </CardTitle>
                        </DivCardTitle>
                        <DivCardInfos>
                            <UL>
                                <li>Nivel: Graduação</li>
                                <li>Modalidade: EAD</li>
                                <li>Valor: 10.200,00</li>
                                <li>Parcelas: 12x R$5000,00</li>
                            </UL>
                        </DivCardInfos>
                        <DivCardButton>
                            <Button> fazer matricula</Button>
                        </DivCardButton>
                    </Card>
                    <Card>
                        <DivCardTitle>
                            <CardTitle> bcc </CardTitle>
                        </DivCardTitle>
                        <DivCardInfos>
                            <UL>
                                <li>Nivel: Graduação</li>
                                <li>Modalidade: EAD</li>
                                <li>Valor: 10.200,00</li>
                                <li>Parcelas: 12x R$5000,00</li>
                            </UL>
                        </DivCardInfos>
                        <DivCardButton>
                            <Button> fazer matricula</Button>
                        </DivCardButton>
                    </Card>
                </UL>
            </Main>
        </Container>
    );
}

export default SelectCurso;
