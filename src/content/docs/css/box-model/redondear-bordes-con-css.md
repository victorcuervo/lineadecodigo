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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWH2HQL5%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T213637Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCwGHSWpyC8nFR0Ir1otXEUBchG1Oba7Erz7SRCccxp2wIgaLCjorxUe27iDx8%2FTkEy2FbUpcrQ5t0YCkbyvJUVh1cqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNJFXPnGriVwGwzE4ircA4gdlCSH1MfeQRQ%2FUv4trPnwcl5M9ClG79NiteP8QrT0hJ0GUuYA2N5OhLo6A1j95uf3ApWEyFEBimKhNwGholQ2EJKi8mN1Bf3CiGtRorbZyuLDBKNULJMSYCQ%2Fmz6pkkkmpUGHI6W6ky%2FALB7Xb2akSnibQ%2BPtNL1rVLnGOLPfknfQzpR2PHlX8lIqkxfI7oCXLVAgyNosVCcz7KwxaQrV8%2BBixvEKzhpJYOluZeVYUOsNsLWp2GLv%2BNKkJQfmLPf%2FaVG3W4bXQvolVdkhrzPx8NxJ29oF76RyF06wc0Ztd3iP57mGJpIiPuA78%2B5rBZEFs%2FglwyZZWMuWtJPfQWbD7b9dUI5RTGbZYxs8b99OTyQg%2BohHYP7kUBxY%2BU%2FOxb5ovABK3e2nPKdxMuJ4WD7VlAAzPr50Ubo7coNGGcs5qExNHD44YQ1airsHrYpO1joiL9dyFvbtpNRU7VSYlbiqE%2FPBiTfRacnIVvBkf9b0pJvjjKvptjJvyiDbsBjsGwxlxTuG2G6JH0J5qyDnQMFvCISqg0zJnu3JVSDjAoOfkvwAVx8Zq6zqTvd6vtqTjspNa5pDcWvVxlSDT%2BLq9NFSKyPaqtUSPzC%2FFiAgRkDVvqoeP9yIXuN%2BQ3HDMKeujMoGOqUBWlugZ2vThwxx%2FEeiGj%2BjLpuWgmoP328OtdWYzYgyKpCc2PhLz9BwPz5xMPtl1Y7%2FM04DXmlW0dT%2FD5ud3un%2FJNtFJHoaI9rbVG%2BCQxQYRfkgvilYksCNKJkd%2F%2FQUpzhw1OhnROCc6a%2BXUmm7nRf6RMM9NxQBWZi6B%2F0L4j3lOPkRPLMXyas%2FjItF0qZ3SlwptY70RzJs3rq0hIF3RhDVEd3AWCuB&X-Amz-Signature=1cffb63d477d4bb0f6208b0c8fd194432c1a55912e178fdcf2680ad7ec7f9d6f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWH2HQL5%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T213637Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCwGHSWpyC8nFR0Ir1otXEUBchG1Oba7Erz7SRCccxp2wIgaLCjorxUe27iDx8%2FTkEy2FbUpcrQ5t0YCkbyvJUVh1cqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNJFXPnGriVwGwzE4ircA4gdlCSH1MfeQRQ%2FUv4trPnwcl5M9ClG79NiteP8QrT0hJ0GUuYA2N5OhLo6A1j95uf3ApWEyFEBimKhNwGholQ2EJKi8mN1Bf3CiGtRorbZyuLDBKNULJMSYCQ%2Fmz6pkkkmpUGHI6W6ky%2FALB7Xb2akSnibQ%2BPtNL1rVLnGOLPfknfQzpR2PHlX8lIqkxfI7oCXLVAgyNosVCcz7KwxaQrV8%2BBixvEKzhpJYOluZeVYUOsNsLWp2GLv%2BNKkJQfmLPf%2FaVG3W4bXQvolVdkhrzPx8NxJ29oF76RyF06wc0Ztd3iP57mGJpIiPuA78%2B5rBZEFs%2FglwyZZWMuWtJPfQWbD7b9dUI5RTGbZYxs8b99OTyQg%2BohHYP7kUBxY%2BU%2FOxb5ovABK3e2nPKdxMuJ4WD7VlAAzPr50Ubo7coNGGcs5qExNHD44YQ1airsHrYpO1joiL9dyFvbtpNRU7VSYlbiqE%2FPBiTfRacnIVvBkf9b0pJvjjKvptjJvyiDbsBjsGwxlxTuG2G6JH0J5qyDnQMFvCISqg0zJnu3JVSDjAoOfkvwAVx8Zq6zqTvd6vtqTjspNa5pDcWvVxlSDT%2BLq9NFSKyPaqtUSPzC%2FFiAgRkDVvqoeP9yIXuN%2BQ3HDMKeujMoGOqUBWlugZ2vThwxx%2FEeiGj%2BjLpuWgmoP328OtdWYzYgyKpCc2PhLz9BwPz5xMPtl1Y7%2FM04DXmlW0dT%2FD5ud3un%2FJNtFJHoaI9rbVG%2BCQxQYRfkgvilYksCNKJkd%2F%2FQUpzhw1OhnROCc6a%2BXUmm7nRf6RMM9NxQBWZi6B%2F0L4j3lOPkRPLMXyas%2FjItF0qZ3SlwptY70RzJs3rq0hIF3RhDVEd3AWCuB&X-Amz-Signature=ac50b82e298d3767da69caef3afc2de4ce7b294879c50bf9c2bc8c0c2d0503cc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
