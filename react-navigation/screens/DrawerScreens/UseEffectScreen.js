import React, { useEffect, useState } from "react";
import { Button } from "../../components/Button";
import { ScrollView, Text } from "react-native";

export function UseEffectScreen() {
    return (
        <ScrollView>
            <Text>Adicione os exemplos desse Hook aqui</Text>  
        </ScrollView>
    );
}

export default function effectExemple() {
    const[counter, setCounter] = useState(0);

    return(
        <>
        <h1>{counter}</h1>
        <Button onClick={() => setCounter(counter + 1)} Adicionar />
        </>
    );
}