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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V7SF2KW4%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T051105Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDZlM940NvJ6kDXupzUO6XsenjLdRqRI3SX%2B8NHHzq25QIgJpc5SwYx%2Bpkr9EKv32AkB5ONSaCzYEYjnPaBVo6Izi0qiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGJ2lvX4VUoaCn8SSCrcA4kAnNes7AbFC0QUVZyL8s5I0XwaWZ52KVI6ddASC3UcMmie7YYTVG7mNaWfedd9992%2BQBCAEqNCTPB0UQ9yEubdoBOu3dKBDjURwfXpG1z3i%2B6sSdbxyb42ItGlXdUXY1wHLBQKKeC34i%2FWiWCmDAzHfehLvl%2B1nv2%2BjW0D%2FKglEHXxP56lIsmE8SPmtdMj1biY0AK%2B0AvFpK5IcMOvrZ0scRFWWfe84uEeH%2BBEGlwe2lLrIAy5%2B4hpsReO1iDcxGdVuGycSNCcPUIhvjcbBloZ8kN34QuJk9ncCbrWEAdBoYoGTDeBrqKA6SzAhiXP6KB%2BZ89bWBWY8bArtiUCgoCi5PmboPrw6iMiM9ZQVyq4ihS7uqdChUh8izzVJHfAnEpvW5Y6OancbKCaiTPKCtltsVP9X7SbthXtNnQOWRt4hUoWS1OXuHmVPTbxD1vvJYO7TpnX2CqqWy0U9MkGgHQ%2FVE%2BN5Y%2Bejkol2gicHL35qxEi%2FMuI6Jzy1LC3tMncfLyAzvffdzQlpFVe3olxAsEk2BJuGIpPNRv6j9fz37xTMIPDwP393YUq48dEQ%2BBv9fB9d%2FMfKyCrjPoZ%2BTY4jV9fznizoQ0XqO8WzixHh7MzLdtSNlAxF%2FTD3od2MLD90skGOqUBNXNR22kkFtWoed8BQM8cezREdaaZ0YevYmDOzwZYNK1eWq6RnRDjWCEYyWtq0gcDwnbFok60Zoo%2FN4MPTGK7bKKET2YWS6bFjspYLA2c7JNBmGTm5LxOlARxg13102BFOM5W5wDjOYfAEUVrIMQr%2FArRdPMAaXNFUTHFDsIYVCX3cGxgb9vpTVamLpHQDbhFC05%2B8qP2NGZxeP0qW%2FfyIhmWxe2g&X-Amz-Signature=558b2f82ed62b6cdb2fbca54357112a45d26ada7cc2cf6d2c48aee15c5a28fdb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V7SF2KW4%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T051105Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDZlM940NvJ6kDXupzUO6XsenjLdRqRI3SX%2B8NHHzq25QIgJpc5SwYx%2Bpkr9EKv32AkB5ONSaCzYEYjnPaBVo6Izi0qiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGJ2lvX4VUoaCn8SSCrcA4kAnNes7AbFC0QUVZyL8s5I0XwaWZ52KVI6ddASC3UcMmie7YYTVG7mNaWfedd9992%2BQBCAEqNCTPB0UQ9yEubdoBOu3dKBDjURwfXpG1z3i%2B6sSdbxyb42ItGlXdUXY1wHLBQKKeC34i%2FWiWCmDAzHfehLvl%2B1nv2%2BjW0D%2FKglEHXxP56lIsmE8SPmtdMj1biY0AK%2B0AvFpK5IcMOvrZ0scRFWWfe84uEeH%2BBEGlwe2lLrIAy5%2B4hpsReO1iDcxGdVuGycSNCcPUIhvjcbBloZ8kN34QuJk9ncCbrWEAdBoYoGTDeBrqKA6SzAhiXP6KB%2BZ89bWBWY8bArtiUCgoCi5PmboPrw6iMiM9ZQVyq4ihS7uqdChUh8izzVJHfAnEpvW5Y6OancbKCaiTPKCtltsVP9X7SbthXtNnQOWRt4hUoWS1OXuHmVPTbxD1vvJYO7TpnX2CqqWy0U9MkGgHQ%2FVE%2BN5Y%2Bejkol2gicHL35qxEi%2FMuI6Jzy1LC3tMncfLyAzvffdzQlpFVe3olxAsEk2BJuGIpPNRv6j9fz37xTMIPDwP393YUq48dEQ%2BBv9fB9d%2FMfKyCrjPoZ%2BTY4jV9fznizoQ0XqO8WzixHh7MzLdtSNlAxF%2FTD3od2MLD90skGOqUBNXNR22kkFtWoed8BQM8cezREdaaZ0YevYmDOzwZYNK1eWq6RnRDjWCEYyWtq0gcDwnbFok60Zoo%2FN4MPTGK7bKKET2YWS6bFjspYLA2c7JNBmGTm5LxOlARxg13102BFOM5W5wDjOYfAEUVrIMQr%2FArRdPMAaXNFUTHFDsIYVCX3cGxgb9vpTVamLpHQDbhFC05%2B8qP2NGZxeP0qW%2FfyIhmWxe2g&X-Amz-Signature=910b446bbcbbb351af1ec21bd45ac36872b4fe8d393e90507a61cac243b54c9a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
