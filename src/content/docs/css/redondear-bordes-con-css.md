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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VYSRJEJH%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T184316Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICXf9dDCwGRHEofGCGM58E5KHhb%2BvoZ5XYxHh%2BHEnwlAAiBJr65S7IZCxijr5M6z9CvKubyjHc2pzLAQI8skUau%2BZCqIBAiR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZxdK9RnNzKBlEBFWKtwDp6mkyUDhjlRmWZEk7dJYtc6R5rURNnrE0h2yVut02tovXSlOOdRXw20xVSP4MHCcF1%2BOx2jTy0BKx7EPrnfSdNigMMxIO2rDDVTwnJajDMcnkrQiKQ8voedZg4WWCbL5WWrorvIK07%2FIa%2BrWPceMomGgvfeJFGjgdZ24iy6JDL6Cdr1dAsHj2BszvuJGsTy7wui1wIQxQ7Hq1EcWFzAglQx9LiPw%2B4%2F8M3LXZwHvbFMhrFRaVkNfi8cL%2B%2F7cPFsXusJon5PJAP8ycjIKQ3ZImUiJWN6dCjbf5OJtwBBwwGocxS7McfT4uoYdwiA%2BQ7bC5LgVyrli0QLOzIahYZ7j2CiNesVXhRGgDCiQYCqnlT2TP7I7FM0HixRx6YuaYbdg7Jfkp9q7aLYt283biEQLiUvlD6SwHixYdYX42%2BHCVWtthJB%2BB2dnPsUgKR%2BTGsqBa7rwfd%2FmaieoNQuuSRM%2FQQhZ6nbAFvvRZGMdOg44NwJT2XCvFBc0heqAc%2BbbiZjOuydzB3tlkRfzlxIoLQq5n6N2tu7d%2B2%2FK9HCckF7OSny6ZlOkSuM04%2FP%2FI1LOgIUMA%2BRXc%2BLPuwbbUpjWWMuLTDy7N96NrtZWOlc0quctl2omoN7MW2DtlIlVshUw%2F7jWyQY6pgHQWZqS03BQyXISVtv6pUafMiPUmeNRkn%2BZUtWfqBQitWQ1Uznv9gP0l0TV5tpvns%2Fqfh0dRDi6n87W06HsHs6jtdYpcfvpSnVJD1HUXQfKvrfvCNgEZySlENsvqPRnIXKP%2FyFEUUlUJj%2Bqhrh%2FJv4LtmRYDyy85Rh8Ouc7sfoV%2BD1NkNmfCNc5zqEFlyl5PQb7SdApEzXRUfQxVsHElV1OBekUSwCS&X-Amz-Signature=748f0dc1eadd2f60185d3784c260e4ff2a3c59feab9b6d8d2f8b32f081be4024&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VYSRJEJH%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T184316Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICXf9dDCwGRHEofGCGM58E5KHhb%2BvoZ5XYxHh%2BHEnwlAAiBJr65S7IZCxijr5M6z9CvKubyjHc2pzLAQI8skUau%2BZCqIBAiR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZxdK9RnNzKBlEBFWKtwDp6mkyUDhjlRmWZEk7dJYtc6R5rURNnrE0h2yVut02tovXSlOOdRXw20xVSP4MHCcF1%2BOx2jTy0BKx7EPrnfSdNigMMxIO2rDDVTwnJajDMcnkrQiKQ8voedZg4WWCbL5WWrorvIK07%2FIa%2BrWPceMomGgvfeJFGjgdZ24iy6JDL6Cdr1dAsHj2BszvuJGsTy7wui1wIQxQ7Hq1EcWFzAglQx9LiPw%2B4%2F8M3LXZwHvbFMhrFRaVkNfi8cL%2B%2F7cPFsXusJon5PJAP8ycjIKQ3ZImUiJWN6dCjbf5OJtwBBwwGocxS7McfT4uoYdwiA%2BQ7bC5LgVyrli0QLOzIahYZ7j2CiNesVXhRGgDCiQYCqnlT2TP7I7FM0HixRx6YuaYbdg7Jfkp9q7aLYt283biEQLiUvlD6SwHixYdYX42%2BHCVWtthJB%2BB2dnPsUgKR%2BTGsqBa7rwfd%2FmaieoNQuuSRM%2FQQhZ6nbAFvvRZGMdOg44NwJT2XCvFBc0heqAc%2BbbiZjOuydzB3tlkRfzlxIoLQq5n6N2tu7d%2B2%2FK9HCckF7OSny6ZlOkSuM04%2FP%2FI1LOgIUMA%2BRXc%2BLPuwbbUpjWWMuLTDy7N96NrtZWOlc0quctl2omoN7MW2DtlIlVshUw%2F7jWyQY6pgHQWZqS03BQyXISVtv6pUafMiPUmeNRkn%2BZUtWfqBQitWQ1Uznv9gP0l0TV5tpvns%2Fqfh0dRDi6n87W06HsHs6jtdYpcfvpSnVJD1HUXQfKvrfvCNgEZySlENsvqPRnIXKP%2FyFEUUlUJj%2Bqhrh%2FJv4LtmRYDyy85Rh8Ouc7sfoV%2BD1NkNmfCNc5zqEFlyl5PQb7SdApEzXRUfQxVsHElV1OBekUSwCS&X-Amz-Signature=42df48c93223753cd8d15a6f41c535a5b7783d931eecd2d9c11998607d8224f8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
