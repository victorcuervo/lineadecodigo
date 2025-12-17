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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQ7F3PNA%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T034505Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHOTSzUSA89ag1h37T0esXZvu%2BqHsaz2QiyhTg2zPKHRAiEA%2B%2BHZvQifb8YR58NWmGvGzE44LLsh%2BjfPzCKK%2BBKY38Iq%2FwMIdBAAGgw2Mzc0MjMxODM4MDUiDJRG6lXrypgO3h3%2BMircA47mPjN9S4hipLumzHEV29pwLCMq6SdicOMiJAoAw5oNUnSxQhTbYLmJyYc7T0DUorZKblf0GwoPQI6yS9%2Fxvs8lo6OZs6dKb1xu5In%2FpKWcXPZyQsK1z2rKsK0qzXtyCOcy07YUqRucu9%2BuTTwGyTGhXh3wF3mO6psZc3aL1pIXPaM4UyZzU%2BfxI2mhZVYBAoUoB9opsEF9gBzSigdbVD3m38krnL%2FQsR6Q51Q95MRVWiv1SQGSEIOpHHM2Hu%2FSTnfoeQ%2BLLOW9jVkbmYUe0gVPnW4HD%2FSosXCbJKrXbrLgM%2FISgTmdxMWCX%2F9H28UQLVIRGxROBfIMTb5riaUjdrHWe4iKveTQoRrtXpJibfiXSmiJTEW6B1T8IgEjslNiP9CNzEcNxUEmi9Xd4fYcH9wYyHcExMdTd2zGkrIPftTtOYpScrBF5rm%2B9rxBL7W90ozxWYOXpxNc1c4KSqMU4GteP6qzKGWLOJ3BVt769R%2FlNkyZQOOYDBqDEzYj39ur8N9Cd06YwXjiRypTTBpmMguc8%2BjHGruH03iWE13T%2B%2BBEiI3QeMwcJhXOPrPVvlRwDQ%2BFh1zTVYdJZylRYHQhzFthR4kNjFZpdntFM%2BHga8Sm%2FuzAzNk%2FynkWH6zxMLiyiMoGOqUBQ48VMnBThDkC77q9TWtkkNTMcLN%2FW%2FboCOpd%2BvLNIGHVN9qEMrUE%2BYWJewUIhuRgco7vCTpRo2dRA54aJ6u5V5t%2Fo1CNcH%2Ff0CcuIJG%2BJfzOVZxdX98kfHf1IeYfxW0NuKtAcS0Iqo%2FJISBVSaYBP18Vy1HzD2g7va09p7YOMj2CcQdSvMQP9s9ZRjt3Q2nV%2BIsHEDTF4onpD9tKEp%2BxFlJ0fJ8O&X-Amz-Signature=4adacd5d79e6c7d86434785362ae8eff7adf4b53eb98f685aed5c0d428a4b436&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQ7F3PNA%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T034505Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHOTSzUSA89ag1h37T0esXZvu%2BqHsaz2QiyhTg2zPKHRAiEA%2B%2BHZvQifb8YR58NWmGvGzE44LLsh%2BjfPzCKK%2BBKY38Iq%2FwMIdBAAGgw2Mzc0MjMxODM4MDUiDJRG6lXrypgO3h3%2BMircA47mPjN9S4hipLumzHEV29pwLCMq6SdicOMiJAoAw5oNUnSxQhTbYLmJyYc7T0DUorZKblf0GwoPQI6yS9%2Fxvs8lo6OZs6dKb1xu5In%2FpKWcXPZyQsK1z2rKsK0qzXtyCOcy07YUqRucu9%2BuTTwGyTGhXh3wF3mO6psZc3aL1pIXPaM4UyZzU%2BfxI2mhZVYBAoUoB9opsEF9gBzSigdbVD3m38krnL%2FQsR6Q51Q95MRVWiv1SQGSEIOpHHM2Hu%2FSTnfoeQ%2BLLOW9jVkbmYUe0gVPnW4HD%2FSosXCbJKrXbrLgM%2FISgTmdxMWCX%2F9H28UQLVIRGxROBfIMTb5riaUjdrHWe4iKveTQoRrtXpJibfiXSmiJTEW6B1T8IgEjslNiP9CNzEcNxUEmi9Xd4fYcH9wYyHcExMdTd2zGkrIPftTtOYpScrBF5rm%2B9rxBL7W90ozxWYOXpxNc1c4KSqMU4GteP6qzKGWLOJ3BVt769R%2FlNkyZQOOYDBqDEzYj39ur8N9Cd06YwXjiRypTTBpmMguc8%2BjHGruH03iWE13T%2B%2BBEiI3QeMwcJhXOPrPVvlRwDQ%2BFh1zTVYdJZylRYHQhzFthR4kNjFZpdntFM%2BHga8Sm%2FuzAzNk%2FynkWH6zxMLiyiMoGOqUBQ48VMnBThDkC77q9TWtkkNTMcLN%2FW%2FboCOpd%2BvLNIGHVN9qEMrUE%2BYWJewUIhuRgco7vCTpRo2dRA54aJ6u5V5t%2Fo1CNcH%2Ff0CcuIJG%2BJfzOVZxdX98kfHf1IeYfxW0NuKtAcS0Iqo%2FJISBVSaYBP18Vy1HzD2g7va09p7YOMj2CcQdSvMQP9s9ZRjt3Q2nV%2BIsHEDTF4onpD9tKEp%2BxFlJ0fJ8O&X-Amz-Signature=a24b81bb8e212ed1fe91a1b6675ddbe9add8ad4225da8a98e047f3a27c8711eb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
