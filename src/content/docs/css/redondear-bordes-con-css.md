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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665BC5KIDZ%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T034645Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFELtkNMoj%2FVUbKRO4JD1l%2FmbYiU03AC7rTHsVAcEAyVAiA63ZB%2FcXqcR0nCaAbxCkU%2Frtj78k67WzwWU6CRJIq%2BuCqIBAic%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMDubT%2F5T1kAW0Mu8JKtwDDmI6%2BZG0ZiMcAhAU9EBrntIn0x2PVJevNBjWLu2N2a%2BkjXcabdEwE7tigTYzdpVaYlnbigxvnz6jBocc8ydfPRWSupFoEurFSJn4BeyZ4YcQsRDztCZfMjjxYb0lD2lS%2BE3j8BKtDahQ%2BCp0jpNab0CTa4rAr6sCHhDaYIjN9I8m%2BvSl4NcE8C2I4hj2QWBUGUgRBueLnmwJ8%2FmrOFSDuHYpcJZuInT5w69FLfTtCnfTWyxomQFHV5J6EsQNhXMf0Hlr8LjRLOd5dfeLVYT81TJeLDfk1hnWHvCg8%2FF4ctthLiD2H9vqMTsRPiHooZRvsSa%2F%2BhKlYdYPysIpPOT8Qzts7oz5OsQHk%2FLV9CozMqJHPk1vTx0kblbTPQilv4PVbsJLMozpf4kxBAmX4W7WrFGdE7r%2BF%2FVcxy1VRi3KIyd5HBuoOZ%2F9AlRwq%2BgKhLnCv9oyD19UAWfuYl36g56upX20qT3Fi92d%2Bo90OlHEQl1lAOvNG%2BADY6a3RvuIXjRt2mnDj%2FjbtNPgDV5xEoLTSPijrefIhf8bFtC4IyVw4IpT3nERSUWGe%2BEFOAyWasKHOhG2ofO6uBiU7zkIbaQVPPigpwypi9UKiEZTZh9dmPfO2qh%2BMJ7MYjqaE9kwxO%2FYyQY6pgH5oDR4RVTNgn2%2B0awF%2BQNu4Cer12pSrLrSfjFyUX1XaRxcZL296E5bx%2FF5T0LzfkHUrIzLnTYuN703SZrRPA4LPm72jQWwj%2FOCOTzgiVfdqrJLcMLa%2Fb3djZgjAOHy4V6v0gniO7Ba8Q6ucqv1rOvc%2BJ7ALVnK3wxTsvscWsV%2BTFyhu6A5qfbjEAp84zKSaAca%2BNzonMZBL8Ru7W1%2Fn8lQcvpWyOfF&X-Amz-Signature=c3fb1d2bfefb0f02a8f5c3da53e0f07556db4b3db7d5093312b0a5437e1c78f6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665BC5KIDZ%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T034645Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFELtkNMoj%2FVUbKRO4JD1l%2FmbYiU03AC7rTHsVAcEAyVAiA63ZB%2FcXqcR0nCaAbxCkU%2Frtj78k67WzwWU6CRJIq%2BuCqIBAic%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMDubT%2F5T1kAW0Mu8JKtwDDmI6%2BZG0ZiMcAhAU9EBrntIn0x2PVJevNBjWLu2N2a%2BkjXcabdEwE7tigTYzdpVaYlnbigxvnz6jBocc8ydfPRWSupFoEurFSJn4BeyZ4YcQsRDztCZfMjjxYb0lD2lS%2BE3j8BKtDahQ%2BCp0jpNab0CTa4rAr6sCHhDaYIjN9I8m%2BvSl4NcE8C2I4hj2QWBUGUgRBueLnmwJ8%2FmrOFSDuHYpcJZuInT5w69FLfTtCnfTWyxomQFHV5J6EsQNhXMf0Hlr8LjRLOd5dfeLVYT81TJeLDfk1hnWHvCg8%2FF4ctthLiD2H9vqMTsRPiHooZRvsSa%2F%2BhKlYdYPysIpPOT8Qzts7oz5OsQHk%2FLV9CozMqJHPk1vTx0kblbTPQilv4PVbsJLMozpf4kxBAmX4W7WrFGdE7r%2BF%2FVcxy1VRi3KIyd5HBuoOZ%2F9AlRwq%2BgKhLnCv9oyD19UAWfuYl36g56upX20qT3Fi92d%2Bo90OlHEQl1lAOvNG%2BADY6a3RvuIXjRt2mnDj%2FjbtNPgDV5xEoLTSPijrefIhf8bFtC4IyVw4IpT3nERSUWGe%2BEFOAyWasKHOhG2ofO6uBiU7zkIbaQVPPigpwypi9UKiEZTZh9dmPfO2qh%2BMJ7MYjqaE9kwxO%2FYyQY6pgH5oDR4RVTNgn2%2B0awF%2BQNu4Cer12pSrLrSfjFyUX1XaRxcZL296E5bx%2FF5T0LzfkHUrIzLnTYuN703SZrRPA4LPm72jQWwj%2FOCOTzgiVfdqrJLcMLa%2Fb3djZgjAOHy4V6v0gniO7Ba8Q6ucqv1rOvc%2BJ7ALVnK3wxTsvscWsV%2BTFyhu6A5qfbjEAp84zKSaAca%2BNzonMZBL8Ru7W1%2Fn8lQcvpWyOfF&X-Amz-Signature=294bd1de9a053c833e8e7a9e3a569b773efdb2fee44e5fec8ca05af32269baab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
