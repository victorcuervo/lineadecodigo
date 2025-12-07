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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TNDRVK4P%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T124542Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDV98xIrifvL5zh%2BINzD1BRFMnQ%2Bx%2Bqeaw0cdd2Xs%2BlwgIgQStJnMOhPOaXRSoe%2B5uCfeiUEYzXtX1F5u5RxfN1bk8qiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLcaRt9aXOT3rT2KxyrcAwxyF1yZkiv5l6nBI3oCBHQXFZJVIGEOkymd5hN9%2B5q7F%2BZcMbtZTuACfpDn0gWEtdwSCUK8zZj1k4iwt6mYud9Iz9xEWF8G3kKb6SoksSfV9j2F9AnKyZUpGkABsBoeRSORgyD1D9HNG%2FrcCDL0cOf7XnexH8cPzSGSOMJXWe%2F9AfjHSXWgL7VQS%2Bsf%2FILbH7lCsPsNgVuA6rHdmtsIYx82EL25KIEvcsJVwODHDfhF9z0YmZNKFE6atInajxqA94S%2BEg2P4kwUa6eqqUECqZtMICprQG3FIoeIJYTjYrp0HJYSaYJYLHp7TcAUrDk3H7DABGK9nwDmQit5til6Z22dGpi%2BwAZmEmWnuWjd9uSX8CsPJtGJXFkdXp%2BgmaHvqmUGvoLQIlLPj3JQeZbEKev53z9vZpIO0TIpqnWl%2FJN6ZleNHRo%2BcZ%2F2n9dzQ5sIOfA4YcLod54btq6JkUvBItaoE9RMnuKoxbZk24ln%2Fs27pad9Ruv2vlLBNItUvxUO0uLRNmnQ9%2BJS%2FgFOqU80ftPw7o7u5%2BqYkQHPI1UJofIPGj%2BDWy1PvnO9LRuEkL9FvHuBM%2BkOeupzoIK9bM73igKyZxHuEbQJe0%2FRmbNbP0rCaupXSGvbGVj%2FvHziMOaZ1ckGOqUBzOKGifW%2BEiq2%2F34WOT79BrItrDEjxHgVX7tpm5Yyfw04ijr26311ExCmYhY10H1MzBG0BgLa9UADOxJOxynRgHf9U6K4AoWaBPZoAJ3RpaNRSlWMaO8GvNHIgYXBik88slUYfeWzyP4HWdYckS1gRGLeMHeM%2BIIa%2B5eYb6dZhpPj5lcsX7fqhXq1Wv79e3Fj6TWdDPaUSR3FgEOvJUQYeDZLdPmE&X-Amz-Signature=11d42816461de5b0eed216d80a20613cd4f7ab43454f7cc827c8587713205a29&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TNDRVK4P%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T124542Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDV98xIrifvL5zh%2BINzD1BRFMnQ%2Bx%2Bqeaw0cdd2Xs%2BlwgIgQStJnMOhPOaXRSoe%2B5uCfeiUEYzXtX1F5u5RxfN1bk8qiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLcaRt9aXOT3rT2KxyrcAwxyF1yZkiv5l6nBI3oCBHQXFZJVIGEOkymd5hN9%2B5q7F%2BZcMbtZTuACfpDn0gWEtdwSCUK8zZj1k4iwt6mYud9Iz9xEWF8G3kKb6SoksSfV9j2F9AnKyZUpGkABsBoeRSORgyD1D9HNG%2FrcCDL0cOf7XnexH8cPzSGSOMJXWe%2F9AfjHSXWgL7VQS%2Bsf%2FILbH7lCsPsNgVuA6rHdmtsIYx82EL25KIEvcsJVwODHDfhF9z0YmZNKFE6atInajxqA94S%2BEg2P4kwUa6eqqUECqZtMICprQG3FIoeIJYTjYrp0HJYSaYJYLHp7TcAUrDk3H7DABGK9nwDmQit5til6Z22dGpi%2BwAZmEmWnuWjd9uSX8CsPJtGJXFkdXp%2BgmaHvqmUGvoLQIlLPj3JQeZbEKev53z9vZpIO0TIpqnWl%2FJN6ZleNHRo%2BcZ%2F2n9dzQ5sIOfA4YcLod54btq6JkUvBItaoE9RMnuKoxbZk24ln%2Fs27pad9Ruv2vlLBNItUvxUO0uLRNmnQ9%2BJS%2FgFOqU80ftPw7o7u5%2BqYkQHPI1UJofIPGj%2BDWy1PvnO9LRuEkL9FvHuBM%2BkOeupzoIK9bM73igKyZxHuEbQJe0%2FRmbNbP0rCaupXSGvbGVj%2FvHziMOaZ1ckGOqUBzOKGifW%2BEiq2%2F34WOT79BrItrDEjxHgVX7tpm5Yyfw04ijr26311ExCmYhY10H1MzBG0BgLa9UADOxJOxynRgHf9U6K4AoWaBPZoAJ3RpaNRSlWMaO8GvNHIgYXBik88slUYfeWzyP4HWdYckS1gRGLeMHeM%2BIIa%2B5eYb6dZhpPj5lcsX7fqhXq1Wv79e3Fj6TWdDPaUSR3FgEOvJUQYeDZLdPmE&X-Amz-Signature=e6d16b2524ce5c26e3d6b9eeec01b9eafbc57e194df654d75fc9d5c5725efe9f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
