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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SLZ46SUA%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T153331Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFTCuPvirRWUVebxBe%2BUjIh63B54WF%2FoBQgvvD%2BgYLg5AiEA0rohGqD4u8MxPP0vEGo2dkka9hRJOuE6bc7AcXODYIQq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDH0pEVpbkAu8z0vZ%2FircA8qqULgLHIvecP7ZLtSl0fx0zmGJQaNhbl4GTH%2BPMlIF%2FMv7%2FcZXJ1%2BYuWsMrGiJo4fgFGU4NVl%2FY0KUBpZElbVFfMcVVpQH5ytk7T5hbIlN78pCz60a1uJCWJBUO%2B%2B9jGmCdYdendfY7d5Cuhsfq5DaZh7drNl4JzMlhKhPxsiv3iSgSfMQOcml78UFzQT0I7tBloB%2BOqwucpV08w0oAOop9du%2FdOBUx2PKLZw5QPYJFvyIbYfjXvHpSzHJ2iBTCxSlePFRqlY0sbvBtQOfoAEB%2FSoxEzsk0jOisakmUsT8hMzMbp80dWNmtS6I%2FecdcstqSY1I60dBA7WuvWZ8AubJCjZ9iZdROoXS0lMoqYslLdJWsmuUJtp%2F1b4B9SGgJ0%2BkFZVo1wYicG1kmSFurwYFrJFYaLb2OZTul0wMJkgTw9%2FBLUrx3w1Owg41uTML4f4hiHD7OFc8R0omnoVEFWZm2u76cMAevCrNqbOyZ%2F7YJAr6Nby%2Fyg5DqWJqdOipkM37HEOSo02stK%2FU0kMof8%2FyYrNzSHkvrhZgWVocM79oi8aOehw31Ytidm%2FL030TwowOSlNzWgIw6WpRl08vgdMVTV%2F7lMKdF9HX1vchtR3O6oJJdHU30bLzoUtTMJ%2Bm0MkGOqUBHw7umrNkwgwew1SFOPmWojbOfwXs0y%2FCq2a5c9NcLed5uw0CCHaE9S9Ygo9aCATk8%2BMx0kuTp7pxOluGgRkWDrFxrHUnu19PCB7d1Wmlu9%2Fb3ai%2FSMoF%2Bopj%2FG06zjrhRitQBoal09G3WDNufiT7IvPhQo4JGvmUQzuuA9kOeCBCnfBv1%2Bk0ayNrgainkSsJHqPEpi%2BoEAGbBymxxOAdnyllY7nU&X-Amz-Signature=58bdcd1b0898f76144cde4f94d35d2355ae835553bfcf88c0b41d9b3938df6bb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SLZ46SUA%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T153331Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFTCuPvirRWUVebxBe%2BUjIh63B54WF%2FoBQgvvD%2BgYLg5AiEA0rohGqD4u8MxPP0vEGo2dkka9hRJOuE6bc7AcXODYIQq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDH0pEVpbkAu8z0vZ%2FircA8qqULgLHIvecP7ZLtSl0fx0zmGJQaNhbl4GTH%2BPMlIF%2FMv7%2FcZXJ1%2BYuWsMrGiJo4fgFGU4NVl%2FY0KUBpZElbVFfMcVVpQH5ytk7T5hbIlN78pCz60a1uJCWJBUO%2B%2B9jGmCdYdendfY7d5Cuhsfq5DaZh7drNl4JzMlhKhPxsiv3iSgSfMQOcml78UFzQT0I7tBloB%2BOqwucpV08w0oAOop9du%2FdOBUx2PKLZw5QPYJFvyIbYfjXvHpSzHJ2iBTCxSlePFRqlY0sbvBtQOfoAEB%2FSoxEzsk0jOisakmUsT8hMzMbp80dWNmtS6I%2FecdcstqSY1I60dBA7WuvWZ8AubJCjZ9iZdROoXS0lMoqYslLdJWsmuUJtp%2F1b4B9SGgJ0%2BkFZVo1wYicG1kmSFurwYFrJFYaLb2OZTul0wMJkgTw9%2FBLUrx3w1Owg41uTML4f4hiHD7OFc8R0omnoVEFWZm2u76cMAevCrNqbOyZ%2F7YJAr6Nby%2Fyg5DqWJqdOipkM37HEOSo02stK%2FU0kMof8%2FyYrNzSHkvrhZgWVocM79oi8aOehw31Ytidm%2FL030TwowOSlNzWgIw6WpRl08vgdMVTV%2F7lMKdF9HX1vchtR3O6oJJdHU30bLzoUtTMJ%2Bm0MkGOqUBHw7umrNkwgwew1SFOPmWojbOfwXs0y%2FCq2a5c9NcLed5uw0CCHaE9S9Ygo9aCATk8%2BMx0kuTp7pxOluGgRkWDrFxrHUnu19PCB7d1Wmlu9%2Fb3ai%2FSMoF%2Bopj%2FG06zjrhRitQBoal09G3WDNufiT7IvPhQo4JGvmUQzuuA9kOeCBCnfBv1%2Bk0ayNrgainkSsJHqPEpi%2BoEAGbBymxxOAdnyllY7nU&X-Amz-Signature=f81ea040a1bfa50b96e3487264c53cec9a1a31eb9ec67b8d00e32e90cabfe73f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
