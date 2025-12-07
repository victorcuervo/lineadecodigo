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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TBAMV3SQ%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T154751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICOX%2BMppULmRvf1h1EoM%2BG5KIPTLn7X8OuvZvHZBQgE0AiBsty%2FpQW0rpuo6vX3kEJXLIIek4Zay4E%2BK7zr7z97I7CqIBAiR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMtfFN648hmGIGWmzbKtwD2yiz7ceC8qR%2B9mYhod87PEmsYlhI9uy2wn2zOtH3QlCgr6uVgC8i1ticoJ1l7oIw0caPxrDqPxW0PRVegrGWC2SXNnrXMEV9y3bqZ0rVe1lXcwRU4YT%2BVfTE4YxnvcKKZ06Uha27A6sDOd3Yz1y1TRzg%2FwxBjV%2Bx3lTnUlGcRBnlxoaPQVltIwW3V54IJWZI%2BuJlSBLzsNjPgCBNNQ2xbabOSDX3hlkGVD6uwLMkQ1dQDLgKGb9hLdzPqOG3sjd3dzjTyj%2Flz8po4TwN1unueGFFMG6rcBHeV7kxw%2BNmiK5%2FLCA7TwkDbcQzjV394vOz8FwgD%2BC8uF49nqA50saXRmc3yqoxW8XECsUnRzNLDDUllYB5LQbCnBIRTgTTDuHYE7nms4AQceIDICISwZWOsOTshWqxuRAiJNMkQLaxSFTnovfuBUJ4N0LPcdaDFowQlbuluSXMu3P8ewO1J15ZEjOdYH82s845z2vq%2FjRdifs0QPLEfAV6Su5lqA%2FpAXdwq%2BNNkRosxICKOMunATrhkKbRjWrcRDqimOZjzEEqjNNvMshO11pPcu9ktxkeYPI2wwu%2BbD7pG9cMSUrnlFti6LHAysIKKnWS4mv8JzBjaLzS3wNuzFd7sGvyB1sws7nWyQY6pgGwRKGPjIRKABs18k7UDm6iEz5WwrwojdDUWLkpPOPxct8Xcx95U3e1uS42yl8wrU83MlIkPs3QbZkPQYZbMY9JfxA4UOQwCkNuGlhP965u5%2Bry70bB1m18kgCuwcObnMCIZJmHbzPgNDpb9FwBCx6gtTwewxlRUKWA1mWIv8i8YerElodMqepGIrdlL5DIb3oguv4RKQY5QFrV9sqMy0E6umPwOVkI&X-Amz-Signature=eef54939277f6f90c2f176470fed616effbf5dd09934f86652511fda7c31fc20&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TBAMV3SQ%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T154751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICOX%2BMppULmRvf1h1EoM%2BG5KIPTLn7X8OuvZvHZBQgE0AiBsty%2FpQW0rpuo6vX3kEJXLIIek4Zay4E%2BK7zr7z97I7CqIBAiR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMtfFN648hmGIGWmzbKtwD2yiz7ceC8qR%2B9mYhod87PEmsYlhI9uy2wn2zOtH3QlCgr6uVgC8i1ticoJ1l7oIw0caPxrDqPxW0PRVegrGWC2SXNnrXMEV9y3bqZ0rVe1lXcwRU4YT%2BVfTE4YxnvcKKZ06Uha27A6sDOd3Yz1y1TRzg%2FwxBjV%2Bx3lTnUlGcRBnlxoaPQVltIwW3V54IJWZI%2BuJlSBLzsNjPgCBNNQ2xbabOSDX3hlkGVD6uwLMkQ1dQDLgKGb9hLdzPqOG3sjd3dzjTyj%2Flz8po4TwN1unueGFFMG6rcBHeV7kxw%2BNmiK5%2FLCA7TwkDbcQzjV394vOz8FwgD%2BC8uF49nqA50saXRmc3yqoxW8XECsUnRzNLDDUllYB5LQbCnBIRTgTTDuHYE7nms4AQceIDICISwZWOsOTshWqxuRAiJNMkQLaxSFTnovfuBUJ4N0LPcdaDFowQlbuluSXMu3P8ewO1J15ZEjOdYH82s845z2vq%2FjRdifs0QPLEfAV6Su5lqA%2FpAXdwq%2BNNkRosxICKOMunATrhkKbRjWrcRDqimOZjzEEqjNNvMshO11pPcu9ktxkeYPI2wwu%2BbD7pG9cMSUrnlFti6LHAysIKKnWS4mv8JzBjaLzS3wNuzFd7sGvyB1sws7nWyQY6pgGwRKGPjIRKABs18k7UDm6iEz5WwrwojdDUWLkpPOPxct8Xcx95U3e1uS42yl8wrU83MlIkPs3QbZkPQYZbMY9JfxA4UOQwCkNuGlhP965u5%2Bry70bB1m18kgCuwcObnMCIZJmHbzPgNDpb9FwBCx6gtTwewxlRUKWA1mWIv8i8YerElodMqepGIrdlL5DIb3oguv4RKQY5QFrV9sqMy0E6umPwOVkI&X-Amz-Signature=28fd920e2decba84e931ac58069a7d6282e6691df6342a6d1ee772a3f223d4dc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
