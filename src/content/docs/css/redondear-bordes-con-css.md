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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TRJGCMNL%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T063439Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDpHugzLCCANL3%2FrgIcXvVPhtRqtJONCH%2FctYgoy4KWGQIgLZKJ0ibfbBmDwuBIsEVruNE11dnXDVv5T7L%2B0q0Ppz0qiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP5iG9jdsSEiw8kBXircA39qq8tmEFNvEabgqhYuLtrbPQ60E2Sbpxjtkch1M%2FcCL4CBhvVSAT0SQqHgRfwRcxcCtdZsSAzCTTtSsaRRJJUWeFktSLUP%2BkI%2FdnjM7MsfMFCVQr0XdTw%2BzO9uq3VS%2B49HoBF4bMsAlNJTvY28BMbF95jNy3f7HsGZzG7Qa%2FsXgTW3%2FbqRxIpa1FYXnIinGCpVsBv1dTBBCF23fep5i23BPjkr0jsMWuUK2mAqJNgwZeSy78VUO2BjSTHU%2FhGpkcYgVoQk8rANfavTubVI%2B08BwQKIA699QxsuNQZPtk3VFw8ZllJ9x9gK%2B459pv3VS%2F3Vt9Xz4yRIAb6e4ej5yGmsylA6LTA2g1VLtHtqq4dqvoKb8N2T%2FntE6ayqLeQACBAlsYQ1LT1oZzrbZJeZNgOpDfBRQGRzOlxBUi4XoghBP1Gjuer8TzJ5ZJAM1lkyRjZkSYXTIowgVk1%2B7LwBxBHizr7jjMJ9nNnbxZtia1BKuqzJd6t2akCuazlrqqtk1bMzTKGVtCaTbmAWsQ9JtOB6dBgk2sRn6Ec7STgfcshoTzMoS4vJZKWOIfwdf3XU%2BjMP248kjHvfcM7Vwp9TvR49EaqSqEhRkrhnK07vLYd2iOJ8%2Ft%2Bu4NfBAVuQMPDk3skGOqUBDScyaIDSN1dMsmj0qXSEyXPl%2F%2FGL%2B4eFXNSGQtIp28gMJJGbyMSDUwo3dzKp0gtvVuQYdfmC%2FTKTv7rcowXKBS%2FPBMgqMeDUZH2RP8HzoWf0VAisQ7ZUwnyg86ktmvludMl1bCU3%2BWL3wkSVYlURTU5Og5fTYla92rJdHssdTG80wycvLnN1aQ1a%2Bu4i%2F18wAfj00ynoxtyj1voBdaAUJMe6UdXA&X-Amz-Signature=fb31d56f13c45a34572df585f9bb46ae9ca2b6cda272c2b527ff97122e22d012&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TRJGCMNL%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T063439Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDpHugzLCCANL3%2FrgIcXvVPhtRqtJONCH%2FctYgoy4KWGQIgLZKJ0ibfbBmDwuBIsEVruNE11dnXDVv5T7L%2B0q0Ppz0qiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP5iG9jdsSEiw8kBXircA39qq8tmEFNvEabgqhYuLtrbPQ60E2Sbpxjtkch1M%2FcCL4CBhvVSAT0SQqHgRfwRcxcCtdZsSAzCTTtSsaRRJJUWeFktSLUP%2BkI%2FdnjM7MsfMFCVQr0XdTw%2BzO9uq3VS%2B49HoBF4bMsAlNJTvY28BMbF95jNy3f7HsGZzG7Qa%2FsXgTW3%2FbqRxIpa1FYXnIinGCpVsBv1dTBBCF23fep5i23BPjkr0jsMWuUK2mAqJNgwZeSy78VUO2BjSTHU%2FhGpkcYgVoQk8rANfavTubVI%2B08BwQKIA699QxsuNQZPtk3VFw8ZllJ9x9gK%2B459pv3VS%2F3Vt9Xz4yRIAb6e4ej5yGmsylA6LTA2g1VLtHtqq4dqvoKb8N2T%2FntE6ayqLeQACBAlsYQ1LT1oZzrbZJeZNgOpDfBRQGRzOlxBUi4XoghBP1Gjuer8TzJ5ZJAM1lkyRjZkSYXTIowgVk1%2B7LwBxBHizr7jjMJ9nNnbxZtia1BKuqzJd6t2akCuazlrqqtk1bMzTKGVtCaTbmAWsQ9JtOB6dBgk2sRn6Ec7STgfcshoTzMoS4vJZKWOIfwdf3XU%2BjMP248kjHvfcM7Vwp9TvR49EaqSqEhRkrhnK07vLYd2iOJ8%2Ft%2Bu4NfBAVuQMPDk3skGOqUBDScyaIDSN1dMsmj0qXSEyXPl%2F%2FGL%2B4eFXNSGQtIp28gMJJGbyMSDUwo3dzKp0gtvVuQYdfmC%2FTKTv7rcowXKBS%2FPBMgqMeDUZH2RP8HzoWf0VAisQ7ZUwnyg86ktmvludMl1bCU3%2BWL3wkSVYlURTU5Og5fTYla92rJdHssdTG80wycvLnN1aQ1a%2Bu4i%2F18wAfj00ynoxtyj1voBdaAUJMe6UdXA&X-Amz-Signature=f086aff86cfd40c4c045a9fb28c615205100730e6f07d4d5a47f6addb5f3e521&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
