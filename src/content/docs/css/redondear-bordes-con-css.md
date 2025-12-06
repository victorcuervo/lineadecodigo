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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46654TQ64SO%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T072746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFgfJqChD15uelZPkAWuC2wy7E0gJqc9HQ44ba1ESLgdAiA54%2BDk9dM3C09wN1BJ9dsAvLQY5iUAwmxfDNuTP2li9Sr%2FAwhwEAAaDDYzNzQyMzE4MzgwNSIMoKT1QU%2BuQRy%2FeOP1KtwDKALl80EzE5bhIIz%2FBUiIm9fOfxN8ReeqtSmmqdlMSkpYCT%2FKGtQiC165%2FrHrxAAAZ5s8fCckdRRUqJ8xNB1bcQUTUfEIa5L8LgU0ldAlBOlaN%2BqaRoxw%2FNUUIEA43xpX0MDgm1ysukn8yEBgNvUrSaxpDPnGoDc%2FJ9hDnuxpfwHW%2B0o98NNrakE%2F5OJtzTYNXPZYgi6fuuRto6USiJPBVCfaoSl1dMOmkdl1aFxU0trPIy9mpO%2Bs%2Fibz5EkRcnJiEHV2bn90kB7AFl9YAbjAI4T3L4ylWUWPfb7eMrwYuUbF5rh7BzIlhbblbqL0GQwGJ8fICR%2BCelqTknymC7uZCZvZNyykiglIFrYQxqp4eiDMHmijotK8LAczsr2c9zcce3jHh7go2C8LxNzuwA1rLBm62rAhVGBfpRPLA4Dd1lK3rzvCZnyx1Y5w3MwIkLFqcw0wx51bLr28JEXRW5fC338GXDTAyb1kuZKIU67sdxP6zezTEgUQUjb2Kg4ye2FN26%2BbzwXiVOyPt%2BVoV43xOUkC0iyP3BFWTi4DkWZRok9idKtyjnKH8VMsnk1JzdxABRlOhElKXi3kpTsKfWnkJ8hKD0IAM2BqN18SeaCt0qx2gJ47lkBizlsr0acw7J7PyQY6pgE9LtSX2pgzd3TwEw%2Fl5GtNT%2FomPQw9KAWzszLna1VcntgyCkOCaAZRltKKTMG9TMSv4N%2BhlBfFymjwhFORpsGcC78FFJ4%2F1%2FdVzVxY7xRMkTNxvOqdUCjxtjoOhAKxCexFxQ3GKhsfzb23odLPDwMSmhD%2BxTUO8sTAuCp9ES5pmd06Zsu4yz3jU841w58cCjGHzBXfuIwt7SF%2BvmmMb6n95%2F%2FUMoC9&X-Amz-Signature=79a2b23a79167fb534883b7aaadd8affae5e77a17c0e1ddf6d58fa25576168c8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46654TQ64SO%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T072746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFgfJqChD15uelZPkAWuC2wy7E0gJqc9HQ44ba1ESLgdAiA54%2BDk9dM3C09wN1BJ9dsAvLQY5iUAwmxfDNuTP2li9Sr%2FAwhwEAAaDDYzNzQyMzE4MzgwNSIMoKT1QU%2BuQRy%2FeOP1KtwDKALl80EzE5bhIIz%2FBUiIm9fOfxN8ReeqtSmmqdlMSkpYCT%2FKGtQiC165%2FrHrxAAAZ5s8fCckdRRUqJ8xNB1bcQUTUfEIa5L8LgU0ldAlBOlaN%2BqaRoxw%2FNUUIEA43xpX0MDgm1ysukn8yEBgNvUrSaxpDPnGoDc%2FJ9hDnuxpfwHW%2B0o98NNrakE%2F5OJtzTYNXPZYgi6fuuRto6USiJPBVCfaoSl1dMOmkdl1aFxU0trPIy9mpO%2Bs%2Fibz5EkRcnJiEHV2bn90kB7AFl9YAbjAI4T3L4ylWUWPfb7eMrwYuUbF5rh7BzIlhbblbqL0GQwGJ8fICR%2BCelqTknymC7uZCZvZNyykiglIFrYQxqp4eiDMHmijotK8LAczsr2c9zcce3jHh7go2C8LxNzuwA1rLBm62rAhVGBfpRPLA4Dd1lK3rzvCZnyx1Y5w3MwIkLFqcw0wx51bLr28JEXRW5fC338GXDTAyb1kuZKIU67sdxP6zezTEgUQUjb2Kg4ye2FN26%2BbzwXiVOyPt%2BVoV43xOUkC0iyP3BFWTi4DkWZRok9idKtyjnKH8VMsnk1JzdxABRlOhElKXi3kpTsKfWnkJ8hKD0IAM2BqN18SeaCt0qx2gJ47lkBizlsr0acw7J7PyQY6pgE9LtSX2pgzd3TwEw%2Fl5GtNT%2FomPQw9KAWzszLna1VcntgyCkOCaAZRltKKTMG9TMSv4N%2BhlBfFymjwhFORpsGcC78FFJ4%2F1%2FdVzVxY7xRMkTNxvOqdUCjxtjoOhAKxCexFxQ3GKhsfzb23odLPDwMSmhD%2BxTUO8sTAuCp9ES5pmd06Zsu4yz3jU841w58cCjGHzBXfuIwt7SF%2BvmmMb6n95%2F%2FUMoC9&X-Amz-Signature=042fceaa8647ea7498a78b5256aba30800864faaea3ef13d526a965ac09caa03&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
