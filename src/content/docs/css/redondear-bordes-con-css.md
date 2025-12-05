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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663LYS6NZJ%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T121149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICK8EWWBO7ehU26wV9iMs2Wd2vESu%2FzGy8SV9w0zddVOAiEAwLpz8McM33azTbPVEjCTxuRiw7gvvFT8khR67EPxjlQq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDIp35v8HKuWbO5qwjyrcA2r9bnW5ZETUtHRYYyE71EgxgQzUGCks%2BBG5KzgSC83liqOT2Yx4ujt25MEWZEbtcTlFnpMJBbFzsxrl6hCCVGDnpC44EyXKSRmCEABencRuxjDukocisBN3Z7csG92gA6GbI1YO%2BBzuwwy4aXZjUAttyQFJa0vOX2ZBh6%2FBZpAa%2B%2FnOy5M296VFboMR%2BK1TkoZYZ9yhJHR81zMuPFqrHENm0TN5M1pq%2BIVxvosM6zwJhQb3eoiZmfZtHwTywpN3OHeGOX73YRV7ZyQf15EcNPtYK0AQLLM%2FmN2Z9Q1gwV3ZK9mIDKfaO%2FTgjqUyPZOhuJ2dYrECk4XYk8U9fn3%2FUQbnwyBegvzve6ARGcsQccA1%2FLb8fPAJT%2FLlrhOlRmDWnrV00825iYR%2BrpvON4YrFh7jUbzfHn02yvAMpqdbKohT5uQy3EDzSZzpx%2Fi5KxM8GnwCrrO40O3xhGTR4bLh6zZavRUpzKqfJg2b9YEA%2BGBAgXByyWKjPLvflT639ACOO4ikJ2pPSMA7Oa2L9CqpN6jGXLobtjs1daqUKwHXNy7yI1qTdfUpCB6dT47fnBE3dle6Zsd6UZyiGiA1oKMFmH6gjaFkp4IV5NFiBfieS8OhmC71j0tGxXMY9CFoMJjJyskGOqUBzl53%2BjUVtU%2FmHsvG8CcZRSIsNs%2FFSQ25xAuBI3I9SCcnYo2u%2FSwFDugEBGUPiHStVG2x0ccZCwHCRH0Y5khrBiJCQwd5gfWmdfx4NrcSJ2dgfJJh1Iyjnb%2FfWzScr%2F54fJts5UixucxmwEJvWtB5EERfkEZaxHSYujRhbfrWLGGrQBM3Kx4dO%2BvH%2FReC92c0rPmQXgUj5nJl7U9f9aLKk2MWNYJA&X-Amz-Signature=400b3548fe1ef309aa26bab37aaa767fffb86d43ee80f439ceaed03817486cfb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663LYS6NZJ%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T121149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICK8EWWBO7ehU26wV9iMs2Wd2vESu%2FzGy8SV9w0zddVOAiEAwLpz8McM33azTbPVEjCTxuRiw7gvvFT8khR67EPxjlQq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDIp35v8HKuWbO5qwjyrcA2r9bnW5ZETUtHRYYyE71EgxgQzUGCks%2BBG5KzgSC83liqOT2Yx4ujt25MEWZEbtcTlFnpMJBbFzsxrl6hCCVGDnpC44EyXKSRmCEABencRuxjDukocisBN3Z7csG92gA6GbI1YO%2BBzuwwy4aXZjUAttyQFJa0vOX2ZBh6%2FBZpAa%2B%2FnOy5M296VFboMR%2BK1TkoZYZ9yhJHR81zMuPFqrHENm0TN5M1pq%2BIVxvosM6zwJhQb3eoiZmfZtHwTywpN3OHeGOX73YRV7ZyQf15EcNPtYK0AQLLM%2FmN2Z9Q1gwV3ZK9mIDKfaO%2FTgjqUyPZOhuJ2dYrECk4XYk8U9fn3%2FUQbnwyBegvzve6ARGcsQccA1%2FLb8fPAJT%2FLlrhOlRmDWnrV00825iYR%2BrpvON4YrFh7jUbzfHn02yvAMpqdbKohT5uQy3EDzSZzpx%2Fi5KxM8GnwCrrO40O3xhGTR4bLh6zZavRUpzKqfJg2b9YEA%2BGBAgXByyWKjPLvflT639ACOO4ikJ2pPSMA7Oa2L9CqpN6jGXLobtjs1daqUKwHXNy7yI1qTdfUpCB6dT47fnBE3dle6Zsd6UZyiGiA1oKMFmH6gjaFkp4IV5NFiBfieS8OhmC71j0tGxXMY9CFoMJjJyskGOqUBzl53%2BjUVtU%2FmHsvG8CcZRSIsNs%2FFSQ25xAuBI3I9SCcnYo2u%2FSwFDugEBGUPiHStVG2x0ccZCwHCRH0Y5khrBiJCQwd5gfWmdfx4NrcSJ2dgfJJh1Iyjnb%2FfWzScr%2F54fJts5UixucxmwEJvWtB5EERfkEZaxHSYujRhbfrWLGGrQBM3Kx4dO%2BvH%2FReC92c0rPmQXgUj5nJl7U9f9aLKk2MWNYJA&X-Amz-Signature=51264499531478c5a369e4d16f0605091185669b98948412a8ffb294526f4dbf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
