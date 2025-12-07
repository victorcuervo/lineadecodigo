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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664XMMSK2W%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T050012Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBn2MBjprLnCvRoNMJfiPsJdptjwn%2FfN08fpzBLH2Y9hAiAJtrGyzFBZbbHmbJJ4KRJemj%2BPtYcvIgC%2FHd7GLdsypiqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM0egh58QdPhvwLGawKtwDucd6RKotI%2FwGuWEx%2FDL9fVq7OHtov9Po2FDdweqK%2BLloV2khKmg%2BD%2BizZvFgrZnjWu6HprFgJDB%2BcJ8BMDoboeEi85cq7Wzf844FnSSNTTybucxTbIh3YIC2CqpWlk7Ceng2rq4wNyx7SCvKAq%2BwnrP88Fl8aTs2RTU9OXusU4yaECdM%2Bue24utq38zCh32BLzLnoUfwv2HLT22TP%2BNKx261LRxV9XQiFTQj3BvY1znts%2FdfpUZcXq0VV3ZFI3%2FrJVBywl%2Bji%2FXqTJe6PW1gLfDLHsWOebOLFQgkVNYlN7UjLIgi6b5idovyksweUMBS8Qbpzn8XOJmrXqGXpSuOA3nCDMnbiuGfHWPyYuPgH5dWc7RGaGglmdw3iKnUn765JnexmLpBsrESMG5UVnvWS3JmRCWHzS1iWeZ1p%2Ftttotvfzm%2Bh2vStEvmxjXphp%2BcxL1qZtIs5ZKB1Dg8uFjsQw%2B0SZOAnwSBMBoEiUqteccHvKrnbmYMicMXCe1rJUVierv5N%2F7uasEgUY5nyeEgovGM9kedOYVvItepBEqC1IlBv5G70zZB8DZUUeQ8B4KZLmzHozGvOQqICc%2B8ZL5WFLEJ0QnBsveuHJAYKWP5fQp2UNrke2mLzsWLni4w6v3SyQY6pgHkgspWQ9hfUpo54P%2FvY%2BDMcWRAcCINveruaokbjMLa%2BgH6gvgSENXSImOMUxROzotTFQJZXs913vWPQzMGg3UNtoYRH%2B4YM%2BGXTGBbMoksx%2BskEjnFLRWzUuoBOx2TXSh4x53gWROh4w%2Bbh1%2F18IhJe8V0pfX7OrhN0fdnoHhbYjkL7FTZajZ81UW5iRMPoV8PWHxg5o%2FCMyUszvqlZqaS2FDvh9JF&X-Amz-Signature=4f26ce9dc9a6fc56a121f53fff9f1022cdf1a0e4a4051cf0d52b065d34ded9a2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664XMMSK2W%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T050012Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBn2MBjprLnCvRoNMJfiPsJdptjwn%2FfN08fpzBLH2Y9hAiAJtrGyzFBZbbHmbJJ4KRJemj%2BPtYcvIgC%2FHd7GLdsypiqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM0egh58QdPhvwLGawKtwDucd6RKotI%2FwGuWEx%2FDL9fVq7OHtov9Po2FDdweqK%2BLloV2khKmg%2BD%2BizZvFgrZnjWu6HprFgJDB%2BcJ8BMDoboeEi85cq7Wzf844FnSSNTTybucxTbIh3YIC2CqpWlk7Ceng2rq4wNyx7SCvKAq%2BwnrP88Fl8aTs2RTU9OXusU4yaECdM%2Bue24utq38zCh32BLzLnoUfwv2HLT22TP%2BNKx261LRxV9XQiFTQj3BvY1znts%2FdfpUZcXq0VV3ZFI3%2FrJVBywl%2Bji%2FXqTJe6PW1gLfDLHsWOebOLFQgkVNYlN7UjLIgi6b5idovyksweUMBS8Qbpzn8XOJmrXqGXpSuOA3nCDMnbiuGfHWPyYuPgH5dWc7RGaGglmdw3iKnUn765JnexmLpBsrESMG5UVnvWS3JmRCWHzS1iWeZ1p%2Ftttotvfzm%2Bh2vStEvmxjXphp%2BcxL1qZtIs5ZKB1Dg8uFjsQw%2B0SZOAnwSBMBoEiUqteccHvKrnbmYMicMXCe1rJUVierv5N%2F7uasEgUY5nyeEgovGM9kedOYVvItepBEqC1IlBv5G70zZB8DZUUeQ8B4KZLmzHozGvOQqICc%2B8ZL5WFLEJ0QnBsveuHJAYKWP5fQp2UNrke2mLzsWLni4w6v3SyQY6pgHkgspWQ9hfUpo54P%2FvY%2BDMcWRAcCINveruaokbjMLa%2BgH6gvgSENXSImOMUxROzotTFQJZXs913vWPQzMGg3UNtoYRH%2B4YM%2BGXTGBbMoksx%2BskEjnFLRWzUuoBOx2TXSh4x53gWROh4w%2Bbh1%2F18IhJe8V0pfX7OrhN0fdnoHhbYjkL7FTZajZ81UW5iRMPoV8PWHxg5o%2FCMyUszvqlZqaS2FDvh9JF&X-Amz-Signature=f259ab1faecf4d12750c80cd46e6c51981bf854adde4668977725bc9929dcc81&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
