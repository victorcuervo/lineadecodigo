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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q3TXH723%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T162333Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCPFlqnYGCFqUTd%2B4ZJHY1got%2FGZUppGEyavi7NMRYPxAIgWkm8yZNdZbjN8Xe53vm4KJw%2B5NjZekE1PzlNiy97o%2BAq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDCHRFi6PcjceA4JEBCrcA%2BsF6XHtYfPfRZ8K5calrtOVUrEJP%2Bke0Mhnp2LCuS2fAtXk77WFnIChvKmI9hojtCeYu89iPo9ZKCgD4FCfk48tRxY3j22KN4A%2Bo8gN6TOXODy%2BxpdVKDOhwyYNNqkvkZi1V2G%2FIfNG7x89Xx6eZ9R%2BW6bfPOSVbiI%2BMxzJbrDRgRw9WED72QCJaHJ%2FY2xKjvb7OpuoIWZaJWTRmQNKqV8DQFvxP1xy%2F9tzSA%2BXNucBP8vAPX6SML8dYOKY3kIrUGWD9Dh8%2FTJXTxFoJPrSEcSEcligYDwEy207VjXfuFGD5mEsJLtD5XOUdvAVfbRplzRxrnEPoA20m7%2FktyEMcI0eXxmmKe0oQQI%2B6SFEuD5KD1edc8QXya0TTH1eippY9U0mkJt3fs%2BZS62b8frIoRdKTDCBBd2sjVgko4vtaNJr4QhK8H%2BF0CjP%2BcJGIWJKMymCu15fAMr7Ny86cVX%2Fg0YCK6YHA8%2BQR3U8l3Kx3Hn18hSNXj%2F6qLRgc3G0bAIy7RiOagMGQtReciUJ26z4Ho4uPbEu%2FK%2BIrkrhVDqAUXG86ge5N4xEe7eYuAkqWAaWfkHN6aA%2FlJnY87PSpJG05hFFGoKeAd7ZmmweXT8pMsU1s%2F%2F2Rh0QoevD%2FuCNMNCm0MkGOqUBM6kUQsTd2fIu8YCWakOLmLqhBHrlEMNFvk6RD%2B5xNIt5X8%2FeDwiAEfA%2FVqtdPsDIFWnAtmrSO%2Fq8h%2BZmMwPYmpTffqOFqCofy29W2sfoczv3HdRy5BdSjyipf%2FFs8pnv3YXpCy%2F1AIIWx2dHfdF%2BYA12ivrgfHkdRucbzrrlo2KP5xnCCoT8Sk11mY5KhC4OyPvVrEodac2w1J1MJu1ZZb3surBU&X-Amz-Signature=8cfab4f546377101652395035cb7210837b9dc046bd87d74516050a0a4a213c7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q3TXH723%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T162333Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCPFlqnYGCFqUTd%2B4ZJHY1got%2FGZUppGEyavi7NMRYPxAIgWkm8yZNdZbjN8Xe53vm4KJw%2B5NjZekE1PzlNiy97o%2BAq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDCHRFi6PcjceA4JEBCrcA%2BsF6XHtYfPfRZ8K5calrtOVUrEJP%2Bke0Mhnp2LCuS2fAtXk77WFnIChvKmI9hojtCeYu89iPo9ZKCgD4FCfk48tRxY3j22KN4A%2Bo8gN6TOXODy%2BxpdVKDOhwyYNNqkvkZi1V2G%2FIfNG7x89Xx6eZ9R%2BW6bfPOSVbiI%2BMxzJbrDRgRw9WED72QCJaHJ%2FY2xKjvb7OpuoIWZaJWTRmQNKqV8DQFvxP1xy%2F9tzSA%2BXNucBP8vAPX6SML8dYOKY3kIrUGWD9Dh8%2FTJXTxFoJPrSEcSEcligYDwEy207VjXfuFGD5mEsJLtD5XOUdvAVfbRplzRxrnEPoA20m7%2FktyEMcI0eXxmmKe0oQQI%2B6SFEuD5KD1edc8QXya0TTH1eippY9U0mkJt3fs%2BZS62b8frIoRdKTDCBBd2sjVgko4vtaNJr4QhK8H%2BF0CjP%2BcJGIWJKMymCu15fAMr7Ny86cVX%2Fg0YCK6YHA8%2BQR3U8l3Kx3Hn18hSNXj%2F6qLRgc3G0bAIy7RiOagMGQtReciUJ26z4Ho4uPbEu%2FK%2BIrkrhVDqAUXG86ge5N4xEe7eYuAkqWAaWfkHN6aA%2FlJnY87PSpJG05hFFGoKeAd7ZmmweXT8pMsU1s%2F%2F2Rh0QoevD%2FuCNMNCm0MkGOqUBM6kUQsTd2fIu8YCWakOLmLqhBHrlEMNFvk6RD%2B5xNIt5X8%2FeDwiAEfA%2FVqtdPsDIFWnAtmrSO%2Fq8h%2BZmMwPYmpTffqOFqCofy29W2sfoczv3HdRy5BdSjyipf%2FFs8pnv3YXpCy%2F1AIIWx2dHfdF%2BYA12ivrgfHkdRucbzrrlo2KP5xnCCoT8Sk11mY5KhC4OyPvVrEodac2w1J1MJu1ZZb3surBU&X-Amz-Signature=cd5642198cd8a77be41b4c54b396d74ba9212f0207ba2ca2e518d6293438f22d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
