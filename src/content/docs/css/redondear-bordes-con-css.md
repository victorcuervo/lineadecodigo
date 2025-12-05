---
title: Redondear bordes con CSS
description: "Ejemplo que nos explica cómo podemos redondear bordes con CSS mediante la propiedad border-radius y sus valores el longitud o porcentaje."
lastUpdated: 2023-09-17
slug: /css/redondear-bordes-con-css/
author: victor_cuervo
---

Gracias a [CSS3](https://www.manualweb.net/css/) podemos redondear los bordes de los elementos. Y es que para redondear bordes con [CSS3](https://www.manualweb.net/css/) utilizaremos la propiedad [`border-radius`](https://w3api.com/CSS/border-radius/).


La sintaxis general de la propiedad [`border-radius`](https://w3api.com/CSS/border-radius/) es la siguiente:


```css
border-radius: [tamaño|porcentaje];
```


De esta forma podemos indicar **el tamaño o porcentaje** en el que se redondeará cada una de las esquinas de la capa. El valor corresponde con el radio de la circunferencia trazada en la esquina.


Así, si utilizamos:


```css
border-radius: 15px;
```


Veremos el siguiente resultado:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KX2FR3W%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T105246Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCEfXsNId3IMurivFopMyFKxCRwY3YGJyMBirKk2nV1QgIgDmb6AMz7CiKz2I9eI6sMzYXsaz1UWOsPVYqwGg8r1hUq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDPLToHQLGZPz9OnTVSrcA7lwfbZM2ksAjfoVUUhTjU%2B0DETIkLAh1g1jZ1NGXqk8MRk8NtBUQSVAPazI8nrKi1N8eQhV%2BL9BQyI1MGsCQBK3SSJpPAjgzfPvu7ZkaMSP6Ktn4XqywkXHcptqcPMeSYkeZJJccNPDT9tBOYqMnC%2BRaRbbPloBoIJgx%2BKWpVMMmo%2BJnYGSYXfelmzOSoJhaCKN3XOXp1%2FRrto3CHRtElW3H0cczQ37wM1fwrKTTc325vjefkh2t5k9S5%2FffOlmpKY%2FzmA111JaNna8vNlzRmy3jiVu9MfRkKTyrCww9pYge%2BX2Zt0pwoyf3tTrII%2BqSVdcmUqDDK5%2FSaDeOceQKj%2B6cuDoLx3LZcvCrOY3bQyT6AxDsJoZqXBYt23b1%2BhOgOfadS73gwBo7nzr2DbUorjAUu6Lm8yBnAWGZNWSZjQxRLdJMQr79ySbjsO67vuA1w%2FNU2AHgxWPa2FNuYujtI6q5mxg%2BS%2F1QIr6mVKga%2F13nsh5ABf7o9%2BethQa3cydszarwfPb65icg58xBU1Ub9riP7AqSLPSvA4GGsvJZmSsTb%2BGmoV89aa32ueL4EfxD3bES4g481L9LUhmqOB2a%2BHi6ChwRz6ksNOy1w3GORroMOaBJaLuHX9jNN8QMPzWyskGOqUB9vs%2FbCr7dLF6eHVSHPGHmKfmewxnGEj70leSiwu90lrZpBfu5qG4Q0Q5BeiQS6XKTGzapYcfRByx47ojZ2mrNqBtvRIZULYxkjYoG1yQViJN45Er0pldnLOq7cXQpiMUx5mqwWGXpqxQPO9GfQnSqlV29R8R5agz1icwDHBmOEZmxfVfplZt56UbB1AAb54EIRw%2FS2uCdxPIW0dNMB9FfaCLaswk&X-Amz-Signature=08f5d7bf8e1bb189713663170ccbf9e9ab1bad02a7ed3401134743e392883529&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Podemos especificar un radio para cada una de las esquinas. En este caso se aplicará el orden de las agujas del reloj, empezado por la esquina superior izquierda, siguiendo por la esquina superior derecha, esquina inferior derecha y esquina inferior izquierda.


```css
border-radius: 5px 30px 45px 60px;
```


Si bien tenemos la capacidad de indicar el tamaño de cada de las esquinas por separado mediante las propiedades: border-top-left-radius, border-bottom-left-radius, border-top-right-radius y border-bottom-right-radius.


```css
border-top-left-radius: [tamaño|porcentaje] [tamaño|porcentaje];
border-bottom-left-radius: [tamaño|porcentaje] [tamaño|porcentaje];
border-top-right-radius: [tamaño|porcentaje] [tamaño|porcentaje];
border-bottom-right-radius: [tamaño|porcentaje] [tamaño|porcentaje;
```


Cuando identificamos los radios de las esquinas por separado podemos indicar de forma diferente los dos radios que conforman la esquina. Por ejemplo, podríamos modificar la esquina superior izquierda de la siguiente forma:


```css
border-top-left-radius: 400px 200px;
```


Y obtendremos el siguiente resultado:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KX2FR3W%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T105247Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCEfXsNId3IMurivFopMyFKxCRwY3YGJyMBirKk2nV1QgIgDmb6AMz7CiKz2I9eI6sMzYXsaz1UWOsPVYqwGg8r1hUq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDPLToHQLGZPz9OnTVSrcA7lwfbZM2ksAjfoVUUhTjU%2B0DETIkLAh1g1jZ1NGXqk8MRk8NtBUQSVAPazI8nrKi1N8eQhV%2BL9BQyI1MGsCQBK3SSJpPAjgzfPvu7ZkaMSP6Ktn4XqywkXHcptqcPMeSYkeZJJccNPDT9tBOYqMnC%2BRaRbbPloBoIJgx%2BKWpVMMmo%2BJnYGSYXfelmzOSoJhaCKN3XOXp1%2FRrto3CHRtElW3H0cczQ37wM1fwrKTTc325vjefkh2t5k9S5%2FffOlmpKY%2FzmA111JaNna8vNlzRmy3jiVu9MfRkKTyrCww9pYge%2BX2Zt0pwoyf3tTrII%2BqSVdcmUqDDK5%2FSaDeOceQKj%2B6cuDoLx3LZcvCrOY3bQyT6AxDsJoZqXBYt23b1%2BhOgOfadS73gwBo7nzr2DbUorjAUu6Lm8yBnAWGZNWSZjQxRLdJMQr79ySbjsO67vuA1w%2FNU2AHgxWPa2FNuYujtI6q5mxg%2BS%2F1QIr6mVKga%2F13nsh5ABf7o9%2BethQa3cydszarwfPb65icg58xBU1Ub9riP7AqSLPSvA4GGsvJZmSsTb%2BGmoV89aa32ueL4EfxD3bES4g481L9LUhmqOB2a%2BHi6ChwRz6ksNOy1w3GORroMOaBJaLuHX9jNN8QMPzWyskGOqUB9vs%2FbCr7dLF6eHVSHPGHmKfmewxnGEj70leSiwu90lrZpBfu5qG4Q0Q5BeiQS6XKTGzapYcfRByx47ojZ2mrNqBtvRIZULYxkjYoG1yQViJN45Er0pldnLOq7cXQpiMUx5mqwWGXpqxQPO9GfQnSqlV29R8R5agz1icwDHBmOEZmxfVfplZt56UbB1AAb54EIRw%2FS2uCdxPIW0dNMB9FfaCLaswk&X-Amz-Signature=2646c8598414f204089f304b5fc8d93fb1bd533e0e3caa0c50500448952364ce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Si queremos modificar los dos radios de todas las esquinas podemos utilizar la versión reducida de [`border-radius`](https://w3api.com/CSS/border-radius/):


```text
border-radius: [tamaño|porcentaje] {1,4} [tamaño|porcentaje] {1,4};
```


Por último tenemos que ser conscientes del soporte de la propiedad [`border-radius`](https://w3api.com/CSS/border-radius/) de [CSS3](https://www.manualweb.net/css/). Ya que no todos los navegadores van a poder ejecutarla. En esos casos, los bordes que hayamos redondeado no se verán.


La implementación de [`border-radius`](https://w3api.com/CSS/border-radius/) que hemos visto es la de la [W3C](https://w3.org/). Hay implementaciones propietarias en los motores de renderizado de los browsers. Este es el caso de [Mozilla Firefox](https://www.ayudaenlaweb.com/navegadores/que-es-firefox/). Dónde las propiedades para redondear los borders con [CSS](https://www.manualweb.net/css/) están especificadas como:


```css
-moz-border-radius: [tamaño|porcentaje];
-moz-border-top-left-radius: [tamaño|porcentaje] [tamaño|porcentaje];
-moz-border-bottom-left-radius: [tamaño|porcentaje] [tamaño|porcentaje];
-moz-border-top-right-radius: [tamaño|porcentaje] [tamaño|porcentaje];
-moz-border-bottom-right-radius: [tamaño|porcentaje] [tamaño|porcentaje;
```


En el caso de Webkit (sería, por ejemplo, para versiones antiguas de [Safari](https://ayudaenlaweb.com/navegadores/que-es-safari/)) se soportaba mediante el prefijo `-webkit`:


```text
-webkit-border-radius: [tamaño|porcentaje];
-webkit-border-top-left-radius: [tamaño|porcentaje] [tamaño|porcentaje];
-webkit-border-bottom-left-radius: [tamaño|porcentaje] [tamaño|porcentaje];
-webkit-border-top-right-radius: [tamaño|porcentaje] [tamaño|porcentaje];
-webkit-border-bottom-right-radius: [tamaño|porcentaje] [tamaño|porcentaje;
```


Por lo cual, si queremos buscar compatibilidad con nuestros ejemplos anteriores podemos poner lo siguiente:


```css
border-radius: 15px;
-moz-border-radius: 15px;
-webkit-border-radius: 15px;
```


```css
border-radius: 5px 30px 45px 60px;
-moz-border-radius: 5px 30px 45px 60px;
-webkit-border-radius: 15px;
```


```css
border-top-left-radius: 400px 200px;
-moz-border-top-left-radius: 400px 200px;
-webkit-border-radius: 15px;
```


Los navegadores a partir de los cuales se empezó a dar soporte a [`border-radius`](https://w3api.com/CSS/border-radius/) son:

- [Chrome](https://ayudaenlaweb.com/navegadores/que-es-chrome/) 0.2 (con -webkit) y [Chrome](https://ayudaenlaweb.com/navegadores/que-es-chrome/) 4.0 (con el estándar)
- [Opera](https://ayudaenlaweb.com/navegadores/que-es-opera/) 10.5
- [Safari](https://ayudaenlaweb.com/navegadores/que-es-safari/) 3.0 (con -webkit) y [Safari](https://ayudaenlaweb.com/navegadores/que-es-safari/) 5.0 (con el estándar)
- [Firefox](https://www.ayudaenlaweb.com/navegadores/que-es-firefox/) 1.0 (con -moz) y [Firefox](https://www.ayudaenlaweb.com/navegadores/que-es-firefox/) 4.0 (con el estándar)
- [Internet Explorer](https://ayudaenlaweb.com/navegadores/que-es-internet-explorer/) 9
