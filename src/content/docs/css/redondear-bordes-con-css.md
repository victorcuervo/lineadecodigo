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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667AAI2WUU%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T192016Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC0l8aKYom5ll8AXA8fl2wLvHDI1dK84kkh2JDkn3nXpgIgHM6kxtn62B8luqkEk8dvDL4w%2BxFYcEqLECxdvdP4UFkqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL%2FTrZMLkGV4xsoy3CrcA8W31cMoiwS5NeGz1W2%2BtmPmzyZlat%2F%2FcTUSFljx7LrXcmKHdQ3s6LXsI%2B5XwdBhFQipV0gtX3YM9NJQps4RlBujhiwgJ%2BNw6A6KvR%2FJxadIHoQkanqGBjR9Jw9K2QZgyVMT8lnNOFeGsYPwnPvGQNxH46KC825RFBmsng2pBb0S0ajwox2qHtvKkaWUehhE50X7k9RMSa4HWGq4iI4yht1SrYF6vWgTS4cpBNFH3z0wJVecOjwG3q0JbQumjEwBD%2FKmRx9cd1sMuT21GXKKOxzpJhELHbfbZSIzNiItuink9vp1KpavSLwnKfxzRi79EJRnjUgjZGdeGYR3DJPoiPmdUJBlq%2BAe9dkP9fY4RCaytRYd1yORNvRqNJK2pM5DvKKSYBbNRcDtNa9YS%2BIktKOo8It9Q56ceWXP6tJxQdQY17wTNTucpvcRIbBI5bu1ylt7RfqubD6OXIAqdJQvwPzgAUV30GsRi8achLcCmEVaBmnUX5KPych4JOUD4TzNXa8crCAo5CyD0i8Bn7aOSqpE%2BJzqA9Sqf1bOkSZ305SHDJvhwyi56A8%2BjboqeXrdaEZl2Lwv%2FP7nctlAzc%2Ffh3OgK4y9IporW5w8%2B2hhUvRzK6Do9%2FtoCmUZY4k4MJi03MkGOqUBTstkG4S%2FiYktDvionCQ6cwhiVnp%2BQu2nNob9PGrIVIa68i%2Bj%2FLdPRtRRk9qonWQZ%2BZyCR0da%2BZiF%2BxFESqFiwZALt2KZY11fzHW%2BB6EwUHbvAfIfeGE7qc6%2BCvK7kLWlfesko01lo3m%2BankSDg%2FQBH0kGAoFFsYN39779rdZ3iYHbCA8aSAg2TR3g4gsk4uvjz4UjjnWNKfhuus71xoAzUl8WA7y&X-Amz-Signature=5b1ce528b64b2f05d470eb92bf81b465bc76e78b8642d5a9cddf93914a62a960&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667AAI2WUU%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T192016Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC0l8aKYom5ll8AXA8fl2wLvHDI1dK84kkh2JDkn3nXpgIgHM6kxtn62B8luqkEk8dvDL4w%2BxFYcEqLECxdvdP4UFkqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL%2FTrZMLkGV4xsoy3CrcA8W31cMoiwS5NeGz1W2%2BtmPmzyZlat%2F%2FcTUSFljx7LrXcmKHdQ3s6LXsI%2B5XwdBhFQipV0gtX3YM9NJQps4RlBujhiwgJ%2BNw6A6KvR%2FJxadIHoQkanqGBjR9Jw9K2QZgyVMT8lnNOFeGsYPwnPvGQNxH46KC825RFBmsng2pBb0S0ajwox2qHtvKkaWUehhE50X7k9RMSa4HWGq4iI4yht1SrYF6vWgTS4cpBNFH3z0wJVecOjwG3q0JbQumjEwBD%2FKmRx9cd1sMuT21GXKKOxzpJhELHbfbZSIzNiItuink9vp1KpavSLwnKfxzRi79EJRnjUgjZGdeGYR3DJPoiPmdUJBlq%2BAe9dkP9fY4RCaytRYd1yORNvRqNJK2pM5DvKKSYBbNRcDtNa9YS%2BIktKOo8It9Q56ceWXP6tJxQdQY17wTNTucpvcRIbBI5bu1ylt7RfqubD6OXIAqdJQvwPzgAUV30GsRi8achLcCmEVaBmnUX5KPych4JOUD4TzNXa8crCAo5CyD0i8Bn7aOSqpE%2BJzqA9Sqf1bOkSZ305SHDJvhwyi56A8%2BjboqeXrdaEZl2Lwv%2FP7nctlAzc%2Ffh3OgK4y9IporW5w8%2B2hhUvRzK6Do9%2FtoCmUZY4k4MJi03MkGOqUBTstkG4S%2FiYktDvionCQ6cwhiVnp%2BQu2nNob9PGrIVIa68i%2Bj%2FLdPRtRRk9qonWQZ%2BZyCR0da%2BZiF%2BxFESqFiwZALt2KZY11fzHW%2BB6EwUHbvAfIfeGE7qc6%2BCvK7kLWlfesko01lo3m%2BankSDg%2FQBH0kGAoFFsYN39779rdZ3iYHbCA8aSAg2TR3g4gsk4uvjz4UjjnWNKfhuus71xoAzUl8WA7y&X-Amz-Signature=96dc981bf04db71cdf8fc09dc6bb243b2ea5e314063ec1c74c80b8e866da1a01&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
