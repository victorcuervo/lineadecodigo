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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UEP76INN%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T185710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHaFPB2dzY7liX4A0L0AGqYdzjF4nqzNNdMFhAO9UwiRAiATp9EwkaHWjAeWdPPVn0JbxBsB2P3G0hlspeRocu%2FFqiqIBAiR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMqJ8WFYtc%2F2k%2BzPkPKtwDRCf4KeRpa3j3%2FNlrXbDOk%2FyKPGhHRKT%2FfzVoxIGtoSS6wjepneySZx87cmXrkNJs%2FPNV5YPBx7f0YOQ8MJb1m65jH6AuVhsHFx7EN8Cv047jmcR4GPf6VaP1sthTxabEG7RFZwvVNXlsuB2lZSNw%2FstL5bSL6hYz6zucO2Ul16BFCkzF6RWlGU3xlHypcKSRpJz7FIzao%2FF1br8TSaqVKeJITcMb%2FRagEqT3l5gxczFKQob2jZRBw%2F8DUHULenZeScnopaVwqu02ksUIj9yCvwRcBBTn9Gder9bEGlPif9oRK36ThUjNB1L49CjNhL1o0YguV6OFwWY1ZIlpIplKZdCleAa8IkCK2OhcD0WzqS90PB8yyRhVcfvb%2BFqEFFrtCG2vMYi38KF2%2FmeEX%2BY5U97M%2F46vXB2ck%2FkFtv98r4ASJHDc0id%2BcP%2FAs6MeMzUereYinXAJ7t6UJoPGIJEaPReLWAwRn3NmhQqNCbYrFqF6LIy7VW%2F3CwahoPbEyCQKQgVp7Al7gDyuKJbNpFMOFHyb10ghOA8MlnPIyUz3ch5weixLVYu9ZBopiSeYpMIRz5I%2Boi6rK05j6i5AbaHmauSsmIPNba6Eh9Qk%2BmHzZqaS07ac4Pe2Ljs7gQ4w6L7WyQY6pgFz8Z%2Fi3Xy2cwR7Dq5rbVzs0kIjUb%2B%2BF7SjOYgXQh%2BbX8ED6wSmrc4Z1i0XLV8CDxK0B407b%2BbeQ%2FJBDF1Hxx2QqzOgsUbUyNDfU0%2BXDOuA5t9ikGlsZecY%2BwbZU8k2n9LODIQnRJT1KYvPjnOX2wFtCKK4wgEvY75b0ANRm4XmGzWmUAVg7TxrRJMyxFU0zcZg7w4FA9LGg2%2BT3EHLMpS70RXeQXmg&X-Amz-Signature=1517825edb246e090917c5c88ac2767ff12b8276c043f3b68b22f68f57685a9f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UEP76INN%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T185710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHaFPB2dzY7liX4A0L0AGqYdzjF4nqzNNdMFhAO9UwiRAiATp9EwkaHWjAeWdPPVn0JbxBsB2P3G0hlspeRocu%2FFqiqIBAiR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMqJ8WFYtc%2F2k%2BzPkPKtwDRCf4KeRpa3j3%2FNlrXbDOk%2FyKPGhHRKT%2FfzVoxIGtoSS6wjepneySZx87cmXrkNJs%2FPNV5YPBx7f0YOQ8MJb1m65jH6AuVhsHFx7EN8Cv047jmcR4GPf6VaP1sthTxabEG7RFZwvVNXlsuB2lZSNw%2FstL5bSL6hYz6zucO2Ul16BFCkzF6RWlGU3xlHypcKSRpJz7FIzao%2FF1br8TSaqVKeJITcMb%2FRagEqT3l5gxczFKQob2jZRBw%2F8DUHULenZeScnopaVwqu02ksUIj9yCvwRcBBTn9Gder9bEGlPif9oRK36ThUjNB1L49CjNhL1o0YguV6OFwWY1ZIlpIplKZdCleAa8IkCK2OhcD0WzqS90PB8yyRhVcfvb%2BFqEFFrtCG2vMYi38KF2%2FmeEX%2BY5U97M%2F46vXB2ck%2FkFtv98r4ASJHDc0id%2BcP%2FAs6MeMzUereYinXAJ7t6UJoPGIJEaPReLWAwRn3NmhQqNCbYrFqF6LIy7VW%2F3CwahoPbEyCQKQgVp7Al7gDyuKJbNpFMOFHyb10ghOA8MlnPIyUz3ch5weixLVYu9ZBopiSeYpMIRz5I%2Boi6rK05j6i5AbaHmauSsmIPNba6Eh9Qk%2BmHzZqaS07ac4Pe2Ljs7gQ4w6L7WyQY6pgFz8Z%2Fi3Xy2cwR7Dq5rbVzs0kIjUb%2B%2BF7SjOYgXQh%2BbX8ED6wSmrc4Z1i0XLV8CDxK0B407b%2BbeQ%2FJBDF1Hxx2QqzOgsUbUyNDfU0%2BXDOuA5t9ikGlsZecY%2BwbZU8k2n9LODIQnRJT1KYvPjnOX2wFtCKK4wgEvY75b0ANRm4XmGzWmUAVg7TxrRJMyxFU0zcZg7w4FA9LGg2%2BT3EHLMpS70RXeQXmg&X-Amz-Signature=0b8dad05cdd27142c2f55e6b63039894652a10daae7fe70c3edbe2841ddf190b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
