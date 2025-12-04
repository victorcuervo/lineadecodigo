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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SOXM4X3M%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T083302Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJHMEUCIQCWzKRlBmhMXDPdqNtAZi82%2Bl1IjsKshuKB%2BTNi1DZuaAIgUrfqJO%2BRaOMTpOHHBs%2FQjvvREe2ZShRssCC2DKrg0Rsq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDEwYoj2B0%2FVs01U72CrcA8%2FrHtZc1aVDIn7oy%2BBYhJMtJKWZFHzxtIYGsdDgI7veEYMUj7JI9FBMN4z0dmPuTyoJ%2Bg2%2FcMcDGwGUseU753IFWQlxjSUscDMTAehy7SA%2BktHGM2Q8tFXeZbIQWGAhrZ%2FW1Nu7ZO6kspaTQq%2BOO730X5Y67MU7G3s6LGGiWbY032OobCIokvv1laJmXbq09%2FKT3jCw7d9Oh7euSVObcWEsW4rpsoF9OFJF2rwAQAPxu7UyEatsHe%2Bm%2BJNT8yRC00YmLxY9P7fBKE9FVfRuLI15JzjBpbRbpqZwTBqreo%2F7etKPcWSNLLQTTYoBpbhvPhazm6HTMt3KNrvo0MocNzetWaah2rDkN%2F%2FTkZEhSN7tJpBjvqWYGGIsi15%2BhXAO%2FFknAmaFBMlidZYyxGSiVzqmQ4fbjaOBj0aXFxGgbdGaI6msKmGyKsdexp5we3YYsYMkE99bJy6FJNETXjqnT6HKKBPF0rUObK1mLlBcfxmc%2Fz9eOWy7dkVd1VSBZQ6qpLpUkOQd2IAZ3BQCwEdNgKqD9BTJZAaAJPA0aCcAB8HJ294qkMfrfjTCoBOFfEAepBggswt4Zp3zlT46IzSLUnCUVdplWcWq5E8cecXgJwJ12Nc4H1B9EzvFoNBaMOCFxckGOqUBCDBUxrFhk3qRNjpixBJ6Kh7uG8CehRETibqOEa2nrTuSV0khI5vYD4qOpu0OGk%2BARSHZOtrudA3BCUM17nGCGgbVDeP13MDHXB6vn6BTlo2g67VIgpaESM3Mbl0j3oz2rxzbkzsfnwv0M57uolaMQ8zX2pwphk2Jtn8foGkytf5tx0Odz6Q%2BNuE0Aqu6MPtcgva4dnunkKErCpNQ2aONc6PZ%2FwXd&X-Amz-Signature=9cc0a258d09098c1cded23ebb9968a3c9b0f46453f25eed48ad750d824c0fed4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SOXM4X3M%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T083302Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJHMEUCIQCWzKRlBmhMXDPdqNtAZi82%2Bl1IjsKshuKB%2BTNi1DZuaAIgUrfqJO%2BRaOMTpOHHBs%2FQjvvREe2ZShRssCC2DKrg0Rsq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDEwYoj2B0%2FVs01U72CrcA8%2FrHtZc1aVDIn7oy%2BBYhJMtJKWZFHzxtIYGsdDgI7veEYMUj7JI9FBMN4z0dmPuTyoJ%2Bg2%2FcMcDGwGUseU753IFWQlxjSUscDMTAehy7SA%2BktHGM2Q8tFXeZbIQWGAhrZ%2FW1Nu7ZO6kspaTQq%2BOO730X5Y67MU7G3s6LGGiWbY032OobCIokvv1laJmXbq09%2FKT3jCw7d9Oh7euSVObcWEsW4rpsoF9OFJF2rwAQAPxu7UyEatsHe%2Bm%2BJNT8yRC00YmLxY9P7fBKE9FVfRuLI15JzjBpbRbpqZwTBqreo%2F7etKPcWSNLLQTTYoBpbhvPhazm6HTMt3KNrvo0MocNzetWaah2rDkN%2F%2FTkZEhSN7tJpBjvqWYGGIsi15%2BhXAO%2FFknAmaFBMlidZYyxGSiVzqmQ4fbjaOBj0aXFxGgbdGaI6msKmGyKsdexp5we3YYsYMkE99bJy6FJNETXjqnT6HKKBPF0rUObK1mLlBcfxmc%2Fz9eOWy7dkVd1VSBZQ6qpLpUkOQd2IAZ3BQCwEdNgKqD9BTJZAaAJPA0aCcAB8HJ294qkMfrfjTCoBOFfEAepBggswt4Zp3zlT46IzSLUnCUVdplWcWq5E8cecXgJwJ12Nc4H1B9EzvFoNBaMOCFxckGOqUBCDBUxrFhk3qRNjpixBJ6Kh7uG8CehRETibqOEa2nrTuSV0khI5vYD4qOpu0OGk%2BARSHZOtrudA3BCUM17nGCGgbVDeP13MDHXB6vn6BTlo2g67VIgpaESM3Mbl0j3oz2rxzbkzsfnwv0M57uolaMQ8zX2pwphk2Jtn8foGkytf5tx0Odz6Q%2BNuE0Aqu6MPtcgva4dnunkKErCpNQ2aONc6PZ%2FwXd&X-Amz-Signature=f84157c8268c5f0272d11bbec90f117762867d7b858750cad51e551538768438&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
