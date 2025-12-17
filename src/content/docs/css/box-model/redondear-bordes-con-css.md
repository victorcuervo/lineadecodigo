---
title: Redondear bordes con CSS
description: "Ejemplo que nos explica cómo podemos redondear bordes con CSS mediante la propiedad border-radius y sus valores el longitud o porcentaje."
lastUpdated: 2025-12-17
slug: css/redondear-bordes-con-css
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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZTTS6HCR%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T174552Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDg%2FM3v%2FR5%2F1rKYeQ6IweacRRMyCatTCxrfH9ErjKU2hwIgRNNF3BbvheH6w0qZ3kQ%2FhHGatVcuBwkLx4sCVPfJ%2FecqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCr3qNbArir%2B1b78BSrcAyCYTqu9P5hEFbA2ptIpZ5Dd0vR93SXP8uCl3VjW04aX7VWTfRWNsZUn1rBYAj8z6mOL0p8YD95weIeHqkl4fzrpzbBUSNAKgv0gW6yY3YNqn4Epx17WIHileOPTc9JGgDghdsSdp6P6LrEzzEhzQbj%2BPmpx4zH%2BPdKmFlaPYWlH02UqxKDJRZS7Cq0IpUMRoPR18dvMgwy2%2FI8Qf9GvlRvoo9ms80wbmYo4U1QdJuBTDpsTN4OP%2Fe7%2FtgUQOBv1nmdESfEeuy14iWfTOpnW64%2Fqi5fgImwaDckb8MoTwQIVSUTHq6DQhk9fsRkwkgXtcUR%2FCTSF0Iw5fgSEeNfREt5sG98ka7V9rHQVzT0TmH3lUJLuYzfRsxl4L8lDO0U7rXnGyklwdfAdFnRjAbtfEtgI9Kwqoj%2BnJlskzJyZePmJWXdfy0PhJXO8xIr76wGo%2F%2BGXy3x4EmJkbcJyjGqxu%2BjujQ3xPdlvnlVJG7nhgNl2VYEkDQTOTL76gQNimnnn6iryifDhU18sq%2FSaCgi8lnJgfGGdnUfSV0NrxSTNvwdpzLVRgKroZ8PxlT%2Fw%2Btv4ACGn33h2lrtPVRVG7To%2BoVaWn1Z%2BcwWVcEYQ1cuCu1XvR9BpxTWfzV5ow5kcMPGei8oGOqUBbdbRZuCNdUL74OLHne1KOb94YNXdju5YpY5KgxJyclgjHXsyuALyPbB8ngFYG9aOIYiSz%2FqBi6lYbzeyy3Uu7N1%2Bra%2FjQuNDtxFtyZiTHUHhTOcwFgcXHAUWCtYhR4d5sRTH%2FjCyaifMLpYRC%2FSVYg0xK3EX3TiqriPhEqy3Hsc5wwWelN5LW945OgTzqrSp5zOlY6Z54c3DGPbHtYcrjrhJiTk9&X-Amz-Signature=b3553a9d28f9fe6f247acd889d2ec1685af81819ca64f4da6cb6f605b6eb3843&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZTTS6HCR%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T174552Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDg%2FM3v%2FR5%2F1rKYeQ6IweacRRMyCatTCxrfH9ErjKU2hwIgRNNF3BbvheH6w0qZ3kQ%2FhHGatVcuBwkLx4sCVPfJ%2FecqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCr3qNbArir%2B1b78BSrcAyCYTqu9P5hEFbA2ptIpZ5Dd0vR93SXP8uCl3VjW04aX7VWTfRWNsZUn1rBYAj8z6mOL0p8YD95weIeHqkl4fzrpzbBUSNAKgv0gW6yY3YNqn4Epx17WIHileOPTc9JGgDghdsSdp6P6LrEzzEhzQbj%2BPmpx4zH%2BPdKmFlaPYWlH02UqxKDJRZS7Cq0IpUMRoPR18dvMgwy2%2FI8Qf9GvlRvoo9ms80wbmYo4U1QdJuBTDpsTN4OP%2Fe7%2FtgUQOBv1nmdESfEeuy14iWfTOpnW64%2Fqi5fgImwaDckb8MoTwQIVSUTHq6DQhk9fsRkwkgXtcUR%2FCTSF0Iw5fgSEeNfREt5sG98ka7V9rHQVzT0TmH3lUJLuYzfRsxl4L8lDO0U7rXnGyklwdfAdFnRjAbtfEtgI9Kwqoj%2BnJlskzJyZePmJWXdfy0PhJXO8xIr76wGo%2F%2BGXy3x4EmJkbcJyjGqxu%2BjujQ3xPdlvnlVJG7nhgNl2VYEkDQTOTL76gQNimnnn6iryifDhU18sq%2FSaCgi8lnJgfGGdnUfSV0NrxSTNvwdpzLVRgKroZ8PxlT%2Fw%2Btv4ACGn33h2lrtPVRVG7To%2BoVaWn1Z%2BcwWVcEYQ1cuCu1XvR9BpxTWfzV5ow5kcMPGei8oGOqUBbdbRZuCNdUL74OLHne1KOb94YNXdju5YpY5KgxJyclgjHXsyuALyPbB8ngFYG9aOIYiSz%2FqBi6lYbzeyy3Uu7N1%2Bra%2FjQuNDtxFtyZiTHUHhTOcwFgcXHAUWCtYhR4d5sRTH%2FjCyaifMLpYRC%2FSVYg0xK3EX3TiqriPhEqy3Hsc5wwWelN5LW945OgTzqrSp5zOlY6Z54c3DGPbHtYcrjrhJiTk9&X-Amz-Signature=e5f04b4b661592d58223af925d92e0f7e8492d942bfeaea41339594e2a5fb811&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Si queremos modificar los dos radios de todas las esquinas podemos utilizar la versión reducida de [`border-radius`](https://w3api.com/CSS/border-radius/):


```css
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


```css
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
