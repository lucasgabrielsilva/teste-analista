import React from 'react';
import { useForm } from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup'
import * as Yup from 'yup';
import { Container, Image, Button, DivTitle, DivButtons, Header, Form, Main, Input, Title } from './styles';
import Logo from '../../assets/logo-horizontal.png';


function Cadastro2() {

    const schema = Yup.object().shape({
        rg: Yup.mixed().test('Arquivo deve ter no maximo 3mb', (value) =>
            handleTesteTamanhoRG(value)),
        comprovante: Yup.mixed().test('Arquivo deve ter no maximo 3mb', (value) =>
        handleTesteTamanhoComprovante(value))
    });

    const { register, handleSubmit, reset, errors } = useForm({resolver: yupResolver(schema)});
    //const [validCEP, setValidCEP] = useState(false);

    const onSubmit = (data) => {

        reset();
    };

    const handleTesteTamanhoRG = (data) => {
        let result = true;
        Object.keys(data).forEach((element) => {
            if (data[element].size > 3000000) {
                result = false;
            }
        });
        return result;
    };

    const handleTesteTamanhoComprovante = (data) => {
        let result = true;
        Object.keys(data).forEach((element) => {
            if (data[element].size > 3000000) {
                result = false;
            }
        });
        return result;
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
                    <Input ref={register} name={"rg"} type={"file"} placeholder={"RG:"}/>
                    {errors.rg?.message} 
                    <Input ref={register} name={"comprovante"} type={"file"} placeholder={"Comprovante de Residência:"} />
                    {errors.comprovante?.message}
                    <DivButtons>
                        <Button ref={register} type={"reset"}> Limpar </Button>
                        <Button ref={register} type={"submit"}> Próximo </Button>
                    </DivButtons>
                </Form>
            </Main>
        </Container>
    );
}

export default Cadastro2;
