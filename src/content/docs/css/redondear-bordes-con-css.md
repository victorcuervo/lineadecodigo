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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W33LNCBY%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T065903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEdlF5j3kK%2BmhCSebipyJNUqQfK8%2BCbJjSAkvKoCZwtcAiBaJTAEc667XdJoDmeLPyg13%2FEj%2Fc2SF%2B4ygRrD%2F4BqoSqIBAif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMqDSatgxN00bFYXZFKtwDGYpSVu8uR4aLLgZ9MuBfWp5p8DHsubT2ZbLG0bnLF%2FE2tO%2Bw8iiMuKgAFvVibhKUnpo6VMmHLso0j%2B2m3YMu2yjSYcJsDGV7PgKg2CR4apwS%2BwFZflpQsqFSpNenPFYySntT%2B7SwByi%2BPVAcGYwfrMUgfYUEUi%2F2jvCRbdFFqansehCakOdl4qhk4BMRnwbrFkSTVs2IvJhltgryVu9pUa5h51NbVeedRasbeXj%2F%2F3YwfN0jAeU8sWfuB%2FRCvoOgUBxqKaasrGeLhKMe9ovABz3lrHwSlbFvSkvLvCUQtwCkCUXEL8U%2FG33EXMv%2FfWpbPo459%2FQTHmX%2BH3xBQTR%2F3EhxoPl0JulVxagUDB1NE4KSqz%2B1y%2Fn0%2FF8aq9VsZZsmg7Azeo6sicAjnVNGLlIPYJK5RhtzN5bvY6yB%2FNyxIdbIy7TQQlFgWi2KtXnBpnUl2VKwSxyfEsC1oPwvQqfNVcPFyEboRUPTSEQaxWchjNwSadaSUsuM17S8i5m7utx%2FrCB415OZL3GVoGkdHJaUEkRNQZfDLUZ7pvAlzi%2ByOn%2BvcwbpEJuPU7ZJgLXunY3YW7jtKpkD0rUiPFAGNih8JMnHfoWLFNCZu3gOo2%2Fe207UdjfOIRZjsOccQnkwsNDZyQY6pgHtlxceROlF4crZFgXL887k6nYoWXpDMd61nj2sYTL5rTdFWsSdNlfcfelqax7%2F5Mfn1A%2F2eRzw264Opw62zAtx3R7QXPG6weirUTD9bka4H8jiKsuJALwgYEElcmQfvyw405cpE8v8oJg1U9imTH4F%2FuBZ056nfJZS22IxU1QH5icq%2F3LCSW2JH1AfxJvWZcCaCkx8d0nlwR4%2BLHVshR5STOki8Tvv&X-Amz-Signature=f4e97c2c80491a2ad0c5f73a0f713c7b207c84dac8eaec8838dbbd407828d9f2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W33LNCBY%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T065903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEdlF5j3kK%2BmhCSebipyJNUqQfK8%2BCbJjSAkvKoCZwtcAiBaJTAEc667XdJoDmeLPyg13%2FEj%2Fc2SF%2B4ygRrD%2F4BqoSqIBAif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMqDSatgxN00bFYXZFKtwDGYpSVu8uR4aLLgZ9MuBfWp5p8DHsubT2ZbLG0bnLF%2FE2tO%2Bw8iiMuKgAFvVibhKUnpo6VMmHLso0j%2B2m3YMu2yjSYcJsDGV7PgKg2CR4apwS%2BwFZflpQsqFSpNenPFYySntT%2B7SwByi%2BPVAcGYwfrMUgfYUEUi%2F2jvCRbdFFqansehCakOdl4qhk4BMRnwbrFkSTVs2IvJhltgryVu9pUa5h51NbVeedRasbeXj%2F%2F3YwfN0jAeU8sWfuB%2FRCvoOgUBxqKaasrGeLhKMe9ovABz3lrHwSlbFvSkvLvCUQtwCkCUXEL8U%2FG33EXMv%2FfWpbPo459%2FQTHmX%2BH3xBQTR%2F3EhxoPl0JulVxagUDB1NE4KSqz%2B1y%2Fn0%2FF8aq9VsZZsmg7Azeo6sicAjnVNGLlIPYJK5RhtzN5bvY6yB%2FNyxIdbIy7TQQlFgWi2KtXnBpnUl2VKwSxyfEsC1oPwvQqfNVcPFyEboRUPTSEQaxWchjNwSadaSUsuM17S8i5m7utx%2FrCB415OZL3GVoGkdHJaUEkRNQZfDLUZ7pvAlzi%2ByOn%2BvcwbpEJuPU7ZJgLXunY3YW7jtKpkD0rUiPFAGNih8JMnHfoWLFNCZu3gOo2%2Fe207UdjfOIRZjsOccQnkwsNDZyQY6pgHtlxceROlF4crZFgXL887k6nYoWXpDMd61nj2sYTL5rTdFWsSdNlfcfelqax7%2F5Mfn1A%2F2eRzw264Opw62zAtx3R7QXPG6weirUTD9bka4H8jiKsuJALwgYEElcmQfvyw405cpE8v8oJg1U9imTH4F%2FuBZ056nfJZS22IxU1QH5icq%2F3LCSW2JH1AfxJvWZcCaCkx8d0nlwR4%2BLHVshR5STOki8Tvv&X-Amz-Signature=1eede45aa84b69829698336177dc2ce4760ede083beafa449ac696bff2d2e0f7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
