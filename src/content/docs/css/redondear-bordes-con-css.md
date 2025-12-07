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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UTQHANZI%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T011825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCeqCoeoRZcMePL7%2F4WUOeJsZJrTrhQvtS%2BQRt6O4cuggIgWlig28h%2FLU7letU3gk3RkD%2BtLLeZTbx%2Fl6lUqj3xRNUqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFHqmz%2FAA8jyRbSwiyrcA5AjUIhVwAehZKJItibMYi9%2FBhj5Pw2ExDRlmwLhmMErlVHhGtVEGP9dlpSffA%2FiC2jqNdIIc05tmLaq4OqIkL0ws7uKnvMrQ1fErePV3t5%2FmwHCj9KDPORupIgNB4wzvRKJU%2B1eHGhTGi8bTIQBfZYPvLjdxYxG%2FmCKapabRUptt%2F6I3rYE3T7WkCFic%2F5lWKlMeskiK0gyOydY4k9vd1eBGuB6fTBdD7QA2d0jL%2FKhtkobZCsUI5RV1a2pkYy7ivtPU1CqjdHSUJn5lseDx%2FpFmuzybLvydA6mus%2FsMcQaD5MQFaIZHbTugpoFNIfuy%2Bjkx3okchyRdagbz1ZhglPMJTMdMHT%2FaL0d3SGOQgdEFPlUMRjp4cDdx6JDyazc%2BO%2FFavmX7dYsub3ErclQrPT%2BiNk%2BW%2F6kpmTdtxj%2Fi4ykGwQDV%2Btwn5qwFnjI3OhALtwQCNd4iwalnIXBqP8jfzxrUo71rK2kqYX8zXmeF9qhNExUQGF%2FPZHEkQZMoyxCaKl0O9lwI%2Bsosgowu3eWZClbV3fjLJSzQnfySbQXpoS5WoAuiB80L7akyiI1us3ij4vV%2BCYuDd5texdaakuo2JXHFoFuYBxeo9b9Hjo7YJtTD2%2BxdYGbk7WMctgXMI790skGOqUBC5ZOyntTphh%2BWcrEFVh6E22yeD5RPchalFSBo3u2aQpXGZfxkCnPpDt5w9G%2BBR%2F6l56VFtW%2F%2B5OxdlUpZ6q9OFH7r9vfe%2Fx5X32ALmEpvMLwKOao8Y4ZVJcLrSP%2B%2B%2Bz69wjr62bet3O458SJrs0vJs%2B9l2wEdQ6h6MVzFa9f8NdoCT8L1HvRQ7sXSQ%2BGBO3HA9Q1F7iAwxKDiT11Uzc36s%2BNwhtL&X-Amz-Signature=16f88f908d67245889b895cc2f543f503a6e7aaef0c1ba9b7c9cc21673ec3aa9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UTQHANZI%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T011825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCeqCoeoRZcMePL7%2F4WUOeJsZJrTrhQvtS%2BQRt6O4cuggIgWlig28h%2FLU7letU3gk3RkD%2BtLLeZTbx%2Fl6lUqj3xRNUqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFHqmz%2FAA8jyRbSwiyrcA5AjUIhVwAehZKJItibMYi9%2FBhj5Pw2ExDRlmwLhmMErlVHhGtVEGP9dlpSffA%2FiC2jqNdIIc05tmLaq4OqIkL0ws7uKnvMrQ1fErePV3t5%2FmwHCj9KDPORupIgNB4wzvRKJU%2B1eHGhTGi8bTIQBfZYPvLjdxYxG%2FmCKapabRUptt%2F6I3rYE3T7WkCFic%2F5lWKlMeskiK0gyOydY4k9vd1eBGuB6fTBdD7QA2d0jL%2FKhtkobZCsUI5RV1a2pkYy7ivtPU1CqjdHSUJn5lseDx%2FpFmuzybLvydA6mus%2FsMcQaD5MQFaIZHbTugpoFNIfuy%2Bjkx3okchyRdagbz1ZhglPMJTMdMHT%2FaL0d3SGOQgdEFPlUMRjp4cDdx6JDyazc%2BO%2FFavmX7dYsub3ErclQrPT%2BiNk%2BW%2F6kpmTdtxj%2Fi4ykGwQDV%2Btwn5qwFnjI3OhALtwQCNd4iwalnIXBqP8jfzxrUo71rK2kqYX8zXmeF9qhNExUQGF%2FPZHEkQZMoyxCaKl0O9lwI%2Bsosgowu3eWZClbV3fjLJSzQnfySbQXpoS5WoAuiB80L7akyiI1us3ij4vV%2BCYuDd5texdaakuo2JXHFoFuYBxeo9b9Hjo7YJtTD2%2BxdYGbk7WMctgXMI790skGOqUBC5ZOyntTphh%2BWcrEFVh6E22yeD5RPchalFSBo3u2aQpXGZfxkCnPpDt5w9G%2BBR%2F6l56VFtW%2F%2B5OxdlUpZ6q9OFH7r9vfe%2Fx5X32ALmEpvMLwKOao8Y4ZVJcLrSP%2B%2B%2Bz69wjr62bet3O458SJrs0vJs%2B9l2wEdQ6h6MVzFa9f8NdoCT8L1HvRQ7sXSQ%2BGBO3HA9Q1F7iAwxKDiT11Uzc36s%2BNwhtL&X-Amz-Signature=c8a1a53014f537d1dc72ec328987057b5bbe61cdc7dbd09fdef838761e8984ca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
