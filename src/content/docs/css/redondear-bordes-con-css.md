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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663RXOAMZ5%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T204023Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD453BS3BZGyvXtB1tXQvf5UJZ%2FqA0SorTp6lhlQ6fuKwIgcf1SFZX1TcsCbcNjJzSOxt%2BBcT7zGepSG9fm8XyUELsqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAKY1%2BMAwq5SBX1vSCrcA37QVMk2VdfIISZyNgjXHhhhFxFexopxRYle3o%2BCPr7sxOdqehxZCmYzFFJZcUFAx2OyGSgr2bvUqVP%2F7LlDEElhQsGTKfTjVpAFq6K4AxUAAQhHxJGsr7Qgak4a2NNYwPY1MkDGb3YqKQ6LkWvazb1rXlDXNgmn7dd5rHPFJ94Fm%2Fh9PPSCFmboMY4jVlUTpOg5%2FsoGSOmk8gbr6yCaGp2QJu7IfNWkOYvOcpaaL%2BUveOoBogWY%2BiBkMgv6YqRfxRDeAkVBmYdOljcFH51rUFJxURpC4n%2FG6ZPXF34lW8gM1NnAP2yFD1cX6vRCc9%2FAUwa7sAuovDPn7l%2BlEKM9823HS97G5xwSNRJP3X%2BeTZwNUHpoAYKTV%2BN98HQJrfqbdH5QW84Ha%2Bg1Z8yWhimp1ZBfMPGVO7Cq4Vxnpi26%2FXhPvUf30fiQL9K%2BTdTlIgvKZdq6fHnCCz6gzSEa%2FRCity9UOXPPoRyi4He9w%2FiNyRzIvqL1XUkrwRwnarV3ho8J0OIqB4ZWO%2BNRDG7%2FRx9J6wreDQeMG5UVkpA6w0eSuwdqkS%2FUZLJ%2FnhNCuw6dJSOQWSvmCBL9B6BBUO3%2BnH9AKeEXnFxTLO5o2ZX%2Bu0SsgAo5oWvEsId70Qsx1o5IMI7d3MkGOqUBG7TcDk%2FC5iVRA0JwleAi58VFNLukmv2mYC6Wn5QcRMCci7UiAuxgofa6MS9MO7r367pzEssjGBbD2ByxsNfRiEHbTrI%2FGVqmXBS4ZDqD5FkofurxHZj1JecLmfvdbikiaZ8h97TAQADlAFGyBuAt%2B8nQ%2B5OngEBRVoEMz33pdxF8bhE1LLZ8VsE7Z76Soctbwv1eRSFlz2MvvvlE7ZRq2ssey4mB&X-Amz-Signature=700fa465320380ee5a4e857a021dd6d6b12dbedd55e6bf3413896b386f1cff1a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663RXOAMZ5%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T204023Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD453BS3BZGyvXtB1tXQvf5UJZ%2FqA0SorTp6lhlQ6fuKwIgcf1SFZX1TcsCbcNjJzSOxt%2BBcT7zGepSG9fm8XyUELsqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAKY1%2BMAwq5SBX1vSCrcA37QVMk2VdfIISZyNgjXHhhhFxFexopxRYle3o%2BCPr7sxOdqehxZCmYzFFJZcUFAx2OyGSgr2bvUqVP%2F7LlDEElhQsGTKfTjVpAFq6K4AxUAAQhHxJGsr7Qgak4a2NNYwPY1MkDGb3YqKQ6LkWvazb1rXlDXNgmn7dd5rHPFJ94Fm%2Fh9PPSCFmboMY4jVlUTpOg5%2FsoGSOmk8gbr6yCaGp2QJu7IfNWkOYvOcpaaL%2BUveOoBogWY%2BiBkMgv6YqRfxRDeAkVBmYdOljcFH51rUFJxURpC4n%2FG6ZPXF34lW8gM1NnAP2yFD1cX6vRCc9%2FAUwa7sAuovDPn7l%2BlEKM9823HS97G5xwSNRJP3X%2BeTZwNUHpoAYKTV%2BN98HQJrfqbdH5QW84Ha%2Bg1Z8yWhimp1ZBfMPGVO7Cq4Vxnpi26%2FXhPvUf30fiQL9K%2BTdTlIgvKZdq6fHnCCz6gzSEa%2FRCity9UOXPPoRyi4He9w%2FiNyRzIvqL1XUkrwRwnarV3ho8J0OIqB4ZWO%2BNRDG7%2FRx9J6wreDQeMG5UVkpA6w0eSuwdqkS%2FUZLJ%2FnhNCuw6dJSOQWSvmCBL9B6BBUO3%2BnH9AKeEXnFxTLO5o2ZX%2Bu0SsgAo5oWvEsId70Qsx1o5IMI7d3MkGOqUBG7TcDk%2FC5iVRA0JwleAi58VFNLukmv2mYC6Wn5QcRMCci7UiAuxgofa6MS9MO7r367pzEssjGBbD2ByxsNfRiEHbTrI%2FGVqmXBS4ZDqD5FkofurxHZj1JecLmfvdbikiaZ8h97TAQADlAFGyBuAt%2B8nQ%2B5OngEBRVoEMz33pdxF8bhE1LLZ8VsE7Z76Soctbwv1eRSFlz2MvvvlE7ZRq2ssey4mB&X-Amz-Signature=4cae9b6e15314e014dfba19904d3c47c076375eb9a873ab52ef8f54e2476b5e8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
