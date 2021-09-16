import React, { useEffect, useState } from "react";
import { Button } from "react-native-paper";



//Os Hooks permitem o uso do state sem a necessidade de ter uma classe. Com o Hook de Efeito, ou useEffect,  podemos operar efeitos colaterais durante a renderização do nosso componente. 
//O USE EFFECT TEM 2 PARAMETROS PRIMEIRO É UMA FUNÇÃO E OUTRO É UMA ARRAY DE DEPENCENCIAS

export default function UseEffectExample() {
    const [counter, setCounter] = useState(0);



    useEffect(() => {
        document.title = 10; //"CÓDIGO QUE A GENTE QUER EXECUTAR"

        return () => document.title = 'React App'; // "CASO O COMPONENTE SEJA DESMONTADO O QUE EU PRECISO DESFAZER"

    }, []);  //"QUANDO A GENTE IRA EXECUTAR". TODA VEZ QUE A DEPENDENCIA QUE ESTIVER ALI DENTRO FOR ALTERADA O CÓDIGO SERA EXECUTADO. NÃO DEPENDENDO DE NENHUMA VARIAVEL ELE EXECUTA APENAS UMA VEZ                           



    /*useEffect(()=> {
             document.title = counter;   
    }, [counter]);    
    */

    return (
        <>
            <h1>{counter}</h1>

            <button onClick={() => setCounter(counter + 1)}>Adicionar</button>
        </>
    )
}
