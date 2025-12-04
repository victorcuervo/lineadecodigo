---
title: Redondear bordes con CSS
description: "Ejemplo que nos explica cómo podemos redondear bordes con CSS mediante la propiedad border-radius y sus valores el longitud o porcentaje."
lastUpdated: 2023-09-17
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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SZMAX3HD%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T124639Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJIMEYCIQD2d07dp0a2ZrV1tfgJ%2B3s9S%2B4gEwf3nxgRWTMZWhM5ZQIhAK2aN%2FXJfJ%2BL5aUm%2FIi%2FMB%2FkZ5vDr9C%2B8zkQlFa3trj4Kv8DCEYQABoMNjM3NDIzMTgzODA1Igxyu9WWUP9ChZiVQaQq3AMujc%2FRot294P15s4ezg%2Bq6A%2FNsucQRDk52PJlHBVhqBZhuf1WWwR4mJ4bJmAzpsJGoiOfatNljHJEc6II02gbo8TMYNvemE6QMwv80gsHewxcpRq1kZfOGswqrOpMwIUXk6a%2F4geAPxwQCp3GwbSdTPjnsDi1gs3MSurekEwW6sLIeEXDWoUBkbUbvwYD%2B7sceslh4ma5CQTcjCjcrzcJqCJ7QGvt4Y5RTF5oG9LsgXi65kIn7eb65sCC3%2B1FNWtP%2Fqf1gtzssS7TUDGrpUCHm4W14RCG%2BDwjeZpMnbuY%2Fyowx0yG2D98dEy5RJUQ0N6MQswIZVsrCwbGBg5Ingc0qiIa0NGeAFsIW85dmyDfhxc%2BG2SGAiJ1%2F1MzbShCc0Rai%2BG0foiDx3tH6vlduq697cqlwKLUzz32vCukqEqQXmKpJH2atl%2FADKAJ1FBwFQS9uppVARiwa5XjGj2kohUzQD1NTL25ormSPV4SZGFNRBYxg5h42ooLPDmYK%2BQnyg4g2p%2Bqn4iDzWgeLMelweRHOmLB0uEW3xUot5ucjO2GkGWmxwroqWPXwexwweDkZwSvrUwJSNsAPqakV%2FgNjmYdWOAxi3wwHlx9Els01vJ9cv0rJzvJSY%2FeF99V79jDyg8bJBjqkAf%2B3kMMa96XA6W8gZaBT08kLKdqHIgyWO8oj4vTnPtq7ZBxNZADP2ylaAhqbIhj9XSQem3P8FU%2B0RitaRQFwrM4yXhPwJfpQ1zXOkZt%2Bq8gNub6aPJM6dphuJiKUiJrPd0Vax%2FAyZeacpIJTBjcjERBY9oGvA88BYENH1SxPSfkKDvjtbMVW78XxYCpEehOCapsB7Iv0i8wGxptezF3w6W8RwbsK&X-Amz-Signature=9b4b4f94167b293859ac82a9378e24f71e1a79d08e50b062dac7209cbb7831dc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SZMAX3HD%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T124639Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJIMEYCIQD2d07dp0a2ZrV1tfgJ%2B3s9S%2B4gEwf3nxgRWTMZWhM5ZQIhAK2aN%2FXJfJ%2BL5aUm%2FIi%2FMB%2FkZ5vDr9C%2B8zkQlFa3trj4Kv8DCEYQABoMNjM3NDIzMTgzODA1Igxyu9WWUP9ChZiVQaQq3AMujc%2FRot294P15s4ezg%2Bq6A%2FNsucQRDk52PJlHBVhqBZhuf1WWwR4mJ4bJmAzpsJGoiOfatNljHJEc6II02gbo8TMYNvemE6QMwv80gsHewxcpRq1kZfOGswqrOpMwIUXk6a%2F4geAPxwQCp3GwbSdTPjnsDi1gs3MSurekEwW6sLIeEXDWoUBkbUbvwYD%2B7sceslh4ma5CQTcjCjcrzcJqCJ7QGvt4Y5RTF5oG9LsgXi65kIn7eb65sCC3%2B1FNWtP%2Fqf1gtzssS7TUDGrpUCHm4W14RCG%2BDwjeZpMnbuY%2Fyowx0yG2D98dEy5RJUQ0N6MQswIZVsrCwbGBg5Ingc0qiIa0NGeAFsIW85dmyDfhxc%2BG2SGAiJ1%2F1MzbShCc0Rai%2BG0foiDx3tH6vlduq697cqlwKLUzz32vCukqEqQXmKpJH2atl%2FADKAJ1FBwFQS9uppVARiwa5XjGj2kohUzQD1NTL25ormSPV4SZGFNRBYxg5h42ooLPDmYK%2BQnyg4g2p%2Bqn4iDzWgeLMelweRHOmLB0uEW3xUot5ucjO2GkGWmxwroqWPXwexwweDkZwSvrUwJSNsAPqakV%2FgNjmYdWOAxi3wwHlx9Els01vJ9cv0rJzvJSY%2FeF99V79jDyg8bJBjqkAf%2B3kMMa96XA6W8gZaBT08kLKdqHIgyWO8oj4vTnPtq7ZBxNZADP2ylaAhqbIhj9XSQem3P8FU%2B0RitaRQFwrM4yXhPwJfpQ1zXOkZt%2Bq8gNub6aPJM6dphuJiKUiJrPd0Vax%2FAyZeacpIJTBjcjERBY9oGvA88BYENH1SxPSfkKDvjtbMVW78XxYCpEehOCapsB7Iv0i8wGxptezF3w6W8RwbsK&X-Amz-Signature=11a271fc83ad5e0b2afa57a84d4f03190de988be4403317999bdbfc7673b648c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
