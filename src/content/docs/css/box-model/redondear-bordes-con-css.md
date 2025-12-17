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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WTBXSKC7%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T074804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEwv17MWfc0l0USX99Dhg3ki%2BV%2B1%2BswcVySmjzc1AhTPAiByaA0I4cJxcinc8jNnIk3KrjZd3kYKdVD5GPZWpsUSeCr%2FAwh5EAAaDDYzNzQyMzE4MzgwNSIMWaxr%2FRMBcTGKrMK4KtwD6Ir%2BayGnNE%2Bl6XHxJv6Lg7Nd6cG8FuVy9guuMh%2BIu4Kz2EwaYWxC%2FWCEjpEdAAAXANHKj96u7bQCtV3OvBPrx2kL0udILKRuHCc%2Fhee7CbID7jftgRbL4hN6gVtfP6rbuf3HbTaBUeCf%2FSe24i45ZE0yNX2poumrqxqq2hksvyjK9j2jKy3MfE%2FH8fUBAOSJuRFNSHqdPB7%2FzXK42AlISfE%2FQt2WzePrY0RlAuX7%2Fsi3oqzegKV6ykprdMZc2d%2FyKDvaODHRJF0e4WbCLZ9W%2BpGu1aHLZvUNLxaeIDQozqeSi0ijZkXlbgk6TXeyUSxcm6Tg1IVJ4rx7o74XJ%2BbRrSTj%2FDHLsuDZ3mX94qGRqHnLv2MXoRIMqEr2Fl4XyPQ1BaV0yrC6fqxHTHbIzMatqqNZ1vjGmEi%2FLGvdYLkZJuJIED36B6hakWanJind0x0g7JpgCM6BRe3SIc%2F7drX6UZ50birg2ubWb3lMeU4Klc0TpRtm4dQdG7YT%2B10mZfxlVYUQ60BlbeHy9QW3hLWdBTxOQeEEePVEKEWb7apMm2NZaxTxjdd0FIevEqUK1wvwJq8rU6TEYsa1eRmK2yBqu5lHqYGz%2Fc5pfbMdErZuYFA7t82GuSBJemI%2BzIUwlriJygY6pgFJb3b2A%2Fft6wN0rGOJ3WD7B9i5CdMhklDb5ZdvthtK%2B%2FGgGLdagwsCUoom7CQI3kxwg8M4%2FoMWPiVBKFGkaq8b%2B%2FH48cBt4ZYjtDoTALzxeCHl1cxI%2BgJRsUWuu15GFLKSMWFzhxrbiZUgbF2KqmJUf227NfKhhjHp5fnKM25WrtudddAvTCZuJPVGThX5wXvNXv6KzvrNn6%2BWmkDt0IcafHwTz7g5&X-Amz-Signature=67248e9b2c28d32b52265799ee3f8eedcaf59f0b2aee8052c8640cbd4c0e71ec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WTBXSKC7%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T074804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEwv17MWfc0l0USX99Dhg3ki%2BV%2B1%2BswcVySmjzc1AhTPAiByaA0I4cJxcinc8jNnIk3KrjZd3kYKdVD5GPZWpsUSeCr%2FAwh5EAAaDDYzNzQyMzE4MzgwNSIMWaxr%2FRMBcTGKrMK4KtwD6Ir%2BayGnNE%2Bl6XHxJv6Lg7Nd6cG8FuVy9guuMh%2BIu4Kz2EwaYWxC%2FWCEjpEdAAAXANHKj96u7bQCtV3OvBPrx2kL0udILKRuHCc%2Fhee7CbID7jftgRbL4hN6gVtfP6rbuf3HbTaBUeCf%2FSe24i45ZE0yNX2poumrqxqq2hksvyjK9j2jKy3MfE%2FH8fUBAOSJuRFNSHqdPB7%2FzXK42AlISfE%2FQt2WzePrY0RlAuX7%2Fsi3oqzegKV6ykprdMZc2d%2FyKDvaODHRJF0e4WbCLZ9W%2BpGu1aHLZvUNLxaeIDQozqeSi0ijZkXlbgk6TXeyUSxcm6Tg1IVJ4rx7o74XJ%2BbRrSTj%2FDHLsuDZ3mX94qGRqHnLv2MXoRIMqEr2Fl4XyPQ1BaV0yrC6fqxHTHbIzMatqqNZ1vjGmEi%2FLGvdYLkZJuJIED36B6hakWanJind0x0g7JpgCM6BRe3SIc%2F7drX6UZ50birg2ubWb3lMeU4Klc0TpRtm4dQdG7YT%2B10mZfxlVYUQ60BlbeHy9QW3hLWdBTxOQeEEePVEKEWb7apMm2NZaxTxjdd0FIevEqUK1wvwJq8rU6TEYsa1eRmK2yBqu5lHqYGz%2Fc5pfbMdErZuYFA7t82GuSBJemI%2BzIUwlriJygY6pgFJb3b2A%2Fft6wN0rGOJ3WD7B9i5CdMhklDb5ZdvthtK%2B%2FGgGLdagwsCUoom7CQI3kxwg8M4%2FoMWPiVBKFGkaq8b%2B%2FH48cBt4ZYjtDoTALzxeCHl1cxI%2BgJRsUWuu15GFLKSMWFzhxrbiZUgbF2KqmJUf227NfKhhjHp5fnKM25WrtudddAvTCZuJPVGThX5wXvNXv6KzvrNn6%2BWmkDt0IcafHwTz7g5&X-Amz-Signature=a5d1d25f233841aeff633523df4f1837c1a6dfd972d6b76630e35a7497ced3cf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
