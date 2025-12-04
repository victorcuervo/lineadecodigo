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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZFDGEWNQ%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T124958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJHMEUCIQDVjqIYQCc69QPcWj69qhUxLSowt18VAO41MOXv%2FDx2pAIgfRtgacjXNWUVA73WY7qd6x%2B7yNqwJW6F7qzVQn%2BlIoEq%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDHfSZs1o6DQTPgXNfircA3mlG5vTSm14zzZNdCi9P1C55ZEpBi3Xn%2BtmhC6%2BVvQVJmBHROuHRkHGsgg2hhMLlGFRRZbrZNNJym4kHDGAFbvTMKqx%2BMxMN%2BnRKknIN4QaXjJn1SHPJK51MUXsa0NltSdg%2FzMcSDRMs%2FmSpSdillxFmA1a%2FqJccWBFh18Uduf5K1wDIizrwcYf7oY5mfVlx8ct41bqIZtXdiCKt1NX5r1PyXul3IJcb3zL9s8OKVfdxDoxPNPlwnUcpbhCWoR5VNZEs1zdH7OoODOp5XpnnljFePD1MoWY%2B%2BifRQpSgKBth25fW01c%2B7O0Y9rqlrCK6aeYNleOkqSVe7aG71xv%2BI4UelXaFO7jMHvvCQiGEZVnMjOghLYbEYbjM6xBsmBqSnl3o5%2B%2FN1Yth3dlkLzoawpLadJ%2FacnGrAt36mlE0%2FbjP5QLX%2BiGe1ImdAjJiCfrTgoHHoNIrBn4yR3qdt4c9V%2FAlHb5fN0hGy170ecYaG5%2BYshdwTI2MNLU9uyZd2ZcjX3wY6gwBp9IZYQvyUoCqF%2FZyLMnZqKDLN2yLmB3DEVxFbdeyc3b%2Bhc6rkC6tbftf%2BUvgMfcom2M7U8m%2B0Dpl2GmBLPK64WDuIGi%2F%2BBQdHZwPwwJiL%2FgvV9ONCgXMIOExskGOqUBsxWkCND24yILSY%2FhetLERdYT%2BM5zuOe7HVUjijxUmrcsVKorJSQXdPIpvhOHlG3y9TYnQ2gm8S0GQF7bPw3KNB9r3I%2BNa0wsiiIvwFEKlxqDrip2o7A1CakKlQIHcVQYPTWex4gnLT6hPcIbZfkycB7tKlRbZjPt4rDl1PUWLjeIam7m%2BnxYxE3bI5Wf0%2BlczWWC1qXljRl0pRjPC4eQyCgGG2WO&X-Amz-Signature=7dedae6d40e74e296ac626c7f1f2a19d33b53badaab9a0b9ba6b5a58235f9f78&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZFDGEWNQ%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T124958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJHMEUCIQDVjqIYQCc69QPcWj69qhUxLSowt18VAO41MOXv%2FDx2pAIgfRtgacjXNWUVA73WY7qd6x%2B7yNqwJW6F7qzVQn%2BlIoEq%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDHfSZs1o6DQTPgXNfircA3mlG5vTSm14zzZNdCi9P1C55ZEpBi3Xn%2BtmhC6%2BVvQVJmBHROuHRkHGsgg2hhMLlGFRRZbrZNNJym4kHDGAFbvTMKqx%2BMxMN%2BnRKknIN4QaXjJn1SHPJK51MUXsa0NltSdg%2FzMcSDRMs%2FmSpSdillxFmA1a%2FqJccWBFh18Uduf5K1wDIizrwcYf7oY5mfVlx8ct41bqIZtXdiCKt1NX5r1PyXul3IJcb3zL9s8OKVfdxDoxPNPlwnUcpbhCWoR5VNZEs1zdH7OoODOp5XpnnljFePD1MoWY%2B%2BifRQpSgKBth25fW01c%2B7O0Y9rqlrCK6aeYNleOkqSVe7aG71xv%2BI4UelXaFO7jMHvvCQiGEZVnMjOghLYbEYbjM6xBsmBqSnl3o5%2B%2FN1Yth3dlkLzoawpLadJ%2FacnGrAt36mlE0%2FbjP5QLX%2BiGe1ImdAjJiCfrTgoHHoNIrBn4yR3qdt4c9V%2FAlHb5fN0hGy170ecYaG5%2BYshdwTI2MNLU9uyZd2ZcjX3wY6gwBp9IZYQvyUoCqF%2FZyLMnZqKDLN2yLmB3DEVxFbdeyc3b%2Bhc6rkC6tbftf%2BUvgMfcom2M7U8m%2B0Dpl2GmBLPK64WDuIGi%2F%2BBQdHZwPwwJiL%2FgvV9ONCgXMIOExskGOqUBsxWkCND24yILSY%2FhetLERdYT%2BM5zuOe7HVUjijxUmrcsVKorJSQXdPIpvhOHlG3y9TYnQ2gm8S0GQF7bPw3KNB9r3I%2BNa0wsiiIvwFEKlxqDrip2o7A1CakKlQIHcVQYPTWex4gnLT6hPcIbZfkycB7tKlRbZjPt4rDl1PUWLjeIam7m%2BnxYxE3bI5Wf0%2BlczWWC1qXljRl0pRjPC4eQyCgGG2WO&X-Amz-Signature=684c349a76c16e508f39dd125fad2f919ee686098ccd9579e70e1069bc0ba493&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
