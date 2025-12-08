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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662PB4IXMA%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T044957Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2BrLeVH0Q%2BSdqkXcl92Nu7BNQL3R8mjbDkNQdho3UohgIhAIrntKro9VKaJSpmeAxhhXVjhibVemtQaO3CXbahzKufKogECJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxI%2FfeanVWbEs7iJlEq3APmIhcpJ3KTBnG88UDltfm%2F9W4NmvS7HUkHdNfp2lZLNYtvHPcFUakO7Z2M%2FFXcHqVzLqWOmWA5KRCXptXeFTPmTfS%2ByCRBU6WJAmE13b7VxxKdvoSBSTam%2FoGsmU5RRyVpXmN3hTPMUKsSqEf%2B8IvdT0j9eiYbab0HetcmChPbUt7kdnxH%2FlKVhDXW%2BuNmFJKYjysck4wc2KDM5KJ42%2BxxNKCchl3YRv6Usoe0DBWCeUOqTp3hhoUUC1b5P1uWRxhbkT73DWIlXo%2FAFv93Myk2Wd2J1PnpNj0y%2Bg9iZZYtPgWuMuiENjgyaimomS5By0hm5CchyyaXklFyvBTFtjiEK5gBk2Y1xa%2FiwQOKO3O8wm5u5lQC3xBYAgoRY5G%2BQ9ah%2BX9wUOXGo8ZCqC12cn3BR4ipeEiRyWTNlo58tlsHktTXCCHnwYjsLZjJaWqZ4umatZ0nOkQGqsi65KqHzEKvwT9sOC0FjzkMMtl5siPCW38c%2FWkHGQb4v%2FRqezx7pDPSCdHMy%2BGis93AW7YzfyyVkU6H%2BETJpSIq3HVDVYwn1Bgg%2Bk%2B1oE0Cms2y471%2BxVTgHkGlK0CwuWpwoNj0x2oY83wxtKs4KGVHPm0UxuI3L7UE2rAmo5NRAtsaaTDnlNnJBjqkAejqNF4h7AG1LsdOwn3YuWKi%2FTxRDqMCXRDcG9wjFAsrqEsnfvmGpWIOQl5TwkMnDQpVAUDf4Us507Q2Y9gukQudJM98%2FgOLe1A92nRDgZ2xn1%2BVGul8QS9cU%2Byof51qpA88LhP%2BYmG%2BnGvJ0ImmcgfTzDK%2Bie1uSyxlIDkbC72sk4oGrxzso2wfFD4OpWv0QDFgcyRKSGAmkklQo%2BTumIfnnKBs&X-Amz-Signature=2ce612105a354a94c65e0f62038673afb8deee8d43a7dce4f79794522c0d7a3d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662PB4IXMA%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T044957Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2BrLeVH0Q%2BSdqkXcl92Nu7BNQL3R8mjbDkNQdho3UohgIhAIrntKro9VKaJSpmeAxhhXVjhibVemtQaO3CXbahzKufKogECJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxI%2FfeanVWbEs7iJlEq3APmIhcpJ3KTBnG88UDltfm%2F9W4NmvS7HUkHdNfp2lZLNYtvHPcFUakO7Z2M%2FFXcHqVzLqWOmWA5KRCXptXeFTPmTfS%2ByCRBU6WJAmE13b7VxxKdvoSBSTam%2FoGsmU5RRyVpXmN3hTPMUKsSqEf%2B8IvdT0j9eiYbab0HetcmChPbUt7kdnxH%2FlKVhDXW%2BuNmFJKYjysck4wc2KDM5KJ42%2BxxNKCchl3YRv6Usoe0DBWCeUOqTp3hhoUUC1b5P1uWRxhbkT73DWIlXo%2FAFv93Myk2Wd2J1PnpNj0y%2Bg9iZZYtPgWuMuiENjgyaimomS5By0hm5CchyyaXklFyvBTFtjiEK5gBk2Y1xa%2FiwQOKO3O8wm5u5lQC3xBYAgoRY5G%2BQ9ah%2BX9wUOXGo8ZCqC12cn3BR4ipeEiRyWTNlo58tlsHktTXCCHnwYjsLZjJaWqZ4umatZ0nOkQGqsi65KqHzEKvwT9sOC0FjzkMMtl5siPCW38c%2FWkHGQb4v%2FRqezx7pDPSCdHMy%2BGis93AW7YzfyyVkU6H%2BETJpSIq3HVDVYwn1Bgg%2Bk%2B1oE0Cms2y471%2BxVTgHkGlK0CwuWpwoNj0x2oY83wxtKs4KGVHPm0UxuI3L7UE2rAmo5NRAtsaaTDnlNnJBjqkAejqNF4h7AG1LsdOwn3YuWKi%2FTxRDqMCXRDcG9wjFAsrqEsnfvmGpWIOQl5TwkMnDQpVAUDf4Us507Q2Y9gukQudJM98%2FgOLe1A92nRDgZ2xn1%2BVGul8QS9cU%2Byof51qpA88LhP%2BYmG%2BnGvJ0ImmcgfTzDK%2Bie1uSyxlIDkbC72sk4oGrxzso2wfFD4OpWv0QDFgcyRKSGAmkklQo%2BTumIfnnKBs&X-Amz-Signature=6ab8d47f75e1bafab7662a726b990907dddd5125196c35d1dea270a71925c001&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
