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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663HPTQRQS%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T140924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC08u%2BSyk3JxsnhcEbeZoiuoTLqkIAPTO%2F%2BbRTHJ7VecwIgYNEWtS3v6VgZ2WqBX5q8KfJmdkXJSC2Og7U6Kq0V71EqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPJJ7Sw7by%2BmMf4uvyrcA9G6O4z1zESqtzi5wva2jtMvSMgacsd0vL9AR%2FXR2%2BPYzGjBEdpjXBDm33mVrkFuBbKhSuCYbFVySkrddNVUbAgdv2EbU1dmDsfDh%2B4Pr%2FL3SOMVI8ygKdjK7qOReljhyR9zr2EIGN7Dl0Axim7%2BqfxPQE%2BmB%2FvX0xO4p3ZfJtaav8wym%2Fi73SE3Ue2zyzYz2QmA6mxW51LEk%2Fndf1TgSZ%2Bl7jrAjE%2FxhbY%2FsbOb4wzN57FlUKKSV7qIXXvyKpAS%2BHziKmBhQBfsq1RuOv5tRfyQxq8Dqfgya%2FPhOXffdQhw4x1w7wa26gIDRBXZvs%2Fgh6iQqoaUQiQaF%2F3w129oNoOhNiuQ33NG5pQxWVFRVcDRwuxeekNCvTsn4eS2%2BUIfp8RnoqlZVF7%2BNaMzjvNfcR0ALMi0V3fC6DdyUflDgIspIPXpa44SUH2yJYWD2C0b3m0iy9zXO4%2Bt0nP4iOGHLKc1QNGFa94hc%2BNSjPAHxORfTN8oFju18n8Yi70hBVUVi4VRiyZMx6nekX8tZgb979uZj29n3413GZ6w7DFwQMyBJfxryIYONLW9ohAYIAMv9tn7ZWhVXZlqifA9OxUO1g60wNkjdZ%2FwmireBSiMvbjhyn2mbXPRy9FvwB5cMIKQ28kGOqUBHMXzQZAMoDA6DrFjyds5FCXgJgwlu3EcWIhe7AC%2F%2Fbp4c%2BmkvpAK3Rb%2BH8dmSvT3X5ObynNIRF0DblXpvB2L83erAu18FWB5WRbff1wpeBXSzl20GV4mWmJLqYAqXiwx1Xps2fRXAIeVQWPdaWdeCU%2FryBRJaEj56iAQBpzvQKGnu20cwpunweRJuMqMpz8uA%2F8Hrfx8v5KlsmpQTTR7vUyeCaTI&X-Amz-Signature=c5756762491955ba39c8375892186c006a5ad7d12ac89902e6cab1f97e471130&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663HPTQRQS%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T140924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC08u%2BSyk3JxsnhcEbeZoiuoTLqkIAPTO%2F%2BbRTHJ7VecwIgYNEWtS3v6VgZ2WqBX5q8KfJmdkXJSC2Og7U6Kq0V71EqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPJJ7Sw7by%2BmMf4uvyrcA9G6O4z1zESqtzi5wva2jtMvSMgacsd0vL9AR%2FXR2%2BPYzGjBEdpjXBDm33mVrkFuBbKhSuCYbFVySkrddNVUbAgdv2EbU1dmDsfDh%2B4Pr%2FL3SOMVI8ygKdjK7qOReljhyR9zr2EIGN7Dl0Axim7%2BqfxPQE%2BmB%2FvX0xO4p3ZfJtaav8wym%2Fi73SE3Ue2zyzYz2QmA6mxW51LEk%2Fndf1TgSZ%2Bl7jrAjE%2FxhbY%2FsbOb4wzN57FlUKKSV7qIXXvyKpAS%2BHziKmBhQBfsq1RuOv5tRfyQxq8Dqfgya%2FPhOXffdQhw4x1w7wa26gIDRBXZvs%2Fgh6iQqoaUQiQaF%2F3w129oNoOhNiuQ33NG5pQxWVFRVcDRwuxeekNCvTsn4eS2%2BUIfp8RnoqlZVF7%2BNaMzjvNfcR0ALMi0V3fC6DdyUflDgIspIPXpa44SUH2yJYWD2C0b3m0iy9zXO4%2Bt0nP4iOGHLKc1QNGFa94hc%2BNSjPAHxORfTN8oFju18n8Yi70hBVUVi4VRiyZMx6nekX8tZgb979uZj29n3413GZ6w7DFwQMyBJfxryIYONLW9ohAYIAMv9tn7ZWhVXZlqifA9OxUO1g60wNkjdZ%2FwmireBSiMvbjhyn2mbXPRy9FvwB5cMIKQ28kGOqUBHMXzQZAMoDA6DrFjyds5FCXgJgwlu3EcWIhe7AC%2F%2Fbp4c%2BmkvpAK3Rb%2BH8dmSvT3X5ObynNIRF0DblXpvB2L83erAu18FWB5WRbff1wpeBXSzl20GV4mWmJLqYAqXiwx1Xps2fRXAIeVQWPdaWdeCU%2FryBRJaEj56iAQBpzvQKGnu20cwpunweRJuMqMpz8uA%2F8Hrfx8v5KlsmpQTTR7vUyeCaTI&X-Amz-Signature=dcfe4e50403af04c1f117dbb18bf3d4bb94bffaafb9fdcac8b54d61db12f461f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
