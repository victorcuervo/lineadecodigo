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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWIFVPSB%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T152241Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJHMEUCIHX64vwvUtFFnUpTjeOuevb%2BA%2FdqUNx3ir%2FnVNUkwIeFAiEAwrezxVASMJ3ukrMBrmT0xEF2OkxjOmL0%2FEsw1U6MK0Qq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDD35D%2F4hu9JYrzxR%2BCrcA%2FotDdga2Dn6hs83j25mqsASfSq0TiAzIAxIFAW1CfSw3k1r4O7DatAZFlnTkXrhgNIEghhsKESUiWoFv6myOuSz%2BPMloyGuY%2FNumrzUsLBwN3fqymu5wmtPISVuxgzN3vPEXKHK1G4GxPiY%2BRRSOgMN%2FDqEcpG9auCMRRPxW9%2BbsJaIAdiZo398gAJ6ovfl0%2FlBweZcIw1i%2B30mWreMvinqEulH6SZvV1%2Bf2pjULnMW6wbX8OSNvj7ysW3TOezE5KZ9VSe11cUJX%2FPuMqAhq2N8elFc7UqRJO%2BnPYECSQ22QxWRcWwGLkalLaVYyTsCA%2FH5bQoBwQrZrVrtZEwQejPlXX1Po0flUXEhxDMd65A1dCmBzkfEoxhxR8xWE%2FDxq%2FLrZRBKNTfZsEPGKLoZ3Vnk392qzM%2FkvcsOivBU5nPZfh5fkhQ9mZ41V1OIh%2BiAZRtvPOKiXq6QDEMoBk%2BgREs0Y%2FfwgPN%2FQn1HClhRr7LG%2F1xp5M3o%2BlUt0QWD6QY%2B0A%2FteaEStqQbtQ%2B4L3khyjh6mzXcEvyslOOUb9zEY30rshy9MYHk34kvBz0XCwUVO0FnVIPwCiUzfUUtepclf3cixzA%2FYtXVse0%2BOakP%2FuDIXi3BfPyDAN0QitUpMM6%2BxskGOqUBeHmbJ0lzayX%2FD%2Fdo8ukzQhpugINsQgKPoMls%2FbC1up%2FS1PPSxFelCKbzQwpOjAIAJCEJD9IopXY8NXbGbnLM%2FLpN3iqCxg73oUt2OVLpDQmheY3sKzsZvfm%2B5hiunldIQgfxLcBY8LDMq9GhsdXCiCYzqN6a7%2FQtUfl7wQPMeetkCvuxHXJYcFMgFWpBq%2FbJdVO59nyoPhLxHrvjjkZjYb8RaJ0U&X-Amz-Signature=a637ed4d87fcc5e9f14c49d6245865ab603a759b85614eefa683a0ea88873cc2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWIFVPSB%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T152241Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJHMEUCIHX64vwvUtFFnUpTjeOuevb%2BA%2FdqUNx3ir%2FnVNUkwIeFAiEAwrezxVASMJ3ukrMBrmT0xEF2OkxjOmL0%2FEsw1U6MK0Qq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDD35D%2F4hu9JYrzxR%2BCrcA%2FotDdga2Dn6hs83j25mqsASfSq0TiAzIAxIFAW1CfSw3k1r4O7DatAZFlnTkXrhgNIEghhsKESUiWoFv6myOuSz%2BPMloyGuY%2FNumrzUsLBwN3fqymu5wmtPISVuxgzN3vPEXKHK1G4GxPiY%2BRRSOgMN%2FDqEcpG9auCMRRPxW9%2BbsJaIAdiZo398gAJ6ovfl0%2FlBweZcIw1i%2B30mWreMvinqEulH6SZvV1%2Bf2pjULnMW6wbX8OSNvj7ysW3TOezE5KZ9VSe11cUJX%2FPuMqAhq2N8elFc7UqRJO%2BnPYECSQ22QxWRcWwGLkalLaVYyTsCA%2FH5bQoBwQrZrVrtZEwQejPlXX1Po0flUXEhxDMd65A1dCmBzkfEoxhxR8xWE%2FDxq%2FLrZRBKNTfZsEPGKLoZ3Vnk392qzM%2FkvcsOivBU5nPZfh5fkhQ9mZ41V1OIh%2BiAZRtvPOKiXq6QDEMoBk%2BgREs0Y%2FfwgPN%2FQn1HClhRr7LG%2F1xp5M3o%2BlUt0QWD6QY%2B0A%2FteaEStqQbtQ%2B4L3khyjh6mzXcEvyslOOUb9zEY30rshy9MYHk34kvBz0XCwUVO0FnVIPwCiUzfUUtepclf3cixzA%2FYtXVse0%2BOakP%2FuDIXi3BfPyDAN0QitUpMM6%2BxskGOqUBeHmbJ0lzayX%2FD%2Fdo8ukzQhpugINsQgKPoMls%2FbC1up%2FS1PPSxFelCKbzQwpOjAIAJCEJD9IopXY8NXbGbnLM%2FLpN3iqCxg73oUt2OVLpDQmheY3sKzsZvfm%2B5hiunldIQgfxLcBY8LDMq9GhsdXCiCYzqN6a7%2FQtUfl7wQPMeetkCvuxHXJYcFMgFWpBq%2FbJdVO59nyoPhLxHrvjjkZjYb8RaJ0U&X-Amz-Signature=d296baa2b87bcba723e19a458be40c7694106f86b07a8abfb25b06d690e29220&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
