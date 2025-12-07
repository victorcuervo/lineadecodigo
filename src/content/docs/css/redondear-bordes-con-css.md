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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664TGE545M%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T045334Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDURs9EHfvKTJa9tWB2AqE9PZxx5bMBhwtNul6tIzLrKAiAoRxZucty72lCOr5RbW%2FOUR2zWU0i2fTRhb9%2BfgK1lsyqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMgjDKaVuOlI1e98sjKtwDCafjDaplVbHOxAPfS7nTtROG9AR%2BfXvSHxjNHhv%2BvmwVazRdDDOffoqH6In6D1MGB%2BNw3tc3TFhO8yPDBULWpvHfAfWeA5m9%2BECqxakhKwGLxUpjdsueEOarinVpBgumam9646gyjEb2%2BPpmnGlrC6T%2Be%2Fucl4TSdy7rRgGcklDXMvqDzPf7FNcMY7wREVhxd5ZSHwubVHWiyzboW2pjqNvPwRgiL%2B51xhaSmuBdpCSoN%2Fr1ucol4I7MitVxzaPchua%2Fs2Cyt5dn%2F%2FqapGJMcwR95N1r%2FWVb8Bk34Q%2FbDZI6fdFgvaxiHWWtC28hLwal3XBnorlVh8uoKed%2Bxwyv4MPfuPgy3Wa6GGVPmb7wUGz7qgunu0Og9SYAA0E%2FtaT02RYqXemeaazsQ0TaaIeepThJEghFPtnT%2BnK7A0iY5Z1G3EAmkFOI9SJeYnGI4vO6sMMB5UR8CsdO91ECWu77M%2BjXOzfj%2BcQ87U%2BQIFxI31yr2lteN58aE2w0L9sw56KtCfX4hYmp6dUB7HZmauGuTMfp5bz%2BqCBnjYEpUnJYo8HkmB%2F5Pnc4L6CLlNbOpwPwWpQCCURWdKwOBZN1mC2JtZCijNo%2BFHkQfa747mqTUfb%2BWQfp3kPYkuaZ9AUwhf3SyQY6pgEJlE9I0xo6kSC%2FNOtkr%2B5m%2BXHx%2F%2B8V3FckMCQz1wG%2FARgyy0A%2BBYzKDWlZOaRR8SWoyZh8hD2Czs5AmmaQVD6Mas5xSCtd9Z%2F3CBQqUuazlHMn9HKNST2bpOmQ1Vrsm1i%2FLhLjETWcyB3mm4cXWA5PFQuSaYQBogxTOUDGRHf%2FLNxCE5%2FrPiECKMssPeOHHo65EWfiwldoN0NSW%2FlRcr0IL07kWPe8&X-Amz-Signature=04288418d3606cdbd043d34c93f46b2b0e20df4635bb423aa8fa223016a96d3e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664TGE545M%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T045334Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDURs9EHfvKTJa9tWB2AqE9PZxx5bMBhwtNul6tIzLrKAiAoRxZucty72lCOr5RbW%2FOUR2zWU0i2fTRhb9%2BfgK1lsyqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMgjDKaVuOlI1e98sjKtwDCafjDaplVbHOxAPfS7nTtROG9AR%2BfXvSHxjNHhv%2BvmwVazRdDDOffoqH6In6D1MGB%2BNw3tc3TFhO8yPDBULWpvHfAfWeA5m9%2BECqxakhKwGLxUpjdsueEOarinVpBgumam9646gyjEb2%2BPpmnGlrC6T%2Be%2Fucl4TSdy7rRgGcklDXMvqDzPf7FNcMY7wREVhxd5ZSHwubVHWiyzboW2pjqNvPwRgiL%2B51xhaSmuBdpCSoN%2Fr1ucol4I7MitVxzaPchua%2Fs2Cyt5dn%2F%2FqapGJMcwR95N1r%2FWVb8Bk34Q%2FbDZI6fdFgvaxiHWWtC28hLwal3XBnorlVh8uoKed%2Bxwyv4MPfuPgy3Wa6GGVPmb7wUGz7qgunu0Og9SYAA0E%2FtaT02RYqXemeaazsQ0TaaIeepThJEghFPtnT%2BnK7A0iY5Z1G3EAmkFOI9SJeYnGI4vO6sMMB5UR8CsdO91ECWu77M%2BjXOzfj%2BcQ87U%2BQIFxI31yr2lteN58aE2w0L9sw56KtCfX4hYmp6dUB7HZmauGuTMfp5bz%2BqCBnjYEpUnJYo8HkmB%2F5Pnc4L6CLlNbOpwPwWpQCCURWdKwOBZN1mC2JtZCijNo%2BFHkQfa747mqTUfb%2BWQfp3kPYkuaZ9AUwhf3SyQY6pgEJlE9I0xo6kSC%2FNOtkr%2B5m%2BXHx%2F%2B8V3FckMCQz1wG%2FARgyy0A%2BBYzKDWlZOaRR8SWoyZh8hD2Czs5AmmaQVD6Mas5xSCtd9Z%2F3CBQqUuazlHMn9HKNST2bpOmQ1Vrsm1i%2FLhLjETWcyB3mm4cXWA5PFQuSaYQBogxTOUDGRHf%2FLNxCE5%2FrPiECKMssPeOHHo65EWfiwldoN0NSW%2FlRcr0IL07kWPe8&X-Amz-Signature=104859bee56af53f1ad81d4b49fd1599163492233619ca395f8f1e41c9eeabf0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
