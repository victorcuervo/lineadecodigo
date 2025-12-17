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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZL6IGD6%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T213833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGLzdC8%2BEDlsvkhDC90dGN4%2FPjbVjUme7%2Fg0Yagx2f7zAiBUjxm9Ewz5GyUl6ZBU8BX7SMDGAuUQVoIb73Zja5Q4WiqIBAiG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMS3dQpuQxe647kuP4KtwDHf1N4dE%2F2TCjwxqPSY9ZyP28Irz4MtlZMVo%2B5XWoRcC0RQ88mLWYu0S4L%2BJjVbHJPvOhgMjNypdqY8Qa8i%2BUssFTtqVmr7Iyw1roNjkCzIgVetHLgKsCjQ6KW7jyJZvB8bSQ1prP5qDeKK4CL2kxB%2FRSIaZLUEV%2FUnL3KEvedS4eCy9DXFaAcWLKEwMmtEylDagQYNoZmx714dubYdFsXnk88nDtBPXsZJ1jMwvpif32%2BjAdRgn4sSogXIVFyyw4ORvb7Y0jffteJ8F8VLq5zDE8StHfI30imfkLY6FhXFC5wm1M102cHTcbUnycanC7pBgILUF%2BW7qnRj%2BVPpaEA2OQeyGhZ2%2Fsw0NzF15ydPqXszSGcLE6EvW5GPJbmDesEe5aaCob7Nk3zJy57iuYgnPVgAFWb%2F%2F3mfBruXE6HjarMhKVZHfFVjqq591QxEH1K9lsIS5aBZlGkwDw94zFxtMWkAOQMP%2Fz6rnLn1izvl0%2BAnipCHVND%2BqZpOF%2BnC2GyJTHtY2Y8ooZxjyg1A%2F73N%2BeIpWpMMD6vMTjsJYxJSWBDqX17jCzOy%2FwjL6UuliOcGenvWJVRqIMl9hG%2FCVgj5r%2BNaH%2FieMhIWCVMGNTuG6llQgd9fMsItnGLNAwkK6MygY6pgFnrgyKEwyVCN3%2FNFZZdrDbZQ5S8A7bGlS%2FMtDddnyMGIFHPwd99BH11vxrzjCjOCkQ1BBRq3l1Gt21efBQD7eFZkaMfPGFtH9wGaRSzJLOfKPjYdwq5d3cjxyS0mboda%2FxHSF3CCHxxGvElyhgYrvqzG1TQ1XSqq7FDod%2BQZsFXh9XYki1PifO37%2FPNqocBMzaagyZkr%2BOpsrj6BWkfn7tzjIgEHLE&X-Amz-Signature=f6101b545f40426e627269619d3310dceb5b15152acb5cec138a05797bad8703&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZL6IGD6%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T213833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGLzdC8%2BEDlsvkhDC90dGN4%2FPjbVjUme7%2Fg0Yagx2f7zAiBUjxm9Ewz5GyUl6ZBU8BX7SMDGAuUQVoIb73Zja5Q4WiqIBAiG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMS3dQpuQxe647kuP4KtwDHf1N4dE%2F2TCjwxqPSY9ZyP28Irz4MtlZMVo%2B5XWoRcC0RQ88mLWYu0S4L%2BJjVbHJPvOhgMjNypdqY8Qa8i%2BUssFTtqVmr7Iyw1roNjkCzIgVetHLgKsCjQ6KW7jyJZvB8bSQ1prP5qDeKK4CL2kxB%2FRSIaZLUEV%2FUnL3KEvedS4eCy9DXFaAcWLKEwMmtEylDagQYNoZmx714dubYdFsXnk88nDtBPXsZJ1jMwvpif32%2BjAdRgn4sSogXIVFyyw4ORvb7Y0jffteJ8F8VLq5zDE8StHfI30imfkLY6FhXFC5wm1M102cHTcbUnycanC7pBgILUF%2BW7qnRj%2BVPpaEA2OQeyGhZ2%2Fsw0NzF15ydPqXszSGcLE6EvW5GPJbmDesEe5aaCob7Nk3zJy57iuYgnPVgAFWb%2F%2F3mfBruXE6HjarMhKVZHfFVjqq591QxEH1K9lsIS5aBZlGkwDw94zFxtMWkAOQMP%2Fz6rnLn1izvl0%2BAnipCHVND%2BqZpOF%2BnC2GyJTHtY2Y8ooZxjyg1A%2F73N%2BeIpWpMMD6vMTjsJYxJSWBDqX17jCzOy%2FwjL6UuliOcGenvWJVRqIMl9hG%2FCVgj5r%2BNaH%2FieMhIWCVMGNTuG6llQgd9fMsItnGLNAwkK6MygY6pgFnrgyKEwyVCN3%2FNFZZdrDbZQ5S8A7bGlS%2FMtDddnyMGIFHPwd99BH11vxrzjCjOCkQ1BBRq3l1Gt21efBQD7eFZkaMfPGFtH9wGaRSzJLOfKPjYdwq5d3cjxyS0mboda%2FxHSF3CCHxxGvElyhgYrvqzG1TQ1XSqq7FDod%2BQZsFXh9XYki1PifO37%2FPNqocBMzaagyZkr%2BOpsrj6BWkfn7tzjIgEHLE&X-Amz-Signature=250367861d15f87a6fd7363e9179aca5f01ec659f225c6db71bfe2bb7d7a5a28&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
