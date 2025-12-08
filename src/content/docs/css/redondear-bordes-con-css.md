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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466USS4GBUL%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T035510Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDQkJRh2wGGAYz3LOBALBSi3NHIwpm37kiPCfzhltDreAiB%2B0Y2%2BhH%2F7WQYuHvzy9vOptJkYSki9rKbJ7Y%2FhdBKPByqIBAid%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMLEgfN%2Fi1cw%2F4nZD9KtwDe8h51jGz%2BN%2BfS3XvCJTJ9%2BPF9IIcrzaOexLf4fOC%2BdZESq8bXa2%2FKbWykyIo1btlP9HAUKq9%2FEQWqigPfRDTO4c1AI9ZONqA7EFeVSr6mKnQcpgJ%2FbImz1xHdODDn498OKcDn1GbdKiuAgebbS0NNWy7fIA9z5FO2BI2T%2Fttxc8P6yCVSxiA2LE0ClzGjUgG9ps%2FGEBSc33Qii3B%2BSvB59bTEYbRJJMZbElgYxTBv%2B6edWslZ9l9ng%2Fn6mlbUgvlPl6NFg0vCDClPr1Dt%2FCUeJF8iOxuSv6zy7z3hSyjdc2twBE%2FLEqhf0m%2Fa6aDTlX9LKv0ruPAgdFyNGsPnYwEVEZTSd9ks6wdpl%2F377A6swGeXmjsWest36zzTpNDoJkHrWZrjrUDRkfOesRH0w9O32E1XQmrRq0yw4PEq5aOM2dLJoFHfPGNGA2xtiPG5ymIVkA1J%2B8Mt5moTvk4ifpCQg1CVepqxf3iLgr6C2y1HxIMtZAQSPfjK1YdHIILL2WanchHYzH8SJjfpDo2OyqeAdEPiDpkwpqJ9XA1bEXBd1aG6g9UJq%2Fsxbame3yyUVi6XxW642ymFaYILpqBowNdNxY%2B3wVz2shggRpOAdt3HAnpVmsHNC6c%2B2YcQCYwh5XZyQY6pgFaq59DAq65wBZpW1kYRgkAZK5Y4IIcQ36bEJ7psNVMJPRBBC%2F8DaQ0UA3wXW8N2UDYOVRDbxYZH5gMqzucijnFawuRuwWDzau%2BNeyBR5ATlkzspvire1eevwejbl7XmzT5LC86X3zcVKJE6UaRrQ7EQvHQkxPDhK5xEZechykP%2BK6otkXd8bWwVB79EzoE22zc4MzPav6jupNFiub4%2BgDIrxTvQKsp&X-Amz-Signature=66b83a559e102d29c32331ac4a21bf4a6382380cdfa8b1ce61234faee18721d0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466USS4GBUL%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T035510Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDQkJRh2wGGAYz3LOBALBSi3NHIwpm37kiPCfzhltDreAiB%2B0Y2%2BhH%2F7WQYuHvzy9vOptJkYSki9rKbJ7Y%2FhdBKPByqIBAid%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMLEgfN%2Fi1cw%2F4nZD9KtwDe8h51jGz%2BN%2BfS3XvCJTJ9%2BPF9IIcrzaOexLf4fOC%2BdZESq8bXa2%2FKbWykyIo1btlP9HAUKq9%2FEQWqigPfRDTO4c1AI9ZONqA7EFeVSr6mKnQcpgJ%2FbImz1xHdODDn498OKcDn1GbdKiuAgebbS0NNWy7fIA9z5FO2BI2T%2Fttxc8P6yCVSxiA2LE0ClzGjUgG9ps%2FGEBSc33Qii3B%2BSvB59bTEYbRJJMZbElgYxTBv%2B6edWslZ9l9ng%2Fn6mlbUgvlPl6NFg0vCDClPr1Dt%2FCUeJF8iOxuSv6zy7z3hSyjdc2twBE%2FLEqhf0m%2Fa6aDTlX9LKv0ruPAgdFyNGsPnYwEVEZTSd9ks6wdpl%2F377A6swGeXmjsWest36zzTpNDoJkHrWZrjrUDRkfOesRH0w9O32E1XQmrRq0yw4PEq5aOM2dLJoFHfPGNGA2xtiPG5ymIVkA1J%2B8Mt5moTvk4ifpCQg1CVepqxf3iLgr6C2y1HxIMtZAQSPfjK1YdHIILL2WanchHYzH8SJjfpDo2OyqeAdEPiDpkwpqJ9XA1bEXBd1aG6g9UJq%2Fsxbame3yyUVi6XxW642ymFaYILpqBowNdNxY%2B3wVz2shggRpOAdt3HAnpVmsHNC6c%2B2YcQCYwh5XZyQY6pgFaq59DAq65wBZpW1kYRgkAZK5Y4IIcQ36bEJ7psNVMJPRBBC%2F8DaQ0UA3wXW8N2UDYOVRDbxYZH5gMqzucijnFawuRuwWDzau%2BNeyBR5ATlkzspvire1eevwejbl7XmzT5LC86X3zcVKJE6UaRrQ7EQvHQkxPDhK5xEZechykP%2BK6otkXd8bWwVB79EzoE22zc4MzPav6jupNFiub4%2BgDIrxTvQKsp&X-Amz-Signature=c56a88dd7e29816e79f8693eb493e766bfa7a2f68231629737373524494762b5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
