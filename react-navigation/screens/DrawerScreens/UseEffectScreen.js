import React, { useEffect, useState } from "react";
import { Button } from "../../components/Button";
import { ScrollView, Text } from "react-native";
import UseEffectExample from "../../components/UseEffectExample";

export function UseEffectScreen() {
    return (
        <ScrollView>
            <Text>Adicione os exemplos desse Hook aqui</Text>  
            <UseEffectExample />
        </ScrollView>
    );
}
