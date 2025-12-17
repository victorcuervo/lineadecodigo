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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662BTEPRYW%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T054657Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEUf4rNJkqXzXyj9xV91T%2FBVISb13XPS1ycY9e8xod3bAiBd%2BEpwgrU9mvKSymXjY4dcd05csQFhRziVsE6ZbA0ttSr%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIMR8brBdwFopgxySvqKtwDUlbiPCDFs6%2FxhdvFZ%2FI27L6timsHN9dN1TpvUcm4i4vUMMrtBq4dyy6OUG%2FAH72GrTdSzsUWdMBhigWo%2B4sMU%2BmWZJ0VY5MT3gjYVQv4lfoZqoDkwVKXEErC10mVZibKD596gD7LOyqDdJP5CBDEj7Z5CqNVW98bc5nkFno4ekDebF%2FS%2BrYBnBMeHXY%2F6r3znOoDRXKElJyNqOaRZsIrx8ZtQzPoLdxX2xpA4k5jySVcAGGI%2BNBdzHvWaHLd0szPpz8r4eSJbMeZw1eAXzAmSsrQ4KBGL3Zc3h%2F2hrFo4VsiEQDhhVgCDn4w8pTmtBoIyssNqx%2F5Ury1j6ysdK%2FoBO16ClH90YsZ0g9GnwCJlAQPJt7z10FJBX1mRzfHpqMhqCSyQi8xvEeJ5Pk%2BHfFtqoq1BQEuaTIPFfMj2jUqmZ6K%2BUTm6m9OngdAptWaGvqKAGvCbEPz21uIyUptsHPMpv%2Bk8VAbP5ULPyZ3zQV1ZPAFvfv4qslRPgvG5YnrZHd5m6Yhq8%2FFAZcGXdFOEi5Wkjw5KtZjqHsTaNMBjLS21qzscGf8LAh9Msl72bSJxwRcp7BFMPd699qBZEnRGA7vxc1S%2FBwY%2B%2FsyscoBXGbXiE58ZelrnWPi8lJjg%2FMwjoKJygY6pgE5v5ARc4KRGmsBb40nLUQpt3i2gbKSPh%2BAQU%2Fq9gLYXiaYQ3AOjO2UaXS1HbY6ey%2FbJbRqJXkp9T%2BjoRPWFDgDQHhLFdhhH8a1k3oDIkndM2EYkhbeF5S5Y08vl%2BIXYTFyQ2COfu4Lq3afXr%2FNAmCmEOV7PkbKyb8NZpi%2Bs%2Fo96FuGJUvShUojvdGATnEF7dY6eku%2BSM25hTUVm3MqcG7lUUPHm6%2Br&X-Amz-Signature=54e3c002352c18aa31b0e06d47b9917b13246f315da1cbec59e37afaf0683966&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662BTEPRYW%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T054657Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEUf4rNJkqXzXyj9xV91T%2FBVISb13XPS1ycY9e8xod3bAiBd%2BEpwgrU9mvKSymXjY4dcd05csQFhRziVsE6ZbA0ttSr%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIMR8brBdwFopgxySvqKtwDUlbiPCDFs6%2FxhdvFZ%2FI27L6timsHN9dN1TpvUcm4i4vUMMrtBq4dyy6OUG%2FAH72GrTdSzsUWdMBhigWo%2B4sMU%2BmWZJ0VY5MT3gjYVQv4lfoZqoDkwVKXEErC10mVZibKD596gD7LOyqDdJP5CBDEj7Z5CqNVW98bc5nkFno4ekDebF%2FS%2BrYBnBMeHXY%2F6r3znOoDRXKElJyNqOaRZsIrx8ZtQzPoLdxX2xpA4k5jySVcAGGI%2BNBdzHvWaHLd0szPpz8r4eSJbMeZw1eAXzAmSsrQ4KBGL3Zc3h%2F2hrFo4VsiEQDhhVgCDn4w8pTmtBoIyssNqx%2F5Ury1j6ysdK%2FoBO16ClH90YsZ0g9GnwCJlAQPJt7z10FJBX1mRzfHpqMhqCSyQi8xvEeJ5Pk%2BHfFtqoq1BQEuaTIPFfMj2jUqmZ6K%2BUTm6m9OngdAptWaGvqKAGvCbEPz21uIyUptsHPMpv%2Bk8VAbP5ULPyZ3zQV1ZPAFvfv4qslRPgvG5YnrZHd5m6Yhq8%2FFAZcGXdFOEi5Wkjw5KtZjqHsTaNMBjLS21qzscGf8LAh9Msl72bSJxwRcp7BFMPd699qBZEnRGA7vxc1S%2FBwY%2B%2FsyscoBXGbXiE58ZelrnWPi8lJjg%2FMwjoKJygY6pgE5v5ARc4KRGmsBb40nLUQpt3i2gbKSPh%2BAQU%2Fq9gLYXiaYQ3AOjO2UaXS1HbY6ey%2FbJbRqJXkp9T%2BjoRPWFDgDQHhLFdhhH8a1k3oDIkndM2EYkhbeF5S5Y08vl%2BIXYTFyQ2COfu4Lq3afXr%2FNAmCmEOV7PkbKyb8NZpi%2Bs%2Fo96FuGJUvShUojvdGATnEF7dY6eku%2BSM25hTUVm3MqcG7lUUPHm6%2Br&X-Amz-Signature=125fb7f2fa131c8788863517445ee354734fc0ba817cd84fe8e2a422e8476fcc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
