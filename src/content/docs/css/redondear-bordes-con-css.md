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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QHUC2URZ%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T021116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC5tPzgfs%2FuUAU9hhwdUAA9ejYbX%2FazLR5T696NL%2BK5xwIgUsH8qXycDRfAHh3gzZ3VZzpfdmnbZZ%2FjvZmYwf7OJa4qiAQIsv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB%2FqbpCPTLnMaYeWHircA4SDp3TPr5csodOTe8qyF6dnA%2BgC2DOpIfYA71ixZGiwlrNo%2FH%2FA8sDYUudMtTkR0JsvslprEEw5jlWhg7vLznJxbgBmafvH5BCl6eIyLoLhuP0Y%2B055VlrkQdrGJrSU5PbASo%2FXe0zfz5asWzuGg31LeOHvNwS%2FLfPd3WQQ%2F8jRDuVNU3kZDb2Y%2BOoC69mUQo3QjRQc0nNHrVgD0RtRrHn7BjAIukEY%2BDpwGm6Y2%2FpPVR2uGntNoZL06Hqpk72L8gOBacWsQ7Tv3qJSeS6UGLOgpsKXXSy5D1vzVDTVCITu1T8QuzULZUwsPfqGTBwnpEGS4lnE0ET7JUXBVHgYkAzVaCiA2xJfavhW3jxTCUDsQJBEqfHqXMwInuU0Vg0qz1TqRXGkIhRuKcYMLOEfy6lkjNjoSbC98XsHJDRR%2B1Y0cfN4dQm3jQ02vs1clYIKpWyTjwnPiQfWtIXsb7c%2BnF8U4lBnTXlUJgS4NT%2FOKVgl0ucF%2FiVTxl9F3HTaYIgO%2FNrGTSBKmsiS%2FDZJYqLABC4QH1ye%2F53ExBALOxyB4ItjfUK%2F4wpyFudt5M8iuHZGnyPxGTwf0MTTVhEwMON6CATOT%2FoWvOUO58rcjVGSbysturZF97cYhybC5H8kMLXp3ckGOqUB%2BpRPtu0FMug8fQBu%2BRu5HoCaym3PAbx2FWhNzt2%2BAJTe0%2FbsF3Ek1R3KHv2PGYsSlPUw1ptnIdc05Yvy2AQwLKlX0Cc%2BNURr60owKmK8JXYyuVuvIN3KdP%2Bcrr0Mo0UmxniqB2N5CCe%2F7hWrCd5mKNKAZ4blL1ZL4LD3Bcg47SvbUexgVrVvUV0jDXucXm4qH5nR5wr%2F42ApI%2BLZiy9KD88SnYQW&X-Amz-Signature=b71493b2d3db63903500bf338010024bef99af3abf06800e3fc1ec458c1f0f23&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QHUC2URZ%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T021116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC5tPzgfs%2FuUAU9hhwdUAA9ejYbX%2FazLR5T696NL%2BK5xwIgUsH8qXycDRfAHh3gzZ3VZzpfdmnbZZ%2FjvZmYwf7OJa4qiAQIsv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB%2FqbpCPTLnMaYeWHircA4SDp3TPr5csodOTe8qyF6dnA%2BgC2DOpIfYA71ixZGiwlrNo%2FH%2FA8sDYUudMtTkR0JsvslprEEw5jlWhg7vLznJxbgBmafvH5BCl6eIyLoLhuP0Y%2B055VlrkQdrGJrSU5PbASo%2FXe0zfz5asWzuGg31LeOHvNwS%2FLfPd3WQQ%2F8jRDuVNU3kZDb2Y%2BOoC69mUQo3QjRQc0nNHrVgD0RtRrHn7BjAIukEY%2BDpwGm6Y2%2FpPVR2uGntNoZL06Hqpk72L8gOBacWsQ7Tv3qJSeS6UGLOgpsKXXSy5D1vzVDTVCITu1T8QuzULZUwsPfqGTBwnpEGS4lnE0ET7JUXBVHgYkAzVaCiA2xJfavhW3jxTCUDsQJBEqfHqXMwInuU0Vg0qz1TqRXGkIhRuKcYMLOEfy6lkjNjoSbC98XsHJDRR%2B1Y0cfN4dQm3jQ02vs1clYIKpWyTjwnPiQfWtIXsb7c%2BnF8U4lBnTXlUJgS4NT%2FOKVgl0ucF%2FiVTxl9F3HTaYIgO%2FNrGTSBKmsiS%2FDZJYqLABC4QH1ye%2F53ExBALOxyB4ItjfUK%2F4wpyFudt5M8iuHZGnyPxGTwf0MTTVhEwMON6CATOT%2FoWvOUO58rcjVGSbysturZF97cYhybC5H8kMLXp3ckGOqUB%2BpRPtu0FMug8fQBu%2BRu5HoCaym3PAbx2FWhNzt2%2BAJTe0%2FbsF3Ek1R3KHv2PGYsSlPUw1ptnIdc05Yvy2AQwLKlX0Cc%2BNURr60owKmK8JXYyuVuvIN3KdP%2Bcrr0Mo0UmxniqB2N5CCe%2F7hWrCd5mKNKAZ4blL1ZL4LD3Bcg47SvbUexgVrVvUV0jDXucXm4qH5nR5wr%2F42ApI%2BLZiy9KD88SnYQW&X-Amz-Signature=88481a902afb7ccecdb3b59481ad7605e96cfca877e117f071a2d35d593b519f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
