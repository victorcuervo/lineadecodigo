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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJX2RI6E%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T140635Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDwYfbVvDXKT6sYprkrYRn8A8kH1u6VdZTB9W7Ef8bdwAiBhRlPOekxnx5vGI9CIWpy3GLhLbXNb6gGvUQJPyiSefSr%2FAwhbEAAaDDYzNzQyMzE4MzgwNSIM%2BT%2FsFZYA%2BZ7pyB9sKtwDhm%2BG%2F43TOyIqjtaj0Qutih8oeABLsRsKFUKHChEVIfJhZi47DSgmJXj0j%2FEcy09TDyGaXurcyFlz%2Fk7tNDl%2FZ0oBce8b2YVdk8QvUGHcut%2BOabjMa7cCAyTLz8vfbqf61b7e9HtgxptI%2Fywrhv16tbapnnZEqTDuTgdHGWcbkVkflysj3nzGQoloEhU1I1ZLhTat6RDCZ23VZsKKoFQEiNPigSUuPqeO0j5sgPijeF3%2BzXULT7WgDhKqHpkN7we59IGSBhBr%2FQhaQbF5mosXOBRMdyLXS0RanTD1EYKuCiX3Wyx4Wx1mqVeAgLipumEwD0oP9ZjH586i328uEK3MFy92nGDz%2FEW2yFQrodGXebsswQWMA6zYUlWzXVqyawgWp3ViezsuRz9xH9NsnEE3p3VMhqfq2itEbHa4OlrTpvseCyjHHICSqXRbOmeleIc8uhhjM0z6GLJ6MQL90kY2LobUimNkt7BP0vazjuyspCh7NZDvnpilHQCrxItrCbJCsdHUy%2BQqtC%2F5V0etyt7qB5nPxG3Zgi1BVGzRPafhcT2lN66FIHZal0YLNlNyAzLFBRe3AYEYw9UL8PGg%2BwYY1SvOpRGeBWRCCTtjfzOtOeGShvOGs9paQahVgrsw%2FNbKyQY6pgEvSQxotpHpZaPe%2BC6%2Fe5aqWdqSpbURNv139F9XTajpY39I4Gof%2Bu1P%2FHbbft2%2BvioIhfFeTOtSuEQg2%2FhC4eDygHtKrMkF8%2BZ7wGY%2Brr%2F3s%2B7zs0mIU0JP0BXh788LJMTS0AWhR46BOVCx4nmhpBpqslOsG1RNj%2FfUzdKdOIjALoJVRms8xxRm2wquEnBfqReMpJiOwxFG%2B1l57wb7szlAH%2BsGHb%2Fx&X-Amz-Signature=2cfa8167137331ac725abd824a14ace4dad6ba45a6e5ec4b1525da5ce0c95a3d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJX2RI6E%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T140635Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDwYfbVvDXKT6sYprkrYRn8A8kH1u6VdZTB9W7Ef8bdwAiBhRlPOekxnx5vGI9CIWpy3GLhLbXNb6gGvUQJPyiSefSr%2FAwhbEAAaDDYzNzQyMzE4MzgwNSIM%2BT%2FsFZYA%2BZ7pyB9sKtwDhm%2BG%2F43TOyIqjtaj0Qutih8oeABLsRsKFUKHChEVIfJhZi47DSgmJXj0j%2FEcy09TDyGaXurcyFlz%2Fk7tNDl%2FZ0oBce8b2YVdk8QvUGHcut%2BOabjMa7cCAyTLz8vfbqf61b7e9HtgxptI%2Fywrhv16tbapnnZEqTDuTgdHGWcbkVkflysj3nzGQoloEhU1I1ZLhTat6RDCZ23VZsKKoFQEiNPigSUuPqeO0j5sgPijeF3%2BzXULT7WgDhKqHpkN7we59IGSBhBr%2FQhaQbF5mosXOBRMdyLXS0RanTD1EYKuCiX3Wyx4Wx1mqVeAgLipumEwD0oP9ZjH586i328uEK3MFy92nGDz%2FEW2yFQrodGXebsswQWMA6zYUlWzXVqyawgWp3ViezsuRz9xH9NsnEE3p3VMhqfq2itEbHa4OlrTpvseCyjHHICSqXRbOmeleIc8uhhjM0z6GLJ6MQL90kY2LobUimNkt7BP0vazjuyspCh7NZDvnpilHQCrxItrCbJCsdHUy%2BQqtC%2F5V0etyt7qB5nPxG3Zgi1BVGzRPafhcT2lN66FIHZal0YLNlNyAzLFBRe3AYEYw9UL8PGg%2BwYY1SvOpRGeBWRCCTtjfzOtOeGShvOGs9paQahVgrsw%2FNbKyQY6pgEvSQxotpHpZaPe%2BC6%2Fe5aqWdqSpbURNv139F9XTajpY39I4Gof%2Bu1P%2FHbbft2%2BvioIhfFeTOtSuEQg2%2FhC4eDygHtKrMkF8%2BZ7wGY%2Brr%2F3s%2B7zs0mIU0JP0BXh788LJMTS0AWhR46BOVCx4nmhpBpqslOsG1RNj%2FfUzdKdOIjALoJVRms8xxRm2wquEnBfqReMpJiOwxFG%2B1l57wb7szlAH%2BsGHb%2Fx&X-Amz-Signature=5a5bdeea93a3e06d045a647254fbfe6f0b452911b1963357d9927a18704103e1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
