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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RKVDGA4L%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T143217Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD6j0jZxMquEJuaVMhiWB%2BpqxwAVJHmAwUkvwOTg%2FwwxgIhAIEjP47%2Bg8j9P%2BPhqTgEva8EvebIPXRLkE5lXWL5f2%2FQKv8DCHUQABoMNjM3NDIzMTgzODA1IgyS2dSudH9zO1k4vmwq3AMvVw%2Fyct3pf%2FMSiW%2BW4q3HRhZX8MJGFsdMs7EEk6kxQyB2Jvom9zb8IY7IlbSTIp%2BZYpMAxtQSu%2BvqEs58PBWa0SfLCFy1VGsd1HuWgJvucEpV0xmt9ppgk24PRX4dpCCgoO%2FQVJc%2FppKTv0baQAFgVZAH%2FKkhcKqtTIqxY%2F6nWdxP8NDY2HFuR9vXezp%2F5J9%2F7esaLo7oLoI59MsYtMgZzUPrVBh9mZIP2HD631Lw0wFiGazM1kUxLzmhJo%2B2LZvAug4UG5Pb7txFPodpP5e5HXpe48d7gPvbraxw4n8j725It6WNvRaIYp%2FL35fxFXK4IAAyOKCCKgrQ1jiBE2lJDkEX9pIIsfdGY0Dh5kpPGP8GKU6E924bS6axPerqc5k5Wbqm0Kf%2FgUl9CJxZT4c4aZPZUWw5g8OaM14aeU8k6HCqJBmnnrWIESN6itQZv0VJpVIC2VgpoOO9e7JDBzZn05bklolkqR%2FOPo3oUGX7LXZ5F0nAPX%2BKgVHaXtaD0WU08ryGrMtP1bV%2BgicJAkONKRps0bm2prFKK39taCmmkcZerj3x6e8fKSuQ0J%2BQ3Uq9kQY4Mm5thbbAd3FUT2yBHge4bAmbCpBYnpksz6wzdCIyDuKhUNpKQdyQZDD%2BptDJBjqkAVsbmRxVTMj%2FhRlPZ8tFOiuv3UFtI1FJZkbflvHxjUHzup9scPurQ4vCdvauQNQ%2BHbV6ezfhpIXJDl5LNkEI2S%2BBTT7HGZFEjwBDxkvk3WS5sZIbBSF9kvWzpTHqSf6ywhdh393tYjJsaeTyUK6lRfoHojE0hfj0KQjEMiEOi4FCOzyjnLDzm4fqhaHFltRyJ6ztoPVLrBZEI%2BDOGymkkr7KOlpx&X-Amz-Signature=7cbb6d0bdacc289da2fd15e7bea7c15894110efa192c94122cf3f521dfb25edb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RKVDGA4L%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T143217Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD6j0jZxMquEJuaVMhiWB%2BpqxwAVJHmAwUkvwOTg%2FwwxgIhAIEjP47%2Bg8j9P%2BPhqTgEva8EvebIPXRLkE5lXWL5f2%2FQKv8DCHUQABoMNjM3NDIzMTgzODA1IgyS2dSudH9zO1k4vmwq3AMvVw%2Fyct3pf%2FMSiW%2BW4q3HRhZX8MJGFsdMs7EEk6kxQyB2Jvom9zb8IY7IlbSTIp%2BZYpMAxtQSu%2BvqEs58PBWa0SfLCFy1VGsd1HuWgJvucEpV0xmt9ppgk24PRX4dpCCgoO%2FQVJc%2FppKTv0baQAFgVZAH%2FKkhcKqtTIqxY%2F6nWdxP8NDY2HFuR9vXezp%2F5J9%2F7esaLo7oLoI59MsYtMgZzUPrVBh9mZIP2HD631Lw0wFiGazM1kUxLzmhJo%2B2LZvAug4UG5Pb7txFPodpP5e5HXpe48d7gPvbraxw4n8j725It6WNvRaIYp%2FL35fxFXK4IAAyOKCCKgrQ1jiBE2lJDkEX9pIIsfdGY0Dh5kpPGP8GKU6E924bS6axPerqc5k5Wbqm0Kf%2FgUl9CJxZT4c4aZPZUWw5g8OaM14aeU8k6HCqJBmnnrWIESN6itQZv0VJpVIC2VgpoOO9e7JDBzZn05bklolkqR%2FOPo3oUGX7LXZ5F0nAPX%2BKgVHaXtaD0WU08ryGrMtP1bV%2BgicJAkONKRps0bm2prFKK39taCmmkcZerj3x6e8fKSuQ0J%2BQ3Uq9kQY4Mm5thbbAd3FUT2yBHge4bAmbCpBYnpksz6wzdCIyDuKhUNpKQdyQZDD%2BptDJBjqkAVsbmRxVTMj%2FhRlPZ8tFOiuv3UFtI1FJZkbflvHxjUHzup9scPurQ4vCdvauQNQ%2BHbV6ezfhpIXJDl5LNkEI2S%2BBTT7HGZFEjwBDxkvk3WS5sZIbBSF9kvWzpTHqSf6ywhdh393tYjJsaeTyUK6lRfoHojE0hfj0KQjEMiEOi4FCOzyjnLDzm4fqhaHFltRyJ6ztoPVLrBZEI%2BDOGymkkr7KOlpx&X-Amz-Signature=04a982e981fd8af2b86b0f1bd50d841320676a5b954fc125a6744406a012e993&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
