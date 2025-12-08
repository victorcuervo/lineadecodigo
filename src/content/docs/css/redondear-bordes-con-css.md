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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RXHSLWHW%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T005228Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCHJtSBsvYmAEMyM6as4jqVLpK2lWQqUrfj4v9u5EDtWQIhAMXRDluitDKm%2FnXKkJC%2F%2F%2FOeS1FgBNeP6sTxwK%2FakTJHKogECJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxbci3oex6tQSB3iRsq3AOfG6UAtAwR4DQTwiFMT%2BSEaKD8nhfL3XJ2DqZD8du5SXnw90UFg%2FItXQp2Nhj4NqxjRnkYdDu7tEEyUgO29FQ72in6YhLBtOPWZFwtsit0haaLk9dbLNcZAh82LAvlcMX%2BydJ4HXnEnaD%2FGlm0dTx%2FAj8ystntsnpCgkDFm%2BP2ZFuOKeJbdnfelpvrq7fWVxdPj2XKGUd2bDGvLd53%2FfnHT2JxcYOUS7jqFR2%2F%2B5am6c1d6yTwsawkA0r86QpWfFZlX6WTeKFfvSaahfeKtXHJlNmkjQnaSBrRYrfMWvcDbsocrDLagryp98Y61aB3drXLQrCxBdS4fq2j31gxmIgO7E4iZ%2FVFzmcUdxbHB1%2FWcbCJ8rHgy9Y18%2FiLWKENRkKNp2E3%2BWUUNBfP9RqTiy1udFu%2FNJxY33FiYjlrZGl8kMkRhjoWAjtYJ%2FmgduYsRI8s6jP4PutSIaf1l5wsBPSO9sJNffHyYbCgz5%2BiMcVyxpzXxocs0VICQ0rXq%2Fc%2BgpjldvyaD9zUaFFswADMgQxBrjKxTxCI7YxwwRv1p2IL9S9fMTMVFAt45Y9tAXKkBZ%2BR9WCNWr6mGJZGv2FmPDbcxQQ8hZvBMBqLNklioOjfLzL0QwIfECCduDpSAjC3odjJBjqkARqV9aoo8k7Ojq64eS%2FLTUH1Bx8QL%2Fbi9OthBvYn%2FCX0i9WbpB5VfO2lKjf4zkz%2BSC4kI9B534%2BLcdhTsXmaeOPK%2F5ZqOlmsQ15ORjT8%2BKgqV4i25SkZSRwKqcZqt7aP2zefyDnoVwISVgSRhD%2B0Ow6Jtfw3bStnB0FuioMvtMmlQUetSpef7WcPapbFVO%2FnRB2kkSMnzJTnfDEo%2FyiLfjdVPPhA&X-Amz-Signature=3479730fd456464a5d2fb9ecf51980e3f59c68db76decfc8d7b13f1b5fa9bb61&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RXHSLWHW%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T005228Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCHJtSBsvYmAEMyM6as4jqVLpK2lWQqUrfj4v9u5EDtWQIhAMXRDluitDKm%2FnXKkJC%2F%2F%2FOeS1FgBNeP6sTxwK%2FakTJHKogECJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxbci3oex6tQSB3iRsq3AOfG6UAtAwR4DQTwiFMT%2BSEaKD8nhfL3XJ2DqZD8du5SXnw90UFg%2FItXQp2Nhj4NqxjRnkYdDu7tEEyUgO29FQ72in6YhLBtOPWZFwtsit0haaLk9dbLNcZAh82LAvlcMX%2BydJ4HXnEnaD%2FGlm0dTx%2FAj8ystntsnpCgkDFm%2BP2ZFuOKeJbdnfelpvrq7fWVxdPj2XKGUd2bDGvLd53%2FfnHT2JxcYOUS7jqFR2%2F%2B5am6c1d6yTwsawkA0r86QpWfFZlX6WTeKFfvSaahfeKtXHJlNmkjQnaSBrRYrfMWvcDbsocrDLagryp98Y61aB3drXLQrCxBdS4fq2j31gxmIgO7E4iZ%2FVFzmcUdxbHB1%2FWcbCJ8rHgy9Y18%2FiLWKENRkKNp2E3%2BWUUNBfP9RqTiy1udFu%2FNJxY33FiYjlrZGl8kMkRhjoWAjtYJ%2FmgduYsRI8s6jP4PutSIaf1l5wsBPSO9sJNffHyYbCgz5%2BiMcVyxpzXxocs0VICQ0rXq%2Fc%2BgpjldvyaD9zUaFFswADMgQxBrjKxTxCI7YxwwRv1p2IL9S9fMTMVFAt45Y9tAXKkBZ%2BR9WCNWr6mGJZGv2FmPDbcxQQ8hZvBMBqLNklioOjfLzL0QwIfECCduDpSAjC3odjJBjqkARqV9aoo8k7Ojq64eS%2FLTUH1Bx8QL%2Fbi9OthBvYn%2FCX0i9WbpB5VfO2lKjf4zkz%2BSC4kI9B534%2BLcdhTsXmaeOPK%2F5ZqOlmsQ15ORjT8%2BKgqV4i25SkZSRwKqcZqt7aP2zefyDnoVwISVgSRhD%2B0Ow6Jtfw3bStnB0FuioMvtMmlQUetSpef7WcPapbFVO%2FnRB2kkSMnzJTnfDEo%2FyiLfjdVPPhA&X-Amz-Signature=a2dfb5a96ba5bb6e4928d88b0af118140daae7db3b6735946aa7a2e2a7352ee1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
