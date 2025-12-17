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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S2OXFTBC%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T193657Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHJqmw%2F4dfezwFIUFnSUicJd%2FViFf5%2BnwzB0pnbvANN%2FAiEAtf7LBEj2PEGHaHdw2s%2FlIGjFOwMM45Hoq7XtqEjeRJMqiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFrzi6r1jYuxSHhltCrcA67XvB%2FMO0362s4Bn9xNypDE%2FjkO%2Byu1mCmTyKwXEDXlQLTtnclRTw1ty2IVmrqgHFirL%2FKakVixXaBbWYq8%2FJoK8ypVcaOorWIO9vgf335Xz3e%2FDRd4ItrJj6yjt7yf7gmpnH%2BKphk2iu6aiA1VCRVBnPuADVp4BhohZiSJMgNVA2TXwhqUlYgSLybfi%2FpP6JbygC0yVf%2BRS0waGayAIwW3NbsAI2I8cCGoFfQed9jvE8Z%2FcJCjZhTx5DlZlvasj837wc3iU9iOaXc7d4LcvXsFSC9RFPkcGON8dBncPzE5fxXeIFoumtjETwB%2BiwyhEwq37tSG3Va38dSROWlCqJ0Oi34De95szCc9i%2BmzYI8gKIR8OMkTINRoyX6KrYDuxHAdwqlVUouZM4YgP7VXbWT0Fatd0kSbS%2FOlVEek5jYTRcJlQ2A2AdQGAj9tUoSZRIFxcYmV7HzTETjjGhue0efVsn2HkRVUV%2Ff4vRaUAJw5cvGoOBmy5UvaTBr5CTlKQJTJBiEDU8%2Fnf%2F2ctq0ExIljONVC3rv%2Bug%2FWOUixJo1vR7s2lVAygENYPY%2FWs2WpYD8RE0KRUDJowa%2B17Zpbui0C7EwpTA1qqrmYSU0VKOCuFj85UFus95IplcDXMLWLjMoGOqUB4iiPZM57OclHEJagIPb82B1W3yrgOIs6oWT%2BUAppYOQgpp0SrGGsYJQEXZEU2wgv9Dxnp%2FpmHNF1EWxF3F2R5mA3Vn1LsQj9cx%2ByNOBnyfj6aEIQGn8orKkqTLJVB3HyWodp8q1gAQzoLVl2%2F7ZA9fTMb93qEfg4FqT0FT%2BJQV%2B0evTRQ3whirninhI3CmeSjdzvhaPui6U7SospH6DhQ4GUpdoJ&X-Amz-Signature=710915df7594462e79ebb37202653f04ccfa970d3ba4a58c5e46eb1775af4110&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S2OXFTBC%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T193657Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHJqmw%2F4dfezwFIUFnSUicJd%2FViFf5%2BnwzB0pnbvANN%2FAiEAtf7LBEj2PEGHaHdw2s%2FlIGjFOwMM45Hoq7XtqEjeRJMqiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFrzi6r1jYuxSHhltCrcA67XvB%2FMO0362s4Bn9xNypDE%2FjkO%2Byu1mCmTyKwXEDXlQLTtnclRTw1ty2IVmrqgHFirL%2FKakVixXaBbWYq8%2FJoK8ypVcaOorWIO9vgf335Xz3e%2FDRd4ItrJj6yjt7yf7gmpnH%2BKphk2iu6aiA1VCRVBnPuADVp4BhohZiSJMgNVA2TXwhqUlYgSLybfi%2FpP6JbygC0yVf%2BRS0waGayAIwW3NbsAI2I8cCGoFfQed9jvE8Z%2FcJCjZhTx5DlZlvasj837wc3iU9iOaXc7d4LcvXsFSC9RFPkcGON8dBncPzE5fxXeIFoumtjETwB%2BiwyhEwq37tSG3Va38dSROWlCqJ0Oi34De95szCc9i%2BmzYI8gKIR8OMkTINRoyX6KrYDuxHAdwqlVUouZM4YgP7VXbWT0Fatd0kSbS%2FOlVEek5jYTRcJlQ2A2AdQGAj9tUoSZRIFxcYmV7HzTETjjGhue0efVsn2HkRVUV%2Ff4vRaUAJw5cvGoOBmy5UvaTBr5CTlKQJTJBiEDU8%2Fnf%2F2ctq0ExIljONVC3rv%2Bug%2FWOUixJo1vR7s2lVAygENYPY%2FWs2WpYD8RE0KRUDJowa%2B17Zpbui0C7EwpTA1qqrmYSU0VKOCuFj85UFus95IplcDXMLWLjMoGOqUB4iiPZM57OclHEJagIPb82B1W3yrgOIs6oWT%2BUAppYOQgpp0SrGGsYJQEXZEU2wgv9Dxnp%2FpmHNF1EWxF3F2R5mA3Vn1LsQj9cx%2ByNOBnyfj6aEIQGn8orKkqTLJVB3HyWodp8q1gAQzoLVl2%2F7ZA9fTMb93qEfg4FqT0FT%2BJQV%2B0evTRQ3whirninhI3CmeSjdzvhaPui6U7SospH6DhQ4GUpdoJ&X-Amz-Signature=2b947694926ce901cabea4c36338b77b93208ab05a792914b62469e5a7405ca4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
