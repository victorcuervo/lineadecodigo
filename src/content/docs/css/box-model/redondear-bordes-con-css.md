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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665UKD3EE4%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T012934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDXvWG4AYZXjDSGW%2BBeyeplXQfHS%2BBM6JV3NnCB6PVbfAIhAKUpK0zCEw9wKIenFWru7cv8BcLv67YVD41V1RR8T%2FgoKv8DCHIQABoMNjM3NDIzMTgzODA1Igyw1Kg7vkHByM%2FSmCcq3AP3Gtjg0tPeineShmmmT52%2BQEG7ViXWWNBlbcAF9b1mY12Jw%2F2lP4WRZKfhXfoxQFZAqSuVmvszHXmpzfA78lyCiYQQaE5nJU9DdJlsYM5fVSIiaH9DUCcmAP190%2FLh4qoTd2tn2OtjVe%2B8l6ZlhFgP1Ab5u0jrq8cFRcpIGY25b02CsjbUKjP2lmS8SUs2GcA1VNZmeyy0EcFr0dM%2B2zGkeH%2BmjTUmHv%2FV4XyuaYeREkRibEgxWJYSWA4lc3ALKrxz1C4xq8Wv%2BGC9G2lw4vNri6b0RfyuyCfE8jmqehbsnJNrCfEw%2FAXiz%2B1UJRa8ituIpsLadMC26yH1Ae0iRg7rRb9Xz8xgd98gjTYZPrbodhzQvM6VH0qdbK43o04jmgWR4DdeqFRhFPOVQxHAwj1MO%2FXELJPozmCGYJ18lia4qoszKas66aLoYvzdV1ynGeq%2B5%2FVK%2FH93lnWgFgl9N7um4ndJIAC924vhcbJrfUaDK7guQbP2Ex%2Bmn4RghJdZMuUwSvtJOQnQDPRtlb9Wqut7ebV%2BNITzI2F0iAEkpbzBrXHlqteNzeDy4nqMC9ywYR0WQXZAqzYrlO60atbK%2FJJAypsu5oWq0oNZX%2BIzMvBAFZTNJnIWugWsHvKVITCw%2BofKBjqkAZgIDOgPf4I2rJhD4tul0Xffj97ib%2Bcs%2FtWly9jNJ4Bk1kDTvbMGtMCSH4o58U8%2FrDc5oo13YpKDONerhvNaGzk0VYzZUXE4Z%2BozRcYMidQy0DAR0MKdg7UwFHTxSt6VO7K8aIZ1MQxqJ4QJDJSNP1byjk4NNQCrlTHxdU730PcfT%2BdYT1TBMg8upDyqfd1ZQd8yLYfDZIriAzkg0nRnJrSoTcN4&X-Amz-Signature=dbcf649950069f37e102da6201a03cdaf559913be37456cbc00d57a52f3b4b5a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665UKD3EE4%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T012934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDXvWG4AYZXjDSGW%2BBeyeplXQfHS%2BBM6JV3NnCB6PVbfAIhAKUpK0zCEw9wKIenFWru7cv8BcLv67YVD41V1RR8T%2FgoKv8DCHIQABoMNjM3NDIzMTgzODA1Igyw1Kg7vkHByM%2FSmCcq3AP3Gtjg0tPeineShmmmT52%2BQEG7ViXWWNBlbcAF9b1mY12Jw%2F2lP4WRZKfhXfoxQFZAqSuVmvszHXmpzfA78lyCiYQQaE5nJU9DdJlsYM5fVSIiaH9DUCcmAP190%2FLh4qoTd2tn2OtjVe%2B8l6ZlhFgP1Ab5u0jrq8cFRcpIGY25b02CsjbUKjP2lmS8SUs2GcA1VNZmeyy0EcFr0dM%2B2zGkeH%2BmjTUmHv%2FV4XyuaYeREkRibEgxWJYSWA4lc3ALKrxz1C4xq8Wv%2BGC9G2lw4vNri6b0RfyuyCfE8jmqehbsnJNrCfEw%2FAXiz%2B1UJRa8ituIpsLadMC26yH1Ae0iRg7rRb9Xz8xgd98gjTYZPrbodhzQvM6VH0qdbK43o04jmgWR4DdeqFRhFPOVQxHAwj1MO%2FXELJPozmCGYJ18lia4qoszKas66aLoYvzdV1ynGeq%2B5%2FVK%2FH93lnWgFgl9N7um4ndJIAC924vhcbJrfUaDK7guQbP2Ex%2Bmn4RghJdZMuUwSvtJOQnQDPRtlb9Wqut7ebV%2BNITzI2F0iAEkpbzBrXHlqteNzeDy4nqMC9ywYR0WQXZAqzYrlO60atbK%2FJJAypsu5oWq0oNZX%2BIzMvBAFZTNJnIWugWsHvKVITCw%2BofKBjqkAZgIDOgPf4I2rJhD4tul0Xffj97ib%2Bcs%2FtWly9jNJ4Bk1kDTvbMGtMCSH4o58U8%2FrDc5oo13YpKDONerhvNaGzk0VYzZUXE4Z%2BozRcYMidQy0DAR0MKdg7UwFHTxSt6VO7K8aIZ1MQxqJ4QJDJSNP1byjk4NNQCrlTHxdU730PcfT%2BdYT1TBMg8upDyqfd1ZQd8yLYfDZIriAzkg0nRnJrSoTcN4&X-Amz-Signature=c1c7bc1561c12caff184ebe464bc57ed84c7fbd22513707923bb291cb4ae6878&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
