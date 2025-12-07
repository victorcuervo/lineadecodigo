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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQ27WFBP%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T050123Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA6iQmn4bLlkxqkNF4rnDqvwN35YzETi6jaCrhZfAbUdAiB2v9HgrN5tnw5RRGVHPey9ByHkrNL8x6BNl46y%2FZdcNyqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMBqpr5iUxsNJnaU4dKtwDT3S9yUUiGI0TmYIGhjnoReENkLBRvxez%2BkzyC8WRK5Q7WrkYSGrhLV52IpNW%2FRrTSiciQNS8%2BBfj9edS4cHb3KNgzXIadxuIid2r90Ydvzo4qP52vlh%2FCyTGXOKueijRx6woldVniDD98Y8qcBIIuloA3gQfvb7mfxcdWekHxC%2Fq8GuEvG3IF3Z7F5rfZtO%2BZCiVtpVB35EgGff5pIo%2F6qyS54GKOBtP1eI4bkXuBUOiThos2kX0EzVSIM2mMR6dW4stfcnn1evOnqaAIzEY8hBPe7GM5UE%2Blv4VR6N3ADtTDt1inlPZhXb2SEDHyrsh4hLXMAacbBlT111apGJZhGZpB0gIfzUPNbp%2B3fmQKh286sXN5j%2BhDWUVt68w560AxzcGWVoQa5PBzYQl9XuYdHqblKy1JvWeuewACvPC86J6Le9R%2BLtnf3UeJV4p5iC4LeZWKTZfg4j4IL1gK0ikhnPN8cjJFrxGRA14PyclH%2BDpGYrtuXvfAMpv6DeaYw6XEeuWmzDjr9Ao5rT2cG2SeDNCh2ejAoWMvQJxEKwXujdihyB8rIpqRVreqxVOzdABDVhwJEE2Z69eLKo5zFbfBoGvvYi6P50RcAU9or%2BxLUSARx4KuElA4u31lPYw1%2F3SyQY6pgFiq6mLq%2FiUXbVk4bezcQqsz6E2w3g99ikJRV5fn%2FLRdWJfvpZ%2FHuHygKW05DRf6PnkZXbQv2RD0%2BAFRW3Gk0dB1YyEZNzK3uCQezMZFGZ%2Bg%2BBQgVy9JC3%2FmcsEaRDcr37RMWgj5IWGpddaw2x1OFlgAjxCjTbyrUGtbqdzT1p%2BciJosXCaVZy2XUHHL9uXm9iY1GOqZigSP6%2Byg5LvoLpOs4eaIWI8&X-Amz-Signature=9f4f07e3f8753ef3ccebf571dec643d84a5a41f261d0a1f0e5ea9c56f1432e6f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQ27WFBP%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T050123Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA6iQmn4bLlkxqkNF4rnDqvwN35YzETi6jaCrhZfAbUdAiB2v9HgrN5tnw5RRGVHPey9ByHkrNL8x6BNl46y%2FZdcNyqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMBqpr5iUxsNJnaU4dKtwDT3S9yUUiGI0TmYIGhjnoReENkLBRvxez%2BkzyC8WRK5Q7WrkYSGrhLV52IpNW%2FRrTSiciQNS8%2BBfj9edS4cHb3KNgzXIadxuIid2r90Ydvzo4qP52vlh%2FCyTGXOKueijRx6woldVniDD98Y8qcBIIuloA3gQfvb7mfxcdWekHxC%2Fq8GuEvG3IF3Z7F5rfZtO%2BZCiVtpVB35EgGff5pIo%2F6qyS54GKOBtP1eI4bkXuBUOiThos2kX0EzVSIM2mMR6dW4stfcnn1evOnqaAIzEY8hBPe7GM5UE%2Blv4VR6N3ADtTDt1inlPZhXb2SEDHyrsh4hLXMAacbBlT111apGJZhGZpB0gIfzUPNbp%2B3fmQKh286sXN5j%2BhDWUVt68w560AxzcGWVoQa5PBzYQl9XuYdHqblKy1JvWeuewACvPC86J6Le9R%2BLtnf3UeJV4p5iC4LeZWKTZfg4j4IL1gK0ikhnPN8cjJFrxGRA14PyclH%2BDpGYrtuXvfAMpv6DeaYw6XEeuWmzDjr9Ao5rT2cG2SeDNCh2ejAoWMvQJxEKwXujdihyB8rIpqRVreqxVOzdABDVhwJEE2Z69eLKo5zFbfBoGvvYi6P50RcAU9or%2BxLUSARx4KuElA4u31lPYw1%2F3SyQY6pgFiq6mLq%2FiUXbVk4bezcQqsz6E2w3g99ikJRV5fn%2FLRdWJfvpZ%2FHuHygKW05DRf6PnkZXbQv2RD0%2BAFRW3Gk0dB1YyEZNzK3uCQezMZFGZ%2Bg%2BBQgVy9JC3%2FmcsEaRDcr37RMWgj5IWGpddaw2x1OFlgAjxCjTbyrUGtbqdzT1p%2BciJosXCaVZy2XUHHL9uXm9iY1GOqZigSP6%2Byg5LvoLpOs4eaIWI8&X-Amz-Signature=0afbcc32907340a5d8ef6a194fe92ed70d6543b5e356d74da16dfe8cb0083f81&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
