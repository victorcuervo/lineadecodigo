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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665CUQT52O%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T072636Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGpRgm53i6DJAmPbvhFnAG38WjySeJqRu6lArzZM25XSAiEA2EF24D6KmUNS0Rr0%2F3Yj8Fjt50tY8MbRv07%2B2%2BO%2Fn3Iq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDFf6LENWJSqPELj8XCrcA4wsDcVV6Fazd4baxsM9sORfIMNuOnRcZMZ3G0kfURhSCnf5fEobC1EMZIBO4C4xaik44zCiZ0ZsDHMx6J6jF2z8oigEH%2BRUXXMgUCS02Eoy%2FXBJLKDU2D9noOGZ156NuZtoa%2BxnJIqxeb5aZ9pi10odacb935AeT6vV2gO4jh9FTqzBvCJNSCE5OtupAKyO3SG4r%2FXECqI0PnlBDwfMySyNxlF7eiZnJhh86gCydngy6vRVbHdWptvUFS4WutiNrrantzqnVrrh7bV76GsNWaUsaQqc1PWIUasOCgss4v6N%2BCUN1GFlDOTuNDuUHPpz%2Fcv8WDIRUfHnjdEKlgDtEuUDK%2FiVbK723%2Fmj0KmJ6%2FN3oCSOVkhPg1xb%2BycvtmQWR%2BVJdDbmXE%2F%2BMKRJp28vw%2BxX4BBpyVVV4iu2WzHX4ePXn0fii9dU6zqXKrIkTz8IcGjOjLf3u9ZWPiQFkcu4YRFX%2B2W7Uys1Usqhxgd3%2BrTe00LDC48OIvmNkkCdAO0hXaWMB3cOzgD1ihwmmGC2yLkPCyjlu%2B8yl4ih1BWK1VHWBmuoDz1F%2F7PJPpKz1aKBO3f9n2uEpJW%2BVrSKRjgRD%2FIlnfSoYo0HsTtutkeMXnELTmhUaI9J4sI3a%2FFHMKucicoGOqUBnZow2r2AYm1zsmqOK%2BTWz06sk0E%2FneX6h1blvDN4rcg5u15mViNK879f7B1iP0axfz06xIxbgDIj9opCJUeFoFOa7R8RtgXqN6ZKTEkfQJp5QbjvjCus0LC9Vm5EzZSpS4nXznnYa1JgcDtVok697hyyALtjwVzTX%2FUtqautLWRSl6f6Fm0VwvAiiarluslLBeh7ZmihGjg03ooB3FbRQNAgl8Sa&X-Amz-Signature=cb46c8f237580e85f0523c1f72794c7433228b3db5efb0bc975d5b04b1e3a9db&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665CUQT52O%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T072636Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGpRgm53i6DJAmPbvhFnAG38WjySeJqRu6lArzZM25XSAiEA2EF24D6KmUNS0Rr0%2F3Yj8Fjt50tY8MbRv07%2B2%2BO%2Fn3Iq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDFf6LENWJSqPELj8XCrcA4wsDcVV6Fazd4baxsM9sORfIMNuOnRcZMZ3G0kfURhSCnf5fEobC1EMZIBO4C4xaik44zCiZ0ZsDHMx6J6jF2z8oigEH%2BRUXXMgUCS02Eoy%2FXBJLKDU2D9noOGZ156NuZtoa%2BxnJIqxeb5aZ9pi10odacb935AeT6vV2gO4jh9FTqzBvCJNSCE5OtupAKyO3SG4r%2FXECqI0PnlBDwfMySyNxlF7eiZnJhh86gCydngy6vRVbHdWptvUFS4WutiNrrantzqnVrrh7bV76GsNWaUsaQqc1PWIUasOCgss4v6N%2BCUN1GFlDOTuNDuUHPpz%2Fcv8WDIRUfHnjdEKlgDtEuUDK%2FiVbK723%2Fmj0KmJ6%2FN3oCSOVkhPg1xb%2BycvtmQWR%2BVJdDbmXE%2F%2BMKRJp28vw%2BxX4BBpyVVV4iu2WzHX4ePXn0fii9dU6zqXKrIkTz8IcGjOjLf3u9ZWPiQFkcu4YRFX%2B2W7Uys1Usqhxgd3%2BrTe00LDC48OIvmNkkCdAO0hXaWMB3cOzgD1ihwmmGC2yLkPCyjlu%2B8yl4ih1BWK1VHWBmuoDz1F%2F7PJPpKz1aKBO3f9n2uEpJW%2BVrSKRjgRD%2FIlnfSoYo0HsTtutkeMXnELTmhUaI9J4sI3a%2FFHMKucicoGOqUBnZow2r2AYm1zsmqOK%2BTWz06sk0E%2FneX6h1blvDN4rcg5u15mViNK879f7B1iP0axfz06xIxbgDIj9opCJUeFoFOa7R8RtgXqN6ZKTEkfQJp5QbjvjCus0LC9Vm5EzZSpS4nXznnYa1JgcDtVok697hyyALtjwVzTX%2FUtqautLWRSl6f6Fm0VwvAiiarluslLBeh7ZmihGjg03ooB3FbRQNAgl8Sa&X-Amz-Signature=e4da71a701c3ed83d83aff374306a6722c65b4c23221fc48eefd29e45f0f3290&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
