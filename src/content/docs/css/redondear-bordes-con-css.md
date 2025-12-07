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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466524CQGD3%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T171226Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBhCAZExR5Qs2JxjdsEstBHZ3O36lNTfG1Rlh3fiUyt4AiBBhsOOG3qtf8zGRc02pm4XVjJH4KFzpAVpwTO220r%2B%2BSqIBAiR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIME5O33kbsk3nBSmqWKtwDRHSiv2IREuETa46eJ4JfYU429GAq%2BFDTTaBtZSIz4Jr9pDqAgfIUk9mmJlgNJXM8EusgkWEAQN9Dr6c9Tvf%2F6DwQ%2BAU9HF9LGk7Xkpo3U4orm8VrahWnmAD3Ejmx4JxK65HgDM2ATZT%2FrgVbkh7tBq60lLPq5X0qBW1x%2BsQPRIIGvu0p2KBmsnTisSBKK5iomieWJxl9KjZD89cq5ejPDsip4DFEKHRUoOK%2F5dMOgs0yk1fWnpxU%2BQXItJNHaPS7b0O3S27l63wZf5eBuSIiEYGyle4jbM7q4LvgOszXhvbtNriW%2BqR119v4ifA80hJins9A%2BgFscNumUN9e3%2B1Zq%2B0n5A9ttj2JcbPqU%2FasuuvypwwyeimWnl6atryqTolRkw3%2FU%2FMBlowjarH02S1rThg9Fm%2FAK1bG3NwxpQTihgVV4WEANzHsn9u3tkEkJs1RPYyAeknf2LpGbkTfX4%2FetpXdpdwX3XKQNVoeJ%2FJoeWf0keIcjXKB7%2Bj1JHAACXgU%2Fc2JKmN%2FQcRWOblY9sF3O0lHbJtv88n68jRJ2Gw%2F0e9LZKEpXv5W73aGEUGXlu3meQnn5RCIfEE%2FasYBsOiC6vlFFA7kAFjUBVbu1xFNnkKAGp1ejweyb8zEh%2Bwwxr3WyQY6pgEek8iqoBkoA7G7%2BPs0B%2Fk7wpG9Fve7UA36zFAb26GH%2BHeZTQeLAdtU15%2FpHK7jyqxxqVWEy854ARdrrOIDaPY2s7VRopudrCM54Nq5j6eqGWgYMTBwKPMd7yf6WjhFH50pDk4IBesqcmV%2B1OpGBIEhghvaYRYJVHUU287j6C%2FjhaI4d%2BLLGsQbIaysJKb71VeWBxvqE%2B5ksEbhIAool1jzfLSEVD9v&X-Amz-Signature=7d6aa9476028a95124bb7906d43b9af981b311e770a0bf8a78d8647b2c10982d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466524CQGD3%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T171226Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBhCAZExR5Qs2JxjdsEstBHZ3O36lNTfG1Rlh3fiUyt4AiBBhsOOG3qtf8zGRc02pm4XVjJH4KFzpAVpwTO220r%2B%2BSqIBAiR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIME5O33kbsk3nBSmqWKtwDRHSiv2IREuETa46eJ4JfYU429GAq%2BFDTTaBtZSIz4Jr9pDqAgfIUk9mmJlgNJXM8EusgkWEAQN9Dr6c9Tvf%2F6DwQ%2BAU9HF9LGk7Xkpo3U4orm8VrahWnmAD3Ejmx4JxK65HgDM2ATZT%2FrgVbkh7tBq60lLPq5X0qBW1x%2BsQPRIIGvu0p2KBmsnTisSBKK5iomieWJxl9KjZD89cq5ejPDsip4DFEKHRUoOK%2F5dMOgs0yk1fWnpxU%2BQXItJNHaPS7b0O3S27l63wZf5eBuSIiEYGyle4jbM7q4LvgOszXhvbtNriW%2BqR119v4ifA80hJins9A%2BgFscNumUN9e3%2B1Zq%2B0n5A9ttj2JcbPqU%2FasuuvypwwyeimWnl6atryqTolRkw3%2FU%2FMBlowjarH02S1rThg9Fm%2FAK1bG3NwxpQTihgVV4WEANzHsn9u3tkEkJs1RPYyAeknf2LpGbkTfX4%2FetpXdpdwX3XKQNVoeJ%2FJoeWf0keIcjXKB7%2Bj1JHAACXgU%2Fc2JKmN%2FQcRWOblY9sF3O0lHbJtv88n68jRJ2Gw%2F0e9LZKEpXv5W73aGEUGXlu3meQnn5RCIfEE%2FasYBsOiC6vlFFA7kAFjUBVbu1xFNnkKAGp1ejweyb8zEh%2Bwwxr3WyQY6pgEek8iqoBkoA7G7%2BPs0B%2Fk7wpG9Fve7UA36zFAb26GH%2BHeZTQeLAdtU15%2FpHK7jyqxxqVWEy854ARdrrOIDaPY2s7VRopudrCM54Nq5j6eqGWgYMTBwKPMd7yf6WjhFH50pDk4IBesqcmV%2B1OpGBIEhghvaYRYJVHUU287j6C%2FjhaI4d%2BLLGsQbIaysJKb71VeWBxvqE%2B5ksEbhIAool1jzfLSEVD9v&X-Amz-Signature=c7506d8c81bb5cc83b855284032a7fe7479c10c52ba1ff32d3516fce6c0fd2d6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
