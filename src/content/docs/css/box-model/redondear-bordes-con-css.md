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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RPIJMU22%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T034133Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGhIdm0WgYdE7Bf8M8YDSmuHMbmw%2FvOw0HqMWTNLNBGcAiEAjtWezFerRH5MERASIkpxuGw0md%2B8iF%2FWjJMqRyX52vwq%2FwMIdBAAGgw2Mzc0MjMxODM4MDUiDKZucwgbdccSGIk1rircA%2FMO3tF9uXH7VCp4nVkRtAvbcwDN6%2Bfl37c7CqhehTY038hhS%2BXeLmNkM8MQQaLq4iUvaJA3TCU0o9204lEQjJUaejVPJZ6VQMywJ7RefF1FM32KLFg71aZKYMZ191Dbxm7JaXUcBoEyDIhaHp5vw82xHjlTTOrgsQwiCXIPbGIVDQ45TYI0ztVLmDHJWCG3sLc9z%2Bh50tCnzZLE041bIjV%2Fr87kir6tUP2HCRvEd8Rg6aG4oihHebjGsHy93hnYQwVR%2FWCP3ZQDQOb7ScdMOUTBq2%2BMms%2FOaQ83qjogBI0qOZXWgxCsFEvzW6IXY2NMGvyVLGl9W8chJzVOuRybLiXAe8FIYp5TpOih6sCcekknF68zJUSnsx%2F59Tk1oSrdlfK4MAh7f09Ho1bmzz7ruRXet%2Fn63%2Fq1LLhE1mpe6Yb18aoaSpyTP07bwCDu0AIe%2BPkyXqrPB%2BECqYZVmo%2FE86uruCzQUIBOSy%2BqSiWV4EaJpNohPdKFJFqd16tAuRp%2Fu%2BoUgk3v1oUZTwcb%2F1b5ONcoYn3MtcM05nkKvhsPjp8fqhad8WZ5tMTY5g47VwZjVEifEKjVjjSJWXa6y66RLuc09tF%2F1d7eZ80YimOVaVd9RTwVvOQaARCoIpvgMNOyiMoGOqUBb2DHvMv386KjTpITQr964iv7Hb8fTo1Q%2F61mnBGKvteUQYc72RFom8JBzta1uzCW3jHiZOmPAdUJ%2B5qGRB0JYVbAUr3bKX%2FONAzy11YHB0aSINWiVy8R8eUXcQYGMeTOBcB8ofbQkZ9abPD1%2FGufzqropXpb%2BUbuBF%2FN2xIfkshbKEQkbiM8aE2bbRG%2Bbbl25XGFpeOyq%2FlP3bX9EtCK8EpriILZ&X-Amz-Signature=7686321e5148f429c48a29973f235f38a3bc27f69b8d4ae6c55d1c25fce68b14&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RPIJMU22%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T034133Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGhIdm0WgYdE7Bf8M8YDSmuHMbmw%2FvOw0HqMWTNLNBGcAiEAjtWezFerRH5MERASIkpxuGw0md%2B8iF%2FWjJMqRyX52vwq%2FwMIdBAAGgw2Mzc0MjMxODM4MDUiDKZucwgbdccSGIk1rircA%2FMO3tF9uXH7VCp4nVkRtAvbcwDN6%2Bfl37c7CqhehTY038hhS%2BXeLmNkM8MQQaLq4iUvaJA3TCU0o9204lEQjJUaejVPJZ6VQMywJ7RefF1FM32KLFg71aZKYMZ191Dbxm7JaXUcBoEyDIhaHp5vw82xHjlTTOrgsQwiCXIPbGIVDQ45TYI0ztVLmDHJWCG3sLc9z%2Bh50tCnzZLE041bIjV%2Fr87kir6tUP2HCRvEd8Rg6aG4oihHebjGsHy93hnYQwVR%2FWCP3ZQDQOb7ScdMOUTBq2%2BMms%2FOaQ83qjogBI0qOZXWgxCsFEvzW6IXY2NMGvyVLGl9W8chJzVOuRybLiXAe8FIYp5TpOih6sCcekknF68zJUSnsx%2F59Tk1oSrdlfK4MAh7f09Ho1bmzz7ruRXet%2Fn63%2Fq1LLhE1mpe6Yb18aoaSpyTP07bwCDu0AIe%2BPkyXqrPB%2BECqYZVmo%2FE86uruCzQUIBOSy%2BqSiWV4EaJpNohPdKFJFqd16tAuRp%2Fu%2BoUgk3v1oUZTwcb%2F1b5ONcoYn3MtcM05nkKvhsPjp8fqhad8WZ5tMTY5g47VwZjVEifEKjVjjSJWXa6y66RLuc09tF%2F1d7eZ80YimOVaVd9RTwVvOQaARCoIpvgMNOyiMoGOqUBb2DHvMv386KjTpITQr964iv7Hb8fTo1Q%2F61mnBGKvteUQYc72RFom8JBzta1uzCW3jHiZOmPAdUJ%2B5qGRB0JYVbAUr3bKX%2FONAzy11YHB0aSINWiVy8R8eUXcQYGMeTOBcB8ofbQkZ9abPD1%2FGufzqropXpb%2BUbuBF%2FN2xIfkshbKEQkbiM8aE2bbRG%2Bbbl25XGFpeOyq%2FlP3bX9EtCK8EpriILZ&X-Amz-Signature=598c77399229ae2044fffc4fb27830ddec9174ce6d86f06dea68774a8a8bbb63&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
