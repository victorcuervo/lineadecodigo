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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XUYMIPLX%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T151657Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDFaYtfmaSLXCVJWI55vcIy48P1JUj5BiB0D8RvHH3w8AIhANtRpp0Ci6psVpUwTll0ZunfeJmxCnZKxtiK5Gn0G%2FQhKogECID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwQzb5DZ6q%2FpvikNS8q3ANzozRFCKyjFQjjeuOZhqbVNOVMNAvZIUxsUTSnb3CD4hXiWS%2F0D5%2BTLe%2FLIWq8WtdvqmznGXobej9cAHJJflWhZ%2B%2BiL%2BQfLVNWYIaP5U6y2ZIUgqZhlQzS188R%2BoEYd1%2F6yGnEtGNV5axXMI1vjesylZGDp1z%2B3fjcD6RNahWaze7RMsvy69fFACY2sPnfNfIlaAI%2FqYwYF6WUywUlBzxHgvZpP8ZLoUNfhoqR0r9csP8R1V1FljUOlrrKFDiIX%2FxoTVekYzeWs%2FylHKWs2YXvbm68CiLHBEtivf9fPQfsnrV7wF07fFlgecIGJemiGOk55IpaR%2Fbfjs%2FvbgA7AWpEeLraB%2FcUCBZQoDYUamG%2BBFYBKAUqd%2FMofQdx5vo7fOB%2F1Sommvy%2FnvyZ2YiwIyt3ElWxkB1cDVTXvY9ItaXyKKbe4ARkP58ltSqZwHpZV4u8ikx%2Bz0xii70kVgxT2wtzWB%2FRtytkEhNnVkNdj1HO2CICjkAl2qRvzPEKzYVQX2cp%2Bt5VFSFabKKaty7VeR7pVITRW%2B9KOrXr1FRDANSVRJrRG4DEMLTfVDaorsukF356eU9Zn0LrbjTt3vyEZhzAiNAM8LMg4ZIJBRBgMfZglloYkwjYqruNxVd30jD0gYvKBjqkAXdUquymtRGitAGLAWNKpgR8wxbslk0CoA2sPCboKrn6MhkPlJpy%2F7%2Fcj8ffd6sml8Q5IMkC4QspgYFd2d4xpSv7iTOa%2Fp8rFiWE33KUa06eKn9xhgENqupfXTTEb%2BB%2B84ZwPlxo5pBsQemKsEhSb5wl73mapsV7v6HJ30JIIQZj6BkRJqsld1mbE2G%2BGk%2B38HD4whu3lU%2F0UoPkqE0lisIb6hJK&X-Amz-Signature=36a587e64b8b96c0d2fb9110a63c34661a0813ae6e1e37706af4ec22e0f13cc9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XUYMIPLX%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T151657Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDFaYtfmaSLXCVJWI55vcIy48P1JUj5BiB0D8RvHH3w8AIhANtRpp0Ci6psVpUwTll0ZunfeJmxCnZKxtiK5Gn0G%2FQhKogECID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwQzb5DZ6q%2FpvikNS8q3ANzozRFCKyjFQjjeuOZhqbVNOVMNAvZIUxsUTSnb3CD4hXiWS%2F0D5%2BTLe%2FLIWq8WtdvqmznGXobej9cAHJJflWhZ%2B%2BiL%2BQfLVNWYIaP5U6y2ZIUgqZhlQzS188R%2BoEYd1%2F6yGnEtGNV5axXMI1vjesylZGDp1z%2B3fjcD6RNahWaze7RMsvy69fFACY2sPnfNfIlaAI%2FqYwYF6WUywUlBzxHgvZpP8ZLoUNfhoqR0r9csP8R1V1FljUOlrrKFDiIX%2FxoTVekYzeWs%2FylHKWs2YXvbm68CiLHBEtivf9fPQfsnrV7wF07fFlgecIGJemiGOk55IpaR%2Fbfjs%2FvbgA7AWpEeLraB%2FcUCBZQoDYUamG%2BBFYBKAUqd%2FMofQdx5vo7fOB%2F1Sommvy%2FnvyZ2YiwIyt3ElWxkB1cDVTXvY9ItaXyKKbe4ARkP58ltSqZwHpZV4u8ikx%2Bz0xii70kVgxT2wtzWB%2FRtytkEhNnVkNdj1HO2CICjkAl2qRvzPEKzYVQX2cp%2Bt5VFSFabKKaty7VeR7pVITRW%2B9KOrXr1FRDANSVRJrRG4DEMLTfVDaorsukF356eU9Zn0LrbjTt3vyEZhzAiNAM8LMg4ZIJBRBgMfZglloYkwjYqruNxVd30jD0gYvKBjqkAXdUquymtRGitAGLAWNKpgR8wxbslk0CoA2sPCboKrn6MhkPlJpy%2F7%2Fcj8ffd6sml8Q5IMkC4QspgYFd2d4xpSv7iTOa%2Fp8rFiWE33KUa06eKn9xhgENqupfXTTEb%2BB%2B84ZwPlxo5pBsQemKsEhSb5wl73mapsV7v6HJ30JIIQZj6BkRJqsld1mbE2G%2BGk%2B38HD4whu3lU%2F0UoPkqE0lisIb6hJK&X-Amz-Signature=76e2e0f28185adebe38d2e0d04ebbc6995a2b5d44d38e2c27a25dc48503b8da0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
