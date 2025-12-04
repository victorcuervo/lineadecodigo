---
title: Redondear bordes con CSS
description: "Ejemplo que nos explica cómo podemos redondear bordes con CSS mediante la propiedad border-radius y sus valores el longitud o porcentaje."
lastUpdated: 2023-09-17
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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XSETFROI%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T152410Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJHMEUCIQD3qsHwIcQrP%2B2hZgYfXAzvM%2FnxVDKo2TA5OZkvrJ66HwIgMltPzOFRypPEJrP7I7aVippjxhZ98zoQAj5ZZzdbSIwq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDG%2BHM1enxfaoKwHfSCrcAwVs8j49YaYbwba8mY0iuxl72P2hLYNQyJB4z5DF7zJus5ghSx0KHprFj8M1JPdOQKO%2BJfnIpzuYgMNfZ3kyV%2F6TgR5zF5rAexgAv7kpLPc7mAUvcyIPZczAsRmiTgTQnlpO%2FbARbWt5jOEGlAWT3Ka2K71XnCB4kszGL8p4OgAcsMALbkUZ0I4lkbxY89a%2BdqJr4rnySf0dKGPcWvh9xwFoFcCxG3oVoFsvzWgfyg270ZL9RPMcLTnq4bRdumFcAY7H%2FlXFxRYrpsMfWDwMRf3RClkjWKgb9K2ktT2fkKnEikMHvIAVR4kFNGh0tFwKkqa%2FOMdwv5MdtcZt7B3zPaSRaylTuflBsD2fqpLjJU%2Feg1GYQub7Cs55nwRYuFF3tQJLcVwKwX3poyCgWIiO816%2FpLIfV%2FEddA6Uve78uNzkxeT1rdVLbMeTBCzijCsRtShLM4Hi%2B8aaf7QAJjmSv9VThGlegreBFZAKJR5XPgGE66yVmphnW439d6pwVzA13J7vT2pSyoHZQCCmmRtMzQctjm70iUHOwCqu%2B8aqMzjYDMlqwiIgPgSRA7j9uKOI%2BHFSl0yLGmdKPaHcNZzposAcK95Ox%2FVL2Qahp7rP9BBxwTY5JXqrEvbQFhccMMS%2BxskGOqUBzWDXG2TmYKvqrfxe%2BavpNZoJXwexEM6OBAhw3K1FJJhIBnDij2gvUZ%2FETVXh%2F4jupe22UXoFKKbTkOY6dn5X11TRHhF2gRRXNFt81TY1kz6EnLZzcqK0fp2kuSBCnEGDiUJ0nlwwLKCgsLXk5N9TSX0qtMb9ge0pO4Nq3haRTd2%2BQNpS381UxiJXqDU5vdvigDGIXBwBNobJ%2FK6Qu6WmanAMWmT%2F&X-Amz-Signature=43d92c21727635955b9b72e301864a0cecd0f2b02ceec1cdc30b2287cf236b74&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XSETFROI%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T152410Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJHMEUCIQD3qsHwIcQrP%2B2hZgYfXAzvM%2FnxVDKo2TA5OZkvrJ66HwIgMltPzOFRypPEJrP7I7aVippjxhZ98zoQAj5ZZzdbSIwq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDG%2BHM1enxfaoKwHfSCrcAwVs8j49YaYbwba8mY0iuxl72P2hLYNQyJB4z5DF7zJus5ghSx0KHprFj8M1JPdOQKO%2BJfnIpzuYgMNfZ3kyV%2F6TgR5zF5rAexgAv7kpLPc7mAUvcyIPZczAsRmiTgTQnlpO%2FbARbWt5jOEGlAWT3Ka2K71XnCB4kszGL8p4OgAcsMALbkUZ0I4lkbxY89a%2BdqJr4rnySf0dKGPcWvh9xwFoFcCxG3oVoFsvzWgfyg270ZL9RPMcLTnq4bRdumFcAY7H%2FlXFxRYrpsMfWDwMRf3RClkjWKgb9K2ktT2fkKnEikMHvIAVR4kFNGh0tFwKkqa%2FOMdwv5MdtcZt7B3zPaSRaylTuflBsD2fqpLjJU%2Feg1GYQub7Cs55nwRYuFF3tQJLcVwKwX3poyCgWIiO816%2FpLIfV%2FEddA6Uve78uNzkxeT1rdVLbMeTBCzijCsRtShLM4Hi%2B8aaf7QAJjmSv9VThGlegreBFZAKJR5XPgGE66yVmphnW439d6pwVzA13J7vT2pSyoHZQCCmmRtMzQctjm70iUHOwCqu%2B8aqMzjYDMlqwiIgPgSRA7j9uKOI%2BHFSl0yLGmdKPaHcNZzposAcK95Ox%2FVL2Qahp7rP9BBxwTY5JXqrEvbQFhccMMS%2BxskGOqUBzWDXG2TmYKvqrfxe%2BavpNZoJXwexEM6OBAhw3K1FJJhIBnDij2gvUZ%2FETVXh%2F4jupe22UXoFKKbTkOY6dn5X11TRHhF2gRRXNFt81TY1kz6EnLZzcqK0fp2kuSBCnEGDiUJ0nlwwLKCgsLXk5N9TSX0qtMb9ge0pO4Nq3haRTd2%2BQNpS381UxiJXqDU5vdvigDGIXBwBNobJ%2FK6Qu6WmanAMWmT%2F&X-Amz-Signature=eed95f0dd5a1838d667332a82deae9bbbc89e6d4c9ec72231f0b7c614c04e1b9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
