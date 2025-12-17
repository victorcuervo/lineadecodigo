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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W5HKJUKH%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T195246Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHXqTpHy%2F3sVB4hGc22W%2Fa91m6e7T0ZvikBepmxg5%2FIpAiEA0WLObQ8BmQaa4MIjnDAzfMcPDyjaD8hnSqqdfE7f9xgqiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC%2Bq%2BwnjbwUwj8dr5CrcA8qm3y1sdneTCvySjeW%2FCnrSrW0w3GCSXJqxNHDG33LZgCvNj3qQXgPrSSkRbTiFU9tWZlSGAPm69M%2BMbwHzWdoI%2B%2F8ZcZmVRLiPcBp9Wz97i%2Fc%2BlITTTSfQhQ50bJ67y2VQBQsVDeQ8uRZjBy52jkIycKYaJQmopGxwgJunFDf%2Bu8a2SyseUGaGMHM17L3hEIxHJWfhUAQW9SLbgVgW%2FtQeL5gUWJudGhTHe2l4x37mDiPIkOUehty6VtMRSN9pG5KkRCIRowsOEpKB1A9a7jRVky1enJqBjwZ9v89Y%2FHU8ZH2ag50QbUUbJq7niaX%2BsoHuXSITPVYECr4zv090zobSN2udEUyG4rBCmlKrqJUNf72fFeB13bLW5wLXun6T0Ni19XE1FT0iWX8nhtmazmAyNCYwPGuVP%2BotTgikSxDQsBw3zjknFnZdgXQg%2BUoaSy3dm90a3Fo%2FenyGT%2F24T33xqFzVcmtFyMmJfdYVI0Q0oopne8ceoaK4dZ73vEg9tF48XPBbILQZR3rNtmM4f83EdN1bLCJxBsvv4%2FZp908Xd21H5a65iwDbuu28I91%2FWSeaHVil0WuR6cQdfaxYRP5ZyyERBUeDYlKnbfzzjg0DyYqzPyKA0nd%2B18PcMMOLjMoGOqUBi%2B8SlHUNdu4fWjj2YzXkSzrOLj8lkxBijzlLrpnTMp0QEdwfz6fo7XWZPH9vST5FbunfwBDqT1TwFqPd4JDeP6hgkmN1nvGMPkBwCBN4%2FxwX9%2Fan87nlJEkcLIPqoop0BKVFEp7Y9JWSKMR23lnx25KirO7GARdESE8m5%2FuGIW7KFFmJ4VIgRybib5QGytTCw%2FYeVkWiTvFgn6DGXy84DkDON4o4&X-Amz-Signature=f7b9a483f8a2aa34887e06111f719481adb697ac1832e53ef057b9216dec7bad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W5HKJUKH%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T195246Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHXqTpHy%2F3sVB4hGc22W%2Fa91m6e7T0ZvikBepmxg5%2FIpAiEA0WLObQ8BmQaa4MIjnDAzfMcPDyjaD8hnSqqdfE7f9xgqiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC%2Bq%2BwnjbwUwj8dr5CrcA8qm3y1sdneTCvySjeW%2FCnrSrW0w3GCSXJqxNHDG33LZgCvNj3qQXgPrSSkRbTiFU9tWZlSGAPm69M%2BMbwHzWdoI%2B%2F8ZcZmVRLiPcBp9Wz97i%2Fc%2BlITTTSfQhQ50bJ67y2VQBQsVDeQ8uRZjBy52jkIycKYaJQmopGxwgJunFDf%2Bu8a2SyseUGaGMHM17L3hEIxHJWfhUAQW9SLbgVgW%2FtQeL5gUWJudGhTHe2l4x37mDiPIkOUehty6VtMRSN9pG5KkRCIRowsOEpKB1A9a7jRVky1enJqBjwZ9v89Y%2FHU8ZH2ag50QbUUbJq7niaX%2BsoHuXSITPVYECr4zv090zobSN2udEUyG4rBCmlKrqJUNf72fFeB13bLW5wLXun6T0Ni19XE1FT0iWX8nhtmazmAyNCYwPGuVP%2BotTgikSxDQsBw3zjknFnZdgXQg%2BUoaSy3dm90a3Fo%2FenyGT%2F24T33xqFzVcmtFyMmJfdYVI0Q0oopne8ceoaK4dZ73vEg9tF48XPBbILQZR3rNtmM4f83EdN1bLCJxBsvv4%2FZp908Xd21H5a65iwDbuu28I91%2FWSeaHVil0WuR6cQdfaxYRP5ZyyERBUeDYlKnbfzzjg0DyYqzPyKA0nd%2B18PcMMOLjMoGOqUBi%2B8SlHUNdu4fWjj2YzXkSzrOLj8lkxBijzlLrpnTMp0QEdwfz6fo7XWZPH9vST5FbunfwBDqT1TwFqPd4JDeP6hgkmN1nvGMPkBwCBN4%2FxwX9%2Fan87nlJEkcLIPqoop0BKVFEp7Y9JWSKMR23lnx25KirO7GARdESE8m5%2FuGIW7KFFmJ4VIgRybib5QGytTCw%2FYeVkWiTvFgn6DGXy84DkDON4o4&X-Amz-Signature=7e4ac9ade93f74ae520bffb0d1736c695f2d44bee16d62b1639ac968102ce89f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
