import React, {useState} from 'react';
import { Redirect } from 'react-router-dom';
import Axios from 'axios';
import { useForm } from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup'
import * as Yup from 'yup';
import { Container, Image, Button, Erro, DivTitle, DivButtons, Header, Form, Main, Input, Title } from './styles';
import Logo from '../../assets/logo-horizontal.png';


function Cadastro1() {

    const schema = Yup.object().shape({
        nome: Yup.string().min(5, 'Minimo 5 caracteres').required(),
        email: Yup.string().email().required(),
        telefone: Yup.string().matches(/^[0-9]+$/, 'telefone inválido').min(11, 'telefone inválido').max(11, 'telefone inválido').required(),
        cep: Yup.string().matches(/^[0-9]{8}$/,'CEP inválido').required(),
        data: Yup.string().required(),
        rua: Yup.string(),
        bairro: Yup.string(),
        cidade: Yup.string(),
        numero: Yup.string().matches(/^[0-9]+$/,'número inválido').min(1, 'número inválido').required(),
        complemento: Yup.string(),
    });

    const { register, handleSubmit, reset, errors } = useForm({resolver: yupResolver(schema)});
    const [validCEP, setValidCEP] = useState(false);
    const [endereco, setEndereco] = useState(false);
    const [redirect, setRedirect] = useState(false);

    const onSubmit = (data) => {
        reset();
        setRedirect(true);

    };

    const handleCheckCEP = async (data) => {
        Axios.post('https://teste-analista.herokuapp.com/api/checkcep',{"cep":`${data.target.value}`}).then((response) => {
            setTimeout(() => {
                setValidCEP(true);
                setEndereco(response.data.data);
            }, 100);
        }).catch((error) => {
            setTimeout(() => {
                setValidCEP(false);
                setEndereco(false);
            }, 100);
        })
    }

    return (
        <Container>
            <Header>
                <Image src={Logo} />
            </Header>
            <DivTitle>
                <Title> Cadastro Acadêmico</Title>
            </DivTitle>
            <Main>
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <Input ref={register} name={"nome"} type={"text"} placeholder={"Nome:"}/>
                    <Input ref={register} name={"email"} type={"text"} placeholder={"E-mail:"} />
                    <Erro>
                        {errors.nome?.message}
                    </Erro> 
                    <Erro>
                        {errors.email?.message}
                    </Erro> 
                    <Input ref={register} name={"data"} type={'date'} placeholder={"Data de Nascimento: "} />
                    <Input ref={register} name={"telefone"} type={"text"} placeholder={"Telefone:"}/>
                    <Erro>
                        {errors.data?.message}
                    </Erro> 
                    <Erro>
                        {errors.telefone?.message}
                    </Erro> 
                    <Input ref={register} name={"cep"} onBlur={(data) => handleCheckCEP(data)} type={"text"} placeholder={"CEP:"}/>
                    <Input ref={register} name={"rua"} type={"text"} value={endereco? endereco.logradouro : ''}placeholder={"Rua:"} disabled/>
                    <Erro>
                        {errors.cep?.message}
                    </Erro> 
                    <Erro>
                        {errors.rua?.message}
                    </Erro> 
                    <Input ref={register} name={"bairro"} type={"text"} value={endereco? endereco.bairro : ''} placeholder={"Bairro:"} disabled/>
                    <Input ref={register} name={"cidade"} type={"text"} value={endereco? endereco.localidade : ''}placeholder={"Cidade:"} disabled/>
                    <Erro>
                        {errors.bairro?.message}
                    </Erro> 
                    <Erro>
                        {errors.cidade?.message}
                    </Erro> 
                    <Input ref={register} name={"numero"} type={"text"} placeholder={"Número:"} disabled={!validCEP}/>
                    <Input ref={register} name={"complemento"} type={"text"} placeholder={"Complemento:"} disabled={!validCEP}/>
                    <Erro>
                        {errors.numero?.message}
                    </Erro> 
                    <Erro>
                        {errors.completo?.message}
                    </Erro> 
                    <DivButtons>
                        <Button ref={register} type={"reset"}> Limpar </Button>
                        <Button ref={register} type={"submit"}> Próximo </Button>
                    </DivButtons>
                </Form>
            </Main>
            {redirect ? (<Redirect to={"/cadastropart2"}/>) : null}
        </Container>
    );
}

export default Cadastro1;
