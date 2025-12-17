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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UQB2MRSI%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T034033Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD2aZ6PrzP9GbXPoaRlFxVvncgiHcEdf0RA5YnhnGCPJgIgdLihrmFCmlB2V9HEOMDgbPI6LhA%2BeH%2FdQoN01aJwKdwq%2FwMIdBAAGgw2Mzc0MjMxODM4MDUiDKErkD3y84NP1NDN6CrcA%2Fan3x%2BeVEr6YuUxjpmcgtfe%2Bs2rO1uDk6WY2hWE8PxBnKVydKPkyRum08%2F%2FqnMf0YnYWnAEKWuNSvQ5k7D%2B6FOXXkRgauDinAeGMYiIQxi5RD1MxLYjkfs2tP6%2BH57GB3G7%2FRQ5aPMnVUrEDu1xeFa6GdDE0fYfffMSqSrErGiubgaeC9Lf1I%2FdiAPOlB1lqcDjrJMgxcJ8LFsO00UZCobSsAfjcqIHJVNTPPONUcRR3i%2Bpv0Cm4M7GNH0IrTbXoRDX%2Fwc0EFzc4tL6JqhigQ1%2BM6wahV%2F4iLATo0tZ4M7d6RUD8NfPgrGQn8b49pnbfNmz4IwcAwDYMId7%2F6T0oSDor76H70BVbD4Z3dbbU2nWJaDyMVHwHP25Bf%2FiTYREhADtlTD21l7YoIyrwp1OgN2nkaRc9V0iKHQHzmyVMqQhm6r1TMJds0qjWTeJfNdKjm8VINpGy7017VCbTplmskKJ5FyR%2B1GrELVYKgR28Jv4Ae%2BCo9kqFMmFK9%2FoMLnHZmYCZVCBV%2FpkxmU0w%2FbRbXhNhEFX%2BkJv3kDUa7WUrEsLm8I79p9BPuTtshxBgt4CqMtn%2Fm6AiXaIq8IeK0dzzLume8chbax%2BjHuDpKrZO8ngftCS%2BCXbtgeSZxnYMIOziMoGOqUByBpzW%2BIRJsFuAi3fVEG7P5cZqG2%2Fpk47INrMx1%2BSOr4esLzwy51DAW%2FzwF9YbDzTeZlRdlx7YbbR2%2B7yUvqRFyuPJQbTXFZeM%2FH97nINtwhosXAOxZXkjg5%2FVHLmllpjzUf6onT0%2BJkyv8lYxuhq5W4Ce3IOWKBZYnKO4sp9ntC7c48UVdqLsBy9NzHAA5tlEImoGpSyWFEOsxP4Ggg1NgDXHZt9&X-Amz-Signature=ea534709e726aa8a05d065c2de2dd26a6e70a1ab337e36208d1536204bc2fe54&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UQB2MRSI%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T034033Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD2aZ6PrzP9GbXPoaRlFxVvncgiHcEdf0RA5YnhnGCPJgIgdLihrmFCmlB2V9HEOMDgbPI6LhA%2BeH%2FdQoN01aJwKdwq%2FwMIdBAAGgw2Mzc0MjMxODM4MDUiDKErkD3y84NP1NDN6CrcA%2Fan3x%2BeVEr6YuUxjpmcgtfe%2Bs2rO1uDk6WY2hWE8PxBnKVydKPkyRum08%2F%2FqnMf0YnYWnAEKWuNSvQ5k7D%2B6FOXXkRgauDinAeGMYiIQxi5RD1MxLYjkfs2tP6%2BH57GB3G7%2FRQ5aPMnVUrEDu1xeFa6GdDE0fYfffMSqSrErGiubgaeC9Lf1I%2FdiAPOlB1lqcDjrJMgxcJ8LFsO00UZCobSsAfjcqIHJVNTPPONUcRR3i%2Bpv0Cm4M7GNH0IrTbXoRDX%2Fwc0EFzc4tL6JqhigQ1%2BM6wahV%2F4iLATo0tZ4M7d6RUD8NfPgrGQn8b49pnbfNmz4IwcAwDYMId7%2F6T0oSDor76H70BVbD4Z3dbbU2nWJaDyMVHwHP25Bf%2FiTYREhADtlTD21l7YoIyrwp1OgN2nkaRc9V0iKHQHzmyVMqQhm6r1TMJds0qjWTeJfNdKjm8VINpGy7017VCbTplmskKJ5FyR%2B1GrELVYKgR28Jv4Ae%2BCo9kqFMmFK9%2FoMLnHZmYCZVCBV%2FpkxmU0w%2FbRbXhNhEFX%2BkJv3kDUa7WUrEsLm8I79p9BPuTtshxBgt4CqMtn%2Fm6AiXaIq8IeK0dzzLume8chbax%2BjHuDpKrZO8ngftCS%2BCXbtgeSZxnYMIOziMoGOqUByBpzW%2BIRJsFuAi3fVEG7P5cZqG2%2Fpk47INrMx1%2BSOr4esLzwy51DAW%2FzwF9YbDzTeZlRdlx7YbbR2%2B7yUvqRFyuPJQbTXFZeM%2FH97nINtwhosXAOxZXkjg5%2FVHLmllpjzUf6onT0%2BJkyv8lYxuhq5W4Ce3IOWKBZYnKO4sp9ntC7c48UVdqLsBy9NzHAA5tlEImoGpSyWFEOsxP4Ggg1NgDXHZt9&X-Amz-Signature=ecf494a7707745636c3fe7a111c3eca775fe0bd05ea1fc412d7968ece5e29afa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
