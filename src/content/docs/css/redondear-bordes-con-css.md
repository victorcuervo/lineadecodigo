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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664QTFUTMT%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T195556Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCSPbQM6QNTH5txPP15qL6BqdxxWtNdELRzcEgsrp2cuAIhANxJqSuUGygZ%2FVpKas3GMM%2FCy1QdNLmRWwGPXBz3ly2GKogECJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwsp%2Fz08At5UMK0YCsq3AMG3TJVtWiH6cUghr1UIZzSw1sHM35qWXxMREUxmAxkaecnZ7ERM9cdqhP7SQfrIZpkxrP9to6%2BHRvDtuCc5%2BrNoBf9QtGsyoX05siX4CyJuHW1NxinP4eaGp%2BbWyw0l7msGf0uUXFo7CYC4H4%2BZCIfd0PsQZtXe54YcpGrNG0W5Zp3%2FA%2BCmfyXZB0BSrnvI6nUfbQzc7uk09CddNFgiDkJJFC0K1q1W%2B1tLY4KqI8mfV6zBvxgGsSZsqaWOeiEj0BWLmbBhn%2FEXjrE4NLdnNYCAbxYCjS3o%2BQGzvTEdg4keA3H3TsPwJBXg61xUz29ld1%2BbHm%2Bo0VUWygZGSsP%2FqTOZaZccepKTUnE5J5a9RXI%2Bz7Rag1nIK4d0OTN4rYG4YpjjSq8v1I23bEIhw10M%2FwQn7lg40b6m1x2BdLKnPl54xf8%2BWylaTHtErdAS85HoZKEI4PLXpK9zlyXjSoXcdr2NVWQS8ykzNxCJFFdE7YzkEp4fUc8SNVa1uBZ1zhrgmpXQG8MX6l1vxN3Fo0hi%2BL0ziA44sUDs7ba5J7ob%2BIuCGCuPgSCmubEIZrB94NQH8p26IIHq8aDptC1x8W8yAeBrAoENpRxnaBFxmoWwepfUNr3tl3vl2YqUlf%2BwTCDqdfJBjqkAQBvzi9Ji1xC34qhDMvfwyVEys1u63C9afQC8dvw2g0w2ZlIP1wXBJbzLzjd72zoXIqsx5pu09XXow5R%2B%2FlAiGk6pr%2FPEy8IlHGIlhB9daU%2FhMz6PHBm6Nt9Yzn8t%2Fs4kadZFbseooi1SQCW5YdqVVkb13CS2LQHmHUt02iqOwuLiaggxMXff5Z2vEIp8b75Xfgo3U3uJDR88TrDm7dIKGiuTMM3&X-Amz-Signature=c8ab358fad4b8d6800f4f636626f7ee87faa4d599ab58e4910b8b497bd9c833b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664QTFUTMT%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T195556Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCSPbQM6QNTH5txPP15qL6BqdxxWtNdELRzcEgsrp2cuAIhANxJqSuUGygZ%2FVpKas3GMM%2FCy1QdNLmRWwGPXBz3ly2GKogECJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwsp%2Fz08At5UMK0YCsq3AMG3TJVtWiH6cUghr1UIZzSw1sHM35qWXxMREUxmAxkaecnZ7ERM9cdqhP7SQfrIZpkxrP9to6%2BHRvDtuCc5%2BrNoBf9QtGsyoX05siX4CyJuHW1NxinP4eaGp%2BbWyw0l7msGf0uUXFo7CYC4H4%2BZCIfd0PsQZtXe54YcpGrNG0W5Zp3%2FA%2BCmfyXZB0BSrnvI6nUfbQzc7uk09CddNFgiDkJJFC0K1q1W%2B1tLY4KqI8mfV6zBvxgGsSZsqaWOeiEj0BWLmbBhn%2FEXjrE4NLdnNYCAbxYCjS3o%2BQGzvTEdg4keA3H3TsPwJBXg61xUz29ld1%2BbHm%2Bo0VUWygZGSsP%2FqTOZaZccepKTUnE5J5a9RXI%2Bz7Rag1nIK4d0OTN4rYG4YpjjSq8v1I23bEIhw10M%2FwQn7lg40b6m1x2BdLKnPl54xf8%2BWylaTHtErdAS85HoZKEI4PLXpK9zlyXjSoXcdr2NVWQS8ykzNxCJFFdE7YzkEp4fUc8SNVa1uBZ1zhrgmpXQG8MX6l1vxN3Fo0hi%2BL0ziA44sUDs7ba5J7ob%2BIuCGCuPgSCmubEIZrB94NQH8p26IIHq8aDptC1x8W8yAeBrAoENpRxnaBFxmoWwepfUNr3tl3vl2YqUlf%2BwTCDqdfJBjqkAQBvzi9Ji1xC34qhDMvfwyVEys1u63C9afQC8dvw2g0w2ZlIP1wXBJbzLzjd72zoXIqsx5pu09XXow5R%2B%2FlAiGk6pr%2FPEy8IlHGIlhB9daU%2FhMz6PHBm6Nt9Yzn8t%2Fs4kadZFbseooi1SQCW5YdqVVkb13CS2LQHmHUt02iqOwuLiaggxMXff5Z2vEIp8b75Xfgo3U3uJDR88TrDm7dIKGiuTMM3&X-Amz-Signature=6d48ac41ad69e973e3e3be7444c04dcd5cf24f469e64f7255d5b70b5ec359304&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
