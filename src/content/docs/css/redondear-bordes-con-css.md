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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UBU2XQCM%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T234456Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEP91FhFM%2BzReHl5nOMyc5HgydYFURkxu2g05LlRD0kMAiEA7wUVSMNFOwEtwItlZkl9Q4CCernOWXjnxS6mRbrLiHgqiAQImf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCA59nYh89Ego%2FJs%2FyrcA%2FaQmGu3k%2F0Kr2XP8L1fBrwEryVkWE7bpophsu5NqPm2Mvt3wKQHzEDgMwNSu0Yv4%2BerbIVOiS6gzniDtIWMtJfonnNEkp3wP3KaMoNRjsoBTq72cINTyHU1w%2BiQrQMvQt5cK04GGbOQvymAuB%2FeSoXzHb9FKDMdWaQYVrbvQi4RYy7xby%2BissKifwrp1GZ5l4kBT%2BmTapKwbaIfQltYaKDLVY5pUGbBqjbx60R9w6TV4ynN5L2C0x1kQzlytlwbyGmz%2FbBV2m3nxZnsb9SzlMdkQdOoBly%2ByEx5Mr37nMAvTVurRTJuULJjWQmAZBaynYhi5NGR9D0Hd5nDchSf5HrrzDuORJF9o8KIJ2TFcpniN67Bw%2B8xHlW3Sz49897dtynh96jQcXwvXjiAsFUWgGQkBBEL9ff1hPjko6id72YWDNz7W742sPqGMqExDoPeFpfgfhYxPnjsV7OxMec7El2TK0ChgtvN7LWBwjDsbIx00owhBH3qLjHvLGOc3or4BahjyutXRK%2BgI56fnSoCP8KgnpPD8WH3XWyxRYvOzRaodBP%2BXEapnw78UGOSt97mdZGjj%2F0pkujBVWE06bAe7vNSLc6n4i1BfcZNe1jOJIN3Na3HXOQOE%2FBZoXE5MNeh2MkGOqUB8y84MThhATjRZ9YTNqXFItTTobDxbE0U7X2ob2r%2F8%2BtX772PoCdTPWqEagBxnKBkuFL2myXcPcWnb3g7aeSd3uFhqaMNLPCHJTS%2B7bVGsImjVogFz6PvQtQ1AGBja7pWur3DDn%2BgOc1FMo2uD52BlDd4LHIvQ3eIpKMG74Q2LLjEoXDwH3DiFllUh8xDpiVzjGN%2Fbi9Qhexibo9SPLYjfAOEs9qd&X-Amz-Signature=6e23a0d51799cd36bb108feaf233e7e24a363069895e92647516c2c2d10eed73&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UBU2XQCM%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T234456Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEP91FhFM%2BzReHl5nOMyc5HgydYFURkxu2g05LlRD0kMAiEA7wUVSMNFOwEtwItlZkl9Q4CCernOWXjnxS6mRbrLiHgqiAQImf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCA59nYh89Ego%2FJs%2FyrcA%2FaQmGu3k%2F0Kr2XP8L1fBrwEryVkWE7bpophsu5NqPm2Mvt3wKQHzEDgMwNSu0Yv4%2BerbIVOiS6gzniDtIWMtJfonnNEkp3wP3KaMoNRjsoBTq72cINTyHU1w%2BiQrQMvQt5cK04GGbOQvymAuB%2FeSoXzHb9FKDMdWaQYVrbvQi4RYy7xby%2BissKifwrp1GZ5l4kBT%2BmTapKwbaIfQltYaKDLVY5pUGbBqjbx60R9w6TV4ynN5L2C0x1kQzlytlwbyGmz%2FbBV2m3nxZnsb9SzlMdkQdOoBly%2ByEx5Mr37nMAvTVurRTJuULJjWQmAZBaynYhi5NGR9D0Hd5nDchSf5HrrzDuORJF9o8KIJ2TFcpniN67Bw%2B8xHlW3Sz49897dtynh96jQcXwvXjiAsFUWgGQkBBEL9ff1hPjko6id72YWDNz7W742sPqGMqExDoPeFpfgfhYxPnjsV7OxMec7El2TK0ChgtvN7LWBwjDsbIx00owhBH3qLjHvLGOc3or4BahjyutXRK%2BgI56fnSoCP8KgnpPD8WH3XWyxRYvOzRaodBP%2BXEapnw78UGOSt97mdZGjj%2F0pkujBVWE06bAe7vNSLc6n4i1BfcZNe1jOJIN3Na3HXOQOE%2FBZoXE5MNeh2MkGOqUB8y84MThhATjRZ9YTNqXFItTTobDxbE0U7X2ob2r%2F8%2BtX772PoCdTPWqEagBxnKBkuFL2myXcPcWnb3g7aeSd3uFhqaMNLPCHJTS%2B7bVGsImjVogFz6PvQtQ1AGBja7pWur3DDn%2BgOc1FMo2uD52BlDd4LHIvQ3eIpKMG74Q2LLjEoXDwH3DiFllUh8xDpiVzjGN%2Fbi9Qhexibo9SPLYjfAOEs9qd&X-Amz-Signature=38ce7096901133ff4bbbadbbf0a74fa896f8a3e305f9388fb370ec262be65ca6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
