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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667S3SB5MI%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T055842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICFosoiXnK1FE0EZV5D5seRb4IxjBns1u0%2BRi%2BZhQvsGAiBKY7zdx%2F%2FlnHkQJqEgQxOCJSx1%2Fq4%2BGVFH%2F1AZUteK5iqIBAif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMMNGwJI6FX5v8%2ByeCKtwDeuDpmlPhVzmRIOc9Jw0utETaVaYx7%2FJV2JHN6ZSuNBFeRGahdpObj%2B9oA%2BUaIJsdyz0XoqmW9iP39lgPAj5qd3Lr9ugo%2BzadZZ8N4gKHH3mGb%2ByjuKQJx0EDP7%2BlpKhm0VzFTwlY6Lf79F5Hie8DiQSWIIXsTqQgnwi9IJ6qYz5BZ%2BFcIc01kI2ZWMxsqEA8N9J1nmpAAHD0X0xI%2BJ4R4bgaAqrrfpNNQK2sKJ3oyf0GZW4of0iSSLDLpol961HcF27YGze3SVJ%2B4WzWwF9l9BO%2Bkgy1eeaYLXt2nLB2y%2B8c43yJwW5f%2BTtqvAZVDO%2FJfKMZWb7mXHAIn3gTmbtTYrvt8mVEN2Eq9m2mcviqg%2FknvndBBPmufUTokMs1%2BFcyJ2zfPn%2FoIkjXftHDiMFpe6A1IMGMj0yIvRGzmYdACnNFxqg2YMOwG2M8drrj5wVKdSmDAWTFIG5CWHNEK0%2BBRFpa48jmVICnLPnzauPHNNRBcWqJw8nBolXcuXzHTnDCp8kKlvXCqePpqrssT9k8bYfkU5YoZK1qUbkKA4L9F%2BGPCg1GGaNHJLj0Gqu%2BlMUspMgvkTuLKEc2pzx90gCQKTbQ9C8Z5TWcxpBRcSggEft40hZdSBUKxI0KtDQwxc%2FZyQY6pgEH81mdwtJOITcw3aJE9Hb1eAzut%2FUeSFrLK%2FAlu6teCLlb1bNpF98e0CGcGOrtIHsD1GdRDeLpLWAix8myPWTh81bLZaHazbdHvElyvPUnmXR2f%2B3emA8h23teFtwGwx828KbYSkObuEfMTa6QcJhaRvKdKU2JDXR7QXiT%2FZpWPuxqrhWg%2FJLPT%2B%2Fiul%2F0F4tlGT5w4hFjUQpg7LkYB2LXCVlS8QAx&X-Amz-Signature=5a89c29faf5f64ebd5e064a6aac0ad97d2013e3ff0fa94766f2c6ca2bfdd0fbb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667S3SB5MI%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T055842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICFosoiXnK1FE0EZV5D5seRb4IxjBns1u0%2BRi%2BZhQvsGAiBKY7zdx%2F%2FlnHkQJqEgQxOCJSx1%2Fq4%2BGVFH%2F1AZUteK5iqIBAif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMMNGwJI6FX5v8%2ByeCKtwDeuDpmlPhVzmRIOc9Jw0utETaVaYx7%2FJV2JHN6ZSuNBFeRGahdpObj%2B9oA%2BUaIJsdyz0XoqmW9iP39lgPAj5qd3Lr9ugo%2BzadZZ8N4gKHH3mGb%2ByjuKQJx0EDP7%2BlpKhm0VzFTwlY6Lf79F5Hie8DiQSWIIXsTqQgnwi9IJ6qYz5BZ%2BFcIc01kI2ZWMxsqEA8N9J1nmpAAHD0X0xI%2BJ4R4bgaAqrrfpNNQK2sKJ3oyf0GZW4of0iSSLDLpol961HcF27YGze3SVJ%2B4WzWwF9l9BO%2Bkgy1eeaYLXt2nLB2y%2B8c43yJwW5f%2BTtqvAZVDO%2FJfKMZWb7mXHAIn3gTmbtTYrvt8mVEN2Eq9m2mcviqg%2FknvndBBPmufUTokMs1%2BFcyJ2zfPn%2FoIkjXftHDiMFpe6A1IMGMj0yIvRGzmYdACnNFxqg2YMOwG2M8drrj5wVKdSmDAWTFIG5CWHNEK0%2BBRFpa48jmVICnLPnzauPHNNRBcWqJw8nBolXcuXzHTnDCp8kKlvXCqePpqrssT9k8bYfkU5YoZK1qUbkKA4L9F%2BGPCg1GGaNHJLj0Gqu%2BlMUspMgvkTuLKEc2pzx90gCQKTbQ9C8Z5TWcxpBRcSggEft40hZdSBUKxI0KtDQwxc%2FZyQY6pgEH81mdwtJOITcw3aJE9Hb1eAzut%2FUeSFrLK%2FAlu6teCLlb1bNpF98e0CGcGOrtIHsD1GdRDeLpLWAix8myPWTh81bLZaHazbdHvElyvPUnmXR2f%2B3emA8h23teFtwGwx828KbYSkObuEfMTa6QcJhaRvKdKU2JDXR7QXiT%2FZpWPuxqrhWg%2FJLPT%2B%2Fiul%2F0F4tlGT5w4hFjUQpg7LkYB2LXCVlS8QAx&X-Amz-Signature=5303c8cfa38cf59775d25f5e7e943cb3bb0b9f317dce183e1ebb51d595204350&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
