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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663KZNEB5U%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T134839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHfkLjADeAuiSq%2FNIasVz%2FxJl7LMP5NClKt0p0YnihAlAiB1zkKw%2BZ5l6GYPyyTar4G5Hg%2BosdMfBd5529jQREfgdCqIBAim%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM6c6Zo5ooQ9DGCqy%2FKtwDCR2TeHF1tButiLdkYIkLtqA8nenejD2aqm6UpB2UoH5KWMOi0TuN%2BTNlXyjjyoX0mhvewwMkjZIwsgG7Okc9d8HhXcERi1lKcYtfaSFwJk5SXxEFPyRzttAb7cHIZWsbN215u2HjPF4%2FVBVb7UjY2pmKmLJyMUzDZpNDJFa0lzqI0q%2BBlahfgasLt4ZWgKk2aAUJmsfY8HG%2F65qnLUc7pjo%2BdlZSZuBQcN7Nn96yPusl3EdslhPSW%2BYmqgmNKufKWDyYQsppYWCnZTE1b9NQ7bXdQXT8wZJaYN6%2FwtuMOSgH9oxlHjZYfz%2FIX8F43guWoyvslg7Xqn2wNcVs3H%2BHa39ugpLxx7ZAcVvYr3T%2B%2B2qmGSZjOwj3S%2Bwju%2FJqwLwyvWpH61r%2F%2BA03BMS4dYkB1RurYWHy5Maqvr9Fy3Oia%2BwLUjwZkAL%2Fs%2FNelgwoBG7mgOn7rYATTet%2B2bP29QER2o5BOkTV9r5mefFzI4G7pSHjYeq9EPG1M8FjHGTa45TpKtsLAPfs9EVBTLIdEiiRxnnHPITEGrW4FVAFyS%2BStWKDEbWaFhRp17P4coWnuxYL34LFuMOfHAlZ1l%2Bo0VNN66lLCteoov63IhTtyelnMqOcddNkSTcy%2BvHqGiUws5DbyQY6pgGCmdrfH1sU%2BcewqJ19%2Bh2QYylDhy7Z%2Fa1Hu%2FQXGWUMmZG9vEySU6JpQAvl6mCe%2F9lIwrjlkfrZf5cW7HCjWcF4RG1nnl9YSL%2Fub86jUk7afV9fJnVtsyPAcEjoV3d3whpW8XtUKHcs5XjTR2Z7MYNhj8t4uCHCzRhUOH2uTkYP%2FIHLMuMOF%2BRjK%2B0lEpkCJ1nobwwcgB7ka%2F16vGPNIzLzTwyVt6tc&X-Amz-Signature=8e002e7224c2489f1511e7038f0db4336b56107281b21a08fbe2f5b15eb52e3e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663KZNEB5U%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T134839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHfkLjADeAuiSq%2FNIasVz%2FxJl7LMP5NClKt0p0YnihAlAiB1zkKw%2BZ5l6GYPyyTar4G5Hg%2BosdMfBd5529jQREfgdCqIBAim%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM6c6Zo5ooQ9DGCqy%2FKtwDCR2TeHF1tButiLdkYIkLtqA8nenejD2aqm6UpB2UoH5KWMOi0TuN%2BTNlXyjjyoX0mhvewwMkjZIwsgG7Okc9d8HhXcERi1lKcYtfaSFwJk5SXxEFPyRzttAb7cHIZWsbN215u2HjPF4%2FVBVb7UjY2pmKmLJyMUzDZpNDJFa0lzqI0q%2BBlahfgasLt4ZWgKk2aAUJmsfY8HG%2F65qnLUc7pjo%2BdlZSZuBQcN7Nn96yPusl3EdslhPSW%2BYmqgmNKufKWDyYQsppYWCnZTE1b9NQ7bXdQXT8wZJaYN6%2FwtuMOSgH9oxlHjZYfz%2FIX8F43guWoyvslg7Xqn2wNcVs3H%2BHa39ugpLxx7ZAcVvYr3T%2B%2B2qmGSZjOwj3S%2Bwju%2FJqwLwyvWpH61r%2F%2BA03BMS4dYkB1RurYWHy5Maqvr9Fy3Oia%2BwLUjwZkAL%2Fs%2FNelgwoBG7mgOn7rYATTet%2B2bP29QER2o5BOkTV9r5mefFzI4G7pSHjYeq9EPG1M8FjHGTa45TpKtsLAPfs9EVBTLIdEiiRxnnHPITEGrW4FVAFyS%2BStWKDEbWaFhRp17P4coWnuxYL34LFuMOfHAlZ1l%2Bo0VNN66lLCteoov63IhTtyelnMqOcddNkSTcy%2BvHqGiUws5DbyQY6pgGCmdrfH1sU%2BcewqJ19%2Bh2QYylDhy7Z%2Fa1Hu%2FQXGWUMmZG9vEySU6JpQAvl6mCe%2F9lIwrjlkfrZf5cW7HCjWcF4RG1nnl9YSL%2Fub86jUk7afV9fJnVtsyPAcEjoV3d3whpW8XtUKHcs5XjTR2Z7MYNhj8t4uCHCzRhUOH2uTkYP%2FIHLMuMOF%2BRjK%2B0lEpkCJ1nobwwcgB7ka%2F16vGPNIzLzTwyVt6tc&X-Amz-Signature=86cd59a36e1397196b9dd2a8ea5ed7dbb50aa0cb2a56714cb8cd358f13a2eb33&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
