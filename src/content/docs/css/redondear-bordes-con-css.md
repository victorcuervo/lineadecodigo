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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667IO6X7ID%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T044439Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIQCwggb1Xrkzbh1pzFk3BjXbupYp4taXlsNn3StQa7QFdwIgWD8jV8m76sqlb9U9E8jICvRCj8wYXl3st4jx0YF%2F9DIq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDHjT5fXPllsa0G%2Bz4yrcAzhMOrALbzVftgJw%2FLccBFUqjHZtEAjEEqfiOWYh7JE1sUH2viYfitx9R6t8VqzExXEPb5kisbvOVp5OzKEkl86vLbJKdUH6YQtwnC2NiQtrrd0kVpRXs50mbXzHg6ZB8nuf9oXso%2FlhM5Q4EggLKXOH0kHf7OeHVTUUpG5HPF89liwytmn8wN66RPPdNhf9g8J32ZFs0SNjo5gXlSeJ5fXKLGtdb9AF64azA7fwXbex%2BiIckKDo00eNgzFbnWUxTx0%2F2EsEuLLzpoiZXoAAbUd95%2BI7HR64IlKd9lYAOiQr1TvMXA3e5gmWEJMgUZW72P4GULii1P08k0gvwDmhJgyrnyRPevvc5MwwzygjHeHDMPLCa7ZbFeYVBrMs%2FrvixQ5pRDDJVcWxlvgPBkvZyHtEpv7TobMfoGcXG9WpuWtXg6LfmVYpQBs4WXlNS64mO4xU2l6Hl9I%2BpSnQaujd2EIG2p35uAPeJdB3Rzk9%2BayxmlWYLBFJWOhcLiL%2F9dM7%2FNt%2FKJ%2Bz82Spg%2BIF30SuXPbFI0i7cO1xgAYfUBkG5XAGN0aEVfBIDQCjjJZ%2FyoAeZm7VZ68M9lflowQ6cWFL%2F340DWJbpL27zbNOu9If0Iz%2Fp%2BJo6%2B2ERdKsM5IWMIGRxMkGOqUBphLcwv%2FGd466t7L5el4g7RrlTC8xnczCVqxeWiT3NRTbJYCNHGCTnqIeNBs3uHeRfqFN7C0ylyOzLuJK%2F2Yy%2Fzch0MhA2GUgYK02WZjbiIDRsNSGbsPSuy8US%2FyhFx7CnIYJlA1HZslHvvbRJurb8QIYsRD3LKOJDGiKgBPbrFRFuhIkeXMXY%2FfEMTr4R0ZcS62GPjq6fos5p8urvuRRVXGAFaBa&X-Amz-Signature=b8a7953b2ba51acd756e7bc1fb085a832e1d8b656a1b755814566a52ab0ec4fc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667IO6X7ID%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T044439Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIQCwggb1Xrkzbh1pzFk3BjXbupYp4taXlsNn3StQa7QFdwIgWD8jV8m76sqlb9U9E8jICvRCj8wYXl3st4jx0YF%2F9DIq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDHjT5fXPllsa0G%2Bz4yrcAzhMOrALbzVftgJw%2FLccBFUqjHZtEAjEEqfiOWYh7JE1sUH2viYfitx9R6t8VqzExXEPb5kisbvOVp5OzKEkl86vLbJKdUH6YQtwnC2NiQtrrd0kVpRXs50mbXzHg6ZB8nuf9oXso%2FlhM5Q4EggLKXOH0kHf7OeHVTUUpG5HPF89liwytmn8wN66RPPdNhf9g8J32ZFs0SNjo5gXlSeJ5fXKLGtdb9AF64azA7fwXbex%2BiIckKDo00eNgzFbnWUxTx0%2F2EsEuLLzpoiZXoAAbUd95%2BI7HR64IlKd9lYAOiQr1TvMXA3e5gmWEJMgUZW72P4GULii1P08k0gvwDmhJgyrnyRPevvc5MwwzygjHeHDMPLCa7ZbFeYVBrMs%2FrvixQ5pRDDJVcWxlvgPBkvZyHtEpv7TobMfoGcXG9WpuWtXg6LfmVYpQBs4WXlNS64mO4xU2l6Hl9I%2BpSnQaujd2EIG2p35uAPeJdB3Rzk9%2BayxmlWYLBFJWOhcLiL%2F9dM7%2FNt%2FKJ%2Bz82Spg%2BIF30SuXPbFI0i7cO1xgAYfUBkG5XAGN0aEVfBIDQCjjJZ%2FyoAeZm7VZ68M9lflowQ6cWFL%2F340DWJbpL27zbNOu9If0Iz%2Fp%2BJo6%2B2ERdKsM5IWMIGRxMkGOqUBphLcwv%2FGd466t7L5el4g7RrlTC8xnczCVqxeWiT3NRTbJYCNHGCTnqIeNBs3uHeRfqFN7C0ylyOzLuJK%2F2Yy%2Fzch0MhA2GUgYK02WZjbiIDRsNSGbsPSuy8US%2FyhFx7CnIYJlA1HZslHvvbRJurb8QIYsRD3LKOJDGiKgBPbrFRFuhIkeXMXY%2FfEMTr4R0ZcS62GPjq6fos5p8urvuRRVXGAFaBa&X-Amz-Signature=0ff3adb7bb77acd50e7db252b43e2af696b6b15e0b3b1e9a12424ec8319fbd44&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
