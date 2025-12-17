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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TLUM3V53%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T100221Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCFUkwb1xd8OcLp%2Bepdb0SJZfByRtNd0GMAT7dXlFbhbQIhAMtNz6rLuaPZG8JfMflJIaZddi9sDuMSnTSW4h%2FsiWADKv8DCHsQABoMNjM3NDIzMTgzODA1IgxOtg5p%2FCWVssF4CB4q3APr5U0rB89MzsuVzFaszscb%2BW5rL9Pxq%2Fhp327DoUcmhHjkfryoe7PjPzTDx62cR4km4ehiffUJuelqxQgiP3loYQev8sTzfn%2FTLdxXQh9tpSaUaYpqWg14QFtbLiqCUvCHtjASRy0Azzh4ZcYj7oNG08Hy0uQ5FrXbHFn54laFrYo5r3a0FFWNyqoDHYGbOAyO5HRU%2B1giW6zaXA86MOxGbXOzSEPVvP51yenYruugq14QwyhKCpIrDpEunFfUlVm3CdcNsF238k5sv%2FIKeozpyYUOPMIU8GplmTHeHGLYHnLBzFvRV5NcuI0xEnHeqF%2Bs2P6%2BbBSK4sieHlNYF5ruOjgpaSkVzk%2Fo5AVZjbZdRTwegRzpYLVX2EaVVROO6evioUqn9BrOslPJTrQPM9ibNYCeSbYQWkdVDX2Aaaw4aVW3mZ2dLLTfKDC%2FyznokbSNHRgwQKuWTtlLI3LQTlMn1LrCUxNreosq1QpU7dN0KobTb1B%2BS9WosNicqLfSg72aRCNomaWdjhzwLSHY8x6tbQ7zzC9cX%2FIjPGk6jPvdAUXWQsv%2Fof1jqXoTjQoYXvyRz9UaKhCtIyETMgwggQWrxc56SEJZibcMmzxFAV2OJnK4H%2B5En0Cz%2Bk5BDTDt8InKBjqkAWR%2Bsfo1%2FY4vLZDUbqxdCCwRndHnQpfryPGKRaJMlY6FXD%2BBbpJ5fiAA%2F18jSGRopwVUOjX5SgORBu2K%2Fr%2BSAljz6ySy%2BjNBFwrT6Ph7MRiDwZgk93%2F6ql1v9W8xB19sR3VW8%2BVjl%2Fq35x4B8GN68U9Dr99pWClQYhG478c4BJI0z8SlNqngZ7RAGs78QeJu3ltuYldxv7mb4WNmNC7hWgQWsOkZ&X-Amz-Signature=ef2895040a736d71b758eb99ecfff8cc4c479a5bf3e8ecaab3f745814c6bd347&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TLUM3V53%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T100221Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCFUkwb1xd8OcLp%2Bepdb0SJZfByRtNd0GMAT7dXlFbhbQIhAMtNz6rLuaPZG8JfMflJIaZddi9sDuMSnTSW4h%2FsiWADKv8DCHsQABoMNjM3NDIzMTgzODA1IgxOtg5p%2FCWVssF4CB4q3APr5U0rB89MzsuVzFaszscb%2BW5rL9Pxq%2Fhp327DoUcmhHjkfryoe7PjPzTDx62cR4km4ehiffUJuelqxQgiP3loYQev8sTzfn%2FTLdxXQh9tpSaUaYpqWg14QFtbLiqCUvCHtjASRy0Azzh4ZcYj7oNG08Hy0uQ5FrXbHFn54laFrYo5r3a0FFWNyqoDHYGbOAyO5HRU%2B1giW6zaXA86MOxGbXOzSEPVvP51yenYruugq14QwyhKCpIrDpEunFfUlVm3CdcNsF238k5sv%2FIKeozpyYUOPMIU8GplmTHeHGLYHnLBzFvRV5NcuI0xEnHeqF%2Bs2P6%2BbBSK4sieHlNYF5ruOjgpaSkVzk%2Fo5AVZjbZdRTwegRzpYLVX2EaVVROO6evioUqn9BrOslPJTrQPM9ibNYCeSbYQWkdVDX2Aaaw4aVW3mZ2dLLTfKDC%2FyznokbSNHRgwQKuWTtlLI3LQTlMn1LrCUxNreosq1QpU7dN0KobTb1B%2BS9WosNicqLfSg72aRCNomaWdjhzwLSHY8x6tbQ7zzC9cX%2FIjPGk6jPvdAUXWQsv%2Fof1jqXoTjQoYXvyRz9UaKhCtIyETMgwggQWrxc56SEJZibcMmzxFAV2OJnK4H%2B5En0Cz%2Bk5BDTDt8InKBjqkAWR%2Bsfo1%2FY4vLZDUbqxdCCwRndHnQpfryPGKRaJMlY6FXD%2BBbpJ5fiAA%2F18jSGRopwVUOjX5SgORBu2K%2Fr%2BSAljz6ySy%2BjNBFwrT6Ph7MRiDwZgk93%2F6ql1v9W8xB19sR3VW8%2BVjl%2Fq35x4B8GN68U9Dr99pWClQYhG478c4BJI0z8SlNqngZ7RAGs78QeJu3ltuYldxv7mb4WNmNC7hWgQWsOkZ&X-Amz-Signature=ed3a37597a21cad85e604ce1fa970ce769ce21d1d95724dd0d9e77a631197a4d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
