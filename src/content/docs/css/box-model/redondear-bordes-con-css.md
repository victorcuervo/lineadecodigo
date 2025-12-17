---
title: Redondear bordes con CSS
description: "Ejemplo que nos explica cómo podemos redondear bordes con CSS mediante la propiedad border-radius y sus valores el longitud o porcentaje."
lastUpdated: 2025-12-17
slug: css/redondear-bordes-con-css
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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJX2RKHB%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T023744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDsBhFTEwu7J0XFJv5nySuacMTKZRNkK1BjYs8sxqCV4AiEAgCGLHyMx%2FIDcuf0RPxcE3cWBxCUgvZJYwPoW2yXC7Eoq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDJln1qeCsWXr7sG03yrcA%2BAIcAf6PPZjCMH39fEKYrqMw9dwYKZn0ZCel77SRu02Xh%2BUD%2BvVg5Zm3K%2Bh0iqoRcEIij45%2BDPKCr%2FgQz%2Bw9DqKkqhviG0BCjufR4eI9ETEKQApAVjeiBu%2Fh7633qpq9Vz57zNr2K%2BRqYjjK2ryIXmcmbNi7K7lXLLgi7DtVUfYkTGCaNgjUuxUfR2avdcwC8NLgsHXOGmMrypiMj9auyvfQKGZNe1qvzVyk7x0d6LetfB08qyPWVhUdvJ0TktmEZutCHd0IliMJsCJcG2jSWZpIAgWcn2O1EeEH75iyUl1VbNqbC93ILRLBcNxrsN0nSE8mx%2Bd%2FDmUARrQr%2B0r4f%2Bcgv14hulRpUA7sfdS50Q%2F5Dn2%2FKKfmYaLE53DRgz1MTJW7jGetnNF6AVcr1QmfeZqoa5iUikj3aFKdK0ygtprTWD%2B23TPFPVQxsSDKbse1gDeV3hNuxaze4QhuZV8asCOAQqzPTx43zfu46QixytQPJ%2FL52geE76lbrkSMH%2B8%2BDtkT5YBysUkoP8L%2F%2BHcdFjkE%2FSiMcXbiY626bFI5DFAtBfTxk6nZRgrDJSZSKJC%2BulWWKTHxxuwJOvrPPf9QGrkWDLxWC82QBb4eTqvObVLnPPk12Fw%2FZKkITrfMI%2BWiMoGOqUBjGpBv6lETTkPZN25qESj5%2F2RaNIf68byvgxHR6kco0XodYO53%2B%2Fv1yeK5XEUplMqHb4kRd797HhNd28wZSry9rWHfvDJpGfEIYMVrgApFi7ojorRY4atinyJ1qXy51Wjp5Xmazk2Gj%2B%2FyB0rA65ewP3TnnuEXGWNs8oLmKVk5ewMoXcSerqH2JROZqWSwg5IufrVGAC6i2ZTRJ93Lli4PrLzMqoN&X-Amz-Signature=8214b68be63c5d6c4cc18faedab1e58edf1b5f5ddac539777809038b112a002d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJX2RKHB%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T023744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDsBhFTEwu7J0XFJv5nySuacMTKZRNkK1BjYs8sxqCV4AiEAgCGLHyMx%2FIDcuf0RPxcE3cWBxCUgvZJYwPoW2yXC7Eoq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDJln1qeCsWXr7sG03yrcA%2BAIcAf6PPZjCMH39fEKYrqMw9dwYKZn0ZCel77SRu02Xh%2BUD%2BvVg5Zm3K%2Bh0iqoRcEIij45%2BDPKCr%2FgQz%2Bw9DqKkqhviG0BCjufR4eI9ETEKQApAVjeiBu%2Fh7633qpq9Vz57zNr2K%2BRqYjjK2ryIXmcmbNi7K7lXLLgi7DtVUfYkTGCaNgjUuxUfR2avdcwC8NLgsHXOGmMrypiMj9auyvfQKGZNe1qvzVyk7x0d6LetfB08qyPWVhUdvJ0TktmEZutCHd0IliMJsCJcG2jSWZpIAgWcn2O1EeEH75iyUl1VbNqbC93ILRLBcNxrsN0nSE8mx%2Bd%2FDmUARrQr%2B0r4f%2Bcgv14hulRpUA7sfdS50Q%2F5Dn2%2FKKfmYaLE53DRgz1MTJW7jGetnNF6AVcr1QmfeZqoa5iUikj3aFKdK0ygtprTWD%2B23TPFPVQxsSDKbse1gDeV3hNuxaze4QhuZV8asCOAQqzPTx43zfu46QixytQPJ%2FL52geE76lbrkSMH%2B8%2BDtkT5YBysUkoP8L%2F%2BHcdFjkE%2FSiMcXbiY626bFI5DFAtBfTxk6nZRgrDJSZSKJC%2BulWWKTHxxuwJOvrPPf9QGrkWDLxWC82QBb4eTqvObVLnPPk12Fw%2FZKkITrfMI%2BWiMoGOqUBjGpBv6lETTkPZN25qESj5%2F2RaNIf68byvgxHR6kco0XodYO53%2B%2Fv1yeK5XEUplMqHb4kRd797HhNd28wZSry9rWHfvDJpGfEIYMVrgApFi7ojorRY4atinyJ1qXy51Wjp5Xmazk2Gj%2B%2FyB0rA65ewP3TnnuEXGWNs8oLmKVk5ewMoXcSerqH2JROZqWSwg5IufrVGAC6i2ZTRJ93Lli4PrLzMqoN&X-Amz-Signature=c9a8a9937b927751dd5433dde9395129be43e06b73b24070090e9ce1644a106a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Si queremos modificar los dos radios de todas las esquinas podemos utilizar la versión reducida de [`border-radius`](https://w3api.com/CSS/border-radius/):


```css
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


```css
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
