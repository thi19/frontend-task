import { NextPage } from "next";
import { useEffect, useState } from "react";
import { Modal } from "react-bootstrap";
import { Filter } from "./Filter";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { List } from "./List";
import { executeRequest } from "../services/api";
import DatePicker from "react-datepicker"; 
import 'moment-timezone'; 
import moment from "moment";

type HomeProps = {
    setToken(s: string): void
}

interface Props {
  timezone: string
}


const setLocalZone = (date: Date, timezone: string) => {
  const dateWithoutZone = moment
    .tz(date, timezone)
    .format("YYYY-MM-DDTHH:mm:ss.SSS")
  const localZone = moment(dateWithoutZone).format("Z")
  const dateWithLocalZone = [dateWithoutZone, localZone].join("")

  return new Date(dateWithLocalZone)
}

const setOtherZone = (date: Date, timezone: string) => {
  const dateWithoutZone = moment(date).format("YYYY-MM-DDTHH:mm:ss.SSS") 
  const otherZone = moment.tz(date, timezone).format("Z")
  const dateWithOtherZone = [dateWithoutZone, otherZone].join("")

  return new Date(dateWithOtherZone)
}




export const Home: NextPage<HomeProps> = ({ setToken }) => {

    // STATES FILTER
    const [list, setList] = useState([]);
    const [previsionDateStart, setPrevisionDateStart] = useState('');
    const [previsionDateEnd, setPrevisionDateEnd] = useState('');
    const [status, setStatus] = useState(0);

    // STATES MODAL
    const [showModal, setShowModal] = useState(false);
    const [loading, setLoading] = useState(false);
    const [errorMsg, setErrorMsg] = useState('');
    const [name, setName] = useState('');
    const [finishPrevisionDate, setFinishPrevisionDate] = useState('');
    const [nomeAluno, setNomeAluno] = useState('');
    const [nomePai, setNomePai] = useState('');
    const [nomeMae, setNomeMae] = useState('');
    const [numeroCpf, setNumeroCpf] = useState('');
    const [datanascimento, setDataNascimento] = useState('');
    const [nomecurso, setNomeCurso] = useState('');
    const [graduacao, setGraduacao] = useState('');
    const [telefonefixo, setTelefoneFixo] = useState('');
    const [telefoneCelular, setTelefoneCelular] = useState('');
    const [endereco, setEndereco] = useState('');
    const [numero, setNumero] = useState('');
    let selected = new Date(); 
    const [timezone, setOtherZone] = useState(''); 
    const nomedoPai = 'Nome do Pai';
    const nomedoAluno = 'Nome do Aluno';
    const nomedoMae = 'Nome da Mãe';
    const cpf = 'CPF';
    const dataNascimento  = 'Data de nascimento';
    const curso = 'Curso';
    const nomeGraduacao = 'Graduação';
    const numeroTelefoneFixo = 'Telefone Fixo';
    const numeroTelefoneCelular = 'Telefone Celular';
    const nomeEndereco = 'Endereço';
    const numeroEndereco = 'Número'; 





    useEffect(() => {
        getFilteredData();
    }, [previsionDateStart, previsionDateEnd, status]);

    const sair = () => {
        localStorage.clear();
        setToken('');
    }

    const getFilteredData = async () => {
        try {
            let query = '?status=' + status;

            if (previsionDateStart) {
                query += '&finishPrevisionStart=' + previsionDateStart;
            }

            if (previsionDateEnd) {
                query += '&finishPrevisionEnd=' + previsionDateEnd;
            }

            const result = await executeRequest('task' + query, 'GET');
            if (result && result.data) {
                setList(result.data);
            }
        } catch (e) {
            console.log('Ocorreu erro ao buscar dados das tarefas:', e);
        }
    }

    const closeModal = () => {
        setShowModal(false);
        setLoading(false);
        setErrorMsg('');
        setName('');
        setFinishPrevisionDate('');
    }

    const createTask = async () => {
        try {
            setErrorMsg('');
            if (!name || !finishPrevisionDate) {
                return setErrorMsg('Favor preencher os campos');
            }

            setLoading(true);

            const body = {
                name,
                finishPrevisionDate
            }

            await executeRequest('task', 'POST', body);
            await getFilteredData();
            closeModal();
        } catch (e: any) {
            console.log('Ocorreu erro ao cadastrar Aluno:', e);
            if (e?.response?.data?.error) {
                setErrorMsg(e?.response?.data?.error);
            } else {
                setErrorMsg('Ocorreu erro ao cadastrar aluno');
            }
        }

        setLoading(false);
    }

    return (
        <>
            <Header sair={sair} togglModal={() => setShowModal(!showModal)} /> 
            <List tasks={list} getFilteredData={getFilteredData} />
            <Footer togglModal={() => setShowModal(!showModal)} />
            <Modal
                show={showModal}
                onHide={closeModal}
                className="container-modal">
                <Modal.Body>
                    <p>Cadastrar Aluno</p> 
                    {errorMsg && <p className="error">{errorMsg}</p>}
                    <input type="text" placeholder={nomedoAluno}
                        value={name} onChange={e => setNomeAluno
                            (e.target.value)} />
                    <input type="text" placeholder={nomedoPai}
                        value={finishPrevisionDate} onChange={e => setNomePai
                            (e.target.value)} />
                    <input type="text" placeholder={nomedoMae}
                        value={finishPrevisionDate} onChange={e => setNomeMae(e.target.value)}/>
                    <input type="number" placeholder={cpf} 
                        value={finishPrevisionDate} onChange={e => setNumeroCpf(e.target.value)}></input >  
                    <input type="date" placeholder={curso} value={finishPrevisionDate} onChange={e => setOtherZone(e.target.value)} ></input>     
                    <input type="text" placeholder={curso} value={finishPrevisionDate} onChange={e => setNomeCurso(e.target.value)} ></input>   
                    <input type="text" placeholder={nomeGraduacao}value={finishPrevisionDate} onChange={e => setGraduacao(e.target.value)} ></input>
                    <input type="text" placeholder={numeroTelefoneFixo} value={finishPrevisionDate} onChange={e => setTelefoneFixo(e.target.value)}></input>
                    <input type="text" placeholder={numeroTelefoneCelular} value={finishPrevisionDate} onChange={e => setTelefoneCelular(e.target.value)} ></input>
                    <input type="text" placeholder={nomeEndereco} value={finishPrevisionDate} onChange={e => setEndereco(e.target.value)}></input>
                    <input type="text" placeholder={numeroEndereco} value={finishPrevisionDate} onChange={e => setNumero(e.target.value)}></input>
                </Modal.Body> 
                <Modal.Footer>
                    <div className="button col-12">
                        <button disabled={loading} onClick={createTask}>
                            {loading ? '...Carregando' : 'Salvar'}
                        </button>
                        <span onClick={closeModal}>Cancelar</span>
                    </div>
                </Modal.Footer>
            </Modal>
        </>
    );
}