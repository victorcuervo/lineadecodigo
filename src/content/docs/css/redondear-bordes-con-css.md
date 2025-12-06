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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663GSOHJSQ%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T054611Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDGdCvlV010BTtpEe0Od%2FMbqdxKlU%2BD9pGQVum%2FAJhguAiEAoMd%2FM8YScRuZpt9aaHv8xGRVljdiuYaPV1O2oebPmOkq%2FwMIbxAAGgw2Mzc0MjMxODM4MDUiDAc3N4BDTOL4OFVKICrcAw76dIOOwwGb%2F55WFNJIEkoTvHWsWK9JwFExwkqvV2vZdVrDmjaYEmxru7ZROadkpXn9JWTGxjwTQ63LxgQSeoNyv4W56kdopahTJk9lhQRdcp1jb6vUr6zEwgg9aPvoZUiOpJyosZhCoD%2BwWsrbx73dAr3ta5i1CTOf3o4ls3n33gqMUhDsF2Ib0K%2F1I%2F3xXDC%2BR9z%2B5%2FW7pC19yNnIkrTHwRubnbBZVBZiefK7Nj7AZClNhHWN0WEKIDsMOOPfrxNl9%2FkofPR1d03dcZLRiQt0bHJGNaHXgShz1NZ6UVI1OJ9icQouQlYi%2B%2F7Ac8v0%2BSH%2FihC5Adcf2GZl%2FFdTnFwMgeS9WzPLdJ%2Bi9hx7mNNY1%2FLM8YYPwWFxFWp8mlkWQxmkTsiXzDIgPTLTdal3Ix60tEBmN4MzMRwCQKmsI2zwxr8BsCZBivBsamA6c3%2FZi0NRQGJSc5rl9MFekJ92LHoRTdTbhiGeW6ozx4BayD7oS%2B9Ef4htrXwFm64X1cJ5D1S1np8JNZFd%2FVGgWHO%2BfkQNhQmBVaXODteaz6GvxN3u1n3oC0z%2FeMhhaQRcCEhQetb5Ny82aK06Thn8w2OW7m3K3jCwMXp87AOVc828794Fl5W%2BmX16HLVbxgmVMKX9zskGOqUBs3dvumBqy6hmtzzbkcp8YBRN1ykb3pMdPdSe4iGdj9MxBONX%2Bc8Mexi48ZF422rJxU%2FDhRJWVKe%2BFjOqX%2BBSJV9iu6nW1FmIQL%2BIvAaMwhpoQt5LoktjFmNRkpU5zwhqF7J3rWCDIk09USjyFeEUxJC8t7%2FOZRXzCQELE6tsKHsNk1D5WzJ0kxNlhIP1zf5cJZGjqDUiCjE7gUw8jErCDqaKk5Hp&X-Amz-Signature=7494a2f35d23ff00dcbfb58433a23b94708cc8671a868373165a44a22b20c1d9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663GSOHJSQ%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T054611Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDGdCvlV010BTtpEe0Od%2FMbqdxKlU%2BD9pGQVum%2FAJhguAiEAoMd%2FM8YScRuZpt9aaHv8xGRVljdiuYaPV1O2oebPmOkq%2FwMIbxAAGgw2Mzc0MjMxODM4MDUiDAc3N4BDTOL4OFVKICrcAw76dIOOwwGb%2F55WFNJIEkoTvHWsWK9JwFExwkqvV2vZdVrDmjaYEmxru7ZROadkpXn9JWTGxjwTQ63LxgQSeoNyv4W56kdopahTJk9lhQRdcp1jb6vUr6zEwgg9aPvoZUiOpJyosZhCoD%2BwWsrbx73dAr3ta5i1CTOf3o4ls3n33gqMUhDsF2Ib0K%2F1I%2F3xXDC%2BR9z%2B5%2FW7pC19yNnIkrTHwRubnbBZVBZiefK7Nj7AZClNhHWN0WEKIDsMOOPfrxNl9%2FkofPR1d03dcZLRiQt0bHJGNaHXgShz1NZ6UVI1OJ9icQouQlYi%2B%2F7Ac8v0%2BSH%2FihC5Adcf2GZl%2FFdTnFwMgeS9WzPLdJ%2Bi9hx7mNNY1%2FLM8YYPwWFxFWp8mlkWQxmkTsiXzDIgPTLTdal3Ix60tEBmN4MzMRwCQKmsI2zwxr8BsCZBivBsamA6c3%2FZi0NRQGJSc5rl9MFekJ92LHoRTdTbhiGeW6ozx4BayD7oS%2B9Ef4htrXwFm64X1cJ5D1S1np8JNZFd%2FVGgWHO%2BfkQNhQmBVaXODteaz6GvxN3u1n3oC0z%2FeMhhaQRcCEhQetb5Ny82aK06Thn8w2OW7m3K3jCwMXp87AOVc828794Fl5W%2BmX16HLVbxgmVMKX9zskGOqUBs3dvumBqy6hmtzzbkcp8YBRN1ykb3pMdPdSe4iGdj9MxBONX%2Bc8Mexi48ZF422rJxU%2FDhRJWVKe%2BFjOqX%2BBSJV9iu6nW1FmIQL%2BIvAaMwhpoQt5LoktjFmNRkpU5zwhqF7J3rWCDIk09USjyFeEUxJC8t7%2FOZRXzCQELE6tsKHsNk1D5WzJ0kxNlhIP1zf5cJZGjqDUiCjE7gUw8jErCDqaKk5Hp&X-Amz-Signature=0a7ac331e61e9c971bb50b80a383986caa68136aa471f23afa68d5c0244eb755&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
