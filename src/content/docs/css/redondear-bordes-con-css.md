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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GDC3LG5%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T020659Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2Ftvi%2Be%2BEHPXvfnQzrvQF34mNPskE7fPjLn5XZ0A0nkwIhALy9cm7zUd6sAaoOY%2B5BZ4dxA8btybrI7gSV9e4z770%2BKv8DCE8QABoMNjM3NDIzMTgzODA1IgzimGH7iZwCHy21Ndcq3APwPMp8XIXcljrm84HHaMx6%2FdmW7CIMfHSbvI%2BQ0qpMivk3UoPW%2F1br%2FayB6pTKLbJfk%2BgIlYPu84fRp4TN33GlSpJIoPHh3SOPXven3zZBj9qg6Y%2B2BDLzvI%2BsOiVaYmssGEQULS1Y0DQpg23jpRxwaRmnona%2FgpJj9krv0uXHAHJrSdq8ayuggeumneotVgogeYiWXsKPIt0ALjJte5BDxdiFT%2B32G5m9o57tPejAqEfGvKr7VqDYQtYaugQhsDK6vaO5Jy87qbDQWrxQigtqaQPcc4K9pJm5P8yEWm%2B4mkR10Xepl8mXTjPjjyzI0oDdwbsooU%2Fk1TBqn%2FUYHkqr%2B0sftVqsbp2eAqeenfrAEDs8KDCOE1TmrQsEcNjQsHHt3yEOEiL4Ijf1yg%2BUxXmwfWRJbnAqLVCyQxlupXzwMHZ5PLPJd0S2tTTDgPJnDHxpBaoZP2JGPkLAYMySDIA5SWfneqZ45pq96UIPADshyf87W6Vcl2aXH%2BhjNednkbMvTUvEbfuGKSct6EAvD3s0l7Qu0MA4GmYVzNjUGeAQ7nCcJfrYYS3g9LA6g1O%2FQY2PTerSs5mq6u190yF3i76wt4nw2Gnfyfr9bJHWbOHtCfHN2xQO93siGLu%2BjjDujMjJBjqkASts6cnp%2BMrUQI%2FLiCZZ%2FqRpzvtvF6yIoMZJaYGfsENKIfWgGr9ZDVBa%2BLXgtRmx3gOBpx4iC0lGGho8e7AVrOFn59E0xJL6PNaTRPkQQ3Qul5uqljEYc5ihrXGgkge1bneqQ1K2gl0eKu%2FgrWvI7hLrie%2Fjcg4DrJOKKTSnYNiCBB9yViZYFfV89qXdHWRUdV0qiwW0vsFNrdLziMr2d83IxLta&X-Amz-Signature=bd395bcd522ece10bb499845dcde7ce4ebad8d4c50eabf23122a48af83c67333&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GDC3LG5%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T020659Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2Ftvi%2Be%2BEHPXvfnQzrvQF34mNPskE7fPjLn5XZ0A0nkwIhALy9cm7zUd6sAaoOY%2B5BZ4dxA8btybrI7gSV9e4z770%2BKv8DCE8QABoMNjM3NDIzMTgzODA1IgzimGH7iZwCHy21Ndcq3APwPMp8XIXcljrm84HHaMx6%2FdmW7CIMfHSbvI%2BQ0qpMivk3UoPW%2F1br%2FayB6pTKLbJfk%2BgIlYPu84fRp4TN33GlSpJIoPHh3SOPXven3zZBj9qg6Y%2B2BDLzvI%2BsOiVaYmssGEQULS1Y0DQpg23jpRxwaRmnona%2FgpJj9krv0uXHAHJrSdq8ayuggeumneotVgogeYiWXsKPIt0ALjJte5BDxdiFT%2B32G5m9o57tPejAqEfGvKr7VqDYQtYaugQhsDK6vaO5Jy87qbDQWrxQigtqaQPcc4K9pJm5P8yEWm%2B4mkR10Xepl8mXTjPjjyzI0oDdwbsooU%2Fk1TBqn%2FUYHkqr%2B0sftVqsbp2eAqeenfrAEDs8KDCOE1TmrQsEcNjQsHHt3yEOEiL4Ijf1yg%2BUxXmwfWRJbnAqLVCyQxlupXzwMHZ5PLPJd0S2tTTDgPJnDHxpBaoZP2JGPkLAYMySDIA5SWfneqZ45pq96UIPADshyf87W6Vcl2aXH%2BhjNednkbMvTUvEbfuGKSct6EAvD3s0l7Qu0MA4GmYVzNjUGeAQ7nCcJfrYYS3g9LA6g1O%2FQY2PTerSs5mq6u190yF3i76wt4nw2Gnfyfr9bJHWbOHtCfHN2xQO93siGLu%2BjjDujMjJBjqkASts6cnp%2BMrUQI%2FLiCZZ%2FqRpzvtvF6yIoMZJaYGfsENKIfWgGr9ZDVBa%2BLXgtRmx3gOBpx4iC0lGGho8e7AVrOFn59E0xJL6PNaTRPkQQ3Qul5uqljEYc5ihrXGgkge1bneqQ1K2gl0eKu%2FgrWvI7hLrie%2Fjcg4DrJOKKTSnYNiCBB9yViZYFfV89qXdHWRUdV0qiwW0vsFNrdLziMr2d83IxLta&X-Amz-Signature=7304265d3d1bdf442d842c8a847c1289553b1e49fd8cbc8dd3ec43f4a8b9f7a9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
