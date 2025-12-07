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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667SE3NQ53%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T142344Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEZuPF1hLR81ClqAT6jKPsJSORnLcTZldU3YDKS5XdzVAiBzDAayEN3LNd7LdaRvZBenUXOAwdEeJbdSWh3plzWi3yqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwwf90oTS7Fgbp399KtwDu2lvpZ0akq1qhbJNoe6jnc1xHaZxMkQNvgS0eMBLY1GPApBNetxbwpmqZzFiU27WKOnXq3cLfACZaPQ7UWxUexkc2Q5PJvZkPQ2J2rrf6itjdjXqmIrN6xYcEw61t19FIm5Y14R5fsmYept1ObkrN7eDzGYOIHIa2Czbgxfno21rFedOzVq42mX%2Fum7yo5wUwrURk%2BQDz6RimnlDuFGvFGgXAkWBAzwHlGyRofy20KRCAGNvEoceSXADlebLyVWlOoafjcyd%2F3Dlf0FROWZ9VGeY9jDcrqZfWih94KZXVyjLYYO0452wTB09jVxzIRlLPaEaEmqme1FYm4fkK8JMobUsDnk2P7yM%2BA3yBm7vi1VhnIOC0uMMYswiyZm6pDishvnUK1lI49p%2B7o1EdoJPKrpZfBNUgmIyyNFf99Xd16vtyvD42PsIzyNbYWRZ5Ww5k3gs18H27IUjiVUQ1Gp1IXMxq9Wdd%2BSstRb%2FTP9AXbTu8%2BU83%2B4TPK4oVs5TUllaZlTGzM9OERi%2FVMUZR8kspCR6G57zUUdlmg5NDo9AiUo2ZE5M6ZJFwFXs8tsEyZ3vw1q5z4HeGspt3O0w6xy2JI0lhqaTtNfezAHs788gcGRtKwsnOy6zcZ6v0HYw4JrVyQY6pgEPiT2y3AChz6CejJcsRHedGnf3Nhlr0bQORiKY15po8NnhkxhZ66BFd0OJwKSlK52%2FypcrxHfQVGBtDbpFAeU21VRRIRvM8OTRQn4a5rC9pktfAUkO%2FUCn60eW7wDpdIBCZu6v8azmMsQRJkMCgiEWxDPwJ%2BZ13Ih%2FodAObIgp%2BKL5z9qsfWE%2FqDzmAjveGE47Kw765NkJW649X6O%2F%2FVXwFu6fBWU4&X-Amz-Signature=b8839422931e83e01c6f1dc4755f781649d21c7ac1004fe1c8289f6741aeeb54&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667SE3NQ53%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T142344Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEZuPF1hLR81ClqAT6jKPsJSORnLcTZldU3YDKS5XdzVAiBzDAayEN3LNd7LdaRvZBenUXOAwdEeJbdSWh3plzWi3yqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwwf90oTS7Fgbp399KtwDu2lvpZ0akq1qhbJNoe6jnc1xHaZxMkQNvgS0eMBLY1GPApBNetxbwpmqZzFiU27WKOnXq3cLfACZaPQ7UWxUexkc2Q5PJvZkPQ2J2rrf6itjdjXqmIrN6xYcEw61t19FIm5Y14R5fsmYept1ObkrN7eDzGYOIHIa2Czbgxfno21rFedOzVq42mX%2Fum7yo5wUwrURk%2BQDz6RimnlDuFGvFGgXAkWBAzwHlGyRofy20KRCAGNvEoceSXADlebLyVWlOoafjcyd%2F3Dlf0FROWZ9VGeY9jDcrqZfWih94KZXVyjLYYO0452wTB09jVxzIRlLPaEaEmqme1FYm4fkK8JMobUsDnk2P7yM%2BA3yBm7vi1VhnIOC0uMMYswiyZm6pDishvnUK1lI49p%2B7o1EdoJPKrpZfBNUgmIyyNFf99Xd16vtyvD42PsIzyNbYWRZ5Ww5k3gs18H27IUjiVUQ1Gp1IXMxq9Wdd%2BSstRb%2FTP9AXbTu8%2BU83%2B4TPK4oVs5TUllaZlTGzM9OERi%2FVMUZR8kspCR6G57zUUdlmg5NDo9AiUo2ZE5M6ZJFwFXs8tsEyZ3vw1q5z4HeGspt3O0w6xy2JI0lhqaTtNfezAHs788gcGRtKwsnOy6zcZ6v0HYw4JrVyQY6pgEPiT2y3AChz6CejJcsRHedGnf3Nhlr0bQORiKY15po8NnhkxhZ66BFd0OJwKSlK52%2FypcrxHfQVGBtDbpFAeU21VRRIRvM8OTRQn4a5rC9pktfAUkO%2FUCn60eW7wDpdIBCZu6v8azmMsQRJkMCgiEWxDPwJ%2BZ13Ih%2FodAObIgp%2BKL5z9qsfWE%2FqDzmAjveGE47Kw765NkJW649X6O%2F%2FVXwFu6fBWU4&X-Amz-Signature=daa4f42d735634b20db4a35c6729cce4907bf984826585324a369f71a7ef5fb0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
