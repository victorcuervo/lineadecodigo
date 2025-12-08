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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SGW3WDRY%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T232742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID5ACEOyC9TE0OB%2BcsTQEg4XX9hbOfFHn%2BnXPgNeUW0qAiEAuXPZ2IBqzfRtPSs5VZG4emEk240EBNvdcOkq9%2BBODjMqiAQIsP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIzpOrMgINy8qP9bRircA2HRqUPxzRTqDavDj5Yr8TsOAZyw6tqy5earCmdY2UvEhkoACNdvTeQlBKXEAeML0IMSFT4hLdLQUWgUwN6%2BdJAtoNPSvo1SQD2sE2rgjWgLnzY9hCNZ1b99u70VOfjFBgqW3BKbf0Mvl%2B3pzjHZsEmPAuIYkNnI4F8VelFqyiI0h6D8d5%2B%2BOQrVTRvnqxt5zDI%2BU2gcuzR0iH5bTDhMNw3u4OmUEXtYHg3gjip7DP9tChbeAdDEVVWv5Do3B2EyhHdfxyA%2FZdQdAeoq14g52kX8jvDVFok88H6LVYs5v%2Fw4xrQXQA%2FSRpqaeJn9WkgZgvYKRD12WJzzr9ZK4%2B81SngYCxYEc%2BWjs9PWhUMeK4X9KTTt9XDjngCG5I9YiOoZjq5AUuWpj4bvj3H4A6Jhfi8JfzxcvoinlUdxr80UZRl4iRXVOG3u1R%2BIaFk%2FS9orG1P1oZhND4qLnNmuP0ejvRu0FdYT5lDNgWnj4vl95iz7ZKmAWBNJWkpY8mPASlzVjl91ApBjWof9cNEAx%2BEtzzGLlvML%2BXSWSEHwlbdwqBYFt6S9vNygvwvgiwtZEni6F4%2FIsHIt3a8mQ%2Fhn6%2FFtnHersDp3hMUIT9%2BjWQeNN7Siv1RkR7EQQf52WGmsMNqh3ckGOqUBN3I4N4vRWQdzqo0De9RZSwBN06ubWXmQ4XvKAnzkLstj5%2FN%2FJ6kBcYf3irOvqfwAgpXvq4PmxmhgElvcixI8wv8tL%2FC2ZzUaot1kKvwMsJufPPfBa4AMmmcg0ai1p35RFHLMKx2tpED7wYG55%2BxTPjirEFzZyFOA7k9t5ZxUB87mD7Eq7sNsk9AQ8kdMrB4vDACYzLPAT17CchGCi4EGmoyujL6O&X-Amz-Signature=5cccdd2b249731fa11a64c241ce1f15e8c7236f2606347ce949742c255050648&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SGW3WDRY%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T232742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID5ACEOyC9TE0OB%2BcsTQEg4XX9hbOfFHn%2BnXPgNeUW0qAiEAuXPZ2IBqzfRtPSs5VZG4emEk240EBNvdcOkq9%2BBODjMqiAQIsP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIzpOrMgINy8qP9bRircA2HRqUPxzRTqDavDj5Yr8TsOAZyw6tqy5earCmdY2UvEhkoACNdvTeQlBKXEAeML0IMSFT4hLdLQUWgUwN6%2BdJAtoNPSvo1SQD2sE2rgjWgLnzY9hCNZ1b99u70VOfjFBgqW3BKbf0Mvl%2B3pzjHZsEmPAuIYkNnI4F8VelFqyiI0h6D8d5%2B%2BOQrVTRvnqxt5zDI%2BU2gcuzR0iH5bTDhMNw3u4OmUEXtYHg3gjip7DP9tChbeAdDEVVWv5Do3B2EyhHdfxyA%2FZdQdAeoq14g52kX8jvDVFok88H6LVYs5v%2Fw4xrQXQA%2FSRpqaeJn9WkgZgvYKRD12WJzzr9ZK4%2B81SngYCxYEc%2BWjs9PWhUMeK4X9KTTt9XDjngCG5I9YiOoZjq5AUuWpj4bvj3H4A6Jhfi8JfzxcvoinlUdxr80UZRl4iRXVOG3u1R%2BIaFk%2FS9orG1P1oZhND4qLnNmuP0ejvRu0FdYT5lDNgWnj4vl95iz7ZKmAWBNJWkpY8mPASlzVjl91ApBjWof9cNEAx%2BEtzzGLlvML%2BXSWSEHwlbdwqBYFt6S9vNygvwvgiwtZEni6F4%2FIsHIt3a8mQ%2Fhn6%2FFtnHersDp3hMUIT9%2BjWQeNN7Siv1RkR7EQQf52WGmsMNqh3ckGOqUBN3I4N4vRWQdzqo0De9RZSwBN06ubWXmQ4XvKAnzkLstj5%2FN%2FJ6kBcYf3irOvqfwAgpXvq4PmxmhgElvcixI8wv8tL%2FC2ZzUaot1kKvwMsJufPPfBa4AMmmcg0ai1p35RFHLMKx2tpED7wYG55%2BxTPjirEFzZyFOA7k9t5ZxUB87mD7Eq7sNsk9AQ8kdMrB4vDACYzLPAT17CchGCi4EGmoyujL6O&X-Amz-Signature=4e56d07d6f96a59f64bde2af15151d8accb7bde230577429b9c0e4f20dd9a055&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
