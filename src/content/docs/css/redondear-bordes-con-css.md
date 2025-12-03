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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662BZ4VBVF%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T234210Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJIMEYCIQDYlXm5%2F%2FRXrRCdrlOBp%2FFyq7cKvZbcLte6rkTSdztrlAIhAKgcz6bmci%2F%2FHsmt1EwyXmCqefiNlgQplRXXuO%2F7W7VhKv8DCDgQABoMNjM3NDIzMTgzODA1IgzgkhAQKX%2Ft1ERU27Iq3AMxn%2F9dFHkuOL0VPhwIiOZilL5%2FdEqmYyq8WM6mUi6EC1hTMSm%2F4vW5fAY0SPNFyBv7%2BeKrhHotfsFhvrYJ4VuX2rBjVUU2xwxKWQxvrigiqvxpZBVL%2B3E765xOTGXhdXiiWzN%2BOM01hwx2taf3NVBrHjaqMMw0dYbfbg9EMV0Pu3bbHJPL68MAZTVBTARyTUxBsAYnM0GrskrKyucpMSUFD5guorRTVfiWrcOoFR%2FC%2BMBQL8DVTdgmmgCFSkS%2Fj5qTIBexJNR8vbzr0mHY1vRVGFhYHTxtWHSDM241fUHChag0XXxLcbDFZ4Ck3s%2BGFdIh27wa6EkoD46VW8Eb5WchHPIbJWajZLOnh%2BbTohaC5V9wLSqQfN0OAQuSXzd5av9hpOAYiIfq5%2BnyMXp1j4SrIf7LbURaDwZ8vghJNClnmNfsz4gdce%2B1bykj9ChqDoyJSV8cPC2Ckgjk2r1%2BWQLZlOCauvlHrdkSDzRhhnjbvXND0cuTjwTi%2BTNd32K2gm%2Br83Cotcd7Rq%2FteeI6yd%2BiIJ5cH2eKaPTSDNRshR2W1dqyjp5wCkLvm%2FuM%2Bs%2BhyvK8HsFLtXV7QWwyZp7LKgVEqXVYR3ZTYa3hFsk%2BvXJ0veGolBaSAxfat4lh%2FjC%2F%2BMLJBjqkAeAli5aM6bygFqDqJ2GxDbSiALzCfNxyDLlzhRbTME4%2F4qGvU53tWM2VMETkvRGQF5vq9kVjrpwRCm3N1c2T86D%2Bff0mUQHDLTuQvlvqDfy02sD6hgYI4TgwzgkM%2Fh5Oks2THFzDIgyJlJM0RLIu1o9UelRljRLzcsJ0JMp9eOVRfpG9OBfauYtVZ1kuRVhVV1%2Ffrl%2BWwEhjAvKjfqNS7VXyysf%2F&X-Amz-Signature=2efc2ea015b17b7cd9c9b3c273607e75709afc284636090b039fad0b2032dd32&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662BZ4VBVF%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T234210Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJIMEYCIQDYlXm5%2F%2FRXrRCdrlOBp%2FFyq7cKvZbcLte6rkTSdztrlAIhAKgcz6bmci%2F%2FHsmt1EwyXmCqefiNlgQplRXXuO%2F7W7VhKv8DCDgQABoMNjM3NDIzMTgzODA1IgzgkhAQKX%2Ft1ERU27Iq3AMxn%2F9dFHkuOL0VPhwIiOZilL5%2FdEqmYyq8WM6mUi6EC1hTMSm%2F4vW5fAY0SPNFyBv7%2BeKrhHotfsFhvrYJ4VuX2rBjVUU2xwxKWQxvrigiqvxpZBVL%2B3E765xOTGXhdXiiWzN%2BOM01hwx2taf3NVBrHjaqMMw0dYbfbg9EMV0Pu3bbHJPL68MAZTVBTARyTUxBsAYnM0GrskrKyucpMSUFD5guorRTVfiWrcOoFR%2FC%2BMBQL8DVTdgmmgCFSkS%2Fj5qTIBexJNR8vbzr0mHY1vRVGFhYHTxtWHSDM241fUHChag0XXxLcbDFZ4Ck3s%2BGFdIh27wa6EkoD46VW8Eb5WchHPIbJWajZLOnh%2BbTohaC5V9wLSqQfN0OAQuSXzd5av9hpOAYiIfq5%2BnyMXp1j4SrIf7LbURaDwZ8vghJNClnmNfsz4gdce%2B1bykj9ChqDoyJSV8cPC2Ckgjk2r1%2BWQLZlOCauvlHrdkSDzRhhnjbvXND0cuTjwTi%2BTNd32K2gm%2Br83Cotcd7Rq%2FteeI6yd%2BiIJ5cH2eKaPTSDNRshR2W1dqyjp5wCkLvm%2FuM%2Bs%2BhyvK8HsFLtXV7QWwyZp7LKgVEqXVYR3ZTYa3hFsk%2BvXJ0veGolBaSAxfat4lh%2FjC%2F%2BMLJBjqkAeAli5aM6bygFqDqJ2GxDbSiALzCfNxyDLlzhRbTME4%2F4qGvU53tWM2VMETkvRGQF5vq9kVjrpwRCm3N1c2T86D%2Bff0mUQHDLTuQvlvqDfy02sD6hgYI4TgwzgkM%2Fh5Oks2THFzDIgyJlJM0RLIu1o9UelRljRLzcsJ0JMp9eOVRfpG9OBfauYtVZ1kuRVhVV1%2Ffrl%2BWwEhjAvKjfqNS7VXyysf%2F&X-Amz-Signature=b95b9cc083a09cd71d9b6e3d7d6e9841aa01150a714687d1de6901356a2acb26&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
