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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZW7BXHS6%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T051247Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE9xwG1jRyf9bWY0k6vaQXHJdypOx02hT%2FQdwTqL%2BycgAiEA0U6pWFKgtGbTDJWpYNhtimle%2BTji0fn5LlzMgAQjN2Iq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDIqWWSEbOl8rAu2INyrcAzY1dGau%2B8%2BodgSNBLBxGGgyNjIHvLX8%2BltHikKsMiM8HUs191QHoa74HoTVlXr8Tx9FSmv1o7zgyfeqxif7vFoUsdP2XH9eSzo1aPeNVeSOKBSg0736LVlOduQUSBS80Cx3e9Axof%2Bte8flfRMizmsBGedCKKJ8NHSAcZGM1J6%2FY%2Fmjbf45g%2Fb4rRA0FR5%2FLhcfHjjle5m0eVBfOn2itaEABR3eaQggRgVvYxzVn8YjxXn1nnlOANl0SG%2BGEK2ys2I6BDHIUJJnrKHG7zP3%2FfP9incBT%2BIaD6JjgVkNJtPEv2juN21oWkFncNFca4l0FofCxj%2Boa%2FOeA3JUQHT2W9ILVFU57lhRdllNA7Zl%2B39duS5qJ%2FDGPBDy9t49kW8iwuKgyAi5mO9qNANHXILCcGzCyUoZsO08J00UtO%2Fl%2FQGDNGjsJ8x6UPIf%2F964HJWz2k10LJD%2FL2HePUkn4%2BkG1FyrtdpDU8PBbBDeBQiTOyFYipg2MGaeQ31Yi29z2xH1zMwIBxQFxUV8wi%2BoWTYHv46NwmcgC5EGlGvpwOxLnr4zkwAJHunuHrnQwGntAv1RA8%2B622V%2BfVMw9yKfFhHZzrA0Tv8QYgZoW7Jx480m%2BHXl5PtSDyvyPS5otefrMLnezskGOqUBnto0SzG%2Bcvm%2FSQyKzkt4NheeO6fCQqZrYVNGpiSOc9wnC8usH20RR209xPXddIbFXz%2FhRm3rH6AlnNyo7a7wvzOS7l4FmjwHneWxpAgzW%2B7C9zAcKNaLyeaJvs0CU5M5855gdpNZ%2FDAsnl2kLiQKxnnhgtiwWDmeDvXUjeNBCz3YABRc8XknYkT%2BtsciZvUXWl1uQUjxlZFAtA4LSZhOUj7zezLR&X-Amz-Signature=43c252a4efc6cc3a224114fb6b1fcca31c2fa1b61e06adbfb3d5b0723fd5c3d9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZW7BXHS6%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T051247Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE9xwG1jRyf9bWY0k6vaQXHJdypOx02hT%2FQdwTqL%2BycgAiEA0U6pWFKgtGbTDJWpYNhtimle%2BTji0fn5LlzMgAQjN2Iq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDIqWWSEbOl8rAu2INyrcAzY1dGau%2B8%2BodgSNBLBxGGgyNjIHvLX8%2BltHikKsMiM8HUs191QHoa74HoTVlXr8Tx9FSmv1o7zgyfeqxif7vFoUsdP2XH9eSzo1aPeNVeSOKBSg0736LVlOduQUSBS80Cx3e9Axof%2Bte8flfRMizmsBGedCKKJ8NHSAcZGM1J6%2FY%2Fmjbf45g%2Fb4rRA0FR5%2FLhcfHjjle5m0eVBfOn2itaEABR3eaQggRgVvYxzVn8YjxXn1nnlOANl0SG%2BGEK2ys2I6BDHIUJJnrKHG7zP3%2FfP9incBT%2BIaD6JjgVkNJtPEv2juN21oWkFncNFca4l0FofCxj%2Boa%2FOeA3JUQHT2W9ILVFU57lhRdllNA7Zl%2B39duS5qJ%2FDGPBDy9t49kW8iwuKgyAi5mO9qNANHXILCcGzCyUoZsO08J00UtO%2Fl%2FQGDNGjsJ8x6UPIf%2F964HJWz2k10LJD%2FL2HePUkn4%2BkG1FyrtdpDU8PBbBDeBQiTOyFYipg2MGaeQ31Yi29z2xH1zMwIBxQFxUV8wi%2BoWTYHv46NwmcgC5EGlGvpwOxLnr4zkwAJHunuHrnQwGntAv1RA8%2B622V%2BfVMw9yKfFhHZzrA0Tv8QYgZoW7Jx480m%2BHXl5PtSDyvyPS5otefrMLnezskGOqUBnto0SzG%2Bcvm%2FSQyKzkt4NheeO6fCQqZrYVNGpiSOc9wnC8usH20RR209xPXddIbFXz%2FhRm3rH6AlnNyo7a7wvzOS7l4FmjwHneWxpAgzW%2B7C9zAcKNaLyeaJvs0CU5M5855gdpNZ%2FDAsnl2kLiQKxnnhgtiwWDmeDvXUjeNBCz3YABRc8XknYkT%2BtsciZvUXWl1uQUjxlZFAtA4LSZhOUj7zezLR&X-Amz-Signature=120e281084552e7de07cc623392d45a74d58e117c20b6b5d72e16438e18843b8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
