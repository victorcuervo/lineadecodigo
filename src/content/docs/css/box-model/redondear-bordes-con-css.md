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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YQFYDYDK%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T032856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBs0sZ6Ef6c1aXzqKKZA99FV4fso5ytPJKsXtgCg%2FHcFAiEA9%2BnQsS1Ofm6VKfiCyhO%2FnmwwXgiikUR2KiHjoqwd3gMq%2FwMIdBAAGgw2Mzc0MjMxODM4MDUiDJzaqqVD2ROjHG6YFCrcAyVmNFSC8gMXfPzn%2FP4AYcvoNYdfc99QLBuN8qt69WCNWzneUMeekPedUJSSrUUP82nLhv4IFh74IOBg%2BymkMW8eIR%2F%2F3PQzhNny%2F8Krjb%2Fga16%2FRtx97QPMf1MyAaRpojufUE%2B8HaqT5Pkdm6IGJIMYLZviz2AVDaaPK%2FARMyCCE6K6CDx6kwD0Pl8jF5rnXWfjmEuq6ybXBItYN7rI7qTE%2BqEmSCAFQLGs7PqMCGzcaNz6E4vLkUeZnunmxbf3gNd6nzXZ7PZ9xS3hVJJY73O7YmrNgFTusnbvDzR8yfYx%2FKtp1EzmYo%2B0E5N28EIZlYX76Hb5m%2BzJI8mJWKKwXlcK2PHsBwIfVp4ckZWI7c5hGRLpuHrLjt7cMPZit0NbiirqNiMRNO2YtBKuDoDhp0GZ4P5%2FPrFUA78xCYj%2FxdYoBoGboUNxIirfsuqT61jdIzfv1mp%2BPslLxDp8gQkRjcWxxd7o%2BWrdn7uujq%2BoHKlnQ4HEiIU1Sekkz8mrUFlYNhzJErhQtrfUta2iKcht3d%2FKvPRkBsgMN5jM03bWA7JRq7qTh8Gs%2BUMcjRFWZa21BQrB2biwUYy0tzH%2B5TJdUK6KuunbnCBqt4KkIAPWivper9%2BkanBsLWPoDBYvMP%2ByiMoGOqUB30M%2FddQmqksF4OvTz63zgbsVvMAR8s%2FGQAo689CkkwGaSFzZfYudF%2BUgkRXtH47fyD5lxFTRHxk7XcVg8b2ExgLtYGUjJ9EkIcaRLSlrXC9Lg1M%2BFtvAeTYwTvN2Y6rZSuurOcdvRtGwuW3X4rphAnyk4I3faZgVKW4EdYimKMYLI5OMeQKzJVtKyPmLlqyA%2BdoRC1scYhPJgudshoujvYCvkqWg&X-Amz-Signature=dcfeceb5b156642bdc8779cf8f674cd9527ecf08f39b39084acc9d5439e7b34d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YQFYDYDK%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T032856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBs0sZ6Ef6c1aXzqKKZA99FV4fso5ytPJKsXtgCg%2FHcFAiEA9%2BnQsS1Ofm6VKfiCyhO%2FnmwwXgiikUR2KiHjoqwd3gMq%2FwMIdBAAGgw2Mzc0MjMxODM4MDUiDJzaqqVD2ROjHG6YFCrcAyVmNFSC8gMXfPzn%2FP4AYcvoNYdfc99QLBuN8qt69WCNWzneUMeekPedUJSSrUUP82nLhv4IFh74IOBg%2BymkMW8eIR%2F%2F3PQzhNny%2F8Krjb%2Fga16%2FRtx97QPMf1MyAaRpojufUE%2B8HaqT5Pkdm6IGJIMYLZviz2AVDaaPK%2FARMyCCE6K6CDx6kwD0Pl8jF5rnXWfjmEuq6ybXBItYN7rI7qTE%2BqEmSCAFQLGs7PqMCGzcaNz6E4vLkUeZnunmxbf3gNd6nzXZ7PZ9xS3hVJJY73O7YmrNgFTusnbvDzR8yfYx%2FKtp1EzmYo%2B0E5N28EIZlYX76Hb5m%2BzJI8mJWKKwXlcK2PHsBwIfVp4ckZWI7c5hGRLpuHrLjt7cMPZit0NbiirqNiMRNO2YtBKuDoDhp0GZ4P5%2FPrFUA78xCYj%2FxdYoBoGboUNxIirfsuqT61jdIzfv1mp%2BPslLxDp8gQkRjcWxxd7o%2BWrdn7uujq%2BoHKlnQ4HEiIU1Sekkz8mrUFlYNhzJErhQtrfUta2iKcht3d%2FKvPRkBsgMN5jM03bWA7JRq7qTh8Gs%2BUMcjRFWZa21BQrB2biwUYy0tzH%2B5TJdUK6KuunbnCBqt4KkIAPWivper9%2BkanBsLWPoDBYvMP%2ByiMoGOqUB30M%2FddQmqksF4OvTz63zgbsVvMAR8s%2FGQAo689CkkwGaSFzZfYudF%2BUgkRXtH47fyD5lxFTRHxk7XcVg8b2ExgLtYGUjJ9EkIcaRLSlrXC9Lg1M%2BFtvAeTYwTvN2Y6rZSuurOcdvRtGwuW3X4rphAnyk4I3faZgVKW4EdYimKMYLI5OMeQKzJVtKyPmLlqyA%2BdoRC1scYhPJgudshoujvYCvkqWg&X-Amz-Signature=af8271735b4ca759498a8b7ea40d0bdbc959f96f84f116100bb4c76f89037345&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
