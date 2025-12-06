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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WHUSC2PJ%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T105507Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFcT2NUp%2F3vljPpBayJ2hf53uzBCr9Ml5IiKLgJNALifAiEAz1OZqB4flFsGF%2BAym8RNZpYSrcC4v07rgnzcxcnKxnEq%2FwMIdBAAGgw2Mzc0MjMxODM4MDUiDDvx7QYeUh68Pp3vsyrcA1G2tLjcHuHMBOwdRBjX9sJHMWYRAkQVjskQj0ab4CGzGSQD7ZDoGJrBeFiA7R%2FQH9M%2BCYBbUrMeMTZv7GzBGlXdn4RPqcf%2BF6pVnZUjVUDHPsQ3vLPHgngPIiv5tmrEg45h6hjHlQeY7kfVHgHy%2FJiM0%2B7nvT4IJq915S6yvDaiLma5ApB2Di3Ulj9605OshoDxFETcwZLM%2Bdo6sf%2BMUiRRpegOwrKPrdv8m%2Fs5Xs0UPmnmm2lMve%2FIGcDXyWoat7LvL34YIWULeH2cFkN5ycUDgMa3ovbJ7Ttlbxi6YZajG6wDReOP5572wvYoIhqxK0Caojvy8ef7bwSFRZLz0zfX5Ht5L55eFuZTUzJ1ymBIaCaSrTBt5A7gy244uEwoTNCBRAA8wenuaOyo4dvZiwKJbNKjWiwqWGluwzSqEwRlhL8HZAoa7lzI4flM0OanjZDP8I3WPE8YIQTMzuIzlIDyNrtMzxv7W5Ft11sMK69lj6tOJphDb4yAOnlO2CGBQduj%2F0qQHubtbjYzGQkpOjzhyBSjCkN7ENEsVBSAeX3FieTn3D0T2FcBOsV6QstHZ5c5hoSm3KPrAvU0iNTxSEEOvZJ7sv1oeuM1IFTRNznPNC4WrJLyuDUN2A%2BgMIqJ0MkGOqUBJw0T3%2FKC2sH3nQBvGSVOWDBMWh9qzgKUEk6dVBoOCD4%2Buc2%2FeoP3QI2xpQeBDlw2uwRd0oPTLFNqkE4EwfjhFsDqGAxXVVxJmbvjD7jIH6MXpKfP2KxgeNDcriI%2FpB9ERD1gmEJY2e%2BIP0AQu2mLGSr1SA3XY%2FS01hIR0znVQ01HkpxSm2IrZLc56WF3Hbqh2w8gy8hUdWaSdce3%2FeRbUxJHByCq&X-Amz-Signature=50aad24bcf85d7aa7390e5635a5a87320a31db62ab5514eb83b5909ccf4498ca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WHUSC2PJ%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T105507Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFcT2NUp%2F3vljPpBayJ2hf53uzBCr9Ml5IiKLgJNALifAiEAz1OZqB4flFsGF%2BAym8RNZpYSrcC4v07rgnzcxcnKxnEq%2FwMIdBAAGgw2Mzc0MjMxODM4MDUiDDvx7QYeUh68Pp3vsyrcA1G2tLjcHuHMBOwdRBjX9sJHMWYRAkQVjskQj0ab4CGzGSQD7ZDoGJrBeFiA7R%2FQH9M%2BCYBbUrMeMTZv7GzBGlXdn4RPqcf%2BF6pVnZUjVUDHPsQ3vLPHgngPIiv5tmrEg45h6hjHlQeY7kfVHgHy%2FJiM0%2B7nvT4IJq915S6yvDaiLma5ApB2Di3Ulj9605OshoDxFETcwZLM%2Bdo6sf%2BMUiRRpegOwrKPrdv8m%2Fs5Xs0UPmnmm2lMve%2FIGcDXyWoat7LvL34YIWULeH2cFkN5ycUDgMa3ovbJ7Ttlbxi6YZajG6wDReOP5572wvYoIhqxK0Caojvy8ef7bwSFRZLz0zfX5Ht5L55eFuZTUzJ1ymBIaCaSrTBt5A7gy244uEwoTNCBRAA8wenuaOyo4dvZiwKJbNKjWiwqWGluwzSqEwRlhL8HZAoa7lzI4flM0OanjZDP8I3WPE8YIQTMzuIzlIDyNrtMzxv7W5Ft11sMK69lj6tOJphDb4yAOnlO2CGBQduj%2F0qQHubtbjYzGQkpOjzhyBSjCkN7ENEsVBSAeX3FieTn3D0T2FcBOsV6QstHZ5c5hoSm3KPrAvU0iNTxSEEOvZJ7sv1oeuM1IFTRNznPNC4WrJLyuDUN2A%2BgMIqJ0MkGOqUBJw0T3%2FKC2sH3nQBvGSVOWDBMWh9qzgKUEk6dVBoOCD4%2Buc2%2FeoP3QI2xpQeBDlw2uwRd0oPTLFNqkE4EwfjhFsDqGAxXVVxJmbvjD7jIH6MXpKfP2KxgeNDcriI%2FpB9ERD1gmEJY2e%2BIP0AQu2mLGSr1SA3XY%2FS01hIR0znVQ01HkpxSm2IrZLc56WF3Hbqh2w8gy8hUdWaSdce3%2FeRbUxJHByCq&X-Amz-Signature=10841d9dfa3f6121018c694d95bc91bc74439c4041a20249fba921b9050af808&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
