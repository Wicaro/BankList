import useBank from "@/Core/Hooks/BankHook";
import { useEffect, useState } from "react";
import { Col, Card } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import { CardBody, ButtonCreate, BorderDiv, FormControl } from "../Style/BankStyle";
import { AccountBank } from "@/Core/@types/BankType";

const BankCreate = () => {
    // Obtém o parâmetro 'code' da URL
    const { code } = useParams();

    // Hook 'useBank' para obter dados do banco
    const { bank, fetchBank } = useBank();
    
    // Estados locais para armazenar os dados da conta bancária
    const [agency, setAgency] = useState("");
    const [account, setAccount] = useState("");

    // Buscar informações do banco na API quando o componente é montado
    useEffect(() => {
        fetchBank(`${code}`);
    }, []);

    // Cria uma nova conta bancária e armazena os dados no localStorage
    const handleCreateAccount = () => {
        // Verifica se a agência e a conta foram preenchidas
        if (agency && account) {
            // Cria um objeto com os dados da conta bancária
            const data = {
                agency,
                account,
                code: bank?.code,
            };
            // Verifica se já existem contas bancárias armazenadas no localStorage
            const storedBankAccounts = JSON.parse(localStorage.getItem("bankAccounts") ?? "[]");

            // Verifica se a nova conta já existe no localStorage
            const existingAccount = storedBankAccounts.find((accountExists: AccountBank) => accountExists.agency === agency && accountExists.account === account && accountExists.code === bank?.code);

            if (existingAccount) {
                return alert("Essa conta bancária já foi cadastrada!");
            }

            // Adiciona a nova conta bancária ao array
            storedBankAccounts.push(data);
            // Armazena o array atualizado de contas bancárias no localStorage
            localStorage.setItem("bankAccounts", JSON.stringify(storedBankAccounts));
            // Exibe uma mensagem de sucesso para o usuário
            alert("Conta bancária criada com sucesso!");
        } else {
            // Exibe uma mensagem de erro caso a agência ou a conta não tenham sido preenchidas
            alert("Por favor, preencha todos os campos!");
        }
    };

    return (
        <Col md={4} className="mt-3">
            <BorderDiv>
                <p>
                    Banco: {bank?.fullName} - Code {bank?.code}
                </p>
                <p>ISPB: {bank?.ispb}</p>
                <p>Nome: {bank?.name}</p>
            </BorderDiv>
            <div className="mt-5">
                <p>Preenchar suas informações</p>

                <label className="mt-3">Agência</label>
                <FormControl placeholder="Digite sua agência" className="form-control mt-2" type="text" value={agency} onChange={(e) => setAgency(e.target.value)} />
                <label className="mt-3">Conta</label>
                <FormControl placeholder="Digite sua conta" className="form-control mt-1" type="text" value={account} onChange={(e) => setAccount(e.target.value)} />

                <ButtonCreate className="mt-4" onClick={handleCreateAccount}>
                    Criar minha conta bancária
                </ButtonCreate>
            </div>
        </Col>
    );
};

export default BankCreate;
