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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664HZOOOFN%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T150731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGGNSzTsGSh%2BiBqV02Sj4G9Fn7d4Nf9R%2BpI%2BGRwSdoitAiBUsb8drkZ%2B%2FOL7twyMuD%2F2EtSzppxwqsTsXjWP6SlJfiqIBAiA%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMGxHlPyR%2BarNKnjm9KtwDTKUH0hicuR09ta1KuNLH6Sh93oPFv5e5fv4lhoqs9pFa4w0Dz1G%2BlZh4cgou8IjTwRaZyAorMpfi3%2BY1nb4PuYSU9Va93HKR6jq9xuHTOLWp2fsSkrzuQoo6zpUU0NSjkVLYG46uklsT2owPlEHS%2BwwsH0s3Jg9U6dSSW%2Bq6T1kELoabKlJC2hQsTlD%2F7aACHdeSK%2B%2B%2BTRLoUHc9LFv%2Bw65iP4WoqROsymsbagExwhFydfzisUO9zaJ%2FjyHsFXahtpC5%2BPR%2F4FcCb88xQI4oXlbi0NWJhxHU9WHq96syD88CATmmJCvzSlK5K6kcErUZRayJg04yMcYCe8rcpIlf0w6PRCIJFuMj7ft3ikNxeVkCH1jfcWFkVrAWciF7HKa1urb28SY0Zsg%2BuC25Vy48lumgM4lRDXZ%2BJwspjna0pV74isulyqIq8HjqS7nIc6okzvhQHU8Kb%2FWbqTgQXkXtorGaauGZfClkKKtipSKaFOX8ri51xmte2MhQ6FBCGzWce%2B8tOj3H99GoKN5%2BdtEc0bf%2F8TqOd4HnitTMojXDGIoA92i1ZrVa%2BZfxZPJFNRyyOd2hAElrOj%2BGVe%2BY9YjTRlF82AzWpmQLyinrKlUTSZ%2FQiJN8Vrdz%2B333NW4wsoCLygY6pgEsxOvkGNotzdTe%2FCy0B6UlLYzFL8mEh6wcDEUhPjD64r9CAeayG8mrVOeadqJqpi8xiFv6L4fjAW%2BfwR4cdbR%2B7MVbry7wlCp0G9LhBKCweBJENEBcQAFdGXbXMbmzIoOaLrk1RSYY4frgLSlN93VQ1tuwztQcdo8UgJVTvljZGLvQyu6tvyV41S136IqdBUeP7%2FjeIl4kt44jgJFANFqrxxowsk%2Bl&X-Amz-Signature=79c79110495e3509e1c6d9939c21b3f437d41e243c6b127b8afbaa2542d66e23&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664HZOOOFN%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T150731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGGNSzTsGSh%2BiBqV02Sj4G9Fn7d4Nf9R%2BpI%2BGRwSdoitAiBUsb8drkZ%2B%2FOL7twyMuD%2F2EtSzppxwqsTsXjWP6SlJfiqIBAiA%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMGxHlPyR%2BarNKnjm9KtwDTKUH0hicuR09ta1KuNLH6Sh93oPFv5e5fv4lhoqs9pFa4w0Dz1G%2BlZh4cgou8IjTwRaZyAorMpfi3%2BY1nb4PuYSU9Va93HKR6jq9xuHTOLWp2fsSkrzuQoo6zpUU0NSjkVLYG46uklsT2owPlEHS%2BwwsH0s3Jg9U6dSSW%2Bq6T1kELoabKlJC2hQsTlD%2F7aACHdeSK%2B%2B%2BTRLoUHc9LFv%2Bw65iP4WoqROsymsbagExwhFydfzisUO9zaJ%2FjyHsFXahtpC5%2BPR%2F4FcCb88xQI4oXlbi0NWJhxHU9WHq96syD88CATmmJCvzSlK5K6kcErUZRayJg04yMcYCe8rcpIlf0w6PRCIJFuMj7ft3ikNxeVkCH1jfcWFkVrAWciF7HKa1urb28SY0Zsg%2BuC25Vy48lumgM4lRDXZ%2BJwspjna0pV74isulyqIq8HjqS7nIc6okzvhQHU8Kb%2FWbqTgQXkXtorGaauGZfClkKKtipSKaFOX8ri51xmte2MhQ6FBCGzWce%2B8tOj3H99GoKN5%2BdtEc0bf%2F8TqOd4HnitTMojXDGIoA92i1ZrVa%2BZfxZPJFNRyyOd2hAElrOj%2BGVe%2BY9YjTRlF82AzWpmQLyinrKlUTSZ%2FQiJN8Vrdz%2B333NW4wsoCLygY6pgEsxOvkGNotzdTe%2FCy0B6UlLYzFL8mEh6wcDEUhPjD64r9CAeayG8mrVOeadqJqpi8xiFv6L4fjAW%2BfwR4cdbR%2B7MVbry7wlCp0G9LhBKCweBJENEBcQAFdGXbXMbmzIoOaLrk1RSYY4frgLSlN93VQ1tuwztQcdo8UgJVTvljZGLvQyu6tvyV41S136IqdBUeP7%2FjeIl4kt44jgJFANFqrxxowsk%2Bl&X-Amz-Signature=2fd9db6420a93ae7dff9d284bcf332d1534ed99b4ed1c188391898e9c2ae31c6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
