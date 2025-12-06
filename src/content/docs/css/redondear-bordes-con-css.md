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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QDK34PYW%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T034906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICVUkjeWFzodFauu89D9nUnGhWdzzkCZBhuOky%2Brtvr2AiEAgy7qyBhlNzO%2Bd7f%2B9EYJnmNl293b1FbuSw7AHFsDkOwq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDFMYf9TZqCFJQMvA5yrcA8bFEWNnEwOoiOzMuElBsh9qw74gkkrTVbPTNa6sfzio4kikFH3OyzJhVDMWPoKabFeBOentK9ifiszl6mcRvcBPs9JkZdhB3QEWAQ5ciqWIzv2d3kXmL8SUNYHAPLp4wCu85x2eEkFwFc9uhscu6fHh2bmQWmCfeC6LMGpIv3YCqYcNNy5xGrQRU7Y0RRFjx5v3y5Z4CNREZT7LvwJB%2FlvAIaU3ExURDxIYI%2Fl%2B%2B4AGKwXpTV8XlFCkkjtKerFwSyOnFh1W%2B%2Fen8XJNSE00VoJd%2F%2Fbi3zqVpSrBCqTsgQWgv0WCZuAYVC%2B%2FQShPWNmmZ0GBSO1c9oOdlDU96AYCMY8e3W9tvTJl433crrPiPfksqVprjnOWRDDq64DaFG7i0sY5cXCiscMYS3QGwU1U4Q2aImu2LUTXoswEP64Rq6pFniiLvq7AK%2ByVbkYQ9Y7GOGenL%2BUtferUIxFZn%2F%2FwrLMdploXycae4up%2BgRpn6r%2BgV90ohKMr3T%2BLtsL8e58WbOO0oyvC8HlT8WRfJ4UrzzVE%2BQaPv0ywakJGPb%2BK2lGjMo0glVAWxp1myeGzkSPBa5vSSPBIGHPrfd%2BN5WExJOiHlXKuS4lCalSAfE3999wAvN%2F71xXn%2F%2B7%2FPf%2BdMIbEzskGOqUBiVk70v%2FCngqncMIYjebTrdogo31c3Mr%2BvLO0RdDPtzW2IXL4YJbmYGBMs0rB5%2BGlGD%2FibFRyktFnwrNlkjCNc3O9RTmMdc2iKO5Op%2FKcbTh9rGar1yyhLnREtdnpX4NvouvMXJiKZjWn2F3W3zxQiYUKgrpL44XAeSPx%2F6CfHZUvDiW02jhIFR7LHkLCFWXWTnrsUmQ8hjKTXY%2FOoA7hocE3lWLN&X-Amz-Signature=087af8906eee9deacd7359b33c7b0e541e18054ad5c1e033924e80083a6a01d3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QDK34PYW%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T034906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICVUkjeWFzodFauu89D9nUnGhWdzzkCZBhuOky%2Brtvr2AiEAgy7qyBhlNzO%2Bd7f%2B9EYJnmNl293b1FbuSw7AHFsDkOwq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDFMYf9TZqCFJQMvA5yrcA8bFEWNnEwOoiOzMuElBsh9qw74gkkrTVbPTNa6sfzio4kikFH3OyzJhVDMWPoKabFeBOentK9ifiszl6mcRvcBPs9JkZdhB3QEWAQ5ciqWIzv2d3kXmL8SUNYHAPLp4wCu85x2eEkFwFc9uhscu6fHh2bmQWmCfeC6LMGpIv3YCqYcNNy5xGrQRU7Y0RRFjx5v3y5Z4CNREZT7LvwJB%2FlvAIaU3ExURDxIYI%2Fl%2B%2B4AGKwXpTV8XlFCkkjtKerFwSyOnFh1W%2B%2Fen8XJNSE00VoJd%2F%2Fbi3zqVpSrBCqTsgQWgv0WCZuAYVC%2B%2FQShPWNmmZ0GBSO1c9oOdlDU96AYCMY8e3W9tvTJl433crrPiPfksqVprjnOWRDDq64DaFG7i0sY5cXCiscMYS3QGwU1U4Q2aImu2LUTXoswEP64Rq6pFniiLvq7AK%2ByVbkYQ9Y7GOGenL%2BUtferUIxFZn%2F%2FwrLMdploXycae4up%2BgRpn6r%2BgV90ohKMr3T%2BLtsL8e58WbOO0oyvC8HlT8WRfJ4UrzzVE%2BQaPv0ywakJGPb%2BK2lGjMo0glVAWxp1myeGzkSPBa5vSSPBIGHPrfd%2BN5WExJOiHlXKuS4lCalSAfE3999wAvN%2F71xXn%2F%2B7%2FPf%2BdMIbEzskGOqUBiVk70v%2FCngqncMIYjebTrdogo31c3Mr%2BvLO0RdDPtzW2IXL4YJbmYGBMs0rB5%2BGlGD%2FibFRyktFnwrNlkjCNc3O9RTmMdc2iKO5Op%2FKcbTh9rGar1yyhLnREtdnpX4NvouvMXJiKZjWn2F3W3zxQiYUKgrpL44XAeSPx%2F6CfHZUvDiW02jhIFR7LHkLCFWXWTnrsUmQ8hjKTXY%2FOoA7hocE3lWLN&X-Amz-Signature=03c733c6f70adc2c5bc0ef93d4f9cee6c470955b74e27af02570a8f673f90bfc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
