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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662JALGZM5%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T133231Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJHMEUCIQC3vBZrfJIalJD%2BvEQy3FZ4UQBq%2FUaav4LFl4XwZj%2FvHQIgPKyAy1af8rt4WhqXesQsiwWz2pSIcCokUARrtdOGpNUq%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDExiF4y6JSUCE8ZeWircA997wCCAZHbcyTNjYKjc3iiSp2Rxv84Dlz3tzvmiRycZaSDilaC44t2rUmrKEz6fWOrjZMHyB%2FQtYRvIm%2BrRqPziTyUI%2FBUM4ZKg1RWUV4LoRFyUtfoTMujm1eHp46HQzLcC0xax31SNkNOLig2EnQaUffJRtlcE%2F5a8QOAUAVBEynnKis5W71JrJQBV4sQhrKqsJDR8MQldNqBkrqODopFiFxo%2FQvVl9OQhMy%2F3t1LleE699GyNri1mF1jnf7TPMzKv2O31I%2FTUNJf8LFIfidAei%2BXZ2%2F7TqV%2BoGoGFqnMBLilV6GvrZKyp7B%2BlheU0QeyGU9D6uYRzZAGuaEvzRQk1du07qeHNOw0HkkfVJL4DgP30rWcZfZ5U%2ByFmMlC3n1cpgv4hfR1M69cLNGCpbkckNJTAQYapVuKrrMFZOOHjZ2TflgOCtC3FHzV%2FuYFCUfXDtDIbMLO%2BhbEXK4VZNtH7VRc%2FxHYDrlDXjqPCBHar5gWqN51OixL8rOxvMRErG9RicJIO1RIB1C9%2BYF7fOMh9D8kU7p1SSgiLeFxM%2Br%2B6EiLOOCMR0EvqChk5K6r6iPOFKyzWJNuJtja4KOpXMJwd%2BGy27JCCIAU9XXrmlA7HbRlz3vTNvcKfhqM5MN6DxskGOqUB0HM8QqBjEkEEHzsNIfp15CU6zhkaUT5yGbzkw0jXpa4pleaTmDE%2Fd7jebPESmvtJlq3qrj1ipEEYTY8WHZzHjeXBZ41e9SBJUu%2BuumR5puxnDEOnEGDnFG1L8acNgwVAIRmclV%2Fdr6qKN7ukGUETSEqxGNthXkTn6nmNTcm5ThIcJ2IonjCVwyXLAjQ5x4xlVWQaTxCoSDlYojDUFfi4CyvvlIXF&X-Amz-Signature=1a693f08d611b0fbae57b608dd6df6fc204fd7e9fa8edd2999d78d9a4574822d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662JALGZM5%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T133231Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJHMEUCIQC3vBZrfJIalJD%2BvEQy3FZ4UQBq%2FUaav4LFl4XwZj%2FvHQIgPKyAy1af8rt4WhqXesQsiwWz2pSIcCokUARrtdOGpNUq%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDExiF4y6JSUCE8ZeWircA997wCCAZHbcyTNjYKjc3iiSp2Rxv84Dlz3tzvmiRycZaSDilaC44t2rUmrKEz6fWOrjZMHyB%2FQtYRvIm%2BrRqPziTyUI%2FBUM4ZKg1RWUV4LoRFyUtfoTMujm1eHp46HQzLcC0xax31SNkNOLig2EnQaUffJRtlcE%2F5a8QOAUAVBEynnKis5W71JrJQBV4sQhrKqsJDR8MQldNqBkrqODopFiFxo%2FQvVl9OQhMy%2F3t1LleE699GyNri1mF1jnf7TPMzKv2O31I%2FTUNJf8LFIfidAei%2BXZ2%2F7TqV%2BoGoGFqnMBLilV6GvrZKyp7B%2BlheU0QeyGU9D6uYRzZAGuaEvzRQk1du07qeHNOw0HkkfVJL4DgP30rWcZfZ5U%2ByFmMlC3n1cpgv4hfR1M69cLNGCpbkckNJTAQYapVuKrrMFZOOHjZ2TflgOCtC3FHzV%2FuYFCUfXDtDIbMLO%2BhbEXK4VZNtH7VRc%2FxHYDrlDXjqPCBHar5gWqN51OixL8rOxvMRErG9RicJIO1RIB1C9%2BYF7fOMh9D8kU7p1SSgiLeFxM%2Br%2B6EiLOOCMR0EvqChk5K6r6iPOFKyzWJNuJtja4KOpXMJwd%2BGy27JCCIAU9XXrmlA7HbRlz3vTNvcKfhqM5MN6DxskGOqUB0HM8QqBjEkEEHzsNIfp15CU6zhkaUT5yGbzkw0jXpa4pleaTmDE%2Fd7jebPESmvtJlq3qrj1ipEEYTY8WHZzHjeXBZ41e9SBJUu%2BuumR5puxnDEOnEGDnFG1L8acNgwVAIRmclV%2Fdr6qKN7ukGUETSEqxGNthXkTn6nmNTcm5ThIcJ2IonjCVwyXLAjQ5x4xlVWQaTxCoSDlYojDUFfi4CyvvlIXF&X-Amz-Signature=9caccdb5da2090213a43fe8d43a6ad1366124a11414595b4a11a7e4ee8c84f1f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
