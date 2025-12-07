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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X5XUUKII%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T221839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDQmjaL023JcHiDrgJk6xnTQJoeV4w93xI4cikETakc8QIgRzPv7%2FmFWaNcfQl2TYDJ53f7YbnOeOOq5sSHLUfR2YUqiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIHMq4bnDDzgdYoOVCrcAyyfK7h4laPg1z2P9odWO5EOMqF3FJvmJSz4pTDk6JYN3rLkJ8717ZxBcN1NFe%2BM4UX8kPDjrzvpI5oIG5fZdfZnuEeSSWp2iRmXOIFOedSRTnNbSPZSklVaXOseuU6s0tnMPRltNI0Sraw%2BpoWDv1xxcKbrbQ3HF5JrtgSZ47GttK0AOqRuKVEeHOIpIuosxSk8NRz5wHxLVnOUtkAVjwfgH0tG0H27Oa9gkf4dhQxUguyFrC9ddr%2BPe%2FMy199d%2FD%2FOsIrRvxHN0fKcaFl55ww5d8b7zl0IcgeAIU6U8sbjpAsnQAeAIQv7a7Al0%2BcmPVTKi01%2B%2FsEOPOzqRR914r%2BeEHcLS5cTgaCqJavl52Odq7Rjn4qhZAvSoXADyS8fDYoVCCg7GPSsgYMcHXQrDfuBfZRegy0fLVsbSXD%2BSx3ENMVWDdQiJ4Kzox9g7zocD%2BAHcMFUgoo%2B8fugbv0Wv7nEwvCCVQH7lQhn2i%2FydEvTgw2zwngJMLxvW37IQPfCHDJxmTO%2B8k6npJ01oQWqRMNk%2BE23sk32K5XzLWj%2FfRIZBA16HUSeCto4yamfKk4ZougMPQlCCUvgsxUhWIE6OqBsGkJMiYhRvUmb4GpLJZyf18ZGYHJmz3p8ruOIMIXH18kGOqUBl4GlybohvkMb5UoQ0UMbAJ5UCCYypTQvCMdqjkHeQm8Z4HIIGpIbId7fu4O%2Bs8jWm%2FRtrdY6mETQXIfMGgoctCAgz24pmpcrzeDUFQF8bipfC7KJ7V6zCTrOWKzNkPIyPtJnjC36KhzP9UgGWX%2B0Bj3b5sDNUpCQ1xiUjSLpZM%2F9CVA6yLreBCBt3MmjfMZJMvTNZN%2FkleEcjUFBYDdU1jFhBQS5&X-Amz-Signature=0962b6b0ccbbbd374ed6516fad4b578bc913dc2abae950b0762627394f4897af&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X5XUUKII%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T221839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDQmjaL023JcHiDrgJk6xnTQJoeV4w93xI4cikETakc8QIgRzPv7%2FmFWaNcfQl2TYDJ53f7YbnOeOOq5sSHLUfR2YUqiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIHMq4bnDDzgdYoOVCrcAyyfK7h4laPg1z2P9odWO5EOMqF3FJvmJSz4pTDk6JYN3rLkJ8717ZxBcN1NFe%2BM4UX8kPDjrzvpI5oIG5fZdfZnuEeSSWp2iRmXOIFOedSRTnNbSPZSklVaXOseuU6s0tnMPRltNI0Sraw%2BpoWDv1xxcKbrbQ3HF5JrtgSZ47GttK0AOqRuKVEeHOIpIuosxSk8NRz5wHxLVnOUtkAVjwfgH0tG0H27Oa9gkf4dhQxUguyFrC9ddr%2BPe%2FMy199d%2FD%2FOsIrRvxHN0fKcaFl55ww5d8b7zl0IcgeAIU6U8sbjpAsnQAeAIQv7a7Al0%2BcmPVTKi01%2B%2FsEOPOzqRR914r%2BeEHcLS5cTgaCqJavl52Odq7Rjn4qhZAvSoXADyS8fDYoVCCg7GPSsgYMcHXQrDfuBfZRegy0fLVsbSXD%2BSx3ENMVWDdQiJ4Kzox9g7zocD%2BAHcMFUgoo%2B8fugbv0Wv7nEwvCCVQH7lQhn2i%2FydEvTgw2zwngJMLxvW37IQPfCHDJxmTO%2B8k6npJ01oQWqRMNk%2BE23sk32K5XzLWj%2FfRIZBA16HUSeCto4yamfKk4ZougMPQlCCUvgsxUhWIE6OqBsGkJMiYhRvUmb4GpLJZyf18ZGYHJmz3p8ruOIMIXH18kGOqUBl4GlybohvkMb5UoQ0UMbAJ5UCCYypTQvCMdqjkHeQm8Z4HIIGpIbId7fu4O%2Bs8jWm%2FRtrdY6mETQXIfMGgoctCAgz24pmpcrzeDUFQF8bipfC7KJ7V6zCTrOWKzNkPIyPtJnjC36KhzP9UgGWX%2B0Bj3b5sDNUpCQ1xiUjSLpZM%2F9CVA6yLreBCBt3MmjfMZJMvTNZN%2FkleEcjUFBYDdU1jFhBQS5&X-Amz-Signature=115d57493d14fb1eefeadfdf00fb5b8f083bfc73848d05fc85cb166155641ff0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
