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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QAX4R6F2%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T051327Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC5ntMupGycj1Cuj9CfmwyU4YwYpI9cRlcGeNVP3f2PJQIhAOC94CJhFw6JZMrT2q8emj0aG%2BXHTp%2FTrLr5GcL96ddcKogECJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwkLdp6rjz9%2Fy1c%2FGgq3APMPBBrfCJ8wvi2jozrupGSymu1RgYFVTY%2FblWng%2Fzzo%2FF0FKbq2pfrUNHI%2B4DrO5hNys%2BnzLfeyZoyCE2H3Rf0axhuMVb22%2Bw1znUYi2xQ0Qnx9vXu3Snc5JFwNBU5jv2SN6NhK4Fywy5JM4dkUZQXBNLmNs17PBK66FYQvSOzddTpeP9flvdIpkZWCR1R%2BddTcltue6xb3lVkpcYZsFkQhLnMBVK0m%2BdKr%2FGdstWQK9rgyx3F5VwMnCI4CJjIX9V3wdp2sawNE6xCof4ImDwXzxt94iILDjypaCred7EotRY757SNtlQL8gn8AOwYgh1yUzCw0vuZFw65E7vPbAImCwy4QHnV8%2FCMN43%2BFaMhjD0SsxyoSm24BC3sonFDdxWjgqjJdvQSbrAtyWCZEbBWzcKAHOacIkVg3JFFfi021JeKsn7D5W3yq5WQNIFw8hwjSOTcnN2kSX%2FmJWoHJSppFHN2T7kRmExSdIkY7vO8Pv4OVlGRfmKV4CZVpJ8dsanI9MLUuno%2Ft3FfgVNmksxsnkYQjmU4HYY5BDbxbhmyznZ3lf1t9tjSMyuA4aZYXphCbZy4K2uLzHV8ljQVFekUEMP2Tp7h1lZ7EEkHxU5IKlnyOgpI%2B6lJ87NZmTCptNnJBjqkAVg6y6wSUKErDuiLKR1AJeK3C9wCnT3lZrnzUMzxp%2F7%2F1RZZa2LbTZMbAvbvWKLCC1Ewl33HSJQp1fpB8BwAtyLxQNIJtzb6LrJzGPM2%2BGu6d0PeG8tau%2BqENh0t0JJ9eXvkao2RANGDRBGOq5%2B%2BRrkisAPjbyM5apQnIQRxWp3K4NfgXFPwSE8OWrksUTQxlLoSH7Xovx9qt8tGFMV3QB2nVhe6&X-Amz-Signature=b4ada076e50133e49f3139d14f12f86223d793972227a6c48e83f2f15f3c9bdc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QAX4R6F2%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T051327Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC5ntMupGycj1Cuj9CfmwyU4YwYpI9cRlcGeNVP3f2PJQIhAOC94CJhFw6JZMrT2q8emj0aG%2BXHTp%2FTrLr5GcL96ddcKogECJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwkLdp6rjz9%2Fy1c%2FGgq3APMPBBrfCJ8wvi2jozrupGSymu1RgYFVTY%2FblWng%2Fzzo%2FF0FKbq2pfrUNHI%2B4DrO5hNys%2BnzLfeyZoyCE2H3Rf0axhuMVb22%2Bw1znUYi2xQ0Qnx9vXu3Snc5JFwNBU5jv2SN6NhK4Fywy5JM4dkUZQXBNLmNs17PBK66FYQvSOzddTpeP9flvdIpkZWCR1R%2BddTcltue6xb3lVkpcYZsFkQhLnMBVK0m%2BdKr%2FGdstWQK9rgyx3F5VwMnCI4CJjIX9V3wdp2sawNE6xCof4ImDwXzxt94iILDjypaCred7EotRY757SNtlQL8gn8AOwYgh1yUzCw0vuZFw65E7vPbAImCwy4QHnV8%2FCMN43%2BFaMhjD0SsxyoSm24BC3sonFDdxWjgqjJdvQSbrAtyWCZEbBWzcKAHOacIkVg3JFFfi021JeKsn7D5W3yq5WQNIFw8hwjSOTcnN2kSX%2FmJWoHJSppFHN2T7kRmExSdIkY7vO8Pv4OVlGRfmKV4CZVpJ8dsanI9MLUuno%2Ft3FfgVNmksxsnkYQjmU4HYY5BDbxbhmyznZ3lf1t9tjSMyuA4aZYXphCbZy4K2uLzHV8ljQVFekUEMP2Tp7h1lZ7EEkHxU5IKlnyOgpI%2B6lJ87NZmTCptNnJBjqkAVg6y6wSUKErDuiLKR1AJeK3C9wCnT3lZrnzUMzxp%2F7%2F1RZZa2LbTZMbAvbvWKLCC1Ewl33HSJQp1fpB8BwAtyLxQNIJtzb6LrJzGPM2%2BGu6d0PeG8tau%2BqENh0t0JJ9eXvkao2RANGDRBGOq5%2B%2BRrkisAPjbyM5apQnIQRxWp3K4NfgXFPwSE8OWrksUTQxlLoSH7Xovx9qt8tGFMV3QB2nVhe6&X-Amz-Signature=5eed459ce70572bb0f4b5c1e36ee5cc556deede334a64d8d5d50bd28b2bd1067&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
