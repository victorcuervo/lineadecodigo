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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZI5NUGW%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T171214Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD4bs3AGcsCpT5zpU3%2F1THcY3RQXjdHTZyCZolzlC1CyQIhAN3j%2F8ugTJGD2BTJuiV%2FR15jPkNMVE17cwqjGn6WwBuqKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw03w0eecchRSoDKUAq3APuhlWSPGqDG%2FgAyi2H8YFfzEU8Rh21hN4OF4lqgoxon9Jfcc%2FMMZ40Sm0VUcLx%2BN9lOMQM270YZFh3sVl8DA%2Bd5Vls0OvkfeR18odNlO0qEc1jZMAcsNFmZnREUvJ7%2FwZt%2FCGz024rlguIrYQXtAWlVXhC1aU7vrW2Jk3g1%2Bu5bezd%2B1BXPVlFtMTw7KN41NnM7HMufwgMeEikR6pmpEZFLAcPk4YRcMJqbxtti45S%2BZXDqTSEQ31RuXDgbjADJFAAgrx2YHXEG45vGg5r5bKzJ0JclOxNEnVx%2FdkFDupVhyiIk9Iy1tHdFow6Fj0J%2Fi7XbWoCOS5FwIjxOTZTxMHzLVDGY4a10p3mzZ1LSelIgB7hHaO%2BLYBXi20tls29TMD6wyao%2BH8e9HATSsV7%2F3wxi0s8fcKdA%2Fr05sibW%2BQdMRnRRNyPQDuxUrHXpXMIQvyoyj7YQPjoA07t1pItIc8zlq3F8FnIjh%2BKU5C4p7vQMQ1lDWvHGc6V09wXOsb%2Byv4fwPrryWRjNEzDMncKmnYwpCRJ2R%2BL8jEXUskj6hVx1Jb5aAqbiF6zX9Fn4StMTklMhSZbB278L017z%2BoyZ7mpd%2F6YSnr%2Fn7NGf5BP3%2Bz4mx8h9mXWsl%2F4LAAJsDD7n4vKBjqkAbXPA9uN%2F%2FH%2F3gb6cllBYxbPzcjKFzVTX5lCRyP%2Bcvdwi9%2Fw76Jq%2Fdz3RT36IFPXxy4FI9pbed9pqRTwtICsbVPU0bSuYhnFemK7aTRIdLpuAN0UPg4IuQeSXkxv%2FxeRsLEfRZL0NNRSr1h3FxuI1A9CxINeCSlX8BuxF0aO6kwOUJF%2F9hgCdoDynP6%2Fs0SNXSQ9QZsXyIuCAynGDklId4IGmnIa&X-Amz-Signature=ff7bd17539f4b3ce8227a70241fbc24df07e9429c169aca9ccaabf400af40b71&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZI5NUGW%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T171214Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD4bs3AGcsCpT5zpU3%2F1THcY3RQXjdHTZyCZolzlC1CyQIhAN3j%2F8ugTJGD2BTJuiV%2FR15jPkNMVE17cwqjGn6WwBuqKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw03w0eecchRSoDKUAq3APuhlWSPGqDG%2FgAyi2H8YFfzEU8Rh21hN4OF4lqgoxon9Jfcc%2FMMZ40Sm0VUcLx%2BN9lOMQM270YZFh3sVl8DA%2Bd5Vls0OvkfeR18odNlO0qEc1jZMAcsNFmZnREUvJ7%2FwZt%2FCGz024rlguIrYQXtAWlVXhC1aU7vrW2Jk3g1%2Bu5bezd%2B1BXPVlFtMTw7KN41NnM7HMufwgMeEikR6pmpEZFLAcPk4YRcMJqbxtti45S%2BZXDqTSEQ31RuXDgbjADJFAAgrx2YHXEG45vGg5r5bKzJ0JclOxNEnVx%2FdkFDupVhyiIk9Iy1tHdFow6Fj0J%2Fi7XbWoCOS5FwIjxOTZTxMHzLVDGY4a10p3mzZ1LSelIgB7hHaO%2BLYBXi20tls29TMD6wyao%2BH8e9HATSsV7%2F3wxi0s8fcKdA%2Fr05sibW%2BQdMRnRRNyPQDuxUrHXpXMIQvyoyj7YQPjoA07t1pItIc8zlq3F8FnIjh%2BKU5C4p7vQMQ1lDWvHGc6V09wXOsb%2Byv4fwPrryWRjNEzDMncKmnYwpCRJ2R%2BL8jEXUskj6hVx1Jb5aAqbiF6zX9Fn4StMTklMhSZbB278L017z%2BoyZ7mpd%2F6YSnr%2Fn7NGf5BP3%2Bz4mx8h9mXWsl%2F4LAAJsDD7n4vKBjqkAbXPA9uN%2F%2FH%2F3gb6cllBYxbPzcjKFzVTX5lCRyP%2Bcvdwi9%2Fw76Jq%2Fdz3RT36IFPXxy4FI9pbed9pqRTwtICsbVPU0bSuYhnFemK7aTRIdLpuAN0UPg4IuQeSXkxv%2FxeRsLEfRZL0NNRSr1h3FxuI1A9CxINeCSlX8BuxF0aO6kwOUJF%2F9hgCdoDynP6%2Fs0SNXSQ9QZsXyIuCAynGDklId4IGmnIa&X-Amz-Signature=ea9de57e3ab77f27f3be45520a3141f2cc6fe650519c6a656f66a403fac6bef8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
