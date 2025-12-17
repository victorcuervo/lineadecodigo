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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466522A5MJ4%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T072144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCx1kyBK6gvoXIpvurkjTSo%2FjIK98CrImCzyPQfmo1PsgIgf2fgv4iW53WaAiyuiYrlnHPviES1tyFmNdnPDmM%2BUokq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDJDvi5GyGA0SdX88yircAwMXzeYC1ai9aohbtz%2Fyq1Nb9Gd%2FKBwUJ9%2FsCss5fIGTAoSe1eCJxkun0jJ6cRb02rV%2BQxDikt7Pyy0KwBnASwg8omHiR699GgqwERpwm7VNvZp9qeEO2U2CXJb8%2BjmqsgFOcEoOdAq0SJjL8S%2BB0AlYgCsAB6Z3LLW1OgCuny%2BNve8jmC%2FC%2BJg919gAilncba31bmm3UxSYqzMAwEP87j8po7f4JwPph5OYZ88C2vJEey0U2yCxyfloXzdcUnl6wTF8gTvfQIqx3%2FQohuH2BoFFr2fQdyzpAys6BZhRpqpJvSR%2FBOWJnd5IcnWdZzfjVvjUVRxiIg8Vqk3onp9xFwhBRAjs9TTQYATaVdG89AGLEzAGZxUMkBl0Kubvq62YmgleGvWC4bsrUseml6cufXbufYx%2BF0TJWJDjt8PE0e9IgpR0bMaodA1TJy2S2b%2B45yGZnXAp%2FFlUaCxFW9i1O%2BXdSGdq4gjyrLCfTTXPwWGoTLX5ayPCRcLzT1Z93qVyiM6%2B%2BMKOzvbrMARDgriTjEhrXl6DN7xgZA%2BK4KVYdHayR%2BIfFDiQSiX5inJthBTN3DtVGEZhum9TOTGutmvoAAW9Sfd4LfBeHqqNnIomNCGeQZG8KMx%2BLKtLDVgDMLWdicoGOqUB8OgS2PnpcuK2rlqXGUh5T8raZ6Jm%2BXGR4CtsZErW1qkO9UqqB%2B6blFg9tjLqEoI1kanHdKLN1HvBvxPHWwCHS942UoeQfTbH0fW1oPs7p5qFj%2Bhuo08JJyEhvVesm8UImeRaB%2F5OPG%2BRsLNpmT6nAyqGSJOKTYkG6IEdsjUtHqdxCetRmetV1yL0C%2FSzp9Weg6z6wcgHKXc5PP3uetd7ftn38pH5&X-Amz-Signature=313a288cc67726f49813c82952fc430cdd0b3e657f71413f529a07c299060515&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466522A5MJ4%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T072144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCx1kyBK6gvoXIpvurkjTSo%2FjIK98CrImCzyPQfmo1PsgIgf2fgv4iW53WaAiyuiYrlnHPviES1tyFmNdnPDmM%2BUokq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDJDvi5GyGA0SdX88yircAwMXzeYC1ai9aohbtz%2Fyq1Nb9Gd%2FKBwUJ9%2FsCss5fIGTAoSe1eCJxkun0jJ6cRb02rV%2BQxDikt7Pyy0KwBnASwg8omHiR699GgqwERpwm7VNvZp9qeEO2U2CXJb8%2BjmqsgFOcEoOdAq0SJjL8S%2BB0AlYgCsAB6Z3LLW1OgCuny%2BNve8jmC%2FC%2BJg919gAilncba31bmm3UxSYqzMAwEP87j8po7f4JwPph5OYZ88C2vJEey0U2yCxyfloXzdcUnl6wTF8gTvfQIqx3%2FQohuH2BoFFr2fQdyzpAys6BZhRpqpJvSR%2FBOWJnd5IcnWdZzfjVvjUVRxiIg8Vqk3onp9xFwhBRAjs9TTQYATaVdG89AGLEzAGZxUMkBl0Kubvq62YmgleGvWC4bsrUseml6cufXbufYx%2BF0TJWJDjt8PE0e9IgpR0bMaodA1TJy2S2b%2B45yGZnXAp%2FFlUaCxFW9i1O%2BXdSGdq4gjyrLCfTTXPwWGoTLX5ayPCRcLzT1Z93qVyiM6%2B%2BMKOzvbrMARDgriTjEhrXl6DN7xgZA%2BK4KVYdHayR%2BIfFDiQSiX5inJthBTN3DtVGEZhum9TOTGutmvoAAW9Sfd4LfBeHqqNnIomNCGeQZG8KMx%2BLKtLDVgDMLWdicoGOqUB8OgS2PnpcuK2rlqXGUh5T8raZ6Jm%2BXGR4CtsZErW1qkO9UqqB%2B6blFg9tjLqEoI1kanHdKLN1HvBvxPHWwCHS942UoeQfTbH0fW1oPs7p5qFj%2Bhuo08JJyEhvVesm8UImeRaB%2F5OPG%2BRsLNpmT6nAyqGSJOKTYkG6IEdsjUtHqdxCetRmetV1yL0C%2FSzp9Weg6z6wcgHKXc5PP3uetd7ftn38pH5&X-Amz-Signature=be3b7749a7d78ed76ad20c6e3c10054d8f260eb3a2b435461a7bc62cb82f27b9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
