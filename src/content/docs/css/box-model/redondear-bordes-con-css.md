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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WOVUCWOU%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T083503Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDuuY%2FzPuxrR0feI0jcovKD%2B48Sv6HJWPxEBHpfxqTYjAiEA9bie6em9okfxvxGxfx9sTBL53u%2Bh4T5rp9%2BZZOJx2Kgq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDBzS%2B3YH1qKV2ouO5SrcA6C%2BFRNRpQuZuyNocAANi132%2BKxdcsXBM5mxRg3z10Az%2FAHgD%2FMtlk46O%2B13mZEytGgnSptVCNDk0RfNDfAtowid%2BNeq4UJ8dSPPUSG9PY2%2FReqlFkgQF%2FfScvLF9vRXi%2Bz9vPs9rlWrcDay%2FB5NHhwTAxvbU6iSUiYlUlvJITEL12RebDk0KdvODKmsCvooqpyP3LhA%2Bl%2BIh7WAeSUfqHKuL06PehSXGdER5nBJZp3y2R4B1E2V%2F%2Bez99i6V5oapVcITNCfgGBd1YWO8OysYiVQPNTAZ%2BWko78LzYbwSUh6Y9JyA6HjcuTajrvN%2FtKdCoE%2BNdal9crzxtXcRDKGwkV7C%2BKfBSHdhTxxFRvH%2Fk7Hx8gEq6YqjLi0V5f%2BhWV6wLlvJG61NFIrPOKVvGc6eE%2BXokdsAjEf576Ly593XOvRJiA22Fa99n%2BiLToCGws85WH%2FmN0cnByiSk94OEnJIaGoDS2It6L6o4x%2B15P3SsCkxOJUVR02vU2v0uBoK30XoQG6f8He3rQzUJouut1AC5THY89VM27k3RhE6QJ1mE9eNDQbCFG%2Fpgw9Nn1tZr3%2FUqOeciYwiCZjnbD%2FboynA3eSZrhU6anA8VoMsbqMRqnam1k%2FBbSr6ety5ZKkML3RicoGOqUB4MM75H0PBdGapjIQwMIplxF31rZTGdPOzXwhGpJNKIu53RrOPLeamZ8gUq2e0U4%2FT5Bxfqos8cwk0xKr7UoF8212WnO1MKhRS5FcAHonLHrgWEAKPf4wMz12C9KL2deRZRu6puKczqXYdXoQQyKTMTmuWHIN5foG%2Bvhtjp7PUosm1wRly9PHVdD7mq%2Bl6fwJtdl%2F8geAEQjVECKVVmpPUBY7m3%2Bx&X-Amz-Signature=194b06cf0d31208ed95c7571b967f35f7603dba3f13b25bfed92d4783179fde7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WOVUCWOU%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T083503Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDuuY%2FzPuxrR0feI0jcovKD%2B48Sv6HJWPxEBHpfxqTYjAiEA9bie6em9okfxvxGxfx9sTBL53u%2Bh4T5rp9%2BZZOJx2Kgq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDBzS%2B3YH1qKV2ouO5SrcA6C%2BFRNRpQuZuyNocAANi132%2BKxdcsXBM5mxRg3z10Az%2FAHgD%2FMtlk46O%2B13mZEytGgnSptVCNDk0RfNDfAtowid%2BNeq4UJ8dSPPUSG9PY2%2FReqlFkgQF%2FfScvLF9vRXi%2Bz9vPs9rlWrcDay%2FB5NHhwTAxvbU6iSUiYlUlvJITEL12RebDk0KdvODKmsCvooqpyP3LhA%2Bl%2BIh7WAeSUfqHKuL06PehSXGdER5nBJZp3y2R4B1E2V%2F%2Bez99i6V5oapVcITNCfgGBd1YWO8OysYiVQPNTAZ%2BWko78LzYbwSUh6Y9JyA6HjcuTajrvN%2FtKdCoE%2BNdal9crzxtXcRDKGwkV7C%2BKfBSHdhTxxFRvH%2Fk7Hx8gEq6YqjLi0V5f%2BhWV6wLlvJG61NFIrPOKVvGc6eE%2BXokdsAjEf576Ly593XOvRJiA22Fa99n%2BiLToCGws85WH%2FmN0cnByiSk94OEnJIaGoDS2It6L6o4x%2B15P3SsCkxOJUVR02vU2v0uBoK30XoQG6f8He3rQzUJouut1AC5THY89VM27k3RhE6QJ1mE9eNDQbCFG%2Fpgw9Nn1tZr3%2FUqOeciYwiCZjnbD%2FboynA3eSZrhU6anA8VoMsbqMRqnam1k%2FBbSr6ety5ZKkML3RicoGOqUB4MM75H0PBdGapjIQwMIplxF31rZTGdPOzXwhGpJNKIu53RrOPLeamZ8gUq2e0U4%2FT5Bxfqos8cwk0xKr7UoF8212WnO1MKhRS5FcAHonLHrgWEAKPf4wMz12C9KL2deRZRu6puKczqXYdXoQQyKTMTmuWHIN5foG%2Bvhtjp7PUosm1wRly9PHVdD7mq%2Bl6fwJtdl%2F8geAEQjVECKVVmpPUBY7m3%2Bx&X-Amz-Signature=62f31b70d566a509ed1830393f880f0f55c0e3d27cc03181cf49fe862849aa3c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
