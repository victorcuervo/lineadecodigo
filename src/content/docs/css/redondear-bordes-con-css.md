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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XK6QDSVK%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T053120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICsYrfLDzFJqQmJKpp7wozMiz5Ksj4vaStiOrosHPX4NAiEA2JC50WLIGosHCGvfx2OEFWaL0ZbPGB%2FhDyeXBjUtA6IqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNcW0Fsz1VlTnTFR7SrcA24DGQGxLbApHmsloJ2mG1FNEwxSZzK3CYMBwltsaENOqtsGlrrXZihInjZL33QOZadww%2Fu4Z3%2BD4617KwoF5KDvtGN4EnIFyQ%2FFZrsz%2F3QAkx%2Bzr5RQnxcyZ0nasBFrd2lqUfFRNCOoVAdehp%2BhYb4DLgrG%2BBvix7n6P6hPJB%2B60nwFgCaRMH%2FZSzPZ9K7xnaUiFIRBA4tTVn%2BbyB%2FkP239frwZIJArv6Pq%2BPSGy069qUVJQCovKohjZ3lMmuvzecLDXSZQqDF6eNBT9M0RjOxlMhw2WWxNqowRhhfNFOd4PR58jMDEp0MueRWcZOADtlL52RMGii07HqTFBjBOJ2RGzVHcDWRGttyDsEfm%2F42xoXVM%2BNL%2F56%2Fbf564p2VKtcGaVgvi4U0Yz9j0sgLq1NXY7tjjAYXZ5PWGLv8Xn3dwAvQv4k6y9wD8IYfPEI2uoNhe5A7QKnIj0Z4NkccuIk0G4dBLr5Y0QXBVCkKzGLy0rebcsS557gKWQigK8lWFlU1yG5n0qDL0e49X%2BDfXtgiv5NNJ2iwnIRVG8t2KhYSf8d7CVH9AeDYFkKCkgpv45SpWnlS2PdfwZKRo8Pz8QAaDnu%2FjNk3LAPpphXxRAwEdJtzKjbgkmmsGT7WIMLq02ckGOqUBRV%2BKwxbNmGoFXuF3Dxr4MqJWSwTWcjNnnRQV1GJNHKWuAdA6c7ULJdAMOzAezWjTCFw%2FfZcaITUVyrii0du%2BdVS%2BZPGCzeS74K9QRnp8p1fqWO9sGXeo9jJxCPrmLmQNVW%2Bcg7C9LljFDY4%2BfAP4AG6tLz5VyJji61MANlspLbmLjcuY2sPd1ZFTr%2Bq3NNwwNLwmTs3mT5g6YYlCxmsbnqU2Htmg&X-Amz-Signature=5161f1b3e111f3c679f7eb43b6451667d03ce3218d2c846e31dceaf78efc736a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XK6QDSVK%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T053120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICsYrfLDzFJqQmJKpp7wozMiz5Ksj4vaStiOrosHPX4NAiEA2JC50WLIGosHCGvfx2OEFWaL0ZbPGB%2FhDyeXBjUtA6IqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNcW0Fsz1VlTnTFR7SrcA24DGQGxLbApHmsloJ2mG1FNEwxSZzK3CYMBwltsaENOqtsGlrrXZihInjZL33QOZadww%2Fu4Z3%2BD4617KwoF5KDvtGN4EnIFyQ%2FFZrsz%2F3QAkx%2Bzr5RQnxcyZ0nasBFrd2lqUfFRNCOoVAdehp%2BhYb4DLgrG%2BBvix7n6P6hPJB%2B60nwFgCaRMH%2FZSzPZ9K7xnaUiFIRBA4tTVn%2BbyB%2FkP239frwZIJArv6Pq%2BPSGy069qUVJQCovKohjZ3lMmuvzecLDXSZQqDF6eNBT9M0RjOxlMhw2WWxNqowRhhfNFOd4PR58jMDEp0MueRWcZOADtlL52RMGii07HqTFBjBOJ2RGzVHcDWRGttyDsEfm%2F42xoXVM%2BNL%2F56%2Fbf564p2VKtcGaVgvi4U0Yz9j0sgLq1NXY7tjjAYXZ5PWGLv8Xn3dwAvQv4k6y9wD8IYfPEI2uoNhe5A7QKnIj0Z4NkccuIk0G4dBLr5Y0QXBVCkKzGLy0rebcsS557gKWQigK8lWFlU1yG5n0qDL0e49X%2BDfXtgiv5NNJ2iwnIRVG8t2KhYSf8d7CVH9AeDYFkKCkgpv45SpWnlS2PdfwZKRo8Pz8QAaDnu%2FjNk3LAPpphXxRAwEdJtzKjbgkmmsGT7WIMLq02ckGOqUBRV%2BKwxbNmGoFXuF3Dxr4MqJWSwTWcjNnnRQV1GJNHKWuAdA6c7ULJdAMOzAezWjTCFw%2FfZcaITUVyrii0du%2BdVS%2BZPGCzeS74K9QRnp8p1fqWO9sGXeo9jJxCPrmLmQNVW%2Bcg7C9LljFDY4%2BfAP4AG6tLz5VyJji61MANlspLbmLjcuY2sPd1ZFTr%2Bq3NNwwNLwmTs3mT5g6YYlCxmsbnqU2Htmg&X-Amz-Signature=db7dcb618d23ffa8681272b0c584443c5079d483b80de543c778ad8babed85d5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
