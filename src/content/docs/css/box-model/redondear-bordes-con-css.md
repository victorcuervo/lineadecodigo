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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664EGRWQ67%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T155917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCNFkmAbqSoo1zcI9Tub01%2BTeGf9klCVYjpLicI1rZrLgIhAKR0eyTR%2F%2FHMYtNiDnBWw5RRpUl86U0M4JSI9QuwsXfpKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwkbp6saShA5lIN5TMq3ANEIO8gHwnKzk1SqzQAL2NInxAaWkLHewMgE70njqEqqj1qfXG0lZCatpn8PSm8XJP1GzuJP7sehfiqdItiT32xrQDYXrkDu0xdbq80NYsYT%2FocoxA4EqtGnhyEhxBjpUpekech1BiP8UmDtH31wKllkOJgrc0c3dEAt9EeAd86GK%2BZNfQ%2Bm0V0YV19HZiA9cux6WKNhPcmj3nO7NnZHY0%2FP8xZB0thfrYEhMl4jcPVKtz2qUnGceX1yH4Vce9FO%2FqhpIEKbO1nGdk7SeqOdTIpBWZDf05wJ3pIQgAldXQka7z8NVwRaLcYzGkM%2F%2BmYWV4xjAG954kk4NWr8vecEp652EfT89rDIgqLiUpJj3SbiUI69SBCPbvEWEvpjGNgWB44do7Qdc6bbCRusfDMeifOUmgiYL9aje1i6CKkhX7aaT14hC%2FJalv22MGDwVGivGhxrCPuvkmlveG2uO0vgktbUu2GVzUnti1jgdh4LlzvA7qOi7UfB8VKxIC0x9XWfbUA0fwV7kfOJRGsChgAPc3yCvq0Fs68aHmaMtcnfGo5vlik5pk%2FvtJY%2BUyUJUZoKKmcoQtfRiatAyYCP3Ji7LFE22YFrUjESdgUUzVhQ5MrKhAFOM33%2FElDGxQ6FzDvoIvKBjqkATIj4D7TZDDnBwmGePDKr4yFGebEP%2Ba10flVb5E%2F5RQuisiCnaNCzHwJz4BPGnoa4T7ONkS4Qs8rGjUUgRZcn%2BP%2FpncrS7q87q4ndPLzad%2B61YZXqv75BZ%2B6kZxPuTH4GDRLLZcTazCAmD%2BB2fFqV%2Bl4LXGEDBeKwgHOeAvItUGOmR2JJ2ccII0jrC%2FbVSEzmUi6jKrJd%2BS%2BrXfShU5vBTiwxFwR&X-Amz-Signature=7d5d2543e6693fde190c2a7c0aa31d2e355430ad8f032764366d6acdcc560e6d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664EGRWQ67%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T155917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCNFkmAbqSoo1zcI9Tub01%2BTeGf9klCVYjpLicI1rZrLgIhAKR0eyTR%2F%2FHMYtNiDnBWw5RRpUl86U0M4JSI9QuwsXfpKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwkbp6saShA5lIN5TMq3ANEIO8gHwnKzk1SqzQAL2NInxAaWkLHewMgE70njqEqqj1qfXG0lZCatpn8PSm8XJP1GzuJP7sehfiqdItiT32xrQDYXrkDu0xdbq80NYsYT%2FocoxA4EqtGnhyEhxBjpUpekech1BiP8UmDtH31wKllkOJgrc0c3dEAt9EeAd86GK%2BZNfQ%2Bm0V0YV19HZiA9cux6WKNhPcmj3nO7NnZHY0%2FP8xZB0thfrYEhMl4jcPVKtz2qUnGceX1yH4Vce9FO%2FqhpIEKbO1nGdk7SeqOdTIpBWZDf05wJ3pIQgAldXQka7z8NVwRaLcYzGkM%2F%2BmYWV4xjAG954kk4NWr8vecEp652EfT89rDIgqLiUpJj3SbiUI69SBCPbvEWEvpjGNgWB44do7Qdc6bbCRusfDMeifOUmgiYL9aje1i6CKkhX7aaT14hC%2FJalv22MGDwVGivGhxrCPuvkmlveG2uO0vgktbUu2GVzUnti1jgdh4LlzvA7qOi7UfB8VKxIC0x9XWfbUA0fwV7kfOJRGsChgAPc3yCvq0Fs68aHmaMtcnfGo5vlik5pk%2FvtJY%2BUyUJUZoKKmcoQtfRiatAyYCP3Ji7LFE22YFrUjESdgUUzVhQ5MrKhAFOM33%2FElDGxQ6FzDvoIvKBjqkATIj4D7TZDDnBwmGePDKr4yFGebEP%2Ba10flVb5E%2F5RQuisiCnaNCzHwJz4BPGnoa4T7ONkS4Qs8rGjUUgRZcn%2BP%2FpncrS7q87q4ndPLzad%2B61YZXqv75BZ%2B6kZxPuTH4GDRLLZcTazCAmD%2BB2fFqV%2Bl4LXGEDBeKwgHOeAvItUGOmR2JJ2ccII0jrC%2FbVSEzmUi6jKrJd%2BS%2BrXfShU5vBTiwxFwR&X-Amz-Signature=28e3425720596572a2fe899f07f31b5777eb7471e724b195dd8b3aa1ccbfb60e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
