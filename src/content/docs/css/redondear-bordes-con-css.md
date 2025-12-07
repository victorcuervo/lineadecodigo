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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UGXFFE3M%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T193458Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCtw37vEdDcpO65e4tyy3xuwP8IkCjEyf7P0E9qEuEgBwIgD8nbb583T5LJKHEudJsfF1%2FdunGjsv%2Fyk5zMnpuClWIqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIZvVKa%2B7KkX51q6FyrcAy8z8AuqFLsEUa4j2q1LMyIOMxEUKQe25qPcLd0yrcf9vbZqUpsmLKWbrI17QDsgPNjXSzS%2F6fjk8lFm9ExqHdvTKo6eteygbAivDSGZCvAIyZsCYBQfDdrigSpNlWgEVZ9K0k6jYPYx8eCrdzfwyIPeawIKSOVQBuDnuEBCUfyq6OmKeV91LIuD%2F6hIS2sZ6LHJkRRtIpzi1nkqBlKkhqlFwrz6HAgVrvrEae7uZdcI%2FUqgV%2Bf%2BHlBeRK%2F%2FzcIBEb9KTUVSdLB%2BLBE2qU61K7SEKZifG3Em5IqOICAIIvq5RFZq8PGc7Gq7B0h4KvJFHo1RllzsmQ9HrrMwMlR4iuAvLoazSzfzKeU0PhsaD2dp7JEUAf0XHJ8K50H2kMAX6MyTx3g3k4IzYhxcSH%2B43QVug%2F3rBJP65%2Foyea86Z5GpDc0ett1%2B2y3nn0AFyZtDThVrHxt0xBw1tfWMSKTNjT52vCfDsrHJrYXIkXNju5GAWoYljLcRu92tfuIgaInmtoCu467knRsQNrLTrEMAcgMTSEZasXgeEc7tuMj3P3guvzDcjQwHbHyvtRZDqe5hJxA%2FHh%2Brx%2B3AjpgG4tB1h9vvlHBuJ18tTDptIV3IZhsVhT48D18wecauXh1xMJGp18kGOqUBX3JaPDXuvgu38n%2F%2BdiNgLd9%2F%2BtH%2FV6QC%2F4uXfmYdKS2at5Yvd0ZAJ5vOh5FCU3W0f0rSPuVJZ3TicvfbuJ%2FrlWPXUe8pvBCAQrY%2FIC2sJOwWdZ8EkBqyjcvxwcSxPjHDcmG4ol25k5Xdfsy1NZ55kpuPeJTg7aWdW%2B20uqtwIjnuNvuDNcXv1TUUOWEzTKFFjMXpDwGoP%2B%2B%2F%2BwOhRWeSwng5eS%2BI&X-Amz-Signature=76851c528c5a62405d89dd7663c3da425a83350b701cf660cce66f235667af38&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UGXFFE3M%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T193458Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCtw37vEdDcpO65e4tyy3xuwP8IkCjEyf7P0E9qEuEgBwIgD8nbb583T5LJKHEudJsfF1%2FdunGjsv%2Fyk5zMnpuClWIqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIZvVKa%2B7KkX51q6FyrcAy8z8AuqFLsEUa4j2q1LMyIOMxEUKQe25qPcLd0yrcf9vbZqUpsmLKWbrI17QDsgPNjXSzS%2F6fjk8lFm9ExqHdvTKo6eteygbAivDSGZCvAIyZsCYBQfDdrigSpNlWgEVZ9K0k6jYPYx8eCrdzfwyIPeawIKSOVQBuDnuEBCUfyq6OmKeV91LIuD%2F6hIS2sZ6LHJkRRtIpzi1nkqBlKkhqlFwrz6HAgVrvrEae7uZdcI%2FUqgV%2Bf%2BHlBeRK%2F%2FzcIBEb9KTUVSdLB%2BLBE2qU61K7SEKZifG3Em5IqOICAIIvq5RFZq8PGc7Gq7B0h4KvJFHo1RllzsmQ9HrrMwMlR4iuAvLoazSzfzKeU0PhsaD2dp7JEUAf0XHJ8K50H2kMAX6MyTx3g3k4IzYhxcSH%2B43QVug%2F3rBJP65%2Foyea86Z5GpDc0ett1%2B2y3nn0AFyZtDThVrHxt0xBw1tfWMSKTNjT52vCfDsrHJrYXIkXNju5GAWoYljLcRu92tfuIgaInmtoCu467knRsQNrLTrEMAcgMTSEZasXgeEc7tuMj3P3guvzDcjQwHbHyvtRZDqe5hJxA%2FHh%2Brx%2B3AjpgG4tB1h9vvlHBuJ18tTDptIV3IZhsVhT48D18wecauXh1xMJGp18kGOqUBX3JaPDXuvgu38n%2F%2BdiNgLd9%2F%2BtH%2FV6QC%2F4uXfmYdKS2at5Yvd0ZAJ5vOh5FCU3W0f0rSPuVJZ3TicvfbuJ%2FrlWPXUe8pvBCAQrY%2FIC2sJOwWdZ8EkBqyjcvxwcSxPjHDcmG4ol25k5Xdfsy1NZ55kpuPeJTg7aWdW%2B20uqtwIjnuNvuDNcXv1TUUOWEzTKFFjMXpDwGoP%2B%2B%2F%2BwOhRWeSwng5eS%2BI&X-Amz-Signature=66cd65869592db30ff1e6ac58e3bbe3e81cdf80dcef7c5285f24c7518da8fb46&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
