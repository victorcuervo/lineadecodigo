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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663GDJ4LIX%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T124145Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDmS3LKIkwAWGhPZcWP3RBz3eUmXjCqBD%2B1hi6Fc%2FKE6AIgdiks%2F9K7cR13nwUVM9KMWcUN3ReeJW%2F2%2BOKDvd%2BZOMYq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDMRHWyTRP6FuJ%2B83OCrcA9RZIq7fzQhfTEwsRClhhI57%2BIB6F6a%2FFHrSM1mW9y424YEV5X1MEbRjPqn15E5klF5nxghifidtmiFxzGLVIzCEmz9K6V%2FOof67q5eaI0S58r5D2C5dpJmwPnyy0RNKZb0goYW%2BPutAUxgxxkriN%2FU9q5MStITDr%2F7YFtmUUj%2BCcnbCzDTct2ieufzn%2FLzWKBH06%2BIovkrkZVo74TxNMxasd1Ds2rqOLr1ucz0GMyAhdg47ns946n2gezZh5q8Fesmn%2FrwXfG6rwkfnZfpfAY1B9cFgYPRtDpnCg%2FoyeMOMkNkSo91NdQWE6wy4XwF5J8J8stLk9%2Ba7sSsXy0BbHcaT6jZyxJCGm3A8NuqP1E%2BDYhFvjcRhz8hj1LVRjCPrXJpm7DDx7J0C530U4hYyWZNwxX96F8l%2BwumiIE82Sydvro9TFq9SB5xYkdvNBQlGZJqJxWD6xdkgke6LWUm88uoxOlW%2Bh2l8oCtiFIBwNUTUshqCtmzXMraMlKEu5oOPq9XplpGv4ylMsWvIFYeR5pUsZBCmiAFnNFjZqUiExV76cYo4qD0qRcf96M%2FYuxqXo1HvTHbyShsxBJQqG%2FbHFr%2BHvs3wl09GWTVSWIHivZQreWMRN87Dg%2FasPQdCMMbGisoGOqUBnduv36luWxd5SWlFITGPxEMycwYlxMaf%2FtKjaxIKa%2FG%2FOX8O0U%2FAw6oVSAT8IppEDDOJAuFtbeVsRSjmpiIO0xmF8bMjpUmEXIjXG8YG%2BFIpDDHC%2B6wCBGnCcgdIiILMQQGSbU7NNFOqx4cA8xMSHfzu1PHhAYeqA5JC6PQQgRfYNx0KZTrLT%2F9stSDqZRvJmyPxIOjeSxG84%2FqQxfs4lBLtqytC&X-Amz-Signature=9133a6b7676adfbc4183d18911f930db4dd4391a0dffcae305c96b8878836d8c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663GDJ4LIX%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T124145Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDmS3LKIkwAWGhPZcWP3RBz3eUmXjCqBD%2B1hi6Fc%2FKE6AIgdiks%2F9K7cR13nwUVM9KMWcUN3ReeJW%2F2%2BOKDvd%2BZOMYq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDMRHWyTRP6FuJ%2B83OCrcA9RZIq7fzQhfTEwsRClhhI57%2BIB6F6a%2FFHrSM1mW9y424YEV5X1MEbRjPqn15E5klF5nxghifidtmiFxzGLVIzCEmz9K6V%2FOof67q5eaI0S58r5D2C5dpJmwPnyy0RNKZb0goYW%2BPutAUxgxxkriN%2FU9q5MStITDr%2F7YFtmUUj%2BCcnbCzDTct2ieufzn%2FLzWKBH06%2BIovkrkZVo74TxNMxasd1Ds2rqOLr1ucz0GMyAhdg47ns946n2gezZh5q8Fesmn%2FrwXfG6rwkfnZfpfAY1B9cFgYPRtDpnCg%2FoyeMOMkNkSo91NdQWE6wy4XwF5J8J8stLk9%2Ba7sSsXy0BbHcaT6jZyxJCGm3A8NuqP1E%2BDYhFvjcRhz8hj1LVRjCPrXJpm7DDx7J0C530U4hYyWZNwxX96F8l%2BwumiIE82Sydvro9TFq9SB5xYkdvNBQlGZJqJxWD6xdkgke6LWUm88uoxOlW%2Bh2l8oCtiFIBwNUTUshqCtmzXMraMlKEu5oOPq9XplpGv4ylMsWvIFYeR5pUsZBCmiAFnNFjZqUiExV76cYo4qD0qRcf96M%2FYuxqXo1HvTHbyShsxBJQqG%2FbHFr%2BHvs3wl09GWTVSWIHivZQreWMRN87Dg%2FasPQdCMMbGisoGOqUBnduv36luWxd5SWlFITGPxEMycwYlxMaf%2FtKjaxIKa%2FG%2FOX8O0U%2FAw6oVSAT8IppEDDOJAuFtbeVsRSjmpiIO0xmF8bMjpUmEXIjXG8YG%2BFIpDDHC%2B6wCBGnCcgdIiILMQQGSbU7NNFOqx4cA8xMSHfzu1PHhAYeqA5JC6PQQgRfYNx0KZTrLT%2F9stSDqZRvJmyPxIOjeSxG84%2FqQxfs4lBLtqytC&X-Amz-Signature=c5f3a470152b49986ec9da24febe3f3a3e9ba74fef9386b69f08e8f39573c693&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
