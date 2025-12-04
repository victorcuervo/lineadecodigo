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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662BTIJTVI%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T120059Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJIMEYCIQCsSfTODaJ7hWSEcN%2BYdmL2aQNaJXlAtwaWwufQycY%2B%2FgIhAIyF%2B16aLI88wDjKQ2eNct%2FQn7x4iWare6v9YJe%2FQBTnKv8DCEUQABoMNjM3NDIzMTgzODA1IgxM2MWsfgHQDTHzwF4q3AOfr703tD4gOk%2Bro5C%2FBm2PBsfICLHDksXzLwaSbH7FvuYo79kEMK2ISUHGZ6dPgJvKauwL1exW7QFXxZLSg2o7YB51TtrwaP3bVCzbGaDjEXKJTcXhBkCImgAGKz2V23NYmyuaUZb4ycI5I8jlPIqHvmvIES3wmKj6LZWrNgZjiTZmmTeAC0M960HQBeJFo9CwjPgbbKmlTqNBAXroD73XDb0JtN8cfsxfR1W%2BAMjICT%2FeJI8aPVYMUzkoSnXD5vix5XbYaYQjBioHbXmC%2BZSfdKfQ6LjgotEzlDbuMoK9KjeukvT4GGdmI9feY%2Bp4MaxPutZ96itJXL2PuzSam12CGogfvQ6B3WbEuZH8DSwEO9iGZjAahDlp3MPMhovA69zPZIxdkTCbH71eSm1MwnO%2B%2FI2a8zZ%2Fpm5qFahzfgeuI73dcarQhEpj9qFwtqQiiXWQexgxM9a2aiO8mn%2BVlTRpjvZLmhs%2F6U2wrhdUrd%2BaKrvJ4Cfk83nAkwTI4MdIONCIn%2FXKK855dUn6ueiht09n30Bl1qm28baxmLernQQHjWDzch2I000Lc4MutwW8CZxOFIXGslixwJ9lCgL%2By%2FC9Pptf02nFmUq0JGVsX%2FP3wZNSz51%2F8TyUqcoZRjCF58XJBjqkAbU0BLkQ5gAKgY4jY%2B9aoh4XQS51gMzQ4skLhXa%2BnC3cpqaSFB9dsRZ06K5Eee9G08qc9B14YzPcl5TCvgS2KWvSUPm7IyaM33LWc6Qjg%2FmLN43%2BvPk7qQ3Dv4lcwcPKczCGraNy%2FAaHLChX%2B2m6dZOhbx%2FkEK5%2Bhk%2Fb%2BruRgsSKTitXbDCV6zPz0gznE%2F2NrnGI7KxZL3dL4E77t%2BzjS5NGDLL4&X-Amz-Signature=e09e1fc6df137c33c80a7ca505c0112a011d09b41f4cbad2d571c627bf02af87&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662BTIJTVI%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T120059Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJIMEYCIQCsSfTODaJ7hWSEcN%2BYdmL2aQNaJXlAtwaWwufQycY%2B%2FgIhAIyF%2B16aLI88wDjKQ2eNct%2FQn7x4iWare6v9YJe%2FQBTnKv8DCEUQABoMNjM3NDIzMTgzODA1IgxM2MWsfgHQDTHzwF4q3AOfr703tD4gOk%2Bro5C%2FBm2PBsfICLHDksXzLwaSbH7FvuYo79kEMK2ISUHGZ6dPgJvKauwL1exW7QFXxZLSg2o7YB51TtrwaP3bVCzbGaDjEXKJTcXhBkCImgAGKz2V23NYmyuaUZb4ycI5I8jlPIqHvmvIES3wmKj6LZWrNgZjiTZmmTeAC0M960HQBeJFo9CwjPgbbKmlTqNBAXroD73XDb0JtN8cfsxfR1W%2BAMjICT%2FeJI8aPVYMUzkoSnXD5vix5XbYaYQjBioHbXmC%2BZSfdKfQ6LjgotEzlDbuMoK9KjeukvT4GGdmI9feY%2Bp4MaxPutZ96itJXL2PuzSam12CGogfvQ6B3WbEuZH8DSwEO9iGZjAahDlp3MPMhovA69zPZIxdkTCbH71eSm1MwnO%2B%2FI2a8zZ%2Fpm5qFahzfgeuI73dcarQhEpj9qFwtqQiiXWQexgxM9a2aiO8mn%2BVlTRpjvZLmhs%2F6U2wrhdUrd%2BaKrvJ4Cfk83nAkwTI4MdIONCIn%2FXKK855dUn6ueiht09n30Bl1qm28baxmLernQQHjWDzch2I000Lc4MutwW8CZxOFIXGslixwJ9lCgL%2By%2FC9Pptf02nFmUq0JGVsX%2FP3wZNSz51%2F8TyUqcoZRjCF58XJBjqkAbU0BLkQ5gAKgY4jY%2B9aoh4XQS51gMzQ4skLhXa%2BnC3cpqaSFB9dsRZ06K5Eee9G08qc9B14YzPcl5TCvgS2KWvSUPm7IyaM33LWc6Qjg%2FmLN43%2BvPk7qQ3Dv4lcwcPKczCGraNy%2FAaHLChX%2B2m6dZOhbx%2FkEK5%2Bhk%2Fb%2BruRgsSKTitXbDCV6zPz0gznE%2F2NrnGI7KxZL3dL4E77t%2BzjS5NGDLL4&X-Amz-Signature=e8195b919312097ce441af1334adc4a64e9dafd5ded1b19536b5bb01dc048cbd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
