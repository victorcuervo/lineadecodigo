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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662RP5RBTJ%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T022006Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCOZoQiwhPNTiUYZZxEdml3F6UvPBnJw7SCZnLHRNXeFgIgTZHixIKWYJDyLPRDTmFOymdk8lYJercj5VEfdX5NMooqiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBtvBw1mkzpsz6fK4CrcAytwEvAcJhcUT46V3x0M9pzNrBQhTnRo6W7D2t8cRU%2FwHd96NxLvjSZtzbOKaPgS%2FjOrgWunsSfb5XZZC5iCMCjgGOSsTBYfSqXxwZsIG1QWM1fGMJoHtbwG1i0UEZ2mG3%2FoGrvWS7fF%2FHvPscKdMYjpmy%2Bk5gK93J5KK2ddCNmOExdUmRgNXHQLIZqLm43XUo2twx2qCxJr%2BI8bQzt%2B3dj8NIT0XfXRTfi4P%2BFFuyYUe2eoSqcew894v20Bom3nGvj%2BGlkFil2yq2eXpTEOiszE%2FhDnkxSF1Nu%2FJYxK%2BkN7uCv%2F5Z6LtRmRfh9kAm7uDIcIvWPOG9bfBN9tMzACp4me3X2iWeawuLJMNvfJ0oA%2BqD%2BGHE9kDoH5jL9%2FzWMZVezezkQq2ew%2BH9Jrc%2BL9KkYZ%2FvTsbCKBXE0u71MxTxuUey7pvOORgTlO4W%2FEFTxsdmFOoRm2QMUgFMB9TpabTPeL6kQHR3rOApvCJhhhi7U8pV6%2Bod0YZoP1i8HgosHlq406Chak8cm5kls%2B14hP0UF7MGQZZckdZAStF%2FTuKGcMpmFK8bK525Hd3xQV6R0vHC1EboMOX6rgh4ZPtDz1T3KbUDPgCeJ0Bo1ngaVYPCmVZC7WdbNuIk8XgAIYMOvQ2MkGOqUBdagSLa6%2BlyF20QKwbAceCCWDGd4EaWp9gm%2F8%2BIwR2XeXUoATMZlqdVRUFNsBH77HBNuqaUHvK%2B4EWL9VaiPy1VFrRrQOHeDzxfutxHd2XG4qaGk775KkbbqeyYmbqngyMtocaJAjwPLkB8mU0LjAi3LEU%2F8%2FpnN%2Bm3v5uADPT%2BiUq0OMgNOdj7SEt6MkXag5oKK%2BWI%2BQ6%2FI9V8SVS8GBTG5N7VHx&X-Amz-Signature=f3345284a36505f3ab4b5488a79b869d272d02244d77625b4fd3220ab84789ab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662RP5RBTJ%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T022006Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCOZoQiwhPNTiUYZZxEdml3F6UvPBnJw7SCZnLHRNXeFgIgTZHixIKWYJDyLPRDTmFOymdk8lYJercj5VEfdX5NMooqiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBtvBw1mkzpsz6fK4CrcAytwEvAcJhcUT46V3x0M9pzNrBQhTnRo6W7D2t8cRU%2FwHd96NxLvjSZtzbOKaPgS%2FjOrgWunsSfb5XZZC5iCMCjgGOSsTBYfSqXxwZsIG1QWM1fGMJoHtbwG1i0UEZ2mG3%2FoGrvWS7fF%2FHvPscKdMYjpmy%2Bk5gK93J5KK2ddCNmOExdUmRgNXHQLIZqLm43XUo2twx2qCxJr%2BI8bQzt%2B3dj8NIT0XfXRTfi4P%2BFFuyYUe2eoSqcew894v20Bom3nGvj%2BGlkFil2yq2eXpTEOiszE%2FhDnkxSF1Nu%2FJYxK%2BkN7uCv%2F5Z6LtRmRfh9kAm7uDIcIvWPOG9bfBN9tMzACp4me3X2iWeawuLJMNvfJ0oA%2BqD%2BGHE9kDoH5jL9%2FzWMZVezezkQq2ew%2BH9Jrc%2BL9KkYZ%2FvTsbCKBXE0u71MxTxuUey7pvOORgTlO4W%2FEFTxsdmFOoRm2QMUgFMB9TpabTPeL6kQHR3rOApvCJhhhi7U8pV6%2Bod0YZoP1i8HgosHlq406Chak8cm5kls%2B14hP0UF7MGQZZckdZAStF%2FTuKGcMpmFK8bK525Hd3xQV6R0vHC1EboMOX6rgh4ZPtDz1T3KbUDPgCeJ0Bo1ngaVYPCmVZC7WdbNuIk8XgAIYMOvQ2MkGOqUBdagSLa6%2BlyF20QKwbAceCCWDGd4EaWp9gm%2F8%2BIwR2XeXUoATMZlqdVRUFNsBH77HBNuqaUHvK%2B4EWL9VaiPy1VFrRrQOHeDzxfutxHd2XG4qaGk775KkbbqeyYmbqngyMtocaJAjwPLkB8mU0LjAi3LEU%2F8%2FpnN%2Bm3v5uADPT%2BiUq0OMgNOdj7SEt6MkXag5oKK%2BWI%2BQ6%2FI9V8SVS8GBTG5N7VHx&X-Amz-Signature=366a2bfede62e91cc33176fbc5ce256a9f3f4cc82b16f503a5e9fbbf3973191f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
