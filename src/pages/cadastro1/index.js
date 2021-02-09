import React from 'react';
import { useForm } from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup'
import * as Yup from 'yup';
import { Container, Image, Button, DivTitle, DivButtons, Header, Form, Main, Input, Title } from './styles';
import Logo from '../../assets/logo-horizontal.png';


function Cadastro1() {

    const schema = Yup.object().shape({
        nome: Yup.string().min(5, 'Minimo 5 caracteres').required(),
        email: Yup.string().email().required(),
        telefone: Yup.string().matches(/^[0-9]+$/, 'telefone inválido').min(11, 'telefone inválido').max(11, 'telefone inválido').required(),
        cep: Yup.string().matches(/^[0-9]{8}$/,'CEP inválido').required(),
        data: Yup.string().required(),
        rua: Yup.string().required(),
        bairro: Yup.string().required(),
        cidade: Yup.string().required(),
        numero: Yup.string().matches(/^[0-9]+$/,'número inválido').min(1, 'número inválido').required(),
        complemento: Yup.string(),
    });

    const { register, handleSubmit, reset, errors } = useForm({resolver: yupResolver(schema)});
   //const [validCEP, setValidCEP] = useState(false);

    const onSubmit = (data) => {
        console.log(data);
        reset();
    };

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
                    {errors.nome?.message} 
                    <Input ref={register} name={"email"} type={"text"} placeholder={"E-mail:"} />
                    {errors.email?.message}
                    <Input ref={register} name={"data"} type={'date'} placeholder={"Data de Nascimento: "} />
                    {errors.data?.message}
                    <Input ref={register} name={"telefone"} type={"text"} placeholder={"Telefone:"}/>
                    {errors.telefone?.message}
                    <Input ref={register} name={"cep"} type={"text"} placeholder={"CEP:"}/>
                    {errors.cep?.message}
                    <Input ref={register} name={"rua"} type={"text"} placeholder={"Rua:"} disabled/>
                    {errors.rua?.message}
                    <Input ref={register} name={"bairro"} type={"text"} placeholder={"Bairro:"} disabled/>
                    {errors.bairro?.message}
                    <Input ref={register} name={"cidade"} type={"text"} placeholder={"Cidade:"} disabled/>
                    {errors.cidade?.message}
                    <Input ref={register} name={"numero"} type={"text"} placeholder={"Número:"} disabled/>
                    {errors.numero?.message}
                    <Input ref={register} name={"complemento"} type={"text"} placeholder={"Complemento:"} disabled/>
                    {errors.cep?.complemento}
                    <DivButtons>
                        <Button ref={register} type={"reset"}> Limpar </Button>
                        <Button ref={register} type={"submit"}> Próximo </Button>
                    </DivButtons>
                </Form>
            </Main>
        </Container>
    );
}

export default Cadastro1;
