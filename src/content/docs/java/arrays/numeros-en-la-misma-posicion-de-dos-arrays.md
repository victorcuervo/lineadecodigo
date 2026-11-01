---
title: "Números en la misma posición de dos arrays"
description: "Números en la misma posición de dos arrays en Java: aprende a comparar índices, controlar longitudes distintas y mostrar las coincidencias con un bucle for."
date: 2021-02-23
updatedDate: 2026-11-01
tags: ["array","for","if"]
slug: java/arrays/numeros-en-la-misma-posicion-de-dos-arrays
type: doc
topic: java
id: 602dc747-2a16-458f-94db-f56d5c1e61ff
author: victor_cuervo
download: https://github.com/victorcuervo/lineadecodigo_java/blob/master/src/com/lineadecodigo/java/basico/arrays/NumerosMismaPosicion.java
---

[Una de las preguntas que nos habéis hecho en los foros](http://lineadecodigo.com/java/numeros-repetidos-en-un-array-java/#comment-113893) es saber cuáles son los números que ocupan la misma posición en dos arrays mediante código [Java](http://www.manualweb.net/java). En este artículo vamos a comparar los elementos que tienen el mismo índice y a mostrar las coincidencias por pantalla.


## Cómo comparar los arrays


Lo primero será definir los dos arrays y [rellenarlos con números](https://lineadecodigo.com/java/inicializar-un-array-en-java/). Como no nos queremos complicar la vida con el proceso de carga de los arrays, los vamos a instanciar directamente.


```java
int[] a1 = {1, 2, 3, 4, 5};
int[] a2 = {1, 1, 3, 1, 5, 6};
```


En este ejemplo, las posiciones `0`, `2` y `4` contienen el mismo número en los dos arrays. El segundo array tiene además el valor `6` en la posición `5`, pero esa posición no se puede comparar porque no existe en `a1`.


Puede darse el caso de que uno de los arrays tenga un tamaño diferente al otro. Por ello, lo primero que vamos a hacer es averiguar cuál de los dos arrays es más pequeño y guardar ese valor como límite para recorrer ambos arrays. El tamaño de un array en [Java](http://www.manualweb.net/java) se obtiene mediante la propiedad [`length`](http://www.w3api.com/Java/Array/length) del [`Array`](http://www.w3api.com/Java/Array/), no mediante un método `length()`.


```java
int tamanio = (a1.length < a2.length) ? a1.length : a2.length;
```


Hemos [utilizado un operador ternario](http://lineadecodigo.com/java/el-operador-ternario-en-java/) para calcular este valor y evitar codificar una [estructura ](http://www.manualweb.net/java/sentencias-decision-java/#if-then-else)[`if`](http://www.manualweb.net/java/sentencias-decision-java/#if-then-else). También podríamos expresar el mismo cálculo con `Math.min(a1.length, a2.length)`, pero conservamos el operador ternario porque muestra de forma explícita cómo se elige la longitud menor.


Ahora recorreremos los dos arrays desde `0` hasta `tamanio - 1`. El límite del bucle debe ser estrictamente menor que `tamanio`, porque el último índice válido de un array es su longitud menos uno.


```java
for (int x = 0; x < tamanio; x++) {
    // Comparar arrays
}
```


Será dentro del bucle donde comprobaremos si los elementos del primer array y del segundo array son iguales. La posición nos la dará la variable `x` del bucle.


```java
for (int x = 0; x < tamanio; x++) {
    if (a1[x] == a2[x]) {
        System.out.println("El número " + a1[x] + " en la posición " + x);
    }
}
```


En el caso de que los elementos sean iguales, mostramos por pantalla mediante [`System.out`](http://w3api.com/wiki/Java:System.out) el número coincidente y la posición en la que se encuentra. La posición la proporciona la variable `x`. Al comparar valores de tipo `int`, el operador `==` compara directamente sus valores.


La salida esperada para los arrays del ejemplo es similar a esta:


```text
El número 1 en la posición 0
El número 3 en la posición 2
El número 5 en la posición 4
```


## Ejemplo completo en Java


Los fragmentos anteriores pueden reunirse en un programa ejecutable. Se conserva la lógica del ejemplo original y se añade únicamente la clase y el método `main` necesarios para probarla.


```java
public class NumerosMismaPosicion {

    public static void main(String[] args) {
        int[] a1 = {1, 2, 3, 4, 5};
        int[] a2 = {1, 1, 3, 1, 5, 6};

        int tamanio = (a1.length < a2.length) ? a1.length : a2.length;

        for (int x = 0; x < tamanio; x++) {
            if (a1[x] == a2[x]) {
                System.out.println("El número " + a1[x]
                        + " en la posición " + x);
            }
        }
    }
}
```


El programa solo compara los índices que existen en ambos arrays. Si los arrays deben tener exactamente la misma longitud, esa condición debe validarse antes de recorrerlos; utilizar la longitud menor es apropiado cuando se quieren comparar únicamente las posiciones compartidas.


La solución recorre como máximo la longitud del array más corto, por lo que su complejidad temporal es `O(min(n, m))` y utiliza `O(1)` espacio adicional. Así conseguimos saber si hay números en la misma posición de dos arrays con [Java](http://www.manualweb.net/java) sin modificar ninguno de ellos.

