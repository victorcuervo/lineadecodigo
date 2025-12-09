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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ZDVKESQ%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T101414Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGiIM1WZFuBtAn5P4w6fbL4USVjsw%2FlSZGMBhyrzhCXdAiAgn9FrBFUQXPKlU8xbb1DWD2KE1jf7SV4r0dxv3264AiqIBAi6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMg00HS1eEFHooouiEKtwDGZ5YLZhMWWNEwxUoiNpaTZx9poayI212zzMo8od%2BkDjo8kgXMtAd9Twi94Bnibx%2BV0oOEBkJSXxoISJVsk0k7XXRTXskCvQYNPSIl%2FrB4vgeHyubpBMujW0Y6ImFLbVqWo%2BE%2FfInK55CSUgoLusSTcyN9Fug130tOn03Bvk3R%2FHT0IWZcHOXVu9apQkoDczXXHH3FiqiGDVe0F3%2BXuzIZRFoNm9rnGCUguQYs8%2Fo3vi3pcw1%2Bj3Kzg2MxBId5LjgQDKeATCd8XZrsT28njjwk0EYly1WYPtWDhgbkKR4PwPafH3t7yI0TBNIJ3C%2FggV%2FavrrpI%2FSHYmJcjMMVm%2BAr%2FTk%2F25ID06Qcg6CgWAmtOcrabvTOuLdxOm2F9JYgiI2wN5m%2Fxy0seSRgdHIHaewX%2FIyyetL9yXYk7O42Zw7K%2Bzo0ZD5dpEyXt99CYue908YJbFYXTqsg43VVXqxP3GaUegUtGMbDHLNyg1gMz%2FQRRzpc9YAaYzdPLZvq2%2F3VnPdf1ObVfbeS%2BRzapKLyss8avuQf83gLJiV6Oke49ZD%2Bze%2FJevEek7DfJjkJ%2Bq9QPQAeBtVy26SKQ0xXUoChLYhiC6YpvHf8CF%2BVjFAtHFhVBWVUa8Xg0Q9SdTufOAw78PfyQY6pgGzS%2FW5DAXzS%2BTXLWgWPjITuqFnzm2nxy8H3gT%2Fhi0A5lZ2ZHZ1AXMgPc4bfzPrEJWKTMuz3jU8x%2FX2rzZTn7bMCBeulXOprjn%2BCQddsbGoVo%2B5CyQlRnaz%2FfdymN29INpe8PayZ8RUAHDeQZ0oabtdZmeXZ4mTnTtmhIzgW1SJJKMO6Xak9VltGiSzpSAZRgLvTijcscv3QmhO481%2FSqEolCTLJNfK&X-Amz-Signature=3d51f8dfce10b1b47814e05d5adb8b6f0ef434da67fb946108144ed628656025&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ZDVKESQ%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T101414Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGiIM1WZFuBtAn5P4w6fbL4USVjsw%2FlSZGMBhyrzhCXdAiAgn9FrBFUQXPKlU8xbb1DWD2KE1jf7SV4r0dxv3264AiqIBAi6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMg00HS1eEFHooouiEKtwDGZ5YLZhMWWNEwxUoiNpaTZx9poayI212zzMo8od%2BkDjo8kgXMtAd9Twi94Bnibx%2BV0oOEBkJSXxoISJVsk0k7XXRTXskCvQYNPSIl%2FrB4vgeHyubpBMujW0Y6ImFLbVqWo%2BE%2FfInK55CSUgoLusSTcyN9Fug130tOn03Bvk3R%2FHT0IWZcHOXVu9apQkoDczXXHH3FiqiGDVe0F3%2BXuzIZRFoNm9rnGCUguQYs8%2Fo3vi3pcw1%2Bj3Kzg2MxBId5LjgQDKeATCd8XZrsT28njjwk0EYly1WYPtWDhgbkKR4PwPafH3t7yI0TBNIJ3C%2FggV%2FavrrpI%2FSHYmJcjMMVm%2BAr%2FTk%2F25ID06Qcg6CgWAmtOcrabvTOuLdxOm2F9JYgiI2wN5m%2Fxy0seSRgdHIHaewX%2FIyyetL9yXYk7O42Zw7K%2Bzo0ZD5dpEyXt99CYue908YJbFYXTqsg43VVXqxP3GaUegUtGMbDHLNyg1gMz%2FQRRzpc9YAaYzdPLZvq2%2F3VnPdf1ObVfbeS%2BRzapKLyss8avuQf83gLJiV6Oke49ZD%2Bze%2FJevEek7DfJjkJ%2Bq9QPQAeBtVy26SKQ0xXUoChLYhiC6YpvHf8CF%2BVjFAtHFhVBWVUa8Xg0Q9SdTufOAw78PfyQY6pgGzS%2FW5DAXzS%2BTXLWgWPjITuqFnzm2nxy8H3gT%2Fhi0A5lZ2ZHZ1AXMgPc4bfzPrEJWKTMuz3jU8x%2FX2rzZTn7bMCBeulXOprjn%2BCQddsbGoVo%2B5CyQlRnaz%2FfdymN29INpe8PayZ8RUAHDeQZ0oabtdZmeXZ4mTnTtmhIzgW1SJJKMO6Xak9VltGiSzpSAZRgLvTijcscv3QmhO481%2FSqEolCTLJNfK&X-Amz-Signature=c6c8a752046074949e8c0933ba6e16279f524465a78489b507fd9eb26ab8a389&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
